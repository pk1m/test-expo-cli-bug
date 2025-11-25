import React from 'react';
import { Text, View } from 'react-native';
import coolPackage from 'cool-package';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hello World!</Text>
      <Text>{coolPackage}</Text>
    </View>
  );
}