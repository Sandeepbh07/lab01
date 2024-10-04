
import React from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet } from 'react-native';

const TaskItem = ({ task, toggleStatus, deleteTask }) => {
  return (
    <View style={styles.taskContainer}>
      <Text style={styles.taskTitle}>{task.title}</Text>
      <Switch value={task.status} onValueChange={() => toggleStatus(task.id)} />
      <TouchableOpacity onPress={() => deleteTask(task.id)}>
        <Text style={styles.deleteButton}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#f9f9f9',
  },
  taskTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
  deleteButton: {
    paddingTop:12,
    color: 'red',
    fontWeight: 'bold',
  },
});

export default TaskItem;
