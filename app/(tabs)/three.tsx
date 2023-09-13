// React Native Counter Example using Hooks!

import React, { useState } from 'react';
import { Button, StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';

const ThreeScreen = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text>You clicked {count} times</Text>
      <Button onPress={() => setCount(count + 1)} title='Click me!' />
    </View>
  );
};

// React Native Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ThreeScreen;
