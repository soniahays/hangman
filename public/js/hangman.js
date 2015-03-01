$(function(){
    function LetterBoard() {
        for(var i = 0; i < 26; i++ ) {
            $("#letters").append("<span>" + String.fromCharCode(65 + i) + "</span>");
        }
        this.bindEvents();
    }
    function WordBoard() {
        this.words = ['acres', 'adult', 'advice', 'arrangement', 'attempt', 'August', 'Autumn', 'border', 'breeze', 'brick', 'calm', 'canal', 'Casey', 'cast', 'chose', 'claws', 'coach', 'constantly', 'contrast', 'cookies', 'customs', 'damage', 'Danny', 'deeply', 'depth', 'discussion', 'doll', 'donkey', 'Egypt', 'Ellen', 'essential', 'exchange', 'exist', 'explanation', 'facing', 'film', 'finest', 'fireplace', 'floating', 'folks', 'fort', 'garage', 'grabbed', 'grandmother', 'habit', 'happily', 'Harry', 'heading', 'hunter', 'Illinois', 'image', 'independent', 'instant', 'January', 'kids', 'label', 'Lee', 'lungs', 'manufacturing', 'Martin', 'mathematics', 'melted', 'memory', 'mill', 'mission', 'monkey', 'Mount', 'mysterious', 'neighborhood', 'Norway', 'nuts', 'occasionally', 'official', 'ourselves', 'palace', 'Pennsylvania', 'Philadelphia', 'plates', 'poetry', 'policeman', 'positive', 'possibly', 'practical', 'pride', 'promised', 'recall', 'relationship', 'remarkable', 'require', 'rhyme', 'rocky', 'rubbed', 'rush', 'sale', 'satellites', 'satisfied', 'scared', 'selection', 'shake', 'shaking', 'shallow', 'shout', 'silly', 'simplest', 'slight', 'slip', 'slope', 'soap', 'solar', 'species', 'spin', 'stiff', 'swung', 'tales', 'thumb', 'tobacco', 'toy', 'trap', 'treated', 'tune', 'University', 'vapor', 'vessels', 'wealth', 'wolf', 'zoo'];
        this.currentIndex = getRandomNumber(0, this.words.length);
        this.currentWord = this.words[this.currentIndex].toUpperCase();
        for(var i = 0; i < this.currentWord.length; i++) {
            $("#word").append("<span>_</span>");
        }
    }

    LetterBoard.prototype.bindEvents = function() {
        $("#letters span").on("click", function(){
            $(this).addClass("hide");
            var selectedLetter = $(this).text();
            var letterIndexes = getAllIndexes(wordBoard.currentWord, selectedLetter);
            if (letterIndexes.length > 0) {
                $("#word span").each(function(index, value) {
                    letterIndexes.forEach(function(el, letterIndex) {
                        if(index === el) {
                            $(value).text(selectedLetter);
                        }
                    });
                });
            }
        });
    }

    function getAllIndexes(arr, val) {
        var indexes = [], i;
        for(i = 0; i < arr.length; i++)
            if (arr[i] === val)
                indexes.push(i);
        return indexes;
    }

    /**
     * Returns a random number between min (inclusive) and max (exclusive)
     */
    var getRandomNumber = function(min, max){
        return Math.floor((Math.random()*(max-min) + min));
    }

    var letterBoard = new LetterBoard();
    var wordBoard = new WordBoard();


//    Here start the drawings
//    requestAnim shim layer by Paul Irish
//    window.requestAnimFrame = (function () {
//        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
//            window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
//            function ( /* function */ callback, /* DOMElement */ element) {
//            window.setTimeout(callback, 1000 / 60);
//        };
//    })();

    var canvas = $("canvas");
    var context = canvas.get(0).getContext("2d");

    var accumulator = 0;

    var line = new Line(context, 85, 460, 140, 340);
    var line2 = new Line(context, 195, 460, 140, 340);
    var line3 = new Line(context, 140 ,460, 140, 180);


    animate();

    //animation loop
    function animate() {
        context.clearRect(0, 0, 100, 100);
        var endAngle = accumulator / 20;
        accumulator++;
        context.beginPath();
        context.arc(250 , 100, 50, 0, endAngle, false);
        context.strokeStyle = "#2068A8";
        context.lineWidth = 25;
        context.stroke();
        line.animate();
        line2.animate();
        line3.animate();

//        if (endAngle < (2 * Math.PI)) {
            requestAnimationFrame(animate);
//        }
    }
    var imageObj = new Image();
    imageObj.onload = function() {
        context.drawImage(imageObj, 50, 60, 400, 400);
    };
    imageObj.src = '../img/hangman.png';

});
