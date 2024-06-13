import React, { useState } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

const App = () => {
  console.log('data : ' + process.env.TESTAPP)
  const [greeting, setGreeting] = useState(undefined);

  const onButtonPress = (greeting) => {
    setGreeting(greeting);
  };

  const renderAfterButton = () => (
    <View style={{flex: 1, paddingTop: 20, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 25}}>
        {greeting}!!!
      </Text>
    </View>
  );

  return (
    <>
      <View testID='welcome' style={{flex: 1, paddingTop: 20, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 25, marginBottom: 30}}>
          Welcome
        </Text>
        <TouchableOpacity testID='hello_button' onPress={() => onButtonPress('Hello')}>
          <Text style={{color: 'blue', marginBottom: 20}}>Say Hello</Text>
        </TouchableOpacity>
        <TouchableOpacity testID='world_button' onPress={() => onButtonPress('World')}>
          <Text style={{color: 'blue', marginBottom: 20}}>Say World</Text>
        </TouchableOpacity>
        <TouchableOpacity testID='goodbye_button' onPress={() => onButtonPress('Goodbye, World')}>
          <Text style={{color: 'blue', marginTop: 50, marginBottom: 20}}>Say Goodbye</Text>
        </TouchableOpacity>
      </View>
      <Text>
       App dotenv: {process.env.TESTAPP}
       try
      </Text>
      {greeting && (renderAfterButton())}
    </>
  );
};

export default App;
