// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { findFlagUrlByIso2Code } from "country-flags-svg";
import got from "got";

export default async function handler(req, res) {
  const { iso2code } = req.query;
  const image_url = findFlagUrlByIso2Code(iso2code);
  try {
    const imageRequest = got(image_url);
    const [imageResponse, imageBuffer] = await Promise.all([imageRequest, imageRequest.buffer()]);

    res.setHeader("Cache-Control", "s-maxage=43200");
    res.setHeader("content-type", imageResponse.headers["content-type"]);
    res.send(imageBuffer);
  } catch (e) {
    res.send(e.message + ", Check if you are sending in the correct iso2code");
  }
}
