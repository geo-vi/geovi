import React, {useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import {MapTypes} from '../types/MapTypes';
import OpportunityBubbles from './OpportunityBubbles';
import MapboxGL from '@react-native-mapbox-gl/maps';
import {LOCATIONS} from '../constants/Locations';

function Map({index}: MapTypes) {
  const camera = useRef<any>();

  function onPressCity(coords: number[]) {
    if (camera.current) {
      camera.current.flyTo({
        center: [coords[0], coords[1]],
        zoom: coords[2],
        essential: true, // this animation is considered essential with respect to prefers-reduced-motion
      });
    }
  }

  return (
    <View style={styles.container}>
      <MapboxGL.MapView
        // styleURL={'mapbox://styles/geovi/cl17mzd79004g15ljugzhs4fq'}
        style={styles.map}
        // attributionEnabled={true}
        // logoPosition={{
        //   bottom: 10,
        //   right: 10,
        // }}
      >
        {/*<MapboxGL.Camera*/}
        {/*  ref={camera}*/}
        {/*  centerCoordinate={[LOCATIONS[0].coords[0], LOCATIONS[0].coords[1]]}*/}
        {/*  zoomLevel={LOCATIONS[0].coords[2]}*/}
        {/*/>*/}
      </MapboxGL.MapView>
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
