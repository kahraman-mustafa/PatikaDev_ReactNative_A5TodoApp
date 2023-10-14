import React from 'react';
import { FlatList, View } from 'react-native';
import styles from './TodoList.style';

const TodoList = ({todoList, renderItem}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={todoList}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default TodoList;
