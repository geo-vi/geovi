import React from 'react';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import Page from '../../components/styled/Page';
import {Dimensions, StyleSheet, Text} from 'react-native';
import PageTypes from '../../types/PageTypes';
import useScrollProgression from '../../hooks/useScrollProgression';
import Icon from 'react-native-vector-icons/dist/Feather';
import FABrandIcon from 'react-native-vector-icons/dist/FontAwesome5';

const {width, height} = Dimensions.get('window');

function WhoPage({index}: PageTypes) {
  const progress = useScrollProgression(index, height);

  const bufferSpace = width / 2;

  const titleStyle = useAnimatedStyle(
    () => ({
      fontSize: 64,
      transform: [
        {
          scale: interpolate(progress.value, [0, 100], [0.3, 1]),
        },
      ],
    }),
    [progress],
  );

  const slidingContainerStyle = useAnimatedStyle(() => ({
    maxWidth: 500,
    width: '100%',
    marginHorizontal: 30,
    height: 350,
    alignItems: 'center',
    transform: [
      {
        translateX: interpolate(
          progress.value,
          [0, 50, 75],
          [bufferSpace + 500, 150, 0],
          {
            extrapolateRight: Extrapolation.CLAMP,
          },
        ),
      },
    ],
    opacity: interpolate(progress.value, [0, 25, 50, 75], [0, 0.25, 0.75, 1], {
      extrapolateRight: Extrapolation.CLAMP,
    }),
  }));

  const linkContainerStyle = useAnimatedStyle(() => ({
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    transform: [
      {
        translateY: interpolate(progress.value, [0, 25, 50], [500, 150, 0], {
          extrapolateRight: Extrapolation.CLAMP,
        }),
      },
    ],
  }));

  return (
    <Page style={styles.page}>
      <Animated.Text style={[styles.title, titleStyle]}>
        Who am I?
      </Animated.Text>
      <Animated.View style={slidingContainerStyle}>
        <Text style={styles.paragraph}>
          Brief introduction of me, I am George Ivanov, I work professionally in
          the IT industry since 2016. I have explored few popular stacks
          throughout my career, worked at enterprises and startups both as
          Developer and Leading / Management positions. I consider to be open
          minded and love to bring innovation into projects. I feel especially
          passionate about what I am doing when I have the opportunity make a
          memorable change for the better.
        </Text>
        <Text style={styles.paragraph}>
          As freebie I always enjoyed architecture & design, I often find myself
          practicing it over weekends, often the case is sketching up a project
          in Adobe Xd and Illustrator. {'\n'}
          Happily at some projects that freebie came to use and at IKARUS I also
          did the UI/UX as part of my full-time job.
        </Text>
      </Animated.View>
      <Animated.View style={linkContainerStyle}>
        <Icon style={styles.link} name={'link'} size={14} color={'white'} />
        <Text style={styles.linkedin}>
          <Icon
            name={'linkedin'}
            size={20}
            color="white"
            style={styles.linkIcon}
          />
          /g-ivanov
        </Text>
      </Animated.View>
      <Animated.View style={linkContainerStyle}>
        <Icon style={styles.link} name={'link'} size={14} color={'white'} />
        <Text style={styles.linkedin}>
          <FABrandIcon
            name={'medium'}
            size={20}
            color="white"
            brands
            style={styles.linkIcon}
          />
          /@geovi
        </Text>
      </Animated.View>
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
  },
  paragraph: {
    fontFamily: 'SF Pro Display',
    color: 'white',
    margin: 5,
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

export default WhoPage;
