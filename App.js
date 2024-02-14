import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import CodePush from 'react-native-code-push';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        CodePush: Debug change
      </Text>
      <Image
        style={styles.image}
        resizeMode={'contain'}
        source={{uri: 'https://loremflickr.com/g/520/540/paris'}}
      />
      <View style={styles.button}>
        <Text style={styles.buttonText}>BEFORE CODE PUSH-----</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  button: {
    padding: 15,
    marginTop: 20,
    borderRadius: 8,
    backgroundColor: '#0E4B91',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
});

export default CodePush(App);