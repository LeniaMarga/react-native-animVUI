import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet } from 'react-native';

class BaseText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "Cosmote Voice Assistant",
      bodyText: 'Hi, how can I help?'
    };
  }

  render() {
    return (
      <Text style={styles.baseText}>
        <Text style={styles.titleText} onPress={this.onPressTitle}>
          {this.state.titleText}{'\n'}{'\n'}
        </Text>
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Arial',
    flex: 1,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});


export default BaseText
