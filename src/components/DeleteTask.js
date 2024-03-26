import { StyleSheet, Button, Modal, Text, View } from "react-native";
import React from "react";

const DeleteTask = ({ modal, selectedTask, handleDelete, handleCancel }) => {
	return (
		<Modal visible={modal} animationType='slide' transparent={true}>
			<View style={styles.modalView}>
				<View style={styles.modalContainer}>
					<View>
						<Text>{selectedTask.value}</Text>
					</View>
					<View>
						<Text>¿Quiere borrar esta tarea?</Text>
					</View>
					<View style={styles.btnModal}>
						<Button title='Borrar' onPress={handleDelete} />
						<Button title='Cancelar' onPress={handleCancel} />
					</View>
				</View>
			</View>
		</Modal>
	);
};

export default DeleteTask;

const styles = StyleSheet.create({
	modalView: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},

	modalContainer: {
		backgroundColor: "white",
		width: "80%",
		alignItems: "center",
		gap: 20,
		paddingVertical: 20,
		borderRadius: 7,
	},

	btnModal: {
		flexDirection: "row",
		gap: 20,
	},
});
