// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { countries } from "country-flags-svg";

export default function handler(req, res) {
  res.status(200).json({ countries });
}
