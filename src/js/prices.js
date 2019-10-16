var MONTH_PRICES = ["0.00", "9.99", "14.99"];
var YEARLY_PRICES = ["0.00", "99.99", "154.99"];
export var PRICING_OPTIONS = {MONTHLY: "month", YEARLY: "year"};

/**
 * Fills in the prices according to the argument, which is one of the
 * PRICING_OPTIONS objects.
 */

export var fillPrices = function(opt) {
  var prices = document.querySelectorAll(".js-price");
  
  for(var i = 0; i < prices.length; i++) {
    if(opt === PRICING_OPTIONS.MONTHLY) {
      prices[i].innerHTML = "$ " + MONTH_PRICES[i];
    }
    
    else if(opt === PRICING_OPTIONS.YEARLY) {
      prices[i].innerHTML = "$ " + YEARLY_PRICES[i];
    }
  }
}