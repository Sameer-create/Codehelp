//to update contestlist in mongo db

//console.log(module.path);
deleteContest = require('./deletecontest')
codeforces = require('../../middleware/contestfetch/Codeforces');
const codechef = require('../../middleware/contestfetch/codechef');
leetcode = require('../../middleware/contestfetch/leetcode');
atcoder = require('../../middleware/contestfetch/atcoder')
update = async() => {
    await Store();
    deleteContest.previous(contestList);

}
Store = () => {
    codechef.fetchJsonCodechef();
    codeforces.fetchJsonCodeforces();
    leetcode.fetchJsonleetcode();
    atcoder.fetchJsonAtcoder();
}

module.exports = {
    update,
};