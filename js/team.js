/*create a new team called type
When you add a player add that type to 
his player profile and then push the player
to the team.  To win, runners must have this.flag
returning true.  For chasers to win, all runners must have
status frozen.*/

// module.exports = function (type) {
//     this.type = type;
//     this.team = [];
//     this.add = function (player) {
//         player.type = type;
//         this.team.push(player);
//     }

//     this.won = function (list) {

//         if (this.type === 'runners') {
//             for (let i = 0; i < this.team.length; i++) {
//                 if (this.team[i].haveFlag === true) {
//                     return true;
//                 }
//             }
//             return false;
//         }
//         if (this.type === 'chasers') {
//             for (i = 0; i < list.team.length; i++) {
//                 if (list.team[i].frozen === false) {
//                     return false;
//                 }

//             }
//             return true;
//         }



    }
    return this;

};