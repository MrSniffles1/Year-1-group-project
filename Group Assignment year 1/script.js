document.getElementById('play').onclick = click;

var heads = 0;
var tails = 0;
function click() {  
    x = (Math.floor(Math.random() * 2) == 0);
    if(x){
    	flip("heads");
    }else{
        flip("tails");
    }
};

function flip(coin) {
    document.getElementById("answer").innerHTML = coin;
};

function submit() {
    document.getElementById("contact-form").style.display = "none";
}

function community() {
    alert('We are a charity that helps disadvantaged children expand their creativity one box at a time!')
}

function family() {
    alert('Our box games have served a large part in bringing families together in their trying times to give them hope and spread the message that everything will be OK!')
}

function charity() {
    alert('Realbox Games hosts a myriad of events around the world bringing the community together and showing their love through their passion for boxes.')
}