import React, {useEffect, useRef, useState} from 'react';
import mapboxgl from '!mapbox-gl';
import {StyleSheet, View} from 'react-native';

function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) {
      return;
    } // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/geovi/cl17mzd79004g15ljugzhs4fq',
      center: [lng, lat],
      zoom: zoom,
      attributionControl: false,
      logoPosition: 'bottom-right',
    });
  });

  return <View ref={mapContainer} style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    width: '50vw',
    height: '100vh',
  },
});

export default Map;
