/*eslint-disable*/

const locations = JSON.parse(document.getElementById('map').dataset.locations);

export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiaGFycnktODMxIiwiYSI6ImNrcWMxcW80aDFmaDgycG12Z3N4bTRhOXQifQ.RrhQ6dDGDYjix3BI_u9h1Q';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/harry-831/ckwj5kytt0coj14o5zfibjxyw',
  });
};
