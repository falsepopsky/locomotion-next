const stream = [
  {
    id: 1,
    label: 'HQ 1',
    source: 'http://51.222.85.85:81/hls/loco/index.m3u8',
  },
  {
    id: 2,
    label: 'HQ 2',
    source: 'http://locomotiontv.com/envivo/loco_ch/stream.m3u8',
  },
  {
    id: 3,
    label: 'LQ',
    source: 'http://locomotiontv.com/envivo/loco_ch_low/stream.m3u8',
  },
];

export default function handler(req, res) {
  // Get data from your database
  res.status(200).json(stream);
}
