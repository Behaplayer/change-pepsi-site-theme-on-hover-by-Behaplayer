firstPepsi = document.getElementById("jsPepsiBox__firstPepsi");
secondPepsi = document.getElementById("jsPepsiBox__secondPepsi");
thirdPepsi = document.getElementById("jsPepsiBox__thirdPepsi");
body = document.getElementById("body");
titlePepsi = document.getElementById("titlePepsi");
hero__btn = document.getElementById("hero__btn");

firstPepsi.addEventListener("mouseover", function (e) {
  body.style.backgroundColor = "#0163a8";
  hero__btn.style.backgroundColor = "#027fd8";
  hero__btn.style.color = "white";
  hero__btn.style.border = "1px #014d83 solid";
  if (titlePepsi.attributes.src.value != "./img/pepsi001.png") {
    titlePepsi.attributes.src.value = "./img/pepsi001.png";
  } else {
    titlePepsi.attributes.src.value = "./img/pepsi001.png";
  }
});

secondPepsi.addEventListener("mouseover", function (e) {
  body.style.backgroundColor = "gray";
  hero__btn.style.backgroundColor = "lightgray";
  hero__btn.style.color = "gray";
  hero__btn.style.border = "1px #101010 solid";
  if (titlePepsi.attributes.src.value != "./img/pepsi002.png") {
    titlePepsi.attributes.src.value = "./img/pepsi002.png";
  } else {
    titlePepsi.attributes.src.value = "./img/pepsi002.png";
  }
});

thirdPepsi.addEventListener("mouseover", function (e) {
  body.style.backgroundColor = "#000001";
  hero__btn.style.backgroundColor = "#151515";
  hero__btn.style.border = "1px #101010 solid";
  if (titlePepsi.attributes.src.value != "./img/pepsi003.png") {
    titlePepsi.attributes.src.value = "./img/pepsi003.png";
  } else {
    titlePepsi.attributes.src.value = "./img/pepsi003.png";
  }
});
