import React, {useEffect, useRef} from 'react';
import mapboxgl from '!mapbox-gl';
import {StyleSheet, View} from 'react-native';
import OpportunityBubbles from './OpportunityBubbles';
import {LOCATIONS} from '../constants/Locations';
import {MapTypes} from '../types/MapTypes';

function Map({index}: MapTypes) {
  const mapContainer = useRef(null);
  const map = useRef<any>(null);

  useEffect(() => {
    if (map.current) {
      return;
    } // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/geovi/cl17mzd79004g15ljugzhs4fq',
      center: [LOCATIONS[0].coords[0], LOCATIONS[0].coords[1]],
      zoom: LOCATIONS[0].coords[2],
      attributionControl: false,
      logoPosition: 'bottom-right',
    });
  });

  function onPressCity(coords: number[]) {
    if (map.current) {
      map.current.flyTo({
        center: [coords[0], coords[1]],
        zoom: coords[2],
        essential: true, // this animation is considered essential with respect to prefers-reduced-motion
      });
    }
  }

  return (
    <View style={styles.container}>
      <View ref={mapContainer} style={styles.map} />
      <OpportunityBubbles index={index} onPressCity={onPressCity} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    height: '100%',
  },
  map: {
    flex: 1,
  },
});

export default Map;
