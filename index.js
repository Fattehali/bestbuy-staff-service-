// staff-service/index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// In-memory data store
const staff = [];

// Helper to generate unique IDs
const generateId = () => `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

// Routes

// Create a new staff member
app.post('/staff', (req, res) => {
    const { name, position, department, email, phone } = req.body;

    if (!name || !position || !department || !email || !phone) {
        return res.status(400).json({ message: 'All fields are required: name, position, department, email, phone' });
    }

    const newStaff = { id: generateId(), name, position, department, email, phone };
    staff.push(newStaff);

    res.status(201).json(newStaff);
});

// Get all staff members
app.get('/staff', (req, res) => {
    res.json(staff);
});

// Get a single staff member by ID
app.get('/staff/:id', (req, res) => {
    const { id } = req.params;
    const staffMember = staff.find((s) => s.id === id);

    if (!staffMember) {
        return res.status(404).json({ message: 'Staff member not found' });
    }

    res.json(staffMember);
});

// Update a staff member by ID
app.put('/staff/:id', (req, res) => {
    const { id } = req.params;
    const { name, position, department, email, phone } = req.body;

    const staffMember = staff.find((s) => s.id === id);

    if (!staffMember) {
        return res.status(404).json({ message: 'Staff member not found' });
    }

    if (name) staffMember.name = name;
    if (position) staffMember.position = position;
    if (department) staffMember.department = department;
    if (email) staffMember.email = email;
    if (phone) staffMember.phone = phone;

    res.json(staffMember);
});

// Delete a staff member by ID
app.delete('/staff/:id', (req, res) => {
    const { id } = req.params;
    const index = staff.findIndex((s) => s.id === id);

    if (index === -1) {
        return res.status(404).json({ message: 'Staff member not found' });
    }

    staff.splice(index, 1);

    res.status(204).send();
});

// Start the server
app.listen(PORT, () => {
    console.log(`Staff Service is running on http://localhost:${PORT}`);
});
