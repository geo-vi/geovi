import React, {useEffect, useRef, useState} from 'react';
import mapboxgl from '!mapbox-gl';
import {Dimensions, StyleSheet, Text, View, Pressable} from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import useScrollProgression from '../hooks/useScrollProgression';
// @ts-ignore
import Icon from 'react-native-vector-icons/dist/Feather';

const {height} = Dimensions.get('window');

const LOCATIONS = [
  {
    name: 'Berlin',
    coords: [13.3919394, 52.5147994, 10],
  },
  {
    name: 'Vienna',
    coords: [16.3604664, 48.2076536, 12],
  },
  {
    name: 'Tel Aviv',
    coords: [34.7903609, 32.070949, 12],
  },
  {
    name: 'Haifa',
    coords: [34.9817565, 32.7996897, 12],
  },
  {
    name: 'Sofia',
    coords: [23.3019688, 42.6934547, 12],
  },
  {
    name: 'Kyiv',
    coords: [30.5208672, 50.4386144, 12],
  },
];

type MapTypes = {
  index: number;
};

function Map({index}: MapTypes) {
  const progress = useScrollProgression(index, height);

  const mapContainer = useRef(null);
  const map = useRef<any>(null);

  const animatedOpportunityStyles = useAnimatedStyle(() => ({
    opacity: interpolate(progress.value, [20, 50], [0, 1], {
      extrapolateRight: Extrapolation.CLAMP,
    }),
  }));

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
      <View style={styles.wrapper}>
        <Animated.View style={animatedOpportunityStyles}>
          <Text style={styles.labelOpportunity}>
            I have had the opportunity to work in:
          </Text>
          <View style={styles.locations}>
            {LOCATIONS.map(location => (
              <Pressable
                style={styles.locationContainer}
                onPress={() => onPressCity(location.coords)}>
                <Icon name={'map-pin'} size={14} color={'black'} />
                <Text style={styles.locationLabel}>{location.name}</Text>
              </Pressable>
            ))}
          </View>
        </Animated.View>
      </View>
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
  labelOpportunity: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    marginLeft: 10,
    marginTop: 10,
  },
  locations: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  labelTip: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 30,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  locationLabel: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 10,
  },
  wrapper: {
    position: 'absolute', top: 0
  }
});

export default Map;
