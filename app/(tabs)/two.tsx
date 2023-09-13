// React Native Props Tutorial

import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
});

type GreetingProps = {
  name: string;
};

const Greeting = (props: GreetingProps) => {
  return (
    <View style={styles.center}>
      <Text>Hello {props.name}!</Text>
    </View>
  );
};

const LotsOfGreetings = () => {
  return (
    <View style={[styles.center, { top: 50 }]}>
      <Greeting name='Rexxar' />
      <Greeting name='Jaina' />
      <Greeting name='Valeera' />
    </View>
  );
};

export default LotsOfGreetings;
