import React, { useState } from 'react';
/*import type {Node} from 'react';*/
import {
  StyleSheet,
  Text,
  View,
  Button,
  Linking,
} from 'react-native';

const App/*: () => Node */ = () => {
  const [name, setName] = useState('Nieznajomy')
  const changeNameState = () => {
    setName('Łukasz')
  }
  const buttonClick = () => {
    setButtonClicked(true)
    Linking.openURL('https://google.com')
  }

  const [buttonClicked, setButtonClicked] = useState(false)

  const [counter, setCounter] = useState(0)

  //Zadanie zaliczeniowe nr1

  const incrementCounter = () => {
    setCounter(counter + 1)
  }

  const decrementCounter = () => {
    setCounter(counter - 1)
  }

  return (
    <View style={styles.mainView}>
      <Text style={styles.text}>Hello {name}</Text>
      <View style={styles.buttonView}>
        <Button
          title='click'
          onPress={buttonClick}
        ></Button>
      </View>
      <View style={styles.buttonView}>
        <Button
          title='Zmień stan'
          onPress={changeNameState}
        ></Button>
      </View>
      <Text style={styles.text}>Licznik : {counter}</Text>
      <View style={styles.buttonView}>
        <Button
          title="Zwiększ licznik"
          onPress={incrementCounter}
        ></Button>
      </View>
      <View style={styles.buttonView}>
        <Button
          title="Zmniejsz licznik"
          onPress={decrementCounter}
        ></Button>
      </View>
      <Text style={styles.text}>
        {buttonClicked ? "Przycisk został wciśnięty" : "Przycisk nie został wciśnięty"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#b3d4fc',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    backgroundColor: '#387094',
    color: '#ffffff',
    width: '80%',
    height: 30,
    textAlign: 'center',
    textAlignVertical: 'center',
    margin: 10,
    borderRadius: 10,
  },
  buttonView: {
    margin: 10,
    borderRadius: 10,
  },
});

export default App;
