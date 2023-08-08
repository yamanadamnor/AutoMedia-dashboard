import { IService } from './interfaces';

import portainerIcon from '../public/img/portainer.png';
import ldapIcon from '../public/img/ldap.svg';
import unraidIcon from '../public/img/unraid-stacked-dark.svg';
import haIcon from '../public/img/home-assistant.svg';
import uptimeKumaIcon from '../public/img/uptime-kuma.svg';
import netdataIcon from '../public/img/netdata.svg';
import dozzleIcon from '../public/img/dozzle.svg';
import jellyfinIcon from '../public/img/jellyfin.svg';
import jellyseerrIcon from '../public/img/jellyseerr.svg';
import delugeIcon from '../public/img/deluge.svg';
import vscodeIcon from '../public/img/code.svg';
import radarrIcon from '../public/img/radarr.svg';
import sonarrIcon from '../public/img/sonarr.svg';
import bazarrIcon from '../public/img/bazarr.png';
import prowlarrIcon from '../public/img/prowlarr.svg';

const servicesData: IService[] = [
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
