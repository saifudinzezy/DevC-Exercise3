var planets = [];

fetch("https://swapi.co/api/planets/", {
  method: "GET"
})
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    planets = json.results;
    f_showData(planets);
    console.log(planets);
  });

//filter
function filter() {
  var q = document.getElementById("filter").value;
  data = planets.filter(function(planet) {
    return (
      planet.name.toLowerCase().includes(q) ||
      planet.rotation_period.toLowerCase().includes(q) ||
      // || planet.orbital_period.toLowerCase().includes(q)
      planet.diameter.toLowerCase().includes(q) ||
      planet.climate.toLowerCase().includes(q) ||
      planet.gravity.toLowerCase().includes(q) ||
      planet.terrain.toLowerCase().includes(q) ||
      planet.surface_water.toLowerCase().includes(q) ||
      planet.population.toLowerCase().includes(q)
    );
  });
  console.log(q);
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

    //tr = tbody.insertRow(tbody.rows.length);
    //get name
    td = tr.insertCell(tr.cells.length);
    td.setAttribute("align", "center");
    td.innerHTML = planets[index].name;

    //get rotation period
    td = tr.insertCell(tr.cells.length);
    td.setAttribute("align", "center");
    td.innerHTML = planets[index].rotation_period;

    td = tr.insertCell(tr.cells.length);
    td.setAttribute("align", "center");
    td.innerHTML = planets[index].diameter;

    td = tr.insertCell(tr.cells.length);
    td.setAttribute("align", "center");
    td.innerHTML = planets[index].climate;

    td = tr.insertCell(tr.cells.length);
    td.setAttribute("align", "center");
    td.innerHTML = planets[index].gravity;

    td = tr.insertCell(tr.cells.length);
    td.setAttribute("align", "center");
    td.innerHTML = planets[index].terrain;

    td = tr.insertCell(tr.cells.length);
    td.setAttribute("align", "center");
    td.innerHTML = planets[index].surface_water;

    td = tr.insertCell(tr.cells.length);
    td.setAttribute("align", "center");
    td.innerHTML = planets[index].population;
  }
}
