const mongoose = require('mongoose');
const { remove } = require('../../model/contestSchema');
//const contestListdelete = mongoose.model('contest', { startTime: String, endTime: String, duration: String, title: String, url: String, host: String, id: String });


var previous = async(contestList) => {
    //console.log(contestListdelete);
    contestList.find({}).exec(function(err, data) {
        if (err) throw err;

        arr = [];
        data.forEach(element => {
            endDate = new Date(element.endTime);
            today = new Date();
            if (endDate < today)
                removenode(element.endTime);


        });
    });
}
var removenode = (enddate) => {
    contestList.remove({ endTime: enddate }, function(err, result) {
        if (err) {
            console.err(err);
        } else {
            console.log(result + " " + enddate);
        }
    });

}
module.exports = {
    previous,
}