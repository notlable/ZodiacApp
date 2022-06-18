import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Image, ImageBackground, Button, Alert, } from 'react-native';
// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
 
export default function App() {
  const [userName, setUserName] = useState("");
  const [zodiacSign, setZodiacSign] = useState("");
  const [submit, setSubmit] = useState(false);

  const onPressHandler = () => {
    if (userName.length < 3 || zodiacSign.length < 3) {
      Alert.alert(
        "Warning!",
        "Imię i znak zodiaku musi zawierać minimum 3 znaki!",
        [{ text: "OK" }],
        { cancelable: true }
      );
    } else {
      setSubmit(!submit);
    }
  };

  return (
    <ImageBackground
      style={styles.container}
      source={{
        uri:
          "https://cdn.pixabay.com/photo/2021/11/25/16/59/leaves-6824098__340.png"
      }}
    >
      <View>
        <Text style={styles.header}>YourZodiac</Text>
      </View>

      <View style={styles.inputBody}>
        <TextInput
          style={styles.input}
          placeholder="write name"
          placeholderTextColor="#aaa"
          value={userName}
          onChangeText={(value) => setUserName(value)}
        />
        <TextInput
          style={styles.input}
          placeholder="write zodiac sign"
          placeholderTextColor="#aaa"
          value={zodiacSign}
          onChangeText={(value) => setZodiacSign(value)}
        />
        <Button
          style={styles.bodyBtn}
          title={submit ? "Clear" : "Submit"}
          onPress={onPressHandler}
        />
        {submit ? (
          <Text style={styles.bodyText}>
            Witam {userName}, twój znak zodiaku to {zodiacSign}
          </Text>
        ) : null}
      </View>

      <View>
        <Text style={styles.footer}>Pavlo Korinovskyi</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#ecf0f1",
    padding: 0,
    margin: 0
  },
  header: {
    width: "100%",
    textAlign: "center",
    fontSize: 30,
    color: "#ddd",
    backgroundColor: "rgba(0,0,0,.5)",
    fontFamily: "Arial"
  },
  inputBody: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  bodyText: {
    textAlign: "center",
    fontSize: 25,
    backgroundColor: "rgba(0,0,0,.5)",
    marginTop: 10,
    color: "white"
  },
  input: {
    width: 200,
    backgroundColor: "#000",
    borderWidth: 1,
    borderColor: "#555",
    borderRadius: 5,
    textAlign: "center",
    fontSize: 20,
    marginBottom: 10,
    color: "#fff"
  },
  footer: {
    fontSize: 30,
    color: "#ddd",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,.5)"
  }
});