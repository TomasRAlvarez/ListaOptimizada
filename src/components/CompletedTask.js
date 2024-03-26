import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../constants/colors";

const CompletedTask = () => {
	return (
		<View style={styles.view}>
			<Text style={styles.title}>Tareas Completadas</Text>
		</View>
	);
};

export default CompletedTask;

const styles = StyleSheet.create({
	view: {
		width: "90%",
		height: 200,
		padding: 15,
		backgroundColor: colors.accent,
		borderRadius: 15,
		justifyContent: "space-evenly",
		marginBottom: 10,
	},

	title: {
		fontSize: 25,
		fontWeight: "bold",
		color: colors.text,
	},
});
