import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ViroARSceneNavigator  } from 'react-viro';
import Game from './Game';


const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const Home = () => (
  <View style={styles.root}>
    <ViroARSceneNavigator
      apiKey="4B3F1109-8242-4459-AC18-5357DE59F34A"
      initialScene={{ scene: Game }}
    />
  </View>
);


export default Home;
