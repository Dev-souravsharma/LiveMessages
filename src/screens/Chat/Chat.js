import React from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import ChatUI from '../../components/chatUI';
import styles from './style';
class ChatScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.route.params.data,
      message: '',
      name: '',
      messageData: [],
    };
  }
  componentDidMount() {
    this._focus = this.props.navigation.addListener('focus', () => {
      this.subscriber = firestore()
        .collection(this.state.data.name)
        .onSnapshot((querySnapshot, error) => {
          const users = [];
          querySnapshot.forEach(documentSnapshot => {
            users.push({
              ...documentSnapshot.data(),
              key: documentSnapshot.id,
            });
          });
          this.setState({messageData: users});
        });
    });
  }
  componentWillUnmount() {
    // this.subscriber();
  }

  sendMessage() {
    this.setState({message: ''});
    firestore()
      .collection(this.state.data.name)
      .doc(Date.now().toString())
      .set({
        name: this.state.name,
        message: this.state.message,
        username: this.state.data.name,
        createdAt: new Date().toString(),
      })
      .then(() => {
        console.log('Message Sent');
      });
  }
  render() {
    console.log('Prop', this.state.messageData);
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.messageData}
          showsVerticalScrollIndicator={false}
          ref={ref => (this.flatList = ref)}
          onContentSizeChange={() =>
            this.flatList.scrollToEnd({animated: true})
          }
          onLayout={() => this.flatList.scrollToEnd({animated: true})}
          renderItem={({item}) => {
            return (
              <ChatUI
                item={item}
                onPress={() => {
                  this.props.navigation.navigate('ChatScreen', {data: item});
                }}
              />
            );
          }}
          keyExtractor={item => item.id}
        />
        <View style={styles.flexRow}>
          <View style={styles.input}>
            <TextInput
              value={this.state.name}
              placeholder="Enter Name"
              onChangeText={data => {
                this.setState({name: data});
              }}
            />
          </View>
          <View style={styles.input}>
            <TextInput
              value={this.state.message}
              placeholder="Send Message"
              onChangeText={data => {
                this.setState({message: data});
              }}
            />
          </View>
          <Pressable style={styles.send} onPress={() => this.sendMessage()}>
            <Text>Send</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }
}
export default ChatScreen;
