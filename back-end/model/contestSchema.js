const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

const contestSchema = new mongoose.Schema({
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    host: {
        type: String,
        required: true
    },
    // rid: {
    //     type: String,
    //     required: true
    // },
    // timezone: {
    //     type: String,
    //     required: true
    // },
    id: {
        type: String,
        required: true
    },

})



const Contest = mongoose.model('CONTEST', contestSchema);

module.exports = Contest;