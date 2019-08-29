var planets = [];

fetch('https://swapi.co/api/planets/')
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    planets = json.result;
    f_showData(planets);
  });

//filter
function filter() {
  var q = document.getElementById("filter").nodeValue;
  data = planets.filter(function(planet) {
    return (
      planet.name.toLowerCase().includes(q) || planet.rotation_period.include(q)
    );
  });
  f_showData(data);
}

function f_showData(planets) {
  var tr, td;
  var tbody = document.getElementById("tBody");
  tbody.innerHTML = "";
  for (let index = 0; index < planets.length; index++) {
    tr = tbody.insertRow(tbody.rows.length);
    td = tr.insertCell(tr.cells.length);
    td.setAttribute("align", "center");
    td.innerHTML = index + 1;

    tr = tbody.insertRow(tbody.rows.length);
    td = tr.insertCell(tr.cells.length);
    td.setAttribute("align", "center");
    td.innerHTML = planets[index].name;
  }
}
