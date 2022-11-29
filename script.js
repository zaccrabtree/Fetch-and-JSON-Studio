// TODO: add code here
window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        return response.json(); 
}).then(function(json){
            console.log(json)
            const div = document.getElementById("container");
            json.sort(function(a, b){
                return a.hoursInSpace < b.hoursInSpace ? 1 : -1;
            })
            //for each astronaut in the json array add a div with the astronaut's information
            for (astronaut of json) {
                div.innerHTML += `
                <div class="astronaut">
                <div class="bio">
                   <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                   <ul>
                      <li>Hours in space: ${astronaut.hoursInSpace}</li>
                      <li>Active: ${astronaut.active}</li>
                      <li>Skills: ${astronaut.skills.join(", ")}</li>
                   </ul>
                </div>
                <img class="avatar" src="${astronaut.picture}" />
             </div>
              `
            }
            })
})