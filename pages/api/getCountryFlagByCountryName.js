// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { findFlagUrlByCountryName } from "country-flags-svg";
import got from "got";

export default async function handler(req, res) {
  const { countryName } = req.query;
  if (typeof countryName !== "string" || countryName.trim() === "") {
    res.status(400).json({ error: "Country name missing in request query" });
    return;
  }
  const image_url = findFlagUrlByCountryName(countryName);
  try {
    const imageRequest = got(image_url);
    const [imageResponse, imageBuffer] = await Promise.all([imageRequest, imageRequest.buffer()]);

    res.setHeader("Cache-Control", "s-maxage=43200");
    res.setHeader("content-type", imageResponse.headers["content-type"]);
    res.send(imageBuffer);
  } catch (e) {
    res.send(e.message + ", Check if you are sending in the correct countryName");
  }
}
