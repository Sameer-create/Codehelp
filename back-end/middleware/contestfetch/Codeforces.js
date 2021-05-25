const fetch = require('node-fetch');
const url = 'http://codeforces.com/api/contest.list';
var Contest = require('../../model/contestSchema.js');
const helpFunc = require('../contestId.js')

var fetchJsonCodeforces = () => {
    fetch(url).then(response => response.json()).then(data => traverseJsonCodeforces(data));
}

traverseJsonCodeforces = (data) => {
    console.log("Checking status");
    try {
        if (data['status'] == "success" || data['status'] == "OK") {
            console.log("Storing Codeforces Data");
            data["result"].forEach(element => {
                var startDateString = element.startTimeSeconds + "000";
                var endDateString = element.startTimeSeconds + element.durationSeconds + "000";
                var startDate = new Date(parseInt(startDateString));
                var endDate = new Date(parseInt(endDateString));
                var id = helpFunc.id(startDate);

                if (id != null)
                    try {
                        if (element.phase != "FINISHED" && element.phase != "PENDING_SYSTEM_TEST")
                            storeContestCodeforces(element, id, startDate, endDate);
                    }
                catch (err) {
                    console.log(err);
                }
            });
        } else {
            console.log(data['status']);
            throw new Error("status is not success ");
        }
    } catch (err) {
        console.log("Error ocuured while fetching data from codeforces " + err);
    }

}

async function storeContestCodeforces(contest, id, startTime, endTime) {
    try {
        //console.log(contest.id + " " + contest.phase);
        const contestExist = await Contest.findOne({ id: id })
        if (!contestExist) {
            console.log("Storing contest with id " + id);
            var title = contest.name;
            var duration = contest.durationSeconds;
            var url = "https: //www.codeforces.com/";
            var host = "https://codeforces.com/contests/" + contest.id;
            var id = id;
            var newContest = new Contest({ startTime, endTime, duration, title, url, host, id });
            await newContest.save();
        }


    } catch (err) {
        throw new Error('Error Ocuured while saving contest with id' + id);
    }


}
module.exports = {
    fetchJsonCodeforces,
};