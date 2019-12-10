import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

class UserScreen extends Component {
  static navigationOptions = {
    title: 'Users',
    headerStyle: {
      backgroundColor: '#f4511e'
    },
    headerTintColor: 'blue',
    headerTitleStyle: {
      fontWeight: 'bold',
      color: 'green'
    }
  }

  render() {
    const userId = this.props.navigation.getParam('userId', 'no id');
    const userName = this.props.navigation.getParam('userName', 'no name');
    const userLastName = this.props.navigation.getParam(
      'userLastName',
      'no last name',
    );

    return (
      <View style={styles.main}>
        <Text style={styles.text}>User id: {userId}</Text>
        <Text style={styles.text}>Name: {userName}</Text>
        <Text style={styles.text}>Last Name: {userLastName}</Text>
        <Button
          title="Go to Home"
          onPress={() =>
            this.props.navigation.navigate('Home', {
              message: 'Hello guys',
            })
          }
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
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

export default UserScreen;
