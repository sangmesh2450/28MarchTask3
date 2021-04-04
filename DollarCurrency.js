var request = new XMLHttpRequest();

request.open("GET", "https://restcountries.eu/rest/v2/all", true);

request.send();

request.onload = function () {
  var data = JSON.parse(request.response);
  data.forEach((element) => {
    if (element.currencies[0].code === "USD") console.log(element);
  });
};
