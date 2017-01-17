module.exports = function (type) {
    this.type = type;
    this.team = [];
    this.winResult = function (team) {
            for (let i = 0; i < this.team.length; i++) {
                if (this.team[i].haveFlag === true) {
                    return true;
                }
            }
            return false;

    }
    return this;

};