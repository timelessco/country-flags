// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { findFlagUrlByCountryName } from "country-flags-svg";

export default function handler(req, res) {
  const { countryName } = req.body;
  res.status(200).json({ image_url: findFlagUrlByCountryName(countryName) });
}
