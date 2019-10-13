import React, {Component} from 'react';
import {View} from 'react-native';

import {
    ViroBox,
    ViroText,
    ViroSphere,
    ViroMaterials
} from 'react-viro';


class Players_on_grid extends Component{  
    state = {
        gridNum: 7,
        gridSize: 0.1,
        gridPos: [],
        items:[{"name":"test","pos":[0,0,0]}],
        session_id: ""
    }

    getSessionID = () => {
        fetch("https://us-central1-ar-murder.cloudfunctions.net/app/get-current-session").then(res => res.json()).then(
            (result) => {
                var session_id = result.currentGame;
                this.setState({
                    session_id
                })
            }
        )
    }

    updateFrontEnd =()=> {
        session_id = "811076541204654";
        fetch("https://us-central1-ar-murder.cloudfunctions.net/app/get-coords/"+session_id)
      .then(res => res.json())
      .then(
        (result) => {
            var players = Object.keys(result);
            var playersPos = [];

            for (var i=0; i<players.length; i++)
            {
                var playerName = players[i];
                var pos = result[playerName];
                if (pos!="dead"){
                    // pos = JSON.parse(pos);
                    var playerData = {"name":playerName,"pos":pos};
                    playersPos.push(playerData);
                }
                
            }
          this.setState({
            isLoaded: true,
            items: playersPos
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    }

    recursive=()=>{
        this.updateFrontEnd();
        setTimeout(this.recursive,3000);
    }

    componentDidMount() {
        this.getSessionID();
        this.recursive();
        // gridPos = [ { center: [ -0.1, 0, -0.1 ], opacity: 1 },
        // { center: [ 0, 0, -0.1 ], opacity: 0.2 },
        // { center: [ 0.1, 0, -0.1 ], opacity: 1 },
        // { center: [ -0.1, 0, 0 ], opacity: 0.2 },
        // { center: [ 0, 0, 0 ], opacity: 1 },
        // { center: [ 0.1, 0, 0 ], opacity: 0.2 },
        // { center: [ -0.1, 0, 0.1 ], opacity: 1 },
        // { center: [ 0, 0, 0.1 ], opacity: 0.2 },
        // { center: [ 0.1, 0, 0.1 ], opacity: 1 } ]; 
        
    }
    render(){
        return(
            // this.state.gridPos.map(i=> {
            //     return(
                    // <ViroBox position={response["Shiv"]} scale={[.05,.1, .05]}/>
                    // <ViroText text={response} position={[0,0,0] } />
            //     )
                
            // })
                this.state.items.map(i=>{
                    return (
                <ViroSphere position={[i["pos"][0],.03,i["pos"][2]]} radius={0.03} scale={[1,0.01,1]}  opacity={1} materials={["player"]}/>
                    );
                })
                // <View>
                //     <ViroAmbientLight color="#FF0000" />
                //     <ViroSphere position={[0,0,0]} radius={0.05} scale={[1,0.01,1]} />
                // </View>
                
        );
    }
}

ViroMaterials.createMaterials({
    player: {
        shininess: 2.0,
        diffuseIntensity: 1.0,
        diffuseColor: "#ff0000"
    }
})

export default Players_on_grid;