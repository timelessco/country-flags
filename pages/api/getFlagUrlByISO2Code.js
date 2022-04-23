// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { findFlagUrlByIso2Code } from "country-flags-svg";

export default function handler(req, res) {
  const { iso2Code } = req.body;
  res.status(200).json({ image_url: findFlagUrlByIso2Code(iso2Code) });
}
