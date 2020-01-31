mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kcmVjYXJyc2QyMDA4IiwiYSI6ImNrNjFtZ2ppMjA1NTQzanJ3cjNlamFpMzQifQ.krrCSAikcwGoAHrO0dxXZw';
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11', 
zoom: 9,
center: [-71-157895, 42.707741]
});

function loadMap() {
    map.on('load', function() {
      map.addLayer({
       id: 'points',
       type: 'symbol',
       source: {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [-71-157895, 42.707741]
              },
              properties: {
                storeId: '0001',
                icon: 'shop'
              }
            }
          ]
        }
    },
    layouts: {
      'icon-image': '{icon}-15',
      'icon-size': 1.5,
      'text-field': '{storeId}',
      'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
      'text-offset': [0, 0.9],
      'text-anchor': 'top'
    }
   });
  }); 
}