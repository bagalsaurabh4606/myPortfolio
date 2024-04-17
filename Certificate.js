const mongoose = require('mongoose');

// Define the certificate schema
const certificateSchema = new mongoose.Schema({
    id: String,
    image: String,
    cert_info: String,
    certificate_name: String,
    issued_data: String,
    links: String
});

// Create the Certificate model
const Certificate = mongoose.model('Certificate', certificateSchema);

module.exports = Certificate;
