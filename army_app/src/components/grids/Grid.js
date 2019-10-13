import React, {Component} from 'react';
import {View} from 'react-native';

import {
    ViroBox,
    ViroText
} from 'react-viro';

var fetch = require("node-fetch");

class Grid extends Component{  
    state = {
        gridNum: 5,
        gridSize: 0.1,
        gridPos: []
    }

    componentDidMount() {
        n = this.state.gridNum;
        unit = this.state.gridSize;
        leftMostPoint = [-(n - 1) / 2 - 1, 0, -(n - 1) / 2];
        var gridJson = [];
        json = { center: leftMostPoint, opacity: 1 };
        for (var i = 0; i < n; i++) {
            for (var j = 0; j < n; j++) {
                newPoint = [(leftMostPoint[0] + 1) * unit, 0, leftMostPoint[2] * unit];
                if ((i + j) % 2 == 0) {
                    var opacity = 1;
                } else {
                    var opacity = 0.2;
                }
                json = { center: newPoint, opacity: opacity };
                gridJson.push(json);
                leftMostPoint = [leftMostPoint[0] + 1, 0, leftMostPoint[2]];
            }
            leftMostPoint = [leftMostPoint[0] - n, 0, leftMostPoint[2] + 1];
        }
        // gridPos = [ { center: [ -0.1, 0, -0.1 ], opacity: 1 },
        // { center: [ 0, 0, -0.1 ], opacity: 0.2 },
        // { center: [ 0.1, 0, -0.1 ], opacity: 1 },
        // { center: [ -0.1, 0, 0 ], opacity: 0.2 },
        // { center: [ 0, 0, 0 ], opacity: 1 },
        // { center: [ 0.1, 0, 0 ], opacity: 0.2 },
        // { center: [ -0.1, 0, 0.1 ], opacity: 1 },
        // { center: [ 0, 0, 0.1 ], opacity: 0.2 },
        // { center: [ 0.1, 0, 0.1 ], opacity: 1 } ]; 
        this.setState({
            gridPos: gridJson
        })


        const $ = require("jquery");

        session_id="735818312256055"
        // var settings = {
        //     url:"https://us-central1-ar-murder.cloudfunctions.net/app/get-coords/"+session_id,
        //     method:"GET",
            
        //   };
          
        //   $.ajax(settings).done(function (response) {
        //       print(response)
        //   });
        fetch("https://us-central1-ar-murder.cloudfunctions.net/app/get-coords/"+session_id)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
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
    render(){
        return(

            this.state.gridPos.map(i=> {
                return(
                    <ViroBox position={i.center} scale={[.1,.02, .1]} opacity={i.opacity} />
                   
                    
                    
                )
            

                
            })
            // this.state.items.map(i=> {
            //     return(
            //         <ViroBox position={i["Shiv"]} scale={[.1,.02, .1]} opacity={i.opacity} />
                   
                    
                    
            //     )
            

                
            // })

            


        );
    }
}

export default Grid;