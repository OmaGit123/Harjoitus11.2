var sijainti = document.getElementById("näytäsijaintibtn");

sijainti.onclick = function() {


    document.querySelector(".active").classList.remove("active")
    document.querySelector("#divsijaintisivu").classList.add("active")

}
var laskusivu = document.getElementById("divlaskusivubtn");

laskusivu.onclick = function(){

    document.querySelector(".active").classList.remove("active")
    document.querySelector("#divlaskusivu").classList.add("active")  
}