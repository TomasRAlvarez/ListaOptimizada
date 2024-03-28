import { StyleSheet, FlatList, Text, View } from "react-native";
import React from "react";
import { colors } from "../constants/colors";

const CompletedTask = ({ completeTask }) => {
	let txtTareas = completeTask.length + " Tareas completadas";
	if (completeTask.length === 1) {
		txtTareas = "1 Tarea completada";
	} else if (completeTask.length === 0) {
		txtTareas = "✓ Tareas Completadas";
		return (
			<View style={styles.view}>
				<Text style={styles.title}>✓ Tareas Completadas</Text>
			</View>
		);
	}
	return (
		<View style={styles.view}>
			<Text style={styles.title}>{txtTareas}</Text>
			<FlatList
				style={styles.flatList}
				data={completeTask}
				keyExtractor={(item) => item.id}
				//Dentro de los parentesis se desestructura con las {} el item
				renderItem={({ item }) => (
					<View style={styles.viewTask}>
						<Text style={styles.txtTask} key={item.id}>
							✓ {item.value}
						</Text>
					</View>
				)}
			/>
		</View>
	);
};

export default CompletedTask;

const styles = StyleSheet.create({
	view: {
		width: "90%",
		maxHeight: 290,
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

	flatList: {
		marginTop: 10,
	},

	viewTask: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		backgroundColor: colors.secondary,
		marginBottom: 10,
		borderRadius: 15,
		elevation: 8,
	},

	txtTask: {
		width: "75%",
		color: colors.text,
		fontSize: 20,
		fontWeight: "bold",
		margin: 10,
	},
});
