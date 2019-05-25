import React, {Component} from 'react';
import {Animated, Button, Platform, StyleSheet, View, Text} from 'react-native';



class ViewAnim extends Component {

 constructor(props){
  super(props);

    this.state = {
       fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
    }
  }

  componentDidMount(){
    this.Animator()
  }

  Animator() {
  Animated.timing(                  // Animate over time
    this.state.fadeAnim,            // The animated value to drive
    {
      toValue: 1,                   // Animate to opacity: 1 (opaque)
      duration: 1000,              // Make it take a while
    }
    ).start();                        // Starts the animation
  }

  render() {
    let { fadeAnim } = this.state;

    return (

        <Animated.View                 // Special animatable View
           style={{
           opacity: this.state.fadeAnim,         // Bind opacity to animated value
           }}
          >
          <Text style={{color:'#fff'}}>Hi, how can I help?</Text>
         {this.props.children}
      </Animated.View>
   );
  }

}





export default ViewAnim
