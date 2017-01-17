module.exports = function (type) {
    this.type = type;
    this.team = [];
    this.winResult = function (list) {
            for (i = 0; i < list.team.length; i++) {
                if (list.team[i].frozen === false) {
                    return false;
                }

            }
            return true;

    }
    return this;

};