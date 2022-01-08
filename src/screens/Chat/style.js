import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
    marginHorizontal: 8,
    padding: 8,
  },
  input: {
    flex: 4,
    padding: 12,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 8,
  },
  send: {flex: 2, justifyContent: 'center', alignItems: 'center'},
});
export default styles;
