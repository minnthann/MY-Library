// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

// var isPalindrome = function(str) {
//     var reversedString = str
//       .split('')
//       .reverse()
//       .join('');
  
//     if (reversedString === str) {
//       return true;
//     } else {
//       return false;
//     }
//   };
  
  // Alternatively, this problem could have been solved by comparing the letters at the front of `str` to the letters at the back of `str`
  
  var isPalindrome = function (str) {
    for (var i = 0; i < str.length; i++) {
      if (str[i] !== str[str.length - 1 - i]) {
        return false;
      }
    }
    return true;
  };
  
//   နောက်ဆုံးမှရှေ့အထိ ဖတ်ပြီးတဲ့အခါမှာလည်း အတူတူဖြစ်တဲ့ အခါစစ်တဲ့ ကုဒ်
//   madam racecar ပြောင်းပြန်ဖတ်လည်း ဒီအဓိပ္ပာယ်ဲပြ