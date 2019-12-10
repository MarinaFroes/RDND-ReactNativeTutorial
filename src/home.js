import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

class HomeScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerLeft: (
        <Button
          title='L'
          onPress={() => navigation.navigate('Users')}
        />
      ),
      headerRight: (
        <Button
          title='R'
          onPress={() => navigation.navigate('Users')}
        />
      )
    }
  }
  

  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.text}>Home Screen</Text>
        <Button
          title="Go to Users"
          onPress={() =>
            this.props.navigation.navigate('Users', {
              userId: 2,
              userName: 'Francis',
              userLastName: 'Jones',
            })
          }
        />
        <Text>
          {this.props.navigation.getParam('message', 'No message yet')}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
