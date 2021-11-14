import { Buffer } from 'buffer'

export default async function handler (req, res) {
  res.status(200).json(await Promise.resolve({
    buffer: Buffer.from([255, 255, 255, 255, 91]),
  }))
}
