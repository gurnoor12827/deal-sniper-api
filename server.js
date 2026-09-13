const express = require('express');
const cors = require('cors');
const app = express();

// Allows your Lovable frontend to communicate with this server
app.use(cors());

// Returns deal data matching your dashboard layout
app.get('/api/deals', (req, res) => {
  res.json([
    { id: 1, name: "PS5 Disc Edition", category: "Gaming", distance: "within 25 mi", hits: 2, target: 350, lowest: 389, sms: false },
    { id: 2, name: "OEM Brake Rotors — Honda Civic", category: "Car Parts", distance: "within 15 mi", hits: 5, target: 80, lowest: 74, status: "Deal found: $74", sms: true },
    { id: 3, name: "Nintendo Switch OLED", category: "Gaming", distance: "within 40 mi", hits: 0, target: 250, lowest: null, status: "Scanning...", sms: false }
  ]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
