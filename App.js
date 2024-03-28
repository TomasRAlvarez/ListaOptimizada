import React, { useState } from "react";
import { StyleSheet, View, StatusBar, Platform } from "react-native";
import CreateTask from "./src/components/CreateTask";
import PendingTasks from "./src/components/PendingTasks";
import ModalTask from "./src/components/ModalTask";
import CompletedTask from "./src/components/CompletedTask";
import { colors } from "./src/constants/colors";

export default function App() {
	const [task, setTask] = useState("");
	const [itemTask, setItemTask] = useState([]);
	const [modal, setModal] = useState(false);
	const [selectedTask, setSelectedTask] = useState({});
	const [completeTask, setCompleteTask] = useState([]);
	const [action, setAction] = useState("create");

	const createTask = () => {
		let taskId = Math.random();
		if (task != "") {
			setItemTask((allTasks) => [...allTasks, { id: taskId, value: task }]);
			setTask("");
		} else {
			alert("Error: No ingreso una tarea");
		}
	};

	const editTask = () => {
		itemTask.map((item) => {
			if (item.id === selectedTask.id) {
				item.value = task;
			}
		});
		setTask("");
		setAction("create");
	};

	const handleModal = (item) => {
		setModal(true);
		setSelectedTask(item);
	};

	const handleEdit = (item) => {
		setTask(item.value);
		setAction("edit");
		setSelectedTask(item);
	};

	const handleComplete = () => {
		setCompleteTask((allTasks) => [...allTasks, selectedTask]);
		handleDelete();
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
			<CreateTask action={action} task={task} setTask={setTask} createTask={createTask} editTask={editTask} />
			<PendingTasks itemTask={itemTask} handleModal={handleModal} handleEdit={handleEdit} />
			<CompletedTask completeTask={completeTask} />
			<ModalTask modal={modal} selectedTask={selectedTask} handleComplete={handleComplete} handleDelete={handleDelete} handleCancel={handleCancel} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background,
		alignItems: "center",
		justifyContent: "top",
		paddingTop: 40,
	},
});
