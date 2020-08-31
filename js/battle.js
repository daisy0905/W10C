var userSelection = Cookies.get('pkmSelection');
selection = document.getElementById('selection-container');
var userHealth = Cookies.get('userHP');
var computerHealth = Cookies.get('computerHP');

if(userSelection == 'charizard') {
    selection.innerHTML = "<img src='https://upload.wikimedia.org/wikipedia/en/1/1f/Pok%C3%A9mon_Charizard_art.png' alt='Charizard'>";
} else if(userSelection == 'blastoise') {
    selection.innerHTML = "<img src='https://images.gameinfo.io/pokemon/256/009-00.png' alt='Blastoise'>";
} else if(userSelection == 'venusaur') {
    selection.innerHTML = "<img src='https://images.gameinfo.io/pokemon/256/003-01.png' alt='Venusaur'>";
} else {
    selection.innerHTML = "<p>Invalid Choice!</p>";
}

var userMaxHP = 550;
var userCurrentHP = userMaxHP;
var computerMaxHP = 1000;
var computerCurrentHP = computerMaxHP;


if(userHealth == undefined) {
    userCurrentHP = userMaxHP;
    computerCurrentHP = computerMaxHP;
} else {
    userCurrentHP = parseInt(userHealth);
    computerCurrentHP = parseInt(computerHealth);
}

document.getElementById('hp1').innerHTML = '<p>HP:' + userCurrentHP + '/' + userMaxHP + '</p>';
document.getElementById('hp2').innerHTML = '<p>HP:' + computerCurrentHP + '/' + computerMaxHP + '</p>';

function attackOne() {
    computerCurrentHP = computerCurrentHP - 60;
    document.getElementById('hp2').innerHTML = '<p>HP:' + computerCurrentHP + '/' + computerMaxHP + '</p>';
    checkWinner();
    
    userCurrentHP = userCurrentHP - 40;
    document.getElementById('hp1').innerHTML = '<p>HP:' + userCurrentHP + '/' + userMaxHP + '</p>';
    checkWinner();
    
    Cookies.set('userHP', userCurrentHP);
    Cookies.set('computerHP', computerCurrentHP);
}

function attackTwo() {
    computerCurrentHP = computerCurrentHP - 35;
    document.getElementById('hp2').innerHTML = '<p>HP:' + computerCurrentHP + '/' + computerMaxHP + '</p>';
    checkWinner();

    userCurrentHP = userCurrentHP - 40;
    document.getElementById('hp1').innerHTML = '<p>HP:' + userCurrentHP + '/' + userMaxHP + '</p>';
    checkWinner();
    
    Cookies.set('userHP', userCurrentHP);
    Cookies.set('computerHP', computerCurrentHP);
}

function attackThree() {
    computerCurrentHP = computerCurrentHP - 25;
    document.getElementById('hp2').innerHTML = '<p>HP:' + computerCurrentHP + '/' + computerMaxHP + '</p>';
    checkWinner();

    userCurrentHP = userCurrentHP - 50;
    document.getElementById('hp1').innerHTML = '<p>HP:' + userCurrentHP + '/' + userMaxHP + '</p>';
    checkWinner();
    
    Cookies.set('userHP', userCurrentHP);
    Cookies.set('computerHP', computerCurrentHP);
    
}

function attackFour() {
    computerCurrentHP = computerCurrentHP - 25;
    document.getElementById('hp2').innerHTML = '<p>HP:' + computerCurrentHP + '/' + computerMaxHP + '</p>';
    checkWinner();

    userCurrentHP = userCurrentHP - 30;
    document.getElementById('hp1').innerHTML = '<p>HP:' + userCurrentHP + '/' + userMaxHP + '</p>';
    checkWinner();

    Cookies.set('userHP', userCurrentHP);
    Cookies.set('computerHP', computerCurrentHP);
}

function checkWinner() {
    if(computerCurrentHP<=0) {
        alert('<p>GAME OVER: user wins!</p>');
        document.getElementById('hp1').innerHTML = '<p>HP: 0/' + computerMaxHP + '</p>';
    } else if(userCurrentHP<=0) {
        alert('<p>GAME OVER: computer wins!</p>');
        document.getElementById('hp2').innerHTML = '<p>HP: 0/' + userMaxHP + '</p>';
    }
}
