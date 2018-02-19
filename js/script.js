var quoteMade = ['"Forget it, Jake. It\'s Chinatown."',//0
                 '"...Bond. James Bond."', //1
                 '"Of all the gin joints in all the towns in all the world, she walks into mine."', //2
                 '"Keep your friends close, but your enemies closer."', //3
                 '"I\'ll be back!"', //4
                 '"I mean, funny like I\'m a clown? I amuse you?"', //5
                 '"I love the smell of napalm in the morning."', //6
                 '"My Mama always said, \'Life is like a box of chocolates, you never know what your gonna get.\'"', //7
                 '"I am big! It\'s the pictures that got small."', //8
                 '"Frankly, my dear, I don\'t give a damn!"', //9
                 '"You talkin\' to me? You talkin\' to me? You talkin\' to me? Well, who the hell else are you talkin\' to? You talkin\' to me? Well, I\'m the only one here. Who the f--k do you think you\'re talkin\' to?"',//10
                 '"Life isn\’t like in the movies. Life… is much harder."',//11
                 '"They may take our lives, but they\'ll never take our freedom!"',//12
                 '"Gentlemen, you can\'t fight in here! This is the war room!"',//13 
                 '"The greatest trick the devil ever pulled was convincing the world he didn\'t exist."',//14
                 '"You don\'t understand! I could\'ve had class. I could\'ve been a contender. I could\'ve been somebody, instead of a bum, which is what I am."', //15
                 '"Say hello to my little friend!"', //16
                ];


var quoteAuthor = [
    "Chinatown",//0
    "Dr. No" , //1
    "Casablanca" , //2
    "The Godfather, Part II", //3
    "The Terminator ", //4
    "Goodfellas ", //5
    "Apocalypse Now ", //6
    "Forrest Gump ", //7
    "Sunset Boulevard ", //8
    "Gone With the Wind ", //9
    "Taxi Driver ", //10
    "Cinema Paradiso ",//11
    "Braveheart ",//12
    "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb ",//13
    "The Usual Suspects ", //14
    "On the Waterfront ", //15
    "Scarface ", //16
]; 

var colors = ['rgba(9, 1, 52, 0.93)', //0
              'rgba(22, 160, 133, 0.9)', //1
              'rgba(8, 39, 21, 0.95)', //2
              'rgba(44, 62, 80, 0.95)', //3
              'rgba(237, 166, 0, 0.9)', //4
              'rgba(105, 37, 30, 0.9)', //5
              'rgba(61, 37, 70, 0.95)', //6
              'rgba(80, 33, 32, 0.95)', //7
              'rgba(52, 34, 36, 0.98)', //8
              "rgba(71, 46, 50, 0.95)", //9
              "rgba(71, 46, 50,.95)", //10
              "rgba(225, 68, 68,.95)", //11
              "rgba(24, 32, 47, 0.97)", //12
              "rgba(168, 124, 87, 0.9)", //13
              "rgba(42, 28, 17, 0.95)", //14
              "rgba(28, 28, 28, 0.95)", //15
              "rgba(35, 51, 65, 0.9)", //16
             ];

var movieYear = [
    "1974",//0
    "1962", //1
    "1942", //2
    "1974", //3
    "1984", //4
    "1990", //5
    "1979", //6
    "1994", //7
    "1950", //8
    "1939", //9
    "1976", //10
    "1988",//11
    "1995",//12
    "1964",//13
    "1995", //14
    "1954", //15
    "1983" //16
]; 


$(document).ready(function() {
    $("#generate").on("click", function() {
        $("#copied_msg").css({"display": "none"});
        var arrNo = Math.floor(Math.random() * (quoteAuthor.length-1));
        console.log(arrNo);
        console.log(movieYear[arrNo]);
        $(".movie").html(quoteAuthor[arrNo]);
        $(".movie--year").html(movieYear[arrNo]);
        $("body").css('background-image', 'linear-gradient('+colors[arrNo]+', '+colors[arrNo]+')');
        $("#sentence").html(quoteMade[arrNo]);
        var quoteLength = quoteMade[arrNo].length;
        if(quoteLength >120) {
            $("#sentence").css({"font-size": "200%"});
        }else if (quoteLength < 20){
            $("#sentence").css({"font-size": "350%"});
        }else {
            $("#sentence").css({"font-size": "280%"});
        }
    });
    $("#copy_btn").on("click", function() {
        $("#copied_msg").css({"display": "inline-block"});
    });

})

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}