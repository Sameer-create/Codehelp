const fetch = require('node-fetch');
const url = 'https://leetcode.com/graphql';
var Contest = require('../../model/contestSchema.js');
const helpFunc = require('../contestId.js')
var options = {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify({
        "operationName": null,
        "variables": {},
        "query": "{\n  allContests {\n    title\n    titleSlug\n    startTime\n    duration\n    }\n}\n"
    })
};
var fetchJsonleetcode = () => {
    fetch(url, options).then(response => response.json()).then(data => traverseJsonleetcode(data));
}

traverseJsonleetcode = (data) => {
    //console.log(data);
    console.log("Checking status");
    try {
        console.log("Storing leetcode Data");
        data["data"]["allContests"].forEach(element => {
            var startDateString = element.startTime + "000";
            var endDateString = element.startTime + element.duration + "000";
            var startDate = new Date(parseInt(startDateString));
            var endDate = new Date(parseInt(endDateString));
            var id = helpFunc.leetcodeId(startDate);
            if (id != null)
                try {
                    storeContestleetcode(element, id, startDate, endDate);
                }
            catch (err) {
                console.log(err);
            }
        });

    } catch (err) {
        console.log("Error ocuured while fetching data from leetcode " + err);
    }

}

async function storeContestleetcode(contest, id, startTime, endTime) {
    try {
        const contestExist = await Contest.findOne({ id: id })
        if (!contestExist) {
            console.log("Storing contest with id " + id);
            var title = contest.title;
            var duration = contest.duration;
            var url = "https://leetcode.com/contest/" + contest.titleSlug;
            var host = "https://leetcode.com/";
            var id = id;
            var newContest = new Contest({ startTime, endTime, duration, title, url, host, id });
            await newContest.save();
        }


    } catch (err) {
        throw new Error('Error Ocuured while saving contest with id' + id);
    }


}
module.exports = {
    fetchJsonleetcode,
};