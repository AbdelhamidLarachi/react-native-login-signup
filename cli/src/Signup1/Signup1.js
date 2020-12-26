//
//  Signup1
//  loginScreens
//
//  Created by Abdelhamid Larachi.
//  Copyright © 2020 NitroCoding. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { h, w} from "../../App.js"


export default class Signup1 extends React.Component {

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

	onButtonPressed = () => {
	
	}

	onButtonThreePressed = () => {
	
	}

	onButtonTwoPressed = () => {
	
	}

	onButtonFourPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("Signup2")
	}

	onLoginPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("Login")
	}

	render() {
	
		return <View
				style={styles.signup1View}>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						alignSelf: "center",
						top: 0,
						bottom: 0,
						justifyContent: "center",
					}}>
					<View
						style={styles.containerView}>
						<Image
							source={require("./../../assets/images/greatui.png")}
							style={styles.logoImage}/>
						<Text
							style={styles.getStartedWithText}>Get started with</Text>
						<View
							style={styles.socialButtonsView}>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 0,
									right: 0,
									top: 0,
									bottom: 0,
									justifyContent: "center",
								}}>
								<View
									pointerEvents="box-none"
									style={{
										height: 7.4*h,
										flexDirection: "row",
										alignItems: "center",
									}}>
									<View
										style={styles.facebookbuttonView}>
										<View
											pointerEvents="box-none"
											style={{
												position: "absolute",
												left: 0,
												top: 0,
												bottom: 0,
												justifyContent: "center",
											}}>
											<Image
												source={require("./../../assets/images/social-button-3.png")}
												style={styles.socialButton3Image}/>
										</View>
										<View
											pointerEvents="box-none"
											style={{
												position: "absolute",
												left: 0,
												top: 0,
												bottom: 0,
												justifyContent: "center",
											}}>
											<TouchableOpacity
												onPress={this.onButtonPressed}
												style={styles.buttonButton}>
												<Text
													style={styles.buttonButtonText}></Text>
											</TouchableOpacity>
										</View>
									</View>
									<View
										style={{
											flex: 1,
										}}/>
									<View
										style={styles.twitterbuttonView}>
										<View
											pointerEvents="box-none"
											style={{
												position: "absolute",
												right: 0,
												top: 0,
												bottom: 0,
												justifyContent: "center",
											}}>
											<Image
												source={require("./../../assets/images/social-button-1.png")}
												style={styles.socialButton1Image}/>
										</View>
										<View
											pointerEvents="box-none"
											style={{
												position: "absolute",
												left: 0,
												top: 0,
												bottom: 0,
												justifyContent: "center",
											}}>
											<TouchableOpacity
												onPress={this.onButtonTwoPressed}
												style={styles.buttonThreeButton}>
												<Text
													style={styles.buttonThreeButtonText}></Text>
											</TouchableOpacity>
										</View>
									</View>
								</View>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									alignSelf: "center",
									top: 0,
									bottom: 0,
									justifyContent: "center",
								}}>
								<View
									style={styles.gmailbuttonView}>
									<View
										pointerEvents="box-none"
										style={{
											position: "absolute",
											left: 0,
											right: 0,
											top: 0,
											bottom: 0,
											justifyContent: "center",
										}}>
										<View
											pointerEvents="box-none"
											style={{
												height: 92,
											}}>
											<View
												pointerEvents="box-none"
												style={{
													position: "absolute",
													left: 0,
													right: 0,
													top: 0,
													bottom: 0,
													justifyContent: "center",
												}}>
												<Image
													source={require("./../../assets/images/rectangle-3-3.png")}
													style={styles.rectangle3Image}/>
											</View>
											<View
												pointerEvents="box-none"
												style={{
													position: "absolute",
													left: 0,
													top: 0,
													bottom: 0,
													justifyContent: "center",
												}}>
												<TouchableOpacity
													onPress={this.onButtonThreePressed}
													style={styles.buttonTwoButton}>
													<Text
														style={styles.buttonTwoButtonText}></Text>
												</TouchableOpacity>
											</View>
										</View>
									</View>
									<View
										pointerEvents="box-none"
										style={{
											position: "absolute",
											alignSelf: "center",
											top: 0,
											bottom: 0,
											justifyContent: "center",
										}}>
										<Image
											source={require("./../../assets/images/google.png")}
											style={styles.googleImage}/>
									</View>
								</View>
							</View>
						</View>
						<Text
							style={styles.orSignUpWithText}>Or sign up with</Text>
						<TouchableOpacity
							onPress={this.onButtonFourPressed}
							style={styles.emailloginButton}>
							<Text
								style={styles.emailloginButtonText}>Email</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View
					style={styles.loginLinkView}>
					<Text
						style={styles.alreadyOnboardText}>Already onboard?</Text>
					<View
						style={{
							flex: 1,
						}}/>
					<TouchableOpacity
						onPress={this.onLoginPressed}
						style={styles.loginButton}>
						<Text
							style={styles.loginButtonText}>Login</Text>
					</TouchableOpacity>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	signup1View: {
		backgroundColor: "white",
		flex: 1,
	},
	containerView: {
		backgroundColor: "transparent",
		width: 78.5*w,
		height: 44.3*h,
		alignItems: "center",
	},
	logoImage: {
		backgroundColor: "transparent",
		resizeMode: "stretch",
		width: 53.33*w,
		height: 6.82*h,
	},
	getStartedWithText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 1.97*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		alignSelf: "flex-start",
		marginTop: 10.34*h,
	},
	socialButtonsView: {
		backgroundColor: "transparent",
		width: '100%',
		height: 7.4*h,
		marginTop: 2.96*h,
	},
	facebookbuttonView: {
		backgroundColor: "transparent",
		width: 22.67*w,
		height: 7.4*h,
	},
	socialButton3Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 22.67*w,
		height: 7.4*h,
	},
	buttonButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 22.67*w,
		height: 6.77*h,
	},
	buttonButtonText: {
		color: "transparent",
		fontFamily: "ArialMT",
		fontSize: 1.48*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	buttonButtonImage: {
		resizeMode: "contain",
	},
	twitterbuttonView: {
		backgroundColor: "transparent",
		width: 22.67*w,
		height: 7.4*h,
	},
	socialButton1Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 22.67*w,
		height: 7.4*h,
	},
	buttonThreeButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 22.67*w,
		height: 6.77*h,
	},
	buttonThreeButtonText: {
		color: "transparent",
		fontFamily: "ArialMT",
		fontSize: 1.48*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	buttonThreeButtonImage: {
		resizeMode: "contain",
	},
	gmailbuttonView: {
		backgroundColor: "transparent",
		width: 22.67*w,
		height: 7.4*h,
	},
	rectangle3Image: {
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.1)",
		shadowRadius: 5,
		shadowOpacity: 1,
		resizeMode: "center",
		width: null,
		height: 7.4*h,
	},
	buttonTwoButtonImage: {
		resizeMode: "contain",
	},
	buttonTwoButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 22.67*w,
		height: 6.77*h,
	},
	buttonTwoButtonText: {
		color: "transparent",
		fontFamily: "ArialMT",
		fontSize: 1.48*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	googleImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 4.8*w,
		height: 2.22*h,
	},
	orSignUpWithText: {
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 1.48*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		marginTop: 5.05*h,
	},
	emailloginButton: {
		backgroundColor: "black",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 78.5*w,
		height: 7.4*h,
		marginTop: 2.96*h,
		borderRadius: 10
	},
	emailloginButtonText: {
		color: "white",
		fontFamily: "ArialMT",
		fontSize: 1.97*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	emailloginButtonImage: {
		resizeMode: "contain",
		marginRight: 2.67*w,
	},
	loginLinkView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 10.66*w,
		width: 47.73*w,
		bottom: 7.39*h,
		height: 2.71*h,
		flexDirection: "row",
		alignItems: "center",
	},
	alreadyOnboardText: {
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 1.97*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	loginButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 10.67*w,
		height: 2.22*h,
		marginRight: 0.53*w,
	},
	loginButtonImage: {
		resizeMode: "contain",
		marginRight: 2.67*w,
	},
	loginButtonText: {
		color: "rgb(208, 2, 27)",
		fontFamily: "ArialMT",
		fontSize: 1.97*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
})
