import React from 'react';

import {
    ViroARScene,
    ViroARTrackingTargets,
    ViroARImageMarker,
    ViroBox
} from 'react-viro';

import Grid from './src/components/grids/Grid';
import Players_on_grid from './src/components/grids/Players_on_grid';




const Game = () => {
    return(
        <ViroARScene>
            <ViroARImageMarker target={"markerAR"}> 
            <Grid />
            <Players_on_grid/>
            </ViroARImageMarker> 
        </ViroARScene>
    );
}

ViroARTrackingTargets.createTargets({
    "markerAR": {
      source: require('./js/res/hehe.jpeg'),
      orientation: "Up",
      physicalWidth: 0.2,
    },
  });

export default Game;