//to get the contestlist from mongo db and sending it to client
const update = require('./updatecontest');
const mongoose = require('mongoose');
const { calCountdown } = require('../../middleware/contestId.js');
const deleteContest = require('./deletecontest');
contestList = mongoose.model('contest', { startTime: String, endTime: String, duration: String, title: String, url: String, host: String, id: String });
const getlist = async(req, res) => {

    update.update();

    contestList.find({}).exec(function(err, data) {
        if (err) throw err;

        arr = [];
        data.forEach(element => {
            contestDetails = {
                "id": element.id,
                "title": element.title,
                "host": element.host,
                "url": element.url,
                "start": element.startTime,
                "end": element.endTime,
                "duration": element.duration,
                "countdown": calCountdown(element.startTime, element.endTime)
            }
            arr.push(contestDetails);
        });
        res.status(200).send(arr);

    });


}

module.exports = {
    getlist
};