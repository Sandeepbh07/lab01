import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import TaskItem from './components/TaskItem';
import TaskInput from './components/TaskInput';

const App = () => {
  const [taskList, setTaskList] = useState([]);

  const addTask = (taskTitle) => {
    setTaskList([...taskList, { id: Math.random().toString(), title: taskTitle, status: false }]);
  };

  const toggleStatus = (id) => {
    setTaskList(
      taskList.map((task) =>
        task.id === id ? { ...task, status: !task.status } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  return (
    <View style={styles.container}>
      <TaskInput addTask={addTask} />
      <FlatList
        data={taskList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem task={item} toggleStatus={toggleStatus} deleteTask={deleteTask} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
});

export default App;
