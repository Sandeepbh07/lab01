
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const TaskInput = ({ addTask }) => {
  const [taskTitle, setTaskTitle] = useState('');

  const handleAddTask = () => {
    if (taskTitle.trim()) {
      addTask(taskTitle);
      setTaskTitle('');
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter task title"
        value={taskTitle}
        onChangeText={setTaskTitle}
        style={styles.input}
      />
      <Button title="Add Task" onPress={handleAddTask} disabled={!taskTitle.trim()} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
  },
});

export default TaskInput;
