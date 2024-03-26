import { StyleSheet, Text, FlatList, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../constants/colors";

const PendingTasks = ({ itemTask, handleModal }) => {
	return (
		<View style={styles.view}>
			<Text style={styles.title}>Tareas Pendientes</Text>
			<FlatList
				style={styles.flatList}
				data={itemTask}
				keyExtractor={(item) => item.id}
				//Dentro de los parentesis se desestructura con las {} el item
				renderItem={({ item }) => (
					<TouchableOpacity style={styles.viewTask} onPress={() => handleModal(item)}>
						<Text style={styles.txtTask} key={item.id}>
							{item.value}
						</Text>
					</TouchableOpacity>
				)}
			/>
		</View>
	);
};

export default PendingTasks;

const styles = StyleSheet.create({
	view: {
		width: "90%",
		maxHeight: 370,
		padding: 15,
		backgroundColor: colors.secondary,
		borderRadius: 15,
		justifyContent: "space-evenly",
		marginBottom: 10,
	},

	title: {
		fontSize: 25,
		fontWeight: "bold",
		color: colors.text,
	},

	flatList: {
		marginTop: 10,
	},

	viewTask: {
		backgroundColor: colors.primary,
		marginBottom: 10,
		borderRadius: 15,
		alignItems: "center",
		elevation: 8,
	},

	txtTask: {
		color: colors.text,
		fontSize: 20,
		fontWeight: "bold",
		margin: 10,
	},
});
