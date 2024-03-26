import React, { useState } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import CreateTask from "./src/components/CreateTask";
import PendingTasks from "./src/components/PendingTasks";
import DeleteTask from "./src/components/DeleteTask";
import { colors } from "./src/constants/colors";
import CompletedTask from "./src/components/CompletedTask";

export default function App() {
	const [task, setTask] = useState("");
	const [itemTask, setItemTask] = useState([]);
	const [modal, setModal] = useState(false);
	const [selectedTask, setSelectedTask] = useState({});

	const createTask = () => {
		let taskId = itemTask.length + 1;
		if (task != "") {
			setItemTask((allTasks) => [...allTasks, { id: taskId, value: task }]);
			setTask("");
		} else {
			alert("Error: No ingreso una tarea");
		}
	};

	const handleModal = (item) => {
		setModal(true);
		setSelectedTask(item);
	};

	const handleDelete = () => {
		const filterTask = itemTask.filter((task) => task !== selectedTask);
		setItemTask(filterTask);
		setSelectedTask({});
		setModal(false);
	};

	const handleCancel = () => {
		setSelectedTask({});
		setModal(false);
	};

	return (
		<View style={styles.container}>
			<StatusBar />
			<CreateTask task={task} setTask={setTask} createTask={createTask} />
			<PendingTasks itemTask={itemTask} handleModal={handleModal} />
			<CompletedTask />
			<DeleteTask modal={modal} selectedTask={selectedTask} handleDelete={handleDelete} handleCancel={handleCancel} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background,
		alignItems: "center",
		justifyContent: "top",
	},
});
