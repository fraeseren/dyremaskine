const text = document.querySelectorAll(".text");
const headline = document.querySelector("h1");
const search = document.getElementById("search");
const knap = document.getElementById("knap");
const dyr = document.getElementById("dyr");

text.forEach((element, index) => {
  setTimeout(() => {
    element.style.opacity = "1";
  }, index * 2000);
});

setTimeout(() => {
  search.style.opacity = "1";
}, 6000);

setTimeout(() => {
  knap.style.opacity = "1";
}, 6000);

const animals = {
  hund: "billeder/hund.png",
  kat: "billeder/kat.jpeg",
  hest: "billeder/hest.jpeg",
  gris: "billeder/gris.jpg",
};

knap.addEventListener("click", () => {
  const dyret = search.value.toLowerCase().trim();
  if (animals[dyret]) {
    dyr.innerHTML = `<img src="${animals[dyret]}"/>`;
  } else {
    dyr.innerHTML = "<p>Søg på hund, kat, hest eller gris<3</p>";
  }
});
