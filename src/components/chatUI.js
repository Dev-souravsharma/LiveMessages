import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
function ChatUI({item, ptImg, patientImg, auth, onAction}) {
  console.log('Chat', item.name);
  return (
    <View>
      {false && (
        <View style={Styles.userMessageContainer}>
          <View style={Styles.timeContainer}>
            <Text style={Styles.time}>Today</Text>
          </View>
          <View style={Styles.message}>
            <Pressable onPress={onAction} hitSlop={20}>
              <View style={Styles.textContainer}>
                <View style={Styles.receivertextContainer}>
                  {/* <Text style={Styles.text}>{item.name}</Text> */}
                  <Text style={Styles.text}>{item.message}</Text>
                </View>
              </View>
            </Pressable>
          </View>
        </View>
      )}
      {/* SENDER USER */}
      {true && (
        <View style={Styles.userReceiverMessageContainer}>
          <View style={Styles.timeContainer}>
            <Text style={Styles.time}>Today</Text>
          </View>
          <View style={Styles.receiverMessage}>
            <Pressable onPress={onAction} hitSlop={20}>
              <View style={Styles.receivertextContainer}>
                <Text
                  style={(Styles.text, {fontWeight: 'bold', color: '#eaeaea'})}>
                  {item.name}
                </Text>
                <View style={Styles.receivertextContainer}>
                  <Text style={Styles.text}>{item.message}</Text>
                </View>
              </View>
            </Pressable>
          </View>
        </View>
      )}
    </View>
  );
}
const Styles = StyleSheet.create({
  userMessageContainer: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 5,
  },
  timeContainer: {
    marginBottom: 16,
    alignItems: 'center',
  },
  time: {
    color: 'grey',
    fontSize: 12,
  },
  message: {
    backgroundColor: 'green',
    paddingVertical: 15,
    borderRadius: 10,
    padding: 20,
    flex: 1,
    alignSelf: 'flex-start',
    shadowColor: 'black',
    shadowOffset: {
      width: (1, 1),
      height: (1, 1),
    },
    shadowRadius: 2,
    shadowOpacity: 0.3,
    elevation: 2,
  },
  userProfileContainer: {
    position: 'absolute',
    marginLeft: -12,
    marginTop: -16,
    borderRadius: 8,
    backgroundColor: '#fff',
    padding: 4,
  },
  userProfile: {
    width: 30,
    height: 30,
    borderRadius: 8,
  },
  textContainer: {
    alignItems: 'flex-start',
    marginLeft: 12,
  },
  text: {
    color: '#fff',
    fontSize: 12,
  },
  textImage: {
    color: '#fff',
    fontSize: 12,
    width: 100,
    marginTop: 20,
  },
  userReceiverMessageContainer: {
    margin: 15,
    borderRadius: 5,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    right: 0,
  },
  receiverMessage: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    padding: 20,
    borderRadius: 10,
    alignSelf: 'flex-end',
    shadowColor: 'black',
    shadowOffset: {
      width: (1, 1),
      height: (1, 1),
    },
    shadowRadius: 2,
    shadowOpacity: 0.3,
    elevation: 2,
  },
  receivertextContainer: {
    marginRight: 10,
  },
  receiverUserProfileContainer: {
    position: 'absolute',
    alignSelf: 'flex-end',
    top: -25,
    borderRadius: 8,
    backgroundColor: '#fff',
    padding: 4,
    right: -10,
  },
  imageStyle: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    marginBottom: -10,
    marginTop: 8,
    marginLeft: -28,
    marginRight: -25,
    borderRadius: 8,
  },
  imageStylePT: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    marginTop: 4,
    marginBottom: -10,
    marginLeft: -28,
    marginRight: -25,
    borderRadius: 8,
  },
  marginLeft: {marginLeft: 4},
  docView: {flexDirection: 'row', alignItems: 'center'},
});
export default ChatUI;
