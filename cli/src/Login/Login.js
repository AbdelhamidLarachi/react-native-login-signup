//
//  Login
//  loginScreens
//
//  Created by Abdelhamid Larachi.
//  Copyright © 2020 NitroCoding. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { h, w} from "../../App.js"


export default class Login extends React.Component {

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
	
	}

	onSignUpPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("Signup1")
	}

	render() {
	
		return <View
				style={styles.loginView}>
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
						<Text
							style={styles.welcomeBackText}>Welcome Back</Text>
						<Text
							style={styles.loginWithText}>Login with</Text>
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
										height: 60,
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
							style={styles.orText}>or</Text>
						<View
							style={styles.loginviewView}>
							<TextInput
								returnKeyType="next"
								autoCorrect={false}
								placeholder="Email"
								style={styles.formField1TextInput}/>
							<TextInput
								returnKeyType="done"
								autoCorrect={false}
								placeholder="Password"
								secureTextEntry={true}
								style={styles.formField2TextInput}/>
							<View
								style={{
									flex: 1,
								}}/>
							<TouchableOpacity
								onPress={this.onButtonFourPressed}
								style={styles.buttonFourButton}>
								<Text
									style={styles.buttonFourButtonText}>Login</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
				<View
					style={styles.loginLinkView}>
					<Text
						style={styles.needAnAccountText}>Need an account?</Text>
					<View
						style={{
							flex: 1,
						}}/>
					<TouchableOpacity
						onPress={this.onSignUpPressed}
						style={styles.signUpButton}>
						<Text
							style={styles.signUpButtonText}>Sign up</Text>
					</TouchableOpacity>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	loginView: {
		backgroundColor: "white",
		flex: 1,
	},
	containerView: {
		backgroundColor: "transparent",
		width: 102.9*w,
		height: 60.5*h,
		alignItems: "center",
	},
	welcomeBackText: {
		backgroundColor: "transparent",
		color: "black",
		fontFamily: "OpenSans-Bold",
		fontSize: 3.2*h,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
	},
	loginWithText: {
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 2*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		marginLeft: 12.5*w,
		marginTop: 8*h,
	},
	socialButtonsView: {
		backgroundColor: "transparent",
		width: 78.7*w,
		height: 7.4*h,
		marginTop: 3.4*h,
	},
	facebookbuttonView: {
		backgroundColor: "transparent",
		width: 22.7*w,
		height: 7.4*h,
	},
	socialButton3Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 22.7*w,
		height: 7.4*h,
	},
	buttonButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 22.7*w,
		height: 6.8*h,
	},
	buttonButtonText: {
		color: "transparent",
		fontFamily: "ArialMT",
		fontSize: 1.5*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	buttonButtonImage: {
		resizeMode: "contain",
	},
	twitterbuttonView: {
		backgroundColor: "transparent",
		width: 22.7*w,
		height: 7.4*h,
	},
	socialButton1Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 22.7*w,
		height: 7.4*h,
	},
	buttonThreeButtonText: {
		color: "transparent",
		fontFamily: "ArialMT",
		fontSize: 1.5*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	buttonThreeButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 22.7*w,
		height: 6.8*h,
	},
	buttonThreeButtonImage: {
		resizeMode: "contain",
	},
	gmailbuttonView: {
		backgroundColor: "transparent",
		width: 22.7*w,
		height: 7.4*h,
	},
	rectangle3Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.1)",
		shadowRadius: 5,
		shadowOpacity: 1,
		width: null,
		height: 7.4*h,
	},
	buttonTwoButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 22.7*w,
		height: 6.8*h,
	},
	buttonTwoButtonImage: {
		resizeMode: "contain",
	},
	buttonTwoButtonText: {
		color: "transparent",
		fontFamily: "ArialMT",
		fontSize: 1.5*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	googleImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 4.8*w,
		height: 2.2*h,
	},
	orText: {
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 2*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		marginLeft: 12.8*w,
		marginTop: 4.6*h,
	},
	loginviewView: {
		backgroundColor: "transparent",
		width: 79.7*w,
		height: 12.8*h,
		marginTop: 5.5*h,
		alignItems: "center",
	},
	formField1TextInput: {
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 2*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		padding: 0,
		width: 78.7*w,
		height: 5.3*h,
		borderBottomWidth: 1,
		borderBottomColor: '#d9d9d9'
	},
	formField2TextInput: {
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 2*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		padding: 0,
		width: 78.7*w,
		height: 5.3*h,
		marginTop: 2.2*h,
		borderBottomWidth: 1,
		borderBottomColor: '#d9d9d9'
	},
	buttonFourButtonText: {
		color: "white",
		fontFamily: "ArialMT",
		fontSize: 2*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	buttonFourButton: {
		backgroundColor: "black",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 78.7*w,
		height: 7.4*h,
		borderRadius: 10,
		marginTop: 2.5*h
	},
	buttonFourButtonImage: {
		resizeMode: "contain",
		marginRight: 2.6*w,
	},
	loginLinkView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 10.7*w,
		width: 52.3*w,
		bottom: 7.4*h,
		height: 2.7*h,
		flexDirection: "row",
		alignItems: "center",
	},
	needAnAccountText: {
		color: "black",
		fontFamily: "ArialMT",
		fontSize: 2*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	signUpButtonText: {
		color: "rgb(208, 2, 27)",
		fontFamily: "ArialMT",
		fontSize: 2*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	signUpButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 14.7*w,
		height: 2.2*h,
		marginRight: 0.5*w,
	},
	signUpButtonImage: {
		resizeMode: "contain",
		marginRight: 2.6*w,
	},
})
