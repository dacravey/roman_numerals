var romanNums = function(arabicNumber){

  var totalNumber = arabicNumber;

  var values = [1000, 500, 100, 50, 10, 5, 1];
  var symbols = ["M", "D", "C", "L", "X", "V", "I"];
  var results = "";
  var totalNumberString = totalNumber.toString();


  for(var i = 0; i < values.length; i += 1){
    while(Math.floor(totalNumber/values[i]) > 0){
          totalNumber = totalNumber - values[i];
          results = results.concat(symbols[i]);
        }

  }

  var bad = ["DCCCC","CCCC","LXXXX", "XXXX", "VIIII", "IIII"];
  var good = ["CM", "CD", "XC", "XL", "IX","IV"];

  for(var i= 0; i < bad.length; i++){
    results = results.replace(bad[i],good[i]);
  }

  return results;

};
