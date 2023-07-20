const slider = document.getElementById("price-slider");
const pricing = document.getElementById("pricing");
const pageViews = document.getElementById("page-views");
const toggleBar = document.getElementById("toggleBar");
const discount = document.querySelector(".discount");
const pricingMonth = document.querySelector(".pricing-month");

const firstSection = document.querySelector(".first-section");
const sliderDiv = document.querySelector(".slider-price");

function responsive() {
   const screenWidth = window.innerWidth;

   if (screenWidth <= 425) {
      discount.textContent = "-25%";
   } else {
      discount.textContent = "25% discount";
   }
}

window.addEventListener("resize", responsive);

const customValues = [4, 8, 16, 24, 36];
const customViews = ["10K", "50K", "100K", "500K", "1M"];
const yearlyValues = [72, 108, 144, 216, 324];

pricing.textContent = "$" + customValues[slider.value] + ".00";
pageViews.textContent = customViews[slider.value] + " PAGEVIEWS";

slider.addEventListener("input", () => {
   updateSliderColor();
   pageViews.textContent = customViews[slider.value] + " PAGEVIEWS";
   if (toggleBar.checked) {
      pricing.textContent = "$" + yearlyValues[slider.value] + ".00";
   } else {
      pricing.textContent = "$" + customValues[slider.value] + ".00";
   }
});

toggleBar.addEventListener("change", () => {
   updateSliderColor();
   if (toggleBar.checked) {
      pricing.textContent = "$" + yearlyValues[slider.value] + ".00";
      pricingMonth.textContent = " / year";
   } else {
      pricing.textContent = "$" + customValues[slider.value] + ".00";
      pricingMonth.textContent = " / month";
   }
});

function updateSliderColor() {
   const value = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
   const gradient = `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${value}%, hsl(224, 65%, 95%) ${value}%, hsl(224, 65%, 95%) 100%)`;
   slider.style.background = gradient;
}
