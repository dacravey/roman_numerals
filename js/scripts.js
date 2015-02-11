var romanNums = function(arabicNumber){

  var totalNumber = arabicNumber;

  var values = [1000, 500];
  var symbols = ["M", "D"];
  var results = "";


  for(var i = 0; i < values.length; i += 1){
      while(Math.floor(totalNumber/values[i]) > 0){
        totalNumber = totalNumber - values[i];
        results = results.concat(symbols[i]);
      }
  }



  return results;

};
