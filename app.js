const slide = document.querySelector(".carousel-slide");
const images = document.querySelectorAll(".carousel-slide img");

//BUTTONS
const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");

//COUNTER
let counter = 1;
const imageSize = images[0].clientWidth;

slide.style.transform = `translateX(${-imageSize * counter}px)`;

// NEXT BUTTON
nextButton.addEventListener("click", () => {
  if(counter>= images.length-1) return;
  slide.style.transition = `transform 0.5s ease-in-out`;
  counter++;
  slide.style.transform = `translateX(${-imageSize * counter}px)`;
});

// PREVIOUS BUTTON
prevButton.addEventListener("click", () => {
  if(counter <= 0) return;
  slide.style.transition = `transform 0.5s ease-in-out`;
  counter--;
  slide.style.transform = `translateX(${-imageSize * counter}px)`;
});

// INFITINE SLIDER - CAROUSEL 
slide.addEventListener("transitionend", () => {
  if (images[counter].className === "lastClone") {
    slide.style.transition = "none";
    counter = images.length - 2;
    slide.style.transform = `translateX(${-imageSize * counter}px)`;
  } else if (images[counter].className === "firstClone") {
    slide.style.transition = "none";
    counter = images.length - counter;
    slide.style.transform = `translateX(${-imageSize * counter}px)`;
  }
});
