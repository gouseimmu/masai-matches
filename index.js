// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit" ,addmatch);

var schedulearr = JSON.parse(localStorage.getItem("schedule")) || [] ;

function addmatch(){
    event.preventDefault();
    var form = document.querySelector("form").value;

    var matchdata ={
        matchNum : document.querySelector("#matchNum").value,
        teamA : document.querySelector("#teamA").value,
        teamB : document.querySelector("#teamB").value,
        date : document.querySelector("#date").value,
        venue : document.querySelector("#venue").value,
    }

    schedulearr.push(matchdata);
    console.log(schedulearr);



    localStorage.setItem("schedule" , JSON.stringify(schedulearr));

    window.location.href="matches.html";
}
