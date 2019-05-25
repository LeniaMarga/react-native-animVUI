import React, {Component} from 'react';
import {Animated, Button, Platform, StyleSheet, View} from 'react-native';
import {keyframes, stagger} from 'popmotion';
import StaggerIn from 'react-native-stagger-in';
import LinearGradient from 'react-native-linear-gradient';

const COUNT = 5;
const DURATION =3000;
const initialPhase = {scale: 0, opacity:1};
const constructAnimations = () => [...Array(COUNT).keys()].map(()=> (initialPhase));

class Pulse extends Component {

    state ={
         animations: constructAnimations()
      };

      componentDidMount(){
         this.animatedCircles();
      };

     animatedCircles = () => {
       const actions = Array(COUNT).fill(
         keyframes({
            values: [
              initialPhase,
              {scale:2 , opacity: 0}
            ],
            duration: DURATION,
            loop: Infinity,
            yoyo: Infinity
         })
       );
       stagger(actions, DURATION / COUNT).start(animations =>{
         this.setState({animations})
       })
     }

     render(){
       return(
          <View style={styles.container}>
             {this.state.animations.map(({opacity, scale}, index) => {return <Animated.View
               key={index}
               style={[styles.circle, {
                transform: [{scale}],
                opacity
             }]}
            />
           })}
          </View>
       );
     }

}


const styles = StyleSheet.create({
   circle:{
      backgroundColor: '#009de0',
      width: 160,
      height: 160,
      borderRadius: 100,
      position: "absolute",
      zIndex: 0
   },
   container:{
     flex: 1,
     backgroundColor: '#229faf',
     alignItems: 'center',
     justifyContent: 'center',
     position: "absolute",
     zIndex: 0
   }

});

export default Pulse
