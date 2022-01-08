import React from 'react';
import {SafeAreaView, FlatList, Text, View} from 'react-native';
import CustomList from '../../components/customList';
import USERS from '../../constant/users';
import styles from './style';
class ChatList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SafeAreaView>
        <FlatList
          data={USERS}
          renderItem={({item}) => {
            return (
              <CustomList
                name={item.name}
                onPress={() => {
                  this.props.navigation.navigate('ChatScreen', {data: item});
                }}
              />
            );
          }}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
}
export default ChatList;
