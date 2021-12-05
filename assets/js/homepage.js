var getUserRepos = function(user) {
    
    //format GitHub api url
    var apiUrl = "https://api.github.com/users" + user + "/repos";

    //fetch("https://api.github.com/users/octocat/repos").then(function(response){
    //console.log("inside", response);

    // make a request to the url
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            console.log(data);

    });
    
    });

    };

 // console.log("outside");

  getUserRepos();