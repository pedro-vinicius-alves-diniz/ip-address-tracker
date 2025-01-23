const inputIp = document.getElementById("inputIp");
const button = document.getElementById("btnSearch");
const ip = document.getElementById("ip");
const loc = document.getElementById("location");
const timezone = document.getElementById("timezone");
const isp = document.getElementById("isp");

button.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("clicked");

  require();
});

async function require() {
  const response = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKeFy=at_wQDAcSbLE3632ELGZTmFDiF7nJC7D&ipAddress=192.212.174.101`
  );

  const data = await response.json();

  console.log(data.ip);
  ip.innerHTML = data.ip;

  console.log(data.location);
  loc.innerHTML = data.location.city;

  console.log(data.location.timezone);
  timezone.innerHTML = `UTC ${data.location.timezone}`;

  console.log(data.isp);
  isp.innerHTML = data.isp;
}
