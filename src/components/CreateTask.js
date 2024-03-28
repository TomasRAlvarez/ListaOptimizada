import { StyleSheet, View, TextInput, TouchableOpacity, Text } from "react-native";
import React from "react";
import { colors } from "../constants/colors";

const CreateTask = ({ action, task, setTask, createTask, editTask }) => {
	if (action === "create") {
		return (
			<View style={styles.view}>
				<Text style={styles.title}>+ Nueva Tarea</Text>
				<TextInput style={styles.txtInput} placeholder='Pasear al perro...' value={task} onChangeText={(e) => setTask(e)} />
				<TouchableOpacity style={styles.btnCreate} onPress={createTask}>
					<Text style={styles.txtCreate}> Crear Tarea </Text>
				</TouchableOpacity>
			</View>
		);
	} else if (action === "edit") {
		return (
			<View style={styles.view}>
				<Text style={styles.title}>Editar Tarea</Text>
				<TextInput style={styles.txtInput} placeholder='Pasear al perro...' value={task} onChangeText={(e) => setTask(e)} />
				<TouchableOpacity style={styles.btnCreate} onPress={editTask}>
					<Text style={styles.txtCreate}> Confirmar </Text>
				</TouchableOpacity>
			</View>
		);
	}
};

export default CreateTask;

const styles = StyleSheet.create({
	view: {
		width: "90%",
		height: 200,
		paddingHorizontal: 15,
		backgroundColor: colors.primary,
		borderRadius: 15,
		justifyContent: "space-evenly",
		marginBottom: 10,
	},

	title: {
		fontSize: 25,
		fontWeight: "bold",
		color: colors.text,
	},

	txtInput: {
		height: 45,
		backgroundColor: colors.text,
		padding: 5,
		fontSize: 18,
		borderRadius: 10,
		elevation: 10,
	},

	btnCreate: {
		height: 40,
		backgroundColor: colors.secondary,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 10,
		elevation: 10,
	},

	txtCreate: {
		fontSize: 20,
		color: colors.text,
		fontWeight: "500",
	},
});
