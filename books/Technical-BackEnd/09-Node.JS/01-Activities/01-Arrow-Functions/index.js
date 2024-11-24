// 1. funnyCase makes each letter in a string the opposite case as the one before

var funnyCase = string => {
    var newString = ''; 
    for (var i = 0; i < string.length; i++) {
      if (i % 2 === 0) {
        // EVEN (2, 4, 6...) => lowercase
        newString += string[i].toLowerCase();
      } else {
        // ODD (1, 3, 5...) => uppercase
        newString += string[i].toUpperCase();
      }
    }
    // ပြောင်းထားတဲ့ String ကို return လုပ်ပါ။
    return newString;
  };
  
  // ဆုံဂဏန်း မဏန်း ခွဲပြပေးပါ
  console.log(funnyCase("You can't just do whatever you want all the time!"));
  

// 2. Map lets you loop over an array and modify the elements inside

  var map = (arr, cb) => {
    // Empty array ကိုပြင်ဆင်ပြီး ပြောင်းထားတဲ့ data တွေထည့်မယ်။
    var result = [];
    
    // Array ရဲ့ အတွင်းမှာ loop လုပ်
    for (var index = 0; index < arr.length; index++) {
      var currentElement = arr[index];
      
      // Callback function ကိုခေါ်ပြီး value ပြောင်း
      result.push(cb(currentElement, index));
    }
    
    // ပြောင်းပြီးတဲ့ Array ကို return
    return result;
  };
  
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  // numbers array ထဲက element တစ်ခုချင်းစီကို ၂ ဆထိ ပြောင်း
  var doubled = map(numbers, element => element * 2);
  
  // တိုက်ရိုက် element ကို ၂ ဆလုပ်ပါ။ ဂဏန်းကို ဆုံမခွဲ
  console.log(doubled);
  
//   Array.prototype.map

// filter function က array တစ်ခုရဲ့ element တစ်ခုချင်းစီကို iterate လုပ်ပြီး callback function အရ condition ကို ဖြည့်မီတဲ့ elements တွေကိုသာ အသစ်ထုတ်တဲ့ array ထဲထည့်တဲ့ function ဖြစ်ပါတယ်။

// 3. filter lets you loop over an array and remove elements

var filter = (arr, cb) => {
    // ရလဒ်ကိုထားဖို့ အသစ် empty array ဖန်တီး
    var result = [];
    
    // Loop လုပ်ပြီး element တစ်ခုချင်းစီစစ်
    for (var index = 0; index < arr.length; index++) {
      var currentElement = arr[index];
      
      // Callback function ကိုခေါ်ပြီး စစ်မယ်
      if (cb(currentElement, index)) {
        result.push(currentElement); // Condition ဖြည့်မီရင် result ထဲထည့်မယ်။
      }
    }
    
    // စစ်ပြီးတဲ့ result array ကို return
    return result;
  };
  
  // Even နံပါတ်တွေကို ရွေးချယ်မယ် currentElement ကို ၂ နဲ့စားပြီး ကျန်မရှိရင် true။
  var evenNumbers = filter(numbers, currentElement => currentElement % 2 === 0);
  
  // Filter လုပ်ပြီးရလဒ်ကို console.log နဲ့ပြမယ်
  console.log(evenNumbers);
  
// 4. netflixQueue is an object for managing your netflix queue

  var netflixQueue = {
    queue: [
      'Mr. Nobody',
      'The Matrix',
      'Eternal Sunshine of the Spotless Mind',
      'Fight Club'
    ],
    watchMovie: function() {
      this.queue.pop(); //နောက်ဆုးတစ်ခုကို ဖြုတ်
    },
    addMovie: function(movie) {
      this.queue.unshift(movie);
    },
    printQueue: function() {
      var list = '';
      for (var i = this.queue.length - 1; i >= 0; i--) {
        var currentMovie = this.queue[i];
        list += this.queue.length - i + '. ' + currentMovie + '\n';
      }
      console.log(list);
    }
  };
  
  // လက်ရှိ queue ကို print
  console.log('Printing movie queue!\n');
  netflixQueue.printQueue();
  
  // Movie တစ်ခုကြည့်ပြီးနောက် (နောက်ဆုံးက movie ကိုဖယ်)
  netflixQueue.watchMovie();
  console.log('\nWatched a movie!\n');
  console.log('Printing movie queue!\n');
  netflixQueue.printQueue();
  
  // အသစ် movie ထည့် (queue ရဲ့အစမှာ)
  console.log('\nAdding a movie!\n');
  netflixQueue.addMovie('Black Swan');
  console.log('Printing movie queue!\n');
  netflixQueue.printQueue();
  