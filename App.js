import React from 'react';
import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('./img/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.titletext}>
          EITA Mobile
        </Text>
        <Button
          onPress={() => { Alert.alert('You tapped the button!')}}
          title="Press Me"
        />
        <Button
          onPress={() => { Alert.alert('You tapped the button!')}}
          title="About"
        />
        <Text style={styles.text}>
          Prototyping components and interactions for iOS and Android.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '10%',
    paddingBottom: '5%'
  },
  logo: {
    flex: 1,
    maxWidth: '50%',
    resizeMode: 'contain',
    alignSelf: 'center',
    aspectRatio: 1,
  },
  titletext: {
    fontSize: 36,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    textAlign: 'center'
  }
});
