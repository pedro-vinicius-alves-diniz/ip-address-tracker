const inputIp = document.getElementById("inputIp");
const button = document.getElementById("btnSearch");
const ip = document.getElementById("ip");
const loc = document.getElementById("location");
const timezone = document.getElementById("timezone");
const isp = document.getElementById("isp");
const main = document.getElementById("main");
let map

button.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("clicked");

  require();
});

async function require() {
  const response = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=at_wQDAcSbLE3632ELGZTmFDiF7nJC7D&ipAddress=${inputIp.value}&domain=${inputIp.value}`
  );

  try {
    const data = await response.json();
    const IP = data.ip 
    const country = data.location.country 
    const city = data.location.city
    let postalCode
    const utc = data.location.timezone
    const ISP = data.isp

    if(data.location.postalCode){
      postalCode = data.location.postalCode 
    }else{
      postalCode = ""
    }

    ip.innerHTML = IP;
    loc.innerHTML = `${country}, ${city} ${postalCode}`;
    timezone.innerHTML = `UTC ${utc}`;
    isp.innerHTML = ISP;

    addMap(data.location.lat, data.location.lng);
  } catch {
    console.log(Error);
  }
}

function addMap(lat, lng) {
  if(map){
    map.remove()
  }

  map = L.map("map").setView([lat, lng], 13);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
  var marker = L.marker([lat, lng]).addTo(map);
}
