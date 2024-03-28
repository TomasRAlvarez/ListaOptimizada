import { StyleSheet, Text, FlatList, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { colors } from "../constants/colors";

const PendingTasks = ({ itemTask, handleModal, handleEdit }) => {
	let txtTareas = itemTask.length + " Tareas pendientes";
	if (itemTask.length === 1) {
		txtTareas = "1 Tarea pendiente";
	} else if (itemTask.length === 0) {
		return (
			<View style={styles.view}>
				<Text style={styles.title}>No hay tareas pendientes</Text>
			</View>
		);
	}
	return (
		<View style={styles.view}>
			<Text style={styles.title}>{txtTareas}</Text>
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
						<TouchableOpacity onPress={() => handleEdit(item)}>
							<Image style={styles.imgEdit} source={require("../../assets/pen.png")} />
						</TouchableOpacity>
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
		maxHeight: 290,
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
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		backgroundColor: colors.primary,
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

	imgEdit: {
		width: 25,
		height: 25,
		marginRight: 10,
	},
});
