//
//  App.js
//  onBoarding screens
//
//  Created by Abdelhamid Larachi.
//  Copyright © 2020 [NitroCoding]. All rights reserved.
//

import Login from "./src/Login/Login"
import Onboarding1 from "./src/Onboarding1/Onboarding1"
import React from "react"
import Signup1 from "./src/Signup1/Signup1"
import Signup2 from "./src/Signup2/Signup2"
import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"
import { Dimensions } from "react-native"

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
	}


	render() {
			return <AppContainer/>
	}
}





export const h = Dimensions.get('window').height/100;
export const w = Dimensions.get('window').width/100;