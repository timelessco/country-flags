// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { findFlagUrlByIso3Code } from "country-flags-svg";

export default function handler(req, res) {
  const { iso3Code } = req.body;
  res.status(200).json({ image_url: findFlagUrlByIso3Code(iso3Code) });
}
