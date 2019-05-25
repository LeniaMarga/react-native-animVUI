
import React from 'react';
import { View, Image, TouchableOpacity, Animated} from 'react-native';
import Pulse from './pulseSimple';


export default class PulseLoader extends React.Component {
constructor(props) {
super(props);

this.state = {
  circles: []
};

this.counter = 1;
this.setInterval = null;
this.anim = new Animated.Value(1);
}

componentDidMount() {
this.setCircleInterval();
}

setCircleInterval() {
this.setInterval = setInterval(this.addCircle.bind(this), this.props.interval);
this.addCircle();
}

addCircle() {
this.setState({ circles: [...this.state.circles, this.counter] });
this.counter++;
}

onPressIn() {
Animated.timing(this.anim, {
}).start(() => clearInterval(this.setInterval));
}

onPressOut() {
Animated.timing(this.anim, {
  toValue: 1,
}).start(this.setCircleInterval.bind(this));
}

render() {
const { size, interval } = this.props;

return (
  <View style={{
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  }}>
    {this.state.circles.map((circle) => (
      <Pulse
        key={circle}
        {...this.props}
      />
    ))}

    <TouchableOpacity
      activeOpacity={1}
      style={{
        transform: [{
          scale: this.anim
        }]
      }}
    >
    </TouchableOpacity>
  </View>
);
}
}



PulseLoader.defaultProps = {
interval: 2000,
size: 100,
pulseMaxSize: 250,
backgroundColor: '#229faf',
getStyle: undefined,
};
