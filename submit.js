export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).send("Method Not Allowed");

  const GOOGLE_SCRIPT_URL =
    "اینجا_لینک_وب_اپ_گوگل_شیت_تو";

  await fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(req.body)
  });

  res.json({ status: "ok" });
}
