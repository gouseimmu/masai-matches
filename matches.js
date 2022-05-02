// write js code here corresponding to matches.html

var schedulearr = JSON.parse(localStorage.getItem("schedule"));
displaydata(schedulearr);

document.querySelector("#filterVenue").addEventListener("change" ,filterbyvenue);
function filterbyvenue(){
   var selected= document.querySelector("#filterVenue").Value;
    var filteredlist = schedulearr.filter(function(ele){
        return ele == selected;
    })
    displaydata(filteredlist)


}




var favouritearr =JSON.parse(localStorage.getItem("favourites")) || []

function displaydata(schedulearr){
    document.querySelector("tbody").innerHTML= "";
    schedulearr.forEach(function(ele){
        
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        td1.innerText=ele.matchNum;
        var td2 =document.createElement("td");
        td2.innerText=ele.teamA;
        var td3 = document.createElement("td");
        td3.innerText=ele.teamB;
        var td4 =document.createElement("td");
        td4.innerText=ele.date;
        var td5 = document.createElement("td");
        td5.innerText=ele.venue;
        var td6 = document.createElement("td");
        td6.innerText="Favourite";
        td6.style.color="green"
        td6.style.cursor="pointer";
        td6.addEventListener("click" ,function(){
            favourite(ele);
        });
        tr.append(td1,td2,td3,td4,td5,td6);
        document.querySelector("tbody").append(tr);
    });
}

function favourite(ele){
    schedulearr.push(ele);
    localStorage.setItem("favourites",JSON.stringify(schedulearr));
}