import React from 'react';
import Page from '../../components/styled/Page';
import PageTypes from '../../types/PageTypes';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import useScrollProgression from '../../hooks/useScrollProgression';
import {Dimensions, StyleSheet, View, Text} from 'react-native';
import Technologies from '../../components/Technologies';
import Icon from "react-native-vector-icons/dist/Feather";

const {height} = Dimensions.get('window');

function WhatPage({index}: PageTypes) {
  const progress = useScrollProgression(index, height);

  const titleStyle = useAnimatedStyle(
    () => ({
      opacity: interpolate(progress.value, [0, 100], [0, 1], {
        extrapolateRight: Extrapolation.CLAMP,
      }),
    }),
    [progress],
  );

  const linkContainerStyle = useAnimatedStyle(() => ({
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    opacity: interpolate(progress.value, [0, 25, 50, 75], [0, 0.25, 0.75, 1], {
      extrapolateRight: Extrapolation.CLAMP,
    }),
  }));

  return (
    <Page style={styles.page}>
      <Animated.Text style={[styles.title, titleStyle]}>
        What projects and technology stacks have I worked with?
      </Animated.Text>
      <View style={styles.projectContainer}>
        <Animated.View style={linkContainerStyle}>
          <Icon style={styles.link} name={'link'} size={14} color={'white'} />
          <Text style={styles.linkedin}>
            <Icon name={'github'} size={20} color="white" style={styles.linkIcon} />
            /geo-vi
          </Text>
        </Animated.View>
        <Technologies stack={['react', 'java', 'python', 'docker', 'gitlab', 'aws', 'figma']} />
        <Text style={styles.paragraph}>
          At Snooper UG the tech stack that we worked with was Spring Boot for
          Backend, React Native for Mobile Application, React JS for internal
          portal, Frontend ELK Stack AWS for deployment
        </Text>
      </View>
      <View style={styles.projectContainer}>
        <Text style={styles.paragraph}>
          At IKARUS the tech stack that we worked with was React for frontend,
          Flask for backend, Gitlab CI/CD
        </Text>
      </View>
      <View style={styles.projectContainer}>
        <Text style={styles.paragraph}>
          Throughout other projects I have had the chance to use many other
          technologies of which some are:{'\n'}
          .NET, iOS Development with Swift & Obj C, Java for mobile development
          and more...
        </Text>
      </View>
      <View style={styles.projectContainer}>
        <Text style={styles.paragraph}>
          p.s this website was coded in React Native {'\n'}
          meaning that this website co-exists by the form of downloadable
          application {'\n'}
          and you are welcome to get it!
        </Text>
        <Technologies stack={['app-store-ios', 'google-play']} />
      </View>
    </Page>
  );
}

const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
  },
  title: {
    fontFamily: 'SF Pro Display',
    fontWeight: '700',
    color: 'white',
    fontSize: 60,
    marginHorizontal: 30,
  },
  paragraph: {
    fontFamily: 'SF Pro Display',
    color: 'white',
    margin: 5,
  },
  projectContainer: {
    alignItems: 'center',
    marginVertical: 20,
    maxWidth: 500,
    width: '100%',
  },
  linkedin: {
    fontFamily: 'SF Pro Display',
    color: 'white',
    fontWeight: '500',
    fontSize: 20,
  },
  link: {
    margin: 5,
  },
  linkIcon: {
    marginRight: 5,
  },
});

export default WhatPage;