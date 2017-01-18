let newPlayer = require('./player');


let players = [
    new newPlayer('Kim'),
    new newPlayer('Greg'),
    new newPlayer('Marshall'),
    new newPlayer('Charlotte'),
    new newPlayer('Charlie'),
    new newPlayer('Jenny'),
    new newPlayer('Sam'),
    new newPlayer('John'),
    new newPlayer('Ella'),
    new newPlayer('Scott'),
]

console.log(players);


// pulling in modules for team constructors

let newChasers = require('./chaserTeam');
let newRunners = require('./runnerTeam');
let newGame = require('./gameObject');

// creating prototype for parent of two teams

function Team(){
    return this;
}

newChasers.prototype = Team.prototype;
newRunners.prototype = Team.prototype;

// Putting add and win functions in prototype

Team.prototype.add = function(player){
        player.type = this.type;
        this.team.push(player);
};

Team.prototype.won = function(team){
    return this.winResult(team);
}

// Creating chasers and runners using constructors

let chasers = new newChasers('chasers');
let runners = new newRunners('runners');
let game =  new newGame(chasers, runners);

window.addEventListener('load', function () {

    chasers.add(players[0]);
    runners.add(players[1]);
    chasers.add(players[2]);
    runners.add(players[3]);
    chasers.add(players[4]);
    runners.add(players[5]);
    chasers.add(players[6]);
    runners.add(players[7]);
    chasers.add(players[8]);
    runners.add(players[9]);

    showPlayers(players);
  

    console.log(chasers);
    console.log(runners);

    players[0].tag(players[9]);
    players[2].tag(players[7])
    players[5].tag(players[7]);

    game.complete();
    console.log(game.complete());

    players[7].flag();

    game.complete();
    console.log(game.complete());
    console.log(game.winner.type);


// Game Scenario #2 - not working yet

    let game2result = require('./game2');
    let result = game2result(players);
    console.log(result);
    console.log(game.complete());
    console.log(game.winner.type);

    let addChaser = document.querySelector('#addChase');
    // addChaser.addEventListener('click', newChaser);
    let addRunner = document.querySelector('#addRun');
    // addRunner.addEventListener('click', newRunner);



});

function showPlayers(list) {

    for (let i = 0; i < list.length; i++) {

        if (list[i].type === 'chasers') {
            let parent1 = document.querySelector('#chaseList');
            let child1 = document.createElement('li');
            
            parent1.appendChild(child1);
            let chaserName = document.createElement('h3');
            chaserName.textContent = list[i].name;
            child1.appendChild(chaserName);

            for (let j = 0; j < list.length; j++) {
                if (list[j].type === 'runners') {
                    let freezePlayer = document.createElement('button');
                    freezePlayer.setAttribute('class', 'tag');
                    freezePlayer.textContent = "Freeze " + list[j].name;

                    freezePlayer.addEventListener('click', function () {
                        list[i].tag(list[j]);
                        // showplayers
                    });
                    child1.appendChild(freezePlayer);
                }
            }
        }


            if (list[i].type === 'runners') {
                let parent2 = document.querySelector('#runList');
                let child2 = document.createElement('li');
                
                parent2.appendChild(child2);
                let runnerName = document.createElement('h3')
                runnerName.textContent = list[i].name
                child2.appendChild(runnerName);
                let statusDisplay = document.createElement('p')
                statusDisplay.textContent = '(status: ' + list[i].frozen + ')';
                child2.appendChild(statusDisplay);

                let freezeButton = document.createElement('button');
                freezeButton.setAttribute('class', "freeze");
                // freezeButton.addEventListener('click',freeze)
                freezeButton.textContent = 'Freeze';
                let flagButton = document.createElement('button');
                // flagButton.addEventListener('click', this.flag);
                flagButton.setAttribute('class', 'flag');
                flagButton.textContent = 'Flag';
                child2.appendChild(freezeButton);
                child2.appendChild(flagButton);



            }
        }

    };


