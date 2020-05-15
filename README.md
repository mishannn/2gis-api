# Библиотека для работы с API 2ГИС

Написана с использованием TypeScript. Поддерживает автодополнение параметров запроса и свойств объектов. На данный момент позволяет только получать объекты и маркеры.

Поддерживается работа в браузере и в NodeJS. Для работы требуется `axios`.

## Установка

### Yarn

```
yarn add axios @mishannn/2gis-api
```

### NPM

```
npm i -S axios @mishannn/2gis-api
```

## Пример использования

### NodeJS

```
const DGApi = require('@mishannn/2gis-api');

(async () => {
  const dgApi = new DGApi.Client({
    apiKey: 'rurbbn3446', // ваш ключ API
    ridKey: 'baf4c54e9dae', // ключ для отправки запросов
    appVersion: '2020-05-13-08', // версия клиента
  });

  const itemsResult = await dgApi.getItems({
    region_id: 32, // ID региона, в данном случае Москва
    rubric_id: [207, 350], // массив ID рубрик, в данном случае аптеки и супермаркеты
    fields: Object.values(DGApi.ItemField), // получаемые поля, в данном случае все
    page: 1,
    page_size: 10,
  });

  itemsResult.items.forEach(item => {
    if (!('address' in item)) return;

    const address = item.address;
    if (!('components' in address)) return;

    const addressComponents = address.components;

    const streetNumbers = addressComponents
      .filter(address => address.type === 'street_number')
      .map(address => `${address.street} ${address.number}`);

    // выводим адреса первых 10 найденных объектов
    console.log(streetNumbers.join(' | '));
  });
})();
```

### Браузер

[Посмотреть пример](https://mishannn.github.io/2gis-api/)

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>2gis-api example</title>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" />
    <style>
      html,
      body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
      }

      #map {
        width: 100%;
        height: 100%;
      }
    </style>
  </head>
  <body>
    <div id="map"></div>

    <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="https://unpkg.com/@mishannn/2gis-api@latest/dist/2gis-api.js"></script>
    <script>
      const map = L.map('map').setView([55.753215, 37.622504], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      const dgApi = new DGApi.Client({
        apiKey: 'rurbbn3446',
        ridKey: 'baf4c54e9dae',
        appVersion: '2020-05-13-08',
      });

      let mapMarkers = [];

      const updateMarkers = async () => {
        mapMarkers.forEach(mapMarker => {
          mapMarker.removeFrom(map);
        });
        mapMarkers = [];

        const mapSize = map.getSize();
        const mapBounds = map.getBounds();

        const northWestCorner = mapBounds.getNorthWest();
        const southEastCorner = mapBounds.getSouthEast();

        const markersResult = await dgApi.getMarkersClustered({
          rubric_id: 207,
          map_width: mapSize.x,
          map_height: mapSize.y,
          viewpoint1: `${northWestCorner.lng},${northWestCorner.lat}`,
          viewpoint2: `${southEastCorner.lng},${southEastCorner.lat}`,
          fields: [DGApi.ItemField.NameEx],
        });

        markersResult.items.forEach(item => {
          const marker = L.marker([item.lat, item.lon]);
          marker.addTo(map);
          marker.bindPopup(item.name_ex.primary);
          mapMarkers.push(marker);
        });
      };

      map.on('moveend', updateMarkers);

      updateMarkers();
    </script>
  </body>
</html>
```
