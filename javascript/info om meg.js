function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

let = tablinks = document.getElementsByClassName("tablink");
 for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundcolor = "";
}

document.getElementById(pageName).style.display = "block"
elmnt.style.backgroundcolor = color;
 }

 // Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
