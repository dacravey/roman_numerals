var romanNums = function(arabicNumber){

  var totalNumber = arabicNumber;

  var values = [1000, 500, 100, 50, 10, 5, 1];
  var symbols = ["M", "D", "C", "L", "X", "V", "I"];
  var results = "";
  var totalNumberString = totalNumber.toString();


  for(var i = 0; i < values.length; i += 1){
     if(totalNumberString[0] === '9'){
debugger;
       results = results.concat(symbols[i+1]).concat(symbols[i-1]);
       totalNumber = totalNumber - (9 * values[i+1]);
       totalNumberString = totalNumber.toString();
     }else{
        while(Math.floor(totalNumber/values[i]) > 0){
            totalNumber = totalNumber - values[i];
            totalNumberString = totalNumber.toString();
            results = results.concat(symbols[i]);
          }
      }
  }

  return results;

};
