import { StyleSheet, Modal, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../constants/colors";

const ModalTask = ({ modal, selectedTask, handleComplete, handleDelete, handleCancel }) => {
	return (
		<Modal visible={modal} animationType='slide' transparent={true}>
			<View style={styles.modalView}>
				<View style={styles.modalContainer}>
					<Text style={styles.txtTask}>{selectedTask.value}</Text>
					<View style={styles.btnModal}>
						<TouchableOpacity onPress={handleComplete} style={[styles.btnOption, styles.btnComplete]}>
							<Text style={styles.btnText}>Completada</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={handleDelete} style={[styles.btnOption, styles.btnDelete]}>
							<Text style={styles.btnText}>Borrar</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={handleCancel} style={[styles.btnOption, styles.btnCancel]}>
							<Text style={styles.btnText}>Cancelar</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</Modal>
	);
};

export default ModalTask;

const styles = StyleSheet.create({
	modalView: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},

	modalContainer: {
		backgroundColor: colors.text,
		width: "80%",
		alignItems: "center",
		gap: 20,
		paddingVertical: 20,
		borderRadius: 10,
	},

	txtTask: {
		fontSize: 20,
		fontWeight: "bold",
	},

	btnModal: {
		alignItems: "center",
		gap: 20,
	},

	btnOption: {
		width: 200,
		height: 40,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 10,
		elevation: 10,
	},
	btnComplete: { backgroundColor: colors.accent },
	btnDelete: { backgroundColor: "red" },
	btnCancel: { backgroundColor: "blue" },

	btnText: {
		color: colors.text,
		fontSize: 15,
		fontWeight: "bold",
	},
});
