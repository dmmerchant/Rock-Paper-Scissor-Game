var choices = [
    {
        Name:"Rock",
        Image:"rock.png",
        Win:"Scissors",
        Lose:"Paper"
    },
    {
        Name:"Paper",
        Image:"paper.png",
        Win:"Rock",
        Lose:"Scissors"
    },
    {
        Name:"Scissors",
        Image:"scissors.png",
        Win:"Paper",
        Lose:"Rock"
    }
]
var message="";
var computerChoice
var statistics = {
    wins: 0,
    loses: 0,
    ties: 0,
    total: 0
}
document.getElementById("wins").innerHTML = statistics.wins;
document.getElementById("loses").innerHTML = statistics.loses;
document.getElementById("ties").innerHTML = statistics.ties;
document.getElementById("total").innerHTML = statistics.total;


function computerSelection(choiceINT) {
    computerChoice = choices[choiceINT];
    document.getElementById("compChoice").src="./assets/images/" + computerChoice.Image;
    return computerChoice;
}

function notification(msg) {
    alert(msg);
    return;
}

function userSelection(selection) {
    userChoice = choices[selection]
    computerSelection(Math.floor(Math.random() * 3));
    statistics.total ++;
    switch (computerChoice.Name) {
        //tie
        case userChoice.Name:
            statistics.ties++;
            message = "You TIED!";
            break;
        //win
        case userChoice.Win:
            statistics.wins++;
            message = "You WON!!!"
            break;
        //lose
        case userChoice.Lose:
            statistics.loses++;
            message = "You LOST!!!"
            break;
    };
    document.getElementById("result").innerHTML = message;
    document.getElementById("wins").innerHTML = statistics.wins  + "  (" + statistics.wins / statistics.total * 100 + "%)";
    document.getElementById("loses").innerHTML = statistics.loses + "  (" + statistics.loses / statistics.total * 100 + "%)";
    document.getElementById("ties").innerHTML = statistics.ties + "  (" + statistics.ties / statistics.total * 100 + "%)";
    document.getElementById("total").innerHTML = statistics.total;
    return;
}
