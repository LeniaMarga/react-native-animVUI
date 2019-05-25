import React, {Component} from 'react';
import {Animated, Platform, StyleSheet, View, AppRegistry, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-fa-icons';


class Button extends Component {

  constructor(props){
    super(props)
  }

  render(){

    return(
        <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
          <Icon name="microphone" style={{ fontSize: 45, color: 'white'}}/>
      </TouchableOpacity>
    );

  }
}

const styles = StyleSheet.create({
  button: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:150,
    height:150,
    backgroundColor:'#68bc14',
    borderRadius:200,
  },

});

export default Button
