import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
// @ts-ignore
import Icon from 'react-native-vector-icons/dist/Feather';
import { LOCATIONS } from '../constants/Locations';
import useScrollProgression from '../hooks/useScrollProgression';

type OpportunityBubblesTypes = {
  index: number;
  onPressCity: any;
};

function OpportunityBubbles({index, onPressCity}: OpportunityBubblesTypes) {
  const {height} = useWindowDimensions();

  const progress = useScrollProgression(index, height);

  const animatedOpportunityStyles = useAnimatedStyle(() => ({
    opacity: interpolate(progress.value, [20, 50], [0, 1], {
      extrapolateRight: Extrapolation.CLAMP,
    }),
  }));

  return (
    <View style={styles.wrapper}>
      <Animated.View style={animatedOpportunityStyles}>
        <Text style={styles.labelOpportunity}>
          I have had the opportunity to work in:
        </Text>
        <View style={styles.locations}>
          {LOCATIONS.map(location => (
            <Pressable
              key={`LOCATION_${location.name}`}
              style={styles.locationContainer}
              onPress={() => onPressCity(location.coords)}>
              <Icon name={'map-pin'} size={14} color={'black'} />
              <Text style={styles.locationLabel}>{location.name}</Text>
            </Pressable>
          ))}
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    position: 'absolute',
    top: 0,
  },
});

export default OpportunityBubbles;
