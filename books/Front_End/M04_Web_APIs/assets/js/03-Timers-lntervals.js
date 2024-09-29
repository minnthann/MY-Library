var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');

var message = 'some say the world will end in some say in ice. From what I,ve tasted of desere, I hold with those who favor fire, But if it had to perish twice, I think I know enough of hate, To say that for destructio ice, Is also great, And would suffice, ';
var words = message.split(' ');

function countdown() {
    var timeLeft = 5;

    var timeInterval = setInterval (function () {
        if (timeLeft > 1 ) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft --;
        }
        else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + 'second remaining';
            timeLeft--;
        }else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            displayMessage();
        }
    }, 1000);
}
function displayMessage() {
    var wordCount = 0;
    var msgInterval = setInterval(function() {
        if (words[wordCount]=== undefined) {
            clearInterval(msgInterval);
        }else {
            mainEl.textContent = words [wordCount];
            wordCount ++;
        }
    }, 1000);
}
countdown();












/*
function person (id, name) {
    this.id = id;
    this.name = name;
} 
// new function constructor 
const list = new person(1, "ssa");
console.log(list)

*/
/*
function person (id, name) {
    this.id = id;
    this.name = name;


    // regular function ... this refers to global windows
    function x() {
        console.log(this);
    }
    x();

    // arrow function ... this refers to lexical 'person'
    // lexical အနီးဆုံးကိုပြ
    // ()=> functionဆိုရင် ပြ
    y = () => {
        console.log(this.id, this.name);
    }
    y();
} 

// use new keyword to construct 'persn'
// new function constructor 
const list = new person(1, "ssa");
console.log(list)

/*

// map copy
function persn (name, hobbies) {
    this.name = name;
    this.hobbies = hobbies;
    this.listHobbies = function () {
        this.hobbies.map( (hobby) => {      
            // အလှဆုံး
            // console.log(this);
            console.log(this.name + "love" + hobby + " !");
        });
    };
}

let list = new persn ("pa", ["coning", "eating", "sleep", "research"]);
// console.log(list)
list.listHobbies();



function persn (name, hobbies) {
    this.name = name;
    this.hobbies = hobbies;
    this.listHobbies = function () {
        // this.hobbies.map( (hobby) => {      
            // အလှဆုံး
            // console.log(this);
            return this.hobbies.map((function(hobby) {
                console.log(this.name + "love" + hobby + " !");
            }), this)
        // });
    };
}

let persn = new persn ("pa", ["coning", "eating", "sleep", "research"]);
// console.log(list)
persn.listHobbies();

// let lages = ["html", "css", "js" ];
// lages = lages.map (function(x){
//     return x + "now lages!";
// })
// console.log(lages);


// let lages = ["html", "css", "js" ];
// lages = lages.map (x =>{
//     return x + "now lages!";
// })
// console.log(lages);

// let lages = ["html", "css", "js" ];
// lages = lages.map (x => x + "now lages!")
// console.log(lages);

let x = ['s', 's', 's']
x = x.map(y => ( 
    {name:y}
))
console.log("x")

// မက်သက် တခုဆို () ဖြုတ်ရ {}

// map() {}
// log()
// random()


// global scope
// var ကို global variable ကြေညာခြင်း၌သာ သုံးရန်
// var ကို အပြင်မှာ သုံးပါ
var mm = "What Am I?"

function x () {
    // local scope varကိုစားပြု
    let ww = "how about me?"
    

    function innerx() {
                    // အတွင်းမှာဆို let /const 

        // lexical scope fun ကိုစားပြု
        console.log(" Here I am");
        console.log(ww);
        console.log(mm);

        if(true) {
            // block scope
            let uu = "Hmm  ore uo"
            console.log(uu);
            console.log(mm);

        }
    }
    innerx ();
}

x();
console.log(mm); // global scope

// console.log(ww);
// console.log(uu);
// innerx ();
*/
