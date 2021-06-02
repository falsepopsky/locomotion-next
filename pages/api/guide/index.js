import { horarios } from '../../../data/horarios';

export default function handler(req, res) {
  res.status(200).json(horarios);
}
