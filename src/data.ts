import Service from './interfaces';

import portainerIcon from './assets/img/portainer.png';
import ldapIcon from './assets/img/ldap.svg';
import unraidIcon from './assets/img/unraid-stacked-dark.svg';
import haIcon from './assets/img/home-assistant.svg';
import uptimeKumaIcon from './assets/img/uptime-kuma.svg';
import netdataIcon from './assets/img/netdata.svg';
import dozzleIcon from './assets/img/dozzle.svg';
import jellyfinIcon from './assets/img/jellyfin.svg';
import jellyseerrIcon from './assets/img/jellyseerr.svg';
import delugeIcon from './assets/img/deluge.svg';
import vscodeIcon from './assets/img/code.svg';
import radarrIcon from './assets/img/radarr.svg';
import sonarrIcon from './assets/img/sonarr.svg';
import bazarrIcon from './assets/img/bazarr.png';
import prowlarrIcon from './assets/img/prowlarr.svg';

const servicesData: Service[] = [
  {
    id: 'portainer',
    name: 'Portainer',
    img: portainerIcon,
    link: 'http://192.168.1.157:9000',
    desc: 'Container manager',
  },
  {
    id: 'lldap',
    name: 'LLDAP',
    img: ldapIcon,
    link: 'http://192.168.1.157:17170',
    desc: 'User management',
  },
  {
    id: 'unraid',
    name: 'Unraid',
    img: unraidIcon,
    link: 'http://192.168.1.157:8081',
    desc: 'Unraid server webUI',
  },
  {
    id: 'homeassistant',
    name: 'Home Assistant',
    img: haIcon,
    link: 'http://homeassistant.local:8123',
    desc: 'Home Automation',
  },
  {
    id: 'uptime',
    name: 'Server Status',
    img: uptimeKumaIcon,
    link: 'https://status.adamnor.com/status',
    desc: 'Status Monitoring powered by Uptime Kuma',
  },
  {
    id: 'netdata',
    name: 'Netdata',
    img: netdataIcon,
    link: 'http://192.168.1.157:19999',
    desc: 'Server monitoring',
  },
  {
    id: 'dozzle',
    name: 'Dozzle',
    img: dozzleIcon,
    link: 'http://192.168.1.157:9999',
    desc: 'Realtime logs viewer',
  },
  {
    id: 'jellyfin',
    name: 'Jellyfin',
    img: jellyfinIcon,
    link: 'https://jellyfin.adamnor.com',
    desc: 'Local media server',
  },
  {
    id: 'jellyseerr',
    name: 'Jellyseerr',
    img: jellyseerrIcon,
    link: 'https://request.adamnor.com',
    desc: 'Media request service',
  },
  {
    id: 'deluge',
    name: 'Deluge',
    img: delugeIcon,
    link: 'http://192.168.1.157:8112',
    desc: 'Download client',
  },
  {
    id: 'code',
    name: 'Code Server',
    img: vscodeIcon,
    link: 'http://192.168.1.157:8443',
    desc: 'Remote code server',
  },
  {
    id: 'radarr',
    name: 'Radarr',
    img: radarrIcon,
    link: 'http://192.168.1.157:7878',
    desc: 'Movie management',
  },
  {
    id: 'sonarr',
    name: 'Sonarr',
    img: sonarrIcon,
    link: 'http://192.168.1.157:8989',
    desc: 'TV-shows management',
  },
  {
    id: 'bazarr',
    name: 'Bazarr',
    img: bazarrIcon,
    link: 'http://192.168.1.157:6767',
    desc: 'Subtitles manager',
  },
  {
    id: 'prowlarr',
    name: 'Prowlarr',
    img: prowlarrIcon,
    link: 'http://192.168.1.157:9696',
    desc: 'Indexer management',
  },
];

export default servicesData;
