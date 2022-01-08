import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';
function CustomList(props) {
  return (
    <Pressable onPress={props.onPress} style={styles.container}>
      <Text style={styles.userText}>{props.name}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    marginHorizontal: 8,
    marginVertical: 4,
    padding: 12,
    borderRadius: 8,
  },
  userText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
export default CustomList;
