var request = new XMLHttpRequest();

request.open("GET", "https://restcountries.eu/rest/v2/all", true);

request.send();

request.onload = function () {
  var data = JSON.parse(request.response);
  var array = data.filter((ele)=>{
     return Number.parseInt(ele.population)<200000;
  })
  console.log(...array); 
};