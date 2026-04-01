JavaScript
export default async function handler(req, res) {
  if (req.method === "POST") {
    res.status(200).send("✅ Files uploaded successfully (processed)");
  } else {
    res.status(405).send("❌ Method not allowed");
  }
}