// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import contacts from '../../contact.json'

export default function contact(req, res) {
  res.status(200).json(contacts)
}
