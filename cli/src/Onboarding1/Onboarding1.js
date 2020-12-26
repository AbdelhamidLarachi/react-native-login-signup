//
//  Onboarding1
//  loginScreens
//
//  Created by Abdelhamid Larachi.
//  Copyright © 2020 NitroCoding. All rights reserved.
//

import PageControl from "react-native-page-control"
import React from "react"
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { h, w} from "../../App.js"


export default class Onboarding1 extends React.Component {

	static navigationOptions = ({ navigation }) => {
	
		const { params = {} } = navigation.state
		return {
				header: null,
				headerLeft: null,
				headerRight: null,
			}
	}

	constructor(props) {
		super(props)
	}

	componentDidMount() {
	
	}

	onSkipPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("Signup1")
	}

	onNavigationValueChanged = () => {
	
	}

	render() {
	
		return <View
				style={styles.onboarding1View}>
				<View>
					<View>
						<Image
							source={require("./../../assets/images/background.png")}
							style={styles.backgroundImage}/>
					</View>
					<TouchableOpacity
						onPress={this.onSkipPressed}
						style={styles.skipButton}>
						<Text
							style={styles.skipButtonText}>skip</Text>
					</TouchableOpacity>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						alignSelf: "center",
						width: 58.93*w,
						bottom: 4.06*h,
						height: 49.14*h,
						alignItems: "center",
					}}>
					<Image
							source={require("./../../assets/images/greatui.png")}
							style={styles.logoImage}/>
					<View
						style={{
							flex: 1,
						}}/>
					<PageControl
						numberOfPages={3}
						currentPage={0}
						pageIndicatorTintColor="rgb(178, 182, 185)"
						currentPageIndicatorTintColor="black"
						style={styles.navigationPageControl}/>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	onboarding1View: {
		backgroundColor: "white",
		flex: 1,
	},
	backgroundImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 100*h,
	},
	skipButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		position: "absolute",
		right: 12*w,
		width: 7.73*w,
		bottom: 5.54*h,
		height: 2.22*h,
	},
	skipButtonImage: {
		resizeMode: "contain",
		marginRight: 2.67*w,
	},
	skipButtonText: {
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 1.97*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	logoImage: {
		resizeMode: "stretch",
		backgroundColor: "transparent",
		width: 65.93*w,
		height: 9.53*h,
	},
	navigationPageControl: {
		backgroundColor: "transparent",
		width: 18.13*w,
		height: 4.56*h,
	},
})
