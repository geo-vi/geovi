import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

type TechnologiesTypes = {
  stack: string[];
};

function Technologies({stack}: TechnologiesTypes) {
  return (
    <View style={styles.technologies}>
      {stack.map((iconName, index) => (
        <Icon
          key={`STACK_ICON_${index}_${iconName}`}
          name={iconName}
          size={40}
          color={'white'}
          style={styles.icon}
          brands
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  technologies: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  icon: {
    margin: 20,
  },
});

export default Technologies;
