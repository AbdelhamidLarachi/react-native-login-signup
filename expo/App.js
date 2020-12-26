//
//  App.js
//  loginScreens
//
//  Created by Abdelhamid Larachi.
//  Copyright © 2020 NitroCoding. All rights reserved.
//

import * as Font from "expo-font"
import Login from "./App/Login/Login"
import Onboarding1 from "./App/Onboarding1/Onboarding1"
import React from "react"
import Signup1 from "./App/Signup1/Signup1"
import Signup2 from "./App/Signup2/Signup2"
import { AppLoading } from "expo"
import { createAppContainer, createStackNavigator } from "react-navigation"


const PushRouteOne = createStackNavigator({
	Onboarding1: {
		screen: Onboarding1,
	},
	Signup1: {
		screen: Signup1,
	},
	Signup2: {
		screen: Signup2,
	},
	Login: {
		screen: Login,
	},
}, {
	initialRouteName: "Onboarding1",
})

const RootNavigator = createStackNavigator({
	PushRouteOne: {
		screen: PushRouteOne,
	},
}, {
	mode: "modal",
	headerMode: "none",
	initialRouteName: "PushRouteOne",
})

const AppContainer = createAppContainer(RootNavigator)



export default class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			fontsReady: false,
		}
	}

	componentDidMount() {
	
		this.initProjectFonts()
	}

	async initProjectFonts() {
	
		await Font.loadAsync({
			"OpenSans-Bold": require("./assets/fonts/OpenSansBold.ttf"),
			"ArialMT": require("./assets/fonts/Arial.ttf"),
		})
		this.setState({
			fontsReady: true,
		})
	}

	render() {
	
		if (!this.state.fontsReady) { return (<AppLoading />); }
		return <AppContainer/>
	}
}
