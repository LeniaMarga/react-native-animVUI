import React, {Component} from 'react';
import {Animated, Button, Platform, StyleSheet, View} from 'react-native';



export default class Pulse extends React.Component {
	constructor(props) {
		super(props);

		this.anim = new Animated.Value(0);
	}

	componentDidMount() {
		Animated.timing(this.anim, {
			toValue: 1,
			duration: this.props.interval
		})
		.start();
	}

	render() {
		const { size, pulseMaxSize, borderColor, backgroundColor, getStyle } = this.props;

		return (
			<View style={[styles.circleWrapper, {
				width: pulseMaxSize,
				height: pulseMaxSize,
				marginLeft: -pulseMaxSize/2,
				marginTop: -pulseMaxSize/2,
			}]}>
				<Animated.View
					style={[{
						borderColor,
						backgroundColor,
						width: this.anim.interpolate({
							inputRange: [0, 1],
							outputRange: [size, pulseMaxSize]
						}),
						height: this.anim.interpolate({
							inputRange: [0, 1],
							outputRange: [size, pulseMaxSize]
						}),
						opacity: this.anim.interpolate({
							inputRange: [0, 1],
							outputRange: [1, 0]
						})
					}, getStyle && getStyle(this.anim)]}
				/>
			</View>
		);
	}
}



const styles = StyleSheet.create({
	circleWrapper: {
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		left: 100,
		top: 200,
	},

});
