import {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View, Text, TouchableOpacity, KeyboardAvoidingView, TextInput, Keyboard } from 'react-native';
import Task from './components/Task';

export default function App() { 
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleTask = () => {
      Keyboard.dismiss();
      setTaskItems([...taskItems, task]);
      setTask(null);
  }

  const completeTask = (index) => {
      let tasksCopy = [...taskItems];
      tasksCopy.splice(index, 1);
      setTaskItems(tasksCopy)
  }
  return (
    <View style={styles.container}>
      <StatusBar paddingTop={20} backgroundColor={`rgba(44, 43, 230, .75)`}  />
      <View style={styles.taskContainer}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <View style={styles.taskItems}>
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
            )
          }
          )}
        </View>
      </View>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.writeTaskWrapper}>
      <TextInput style={styles.taskInput} placeholder={"Write a task"} value={task} onChangeText={text => setTask(text)} />
      <TouchableOpacity onPress={() => handleTask()}>
          <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
          </View>
      </TouchableOpacity>
</KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(44, 43, 230, .75)',
    alignItems: 'center'
  },
  taskContainer: {
  //   backgroundColor: "white",
  //   display: "flex",
  //   justifyContent: "space-between",
  //   alignItems: 'center',
    width: "100%",
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    color: "white",
    fontSize: 30,
    marginBottom: 15,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
},
taskInput: {
    padding: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
},
addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60, 
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
},
addText: {
    fontSize: 35,
}
});
