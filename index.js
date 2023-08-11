const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors module
const app = express();
const PORT = process.env.PORT || 3000;

// Simulated database to track room occupancy
var rooms = {};

app.use(bodyParser.json());
app.use(cors());

// API endpoint to check room availability
app.get('/checkRoomAvailability', (req, res) => {
    const { roomId } = req.query;
    if (!roomId) {
        return res.status(400).json({ error: 'Room ID is required' });
    }
    var Id = parseInt(roomId, 10);
    console.log(Id);
    const occupancy = rooms[Id] || 0;

    if (occupancy < 7) {
        rooms[Id] = occupancy + 1;
        return res.json({ people: occupancy });
    } else {
        return res.json({ people: occupancy });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
