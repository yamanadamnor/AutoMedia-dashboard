const servicesEl = document.querySelector(".services");
const services = [
  {
    id: "portainer",
    name: "Portainer",
    img: "../assets/img/portainer.png",
    link: "http://192.168.1.157:9000",
    desc: "Container manager",
  },
  {
    id: "unraid",
    name: "Unraid",
    img: "../assets/img/unraid-stacked-dark.svg",
    link: "http://192.168.1.157:8081",
    desc: "Unraid server webUI",
  },
  {
    id: "homeassistant",
    name: "Home Assistant",
    img: "../assets/img/home-assistant.svg",
    link: "http://homeassistant.local:8123",
    desc: "Home Automation",
  },
  {
    id: "uptime",
    name: "Server Status",
    img: "../assets/img/uptime-kuma.svg",
    link: "https://status.adamnor.com/status",
    desc: "Status Monitoring powered by Uptime Kuma",
  },
  {
    id: "netdata",
    name: "Netdata",
    img: "../assets/img/netdata.svg",
    link: "http://192.168.1.157:19999",
    desc: "Server monitoring",
  },
  {
    id: "jellyfin",
    name: "Jellyfin",
    img: "../assets/img/jellyfin.svg",
    link: "https://jellyfin.adamnor.com",
    desc: "Local media server",
  },
  {
    id: "deluge",
    name: "Deluge",
    img: "../assets/img/deluge.svg",
    link: "http://192.168.1.157:8112",
    desc: "Download client",
  },
  {
    id: "radarr",
    name: "Radarr",
    img: "../assets/img/radarr.svg",
    link: "http://192.168.1.157:7878",
    desc: "Movie management",
  },
  {
    id: "sonarr",
    name: "Sonarr",
    img: "../assets/img/sonarr.svg",
    link: "http://192.168.1.157:8989",
    desc: "TV-shows management",
  },
  {
    id: "readarr",
    name: "Readarr",
    img: "../assets/img/readarr.svg",
    link: "http://192.168.1.157:8787",
    desc: "Books management",
  },
  {
    id: "bazarr",
    name: "Bazarr",
    img: "../assets/img/bazarr.png",
    link: "http://192.168.1.157:6767",
    desc: "Subtitles manager",
  },
  {
    id: "prowlarr",
    name: "Prowlarr",
    img: "../assets/img/prowlarr.svg",
    link: "http://192.168.1.157:9696",
    desc: "Indexer management",
  },
];

services.forEach((service) => {
  servicesEl.innerHTML += `
    <a href="${service.link}" class="noselect">
      <div class="service" id="${service.id}">
        <div class="child top-container">
          <div class="child img-container">
            <img src="${service.img}" alt="" />
          </div>
          <h2>${service.name}</h2>
        </div>
        <p class="service-desc">${service.desc}</p>
      </div>
    </a>
        `;
});
