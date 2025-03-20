export default function handler(req, res) {
  const { budget } = req.query;
  const total = parseInt(budget);

  if (isNaN(total)) {
    return res.status(400).json({ error: "Invalid budget input" });
  }

  const flightBudget = Math.floor(total * 0.4);
  const hotelBudget = Math.floor(total * 0.4);
  const extrasBudget = Math.floor(total * 0.1);
  const remaining = total - (flightBudget + hotelBudget + extrasBudget);

  // Mock data
  const data = {
    flight: `Round-trip flight booked for $${flightBudget}`,
    hotel: `Hotel stay booked for $${hotelBudget}`,
    extras: `Extras planned with $${extrasBudget}`,
    remaining,
  };

  res.status(200).json(data);
}
