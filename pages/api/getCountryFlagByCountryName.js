// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { findFlagUrlByCountryName } from "country-flags-svg";

export default async function handler(req, res) {
  const { countryName } = req.query;
  if (typeof countryName !== "string" || countryName.trim() === "") {
    res.status(400).json({ error: "Country name missing in request query" });
    return;
  }
  const image_url = findFlagUrlByCountryName(countryName);
  try {
    // Wikimedia rejects requests with no User-Agent; Workers' fetch sends none by
    // default (Node's got used to add one), so set one explicitly.
    const imageResponse = await fetch(image_url, {
      headers: { "user-agent": "country-flags-api/1.0" },
    });
    if (!imageResponse.ok) {
      throw new Error(`Upstream responded ${imageResponse.status} for ${image_url}`);
    }
    const imageBuffer = Buffer.from(await imageResponse.arrayBuffer());

    res.setHeader("Cache-Control", "s-maxage=43200");
    res.setHeader("content-type", imageResponse.headers.get("content-type"));
    res.send(imageBuffer);
  } catch (e) {
    res.send(e.message + ", Check if you are sending in the correct countryName");
  }
}
