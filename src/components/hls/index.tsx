import Hls, { type HlsConfig } from 'hls.js';
import React, { useEffect, useRef } from 'react';

export interface HlsPlayerProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  hlsConfig?: HlsConfig;
  source: string;
}

function Player({ hlsConfig, source, ...props }: HlsPlayerProps) {
  const playerRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!source) return;

    if (Hls.isSupported() && playerRef.current != null) {
      const hls = new Hls({
        enableWorker: false,
        ...hlsConfig,
      });

      hls.attachMedia(playerRef.current);

      hls.on(Hls.Events.MEDIA_ATTACHED, () => {
        hls.loadSource(source);
      });

      hls.on(Hls.Events.ERROR, function (_event, data) {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              hls.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              hls.recoverMediaError();
              break;
            default:
              hls.destroy();
              break;
          }
        }
      });

      return () => {
        hls.destroy();
      };
    }
  }, [hlsConfig, source]);

  return <video ref={playerRef} {...props} />;
}

export default Player;
