var requestUrl = 'https://api.github.com/repos/twitter/chill/issues?per_page=5';

fetch(requestUrl)  //github ကို ပြန်ခေါ်
    .then(function(response) {
        return response.json(); //json ပြောင်း
    })

    .then(function(data) {
        console.log('Github Repo Issues \n------------');
        for (var i = 0; i < data.length; i++) {
            console.log(data[i].url); //ကိုခေါ်သော url ကိုပြ
            console.log(data[i].user.login); //နာမည်ပြ
        }
    });