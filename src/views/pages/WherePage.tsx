import React from 'react';
import Page from '../../components/styled/Page';
import Map from '../../components/Map';
import PageTypes from '../../types/PageTypes';
import {StyleSheet, Text, View} from 'react-native';
import {useResponsiveViewConditional} from '../../hooks/useResponsiveViewConditional';
// @ts-ignore
import Icon from 'react-native-vector-icons/dist/Feather';

function WherePage({index}: PageTypes) {
  const responsiveMap = useResponsiveViewConditional([<Map />, null]);

  return (
    <Page style={styles.pageContainer}>
      <View style={styles.contentContainer}>
        <Text style={styles.labelOpportunity}>
          I have had the opportunity to work in:
        </Text>
        <View style={styles.bottomContainer}>
          <View style={styles.locations}>
            <View style={styles.locationContainer}>
              <Icon name={'map-pin'} size={18} color={'white'} />
              <Text style={styles.locationLabel}>Berlin</Text>
            </View>
            <View style={styles.locationContainer}>
              <Icon name={'map-pin'} size={18} color={'white'} />
              <Text style={styles.locationLabel}>Vienna</Text>
            </View>
            <View style={styles.locationContainer}>
              <Icon name={'map-pin'} size={18} color={'white'} />
              <Text style={styles.locationLabel}>Tel Aviv</Text>
            </View>
            <View style={styles.locationContainer}>
              <Icon name={'map-pin'} size={18} color={'white'} />
              <Text style={styles.locationLabel}>Sofia</Text>
            </View>
            <View style={styles.locationContainer}>
              <Icon name={'map-pin'} size={18} color={'white'} />
              <Text style={styles.locationLabel}>Kyiv</Text>
            </View>
          </View>
          <Text style={styles.labelMyself}>
            I like to internationalise and am open-minded for work opportunities
            worldwide
          </Text>
        </View>
      </View>
      {responsiveMap}
    </Page>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flexDirection: 'row',
  },
  contentContainer: {
    flex: 1,
    height: '100%',
  },
  labelOpportunity: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    marginLeft: 30,
  },
  bottomContainer: {
    flexDirection: 'row',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  locationLabel: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    marginLeft: 10,
  },
  labelMyself: {
    fontWeight: 'bold',
    fontSize: 60,
    color: 'white',
    marginLeft: 80,
  },
  locations: {
    paddingHorizontal: 30,
  },
});

export default WherePage;
