// Import stylesheets
import './style.css';
import { Map, TileLayer, LayerGroup } from 'leaflet';
// Write Javascript code!
const map = new Map('map');

const amapLayer = new TileLayer(
  'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
  {
    id: 'mapbox/streets-v11',
  }
);

const baiduLayer = new TileLayer(
  'http://t0.tianditu.gov.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={x}&TILECOL={y}&tk=1c88ae8953b926918863dc4ec1d68d55',
  {}
);

//放到一个图层组中
const combineLayer = new LayerGroup([baiduLayer, amapLayer]);

amapLayer.addTo(map);

map.setView([30.29726893943521, 120.06622904484556], 17);

const items = document.getElementsByName('base');

items.forEach((item) => {
  item.onclick = (evt) => {
    switch (evt.target.value) {
      case 'amap':
        baiduLayer.removeFrom(map);
        amapLayer.addTo(map);
        break;
      case 'baidu':
        amapLayer.removeFrom(map);
        baiduLayer.addTo(map);
        break;
    }
  };
});
