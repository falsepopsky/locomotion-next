// react-hls with my edits

import Hls, { type HlsConfig } from 'hls.js';
import React, { createRef, useEffect } from 'react';

export interface HlsPlayerProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  hlsConfig?: HlsConfig;
}

function Player({ hlsConfig, src, ...props }: HlsPlayerProps) {
  const playerRef = createRef<HTMLVideoElement>();

  useEffect(() => {
    let hls: Hls;

    function _initPlayer() {
      if (hls != null) {
        hls.destroy();
      }

      const newHls = new Hls({
        enableWorker: false,
        ...hlsConfig,
      });

      playerRef.current && newHls.attachMedia(playerRef.current);

      newHls.on(Hls.Events.MEDIA_ATTACHED, () => {
        typeof src === 'string' && newHls.loadSource(src);
      });

      newHls.on(Hls.Events.ERROR, function (_event, data) {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              newHls.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              newHls.recoverMediaError();
              break;
            default:
              newHls.destroy();
              break;
          }
        }
      });

      hls = newHls;
    }

    // Check for Media Source support
    if (Hls.isSupported()) {
      _initPlayer();
    }

    return () => {
      if (hls != null) {
        hls.destroy();
      }
    };
  }, [hlsConfig, playerRef, src]);

  return (
    <>{Hls.isSupported() ? <video ref={playerRef} {...props} /> : <video ref={playerRef} src={src} {...props} />}</>
  );
}

export default Player;
