import { horarios } from '../../../data/horarios';

export default function dayHandler({ query: { day } }, res) {
  const filtered = horarios.filter((p) => p.day === day);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `Day: ${day} not found.` });
  }
}
