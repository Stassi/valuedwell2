import { infoQuery } from 'eimspyr'

export default async function handler (req, res) {
  res.status(200).json(await infoQuery({
    address: '95.156.194.254',
    port: 10011,
  }))
}
