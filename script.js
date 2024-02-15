mapboxgl.accessToken = 'pk.eyJ1Ijoicmx3YW5nZ2ciLCJhIjoiY2xzbXJrdDh4MHFhbTJpbGZtN2U2dzR0ciJ9.U_Ub-r562iDi82ImPZACXQ';

const map = new mapboxgl.Map({
    container: 'my-map', // map container ID
    style: 'mapbox://styles/rlwanggg/clsmrqpqs004k01qwcqyb7lmq', // style URL
    center: [-79.39, 43.66], // starting position in longitude, latitude
    zoom: 13, 
});

map.on('load', () => {

    //Data source containing GeoJSON data
    map.addSource('sushi-data', {
    type: 'geojson',
    data: 'https://raw.githubusercontent.com/rwangg/GGR472-Lab-2/main/top3sushi.geojson'
    });

map.addLayer({

    // Style of points
    'id': 'sushi-pnt',
    'type': 'circle',
    'source': 'sushi-data',
    'paint': {
    'circle-radius': 6,
    'circle-color': '#Ff4f00'
    }
    })

map.addSource('sushi-tile', { // Source ID
    'type': 'vector',
    'url': 'rlwanggg.3pbxkyks' // Tileset ID
    });

map.addLayer({
    'id': 'tileset', // Layer ID
    'type': 'fill', // Not point data
    'source': 'sushi-tile', // Source ID from addSource method
    'paint': {
    'fill-color': '#30cbef', // Style
    'fill-opacity': 0.4,
    'fill-outline-color': '#30cbef'
    },
    'source-layer': 'top3sushi-1ptjz8' // Tileset NAME (diff to ID)
    });
});