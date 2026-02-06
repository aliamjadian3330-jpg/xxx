// pages/api/submit.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const data = req.body;

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec", 
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    const result = await response.json();
    res.status(200).json(result);

  } catch (error) {
    res.status(500).json({ status: "error", message: error.toString() });
  }
}
