var id = (date) => {
    var seconds = Date.parse(date) / 1000;
    var id = seconds - 1577817000;
    if (id >= 0)

        return id;
}
var leetcodeId = (date) => {
    var seconds = Date.parse(date) / 1000;
    var id = seconds - 1577817000;
    if (id >= 0 && date > new Date())

        return id;
}

var calDuration = (startTime, endTime) => {
    var date1 = new Date(startTime);
    var date2 = new Date(endTime);
    var minute = parseInt((date2.getTime() - date1.getTime()) / 1000 / 60);
    var hours = parseInt(minute / 60);
    minute = minute % 60;
    var days = parseInt(hours / 24);
    if (days > 0)
        return days + "days";
    else
        return hours + ":" + minute;



}
var calCountdown = (startTime, endTime) => {
    var date2 = new Date();
    var date1 = new Date(startTime);


    var date3 = new Date(endTime);
    var seconds = date1.getTime() - date2.getTime();
    if (seconds < 0)
        seconds = date3.getTime() - date1.getTime();
    //console.log(seconds);
    return seconds;
}

module.exports = {
    id,
    calDuration,
    calCountdown,
    leetcodeId

};