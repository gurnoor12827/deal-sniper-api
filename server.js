const express = require('express');
const cors = require('cors');
const app = express();

// Allows your Lovable frontend to communicate with this server
app.use(cors());

// Returns deal data matching your dashboard layout
app.get('/api/deals', (req, res) => {
  res.json([
    { 
      id: 1, 
      name: "PS5 Disc Edition", 
      category: "Gaming", 
      distance: "within 25 mi", 
      hits: 2, 
      target: 350, 
      fetchedPrice: 389, 
      status: "Lowest: $389", 
      sms: false 
    },
    { 
      id: 2, 
      name: "OEM Brake Rotors — Honda Civic", 
      category: "Car Parts", 
      distance: "within 15 mi", 
      hits: 5, 
      target: 80, 
      fetchedPrice: 74, 
      status: "Deal found: $74", 
      sms: true 
    }
  ]);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
