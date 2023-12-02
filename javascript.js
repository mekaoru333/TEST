async function lordJson() {
    const response = await fetch("https://raw.githubusercontent.com/mekaoru333/test3232323-github.io/main/MAPtest.json");
    const mapdata = await response.json();
for (var i = 0; i < 19; i++) { 
var list = document.createElement('p'); 
list.textContent = mapdata.results[i].name
document.getElementById('list').appendChild(list);
}
}