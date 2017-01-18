module.exports = function (team1, team2) {
    this.chasers = team1;
    this.runners = team2;
    this.complete = function () {
        for (let i = 0; i < team2.team.length; i++) {
            if (team2.team[i].haveFlag === true) {
                this.winner = team2;
                // console.log('runners win');
                return true;
            // } else {
            // console.log('boo');
            //     return false;

            }
        }

        for (j = 0; j < team1.team.length; j++) {
            if (team1.team[j].frozen === false) {
                // console.log('no one wins');
                return false;
            }

        }
        this.winner = team1;
        // console.log('chasers win')
        return true;
       
    }
    this.winner = null;



    return this;
}