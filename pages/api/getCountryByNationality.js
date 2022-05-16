// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { findFlagUrlByNationality } from "country-flags-svg";

export default function handler(req, res) {
  const { nationality } = req.body;
  if (nationality) {
    res.status(200).json({ image_url: findFlagUrlByNationality(nationality) });
  } else {
    res.status(200).json({ error: "Nationality missing in request body" });
  }
}
