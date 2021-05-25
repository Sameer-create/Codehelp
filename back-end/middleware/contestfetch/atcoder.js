const jsdom = require("jsdom");
const fetch = require('node-fetch');
const { JSDOM } = jsdom;
const Url = "https://atcoder.jp/contests/";
var Contest = require('../../model/contestSchema.js');
const helpFunc = require('../contestId.js')


var fetchJsonAtcoder = () => {
    try {
        fetch(Url).then(response => response.text()).then(data => traverseJsonAtcoder(data));
    } catch (err) {
        console.log("Error while fetching atcoder data" + err);
    }
}
var traverseJsonAtcoder = async(data) => {
    const dom = await new JSDOM(data);
    console.log("Storing atcoder data");
    //dealing with current(ingoing) contest
    var activeContest = dom.window.document.querySelectorAll("tbody")[0].getElementsByTagName("tr");
    var activeContestLen = activeContest.length;
    for (let index = 0; index < activeContestLen; index++) {
        contest = activeContest[index];
        startDateString = contest.getElementsByTagName("td")[0].textContent.trim();
        title = contest.getElementsByTagName("td")[1].getElementsByTagName('a')[0].textContent.trim();
        duration = contest.getElementsByTagName("td")[2].textContent.trim();
        url = "https://atcoder.jp" + contest.getElementsByTagName("td")[1].getElementsByTagName('a')[0];
        h = parseInt(duration.substring(0, duration.length - 3));
        m = parseInt(duration.substring(duration.length - 2));
        durationSecond = (h * 60 + m) * 60;

        var startDate = new Date(startDateString);
        //console.log(startDateString);
        var endDate = new Date(startDate.getTime() + durationSecond * 1000);
        var id = helpFunc.id(startDate);
        if (id != null)
            try {
                storeContestCodeforces(contest, id, startDate, endDate, title, url, duration);
            }
        catch (err) {
            console.log(err);
        }
        //    console.log(startDate + " " + title + " " + duration + " " + url);

    }

    //dealing with future contest
    var upcommingContest = dom.window.document.querySelectorAll("tbody")[2].getElementsByTagName("tr");
    var upcommingContestLen = upcommingContest.length;
    for (let index = 0; index < upcommingContestLen; index++) {
        contest = upcommingContest[index];
        startDateString = contest.getElementsByTagName("td")[0].textContent.trim();
        title = contest.getElementsByTagName("td")[1].getElementsByTagName('a')[0].textContent.trim();
        duration = contest.getElementsByTagName("td")[2].textContent.trim();
        url = "https://atcoder.jp" + contest.getElementsByTagName("td")[1].getElementsByTagName('a')[0];
        // console.log(startDate + " " + title + " " + duration + " " + url);
        h = parseInt(duration.substring(0, duration.length - 3));
        m = parseInt(duration.substring(duration.length - 2));
        durationSecond = (h * 60 + m) * 60;

        var startDate = new Date(startDateString);
        //console.log(startDate);
        var endDate = new Date(startDate.getTime() + durationSecond * 1000);
        var id = helpFunc.id(startDate);
        if (id != null)
            try {
                storeContestCodeforces(contest, id, startDate, endDate, title, url, duration);
            }
        catch (err) {
            console.log(err);
        }
    }

}

async function storeContestCodeforces(contest, id, startTime, endTime, title, url, duration) {
    try {
        const contestExist = await Contest.findOne({ id: id })
        if (!contestExist) {
            console.log("Storing atcoder contest with id " + id);
            var host = "https://www.atcoder.jp/";
            var newContest = new Contest({ startTime, endTime, duration, title, url, host, id });
            await newContest.save();
        }


    } catch (err) {
        console.log(err);
    }


}
module.exports = {
    fetchJsonAtcoder,
}