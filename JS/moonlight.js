function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Leia mais"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Leia menos"; 
      moreText.style.display = "inline";
    }
}

alert("Professor, não consegui fazer com que certos elementos ficassem bloqueados para scroll mesmo usando background-attachment para isso")