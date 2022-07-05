import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Task = ({text}) => {
  return (
    <View style={styles.taskContainer}>
    <View style={styles.task}>
        <View style={styles.taskInner}>
            <TouchableOpacity style={styles.task_button}></TouchableOpacity>
            <Text style={styles.task_item}>{text}</Text>
            <View style={styles.task_circular}></View>
        </View>
    </View>
</View>
  )
}

const styles = StyleSheet.create({
    taskContainer: {
        flexDirection: "column",
    },
    task: {
        backgroundColor: "#FFF",
        padding: 8,
        borderRadius: 10, 
        marginBottom: 10,
    },
    taskInner: {
        flexDirection: "row",
        alignItems: "center",
    },
    task_button: {
        width: 24,
        height: 24,
        backgroundColor: "#55BCF6",
        opacity: .4,
        borderRadius: 5,
        marginRight: 15,
    },
    task_circular: {
        width: 12,
        height: 12,
        borderColor: "#55BCF6",
        borderWidth: 2,
        borderRadius: 5,
        marginLeft: "auto",
    },
})
export default Task
