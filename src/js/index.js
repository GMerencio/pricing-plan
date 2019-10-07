import { PRICING_OPTIONS, fillPrices } from './prices';
import 'normalize.css';
import './../scss/main.scss';

window.onload = function() {
  // Fill in prices and add event listeners for changes in pricing option.
  
  fillPrices(PRICING_OPTIONS.MONTHLY);
  
  var checkBox = document.querySelector(".js-pricing-checkbox");
  checkBox.addEventListener("click", function(event) {
    if(checkBox.checked) {
      fillPrices(PRICING_OPTIONS.YEARLY);
    } else {
      fillPrices(PRICING_OPTIONS.MONTHLY);
    }
  });
}