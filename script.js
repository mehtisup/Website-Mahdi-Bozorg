function switchFunction() {
    var myBody = document.getElementById("body");
    myBody.classList.toggle("toChange");
}

window.onscroll = function() {scrollFunction()};

var menu = window.pageYOffset;

function scrollFunction() {
    
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("sButton").style.display = "block";
    } else {
        document.getElementById("sButton").style.display = "none";
    }

    var myMenu = window.pageYOffset;

    if (menu > myMenu) {
        document.getElementById("mySocial").style.transform = "translateY(0)";
        
    } else {
        document.getElementById("mySocial").style.transform = "translateY(-60px)"
    }
    menu = myMenu;
    
    
}


function sFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


function myClock() {
    var myWatch = new Date();
    
    var h = myWatch.getHours();
    var m = myWatch.getMinutes();
    var s = myWatch.getSeconds();

    m = checkTime(m);
    s = checkTime(s);
    setTimeout(myClock, 1000);
    document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
}

function checkTime(i) {
    if (i < 10) {i = "0" + i}
    return i;
}

myClock();

function listFunction() {
    document.getElementById("myLayer").style.display = "block";;
    document.getElementById("myBar").style.display = "none";
    document.getElementById("myClose").style.display = "block";
}

function closeFunction() {
    document.getElementById("myLayer").style.display = "none";
    document.getElementById("myClose").style.display = "none";
    document.getElementById("myBar").style.display = "block";
}

function aboutFunction() {
    document.getElementById("myAbout").style.display = "block";
}

function cAbout() {
    document.getElementById("myAbout").style.display = "none";
}

function pFunction() {
    document.getElementById("myGreen").style.width = "100%";
    document.getElementById("imGreen").style.transform = "translateY(0)";
    document.getElementById("imGreen").style.opacity = "1";
}

function cGreen() {
    document.getElementById("myGreen").style.width = "0%";
    document.getElementById("imGreen").style.opacity = "0";
    document.getElementById("imGreen").style.transform = "translateY(0px)"
}


function websiteFunction() {
    document.getElementById("supreme").style.display = "block";
}

function supremeFunction() {
    document.getElementById("supreme").style.display = "none";
}

function webFunction() {
    alert("Welcome!")
}

function cWebsite() {
    document.getElementById("myWebsite").style.width = "0";
    document.getElementById("mw").style.opacity = "0";
    document.getElementById("mw").style.transform = "scale(0)";
}

function serviceFunction() {
    document.getElementById("myDark").style.dispaly = "block";
    
}
function darkFunction() {
    document.getElementById("myDark").style.display = "none";
    
}

function technologyFunction() {
    document.getElementById("learning").style.display = "block";
}

function cTechnology() {
    document.getElementById("learning").style.display = "none";
}

function storeFunction() {
    document.getElementById("darkSide").style.display = "block";
}

function sideFunction() {
    document.getElementById("darkSide").style.display = "none";
}




var timer = setInterval(timerFunction, 1000);

function timerFunction() {
    document.getElementById("myDark").style.display = "block";
    clearInterval(timer);
}


function dropDown() {
    document.getElementById("dropList").classList.toggle("display");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropDown')) {
        var list = document.getElementsByClassName("dropList");
        var i;
        for (i = 0 ; i < list.length ; i++) {
            var myList = list[i];
            if (myList.classList.contains('display')) {
                myList.classList.remove('display')
            }
        }
    }
}
