const fetch = require('node-fetch');
const url = 'https://www.codechef.com/api/list/contests/all?sort_by=END&sorting_order=desc&offset=0';
var Contest = require('../../model/contestSchema.js');
const helpFunc = require('../contestId.js')

var fetchJsonCodechef = () => {
    fetch(url).then(response => response.json()).then(data => traverseJsonCodechef(data));
    //console.log("testing");
}

traverseJsonCodechef = (data) => {
    console.log("Checking status");
    try {
        if (data['status'] == "success") {
            console.log("Storing Codechef Data");
            data["present_contests"].forEach(element => {
                var startDate = new Date(element.contest_start_date_iso);
                var id = helpFunc.id(startDate);
                if (id != null)
                    try {
                        storeContestCodechef(element, id);
                    }
                catch (err) {
                    console.log(err);
                }
            });
            data["future_contests"].forEach(element => {
                var startDate = new Date(element.contest_start_date_iso);
                var id = helpFunc.id(startDate);
                if (id != null)
                    try {
                        storeContestCodechef(element, id);
                    }
                catch (err) {
                    console.log(err);
                }
            });
        } else {
            throw new Error("status is not success ");

        }
    } catch (err) {
        console.log("Error ocuured while fetching data from codechef " + err);
    }

}

async function storeContestCodechef(contest, id) {
    try {
        const contestExist = await Contest.findOne({ id: id })
        if (!contestExist) {
            console.log("Storing contest with id " + id);
            var title = contest.contest_name;
            var startTime = contest.contest_start_date_iso;
            var endTime = contest.contest_end_date_iso;
            console.log(endTime);
            var duration = helpFunc.calDuration(contest.contest_start_date_iso, contest.contest_end_date_iso);
            var url = "https: //www.codechef.com/" + contest.contest_code;
            var host = "https: //www.codechef.com/";
            var id = id;
            var newContest = new Contest({ startTime, endTime, duration, title, url, host, id });
            await newContest.save();
        }


    } catch (err) {
        throw new Error('Error Ocuured while saving contest with id' + id);
    }


}
module.exports = {
    fetchJsonCodechef,
};