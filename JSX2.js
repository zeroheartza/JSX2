import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

let names = [];
let math = [];
let phy = [];
let com = [];

export default class App extends React.Component {



  onNameChange(index,text)
  {
      names[index]=text;
  }
  onMathChange(index,text)
  {
      math[index]=text;
  }
 onPhyChange(index,text)
  {
      phy[index]=text;
  }
  onComChange(index,text)
  {
      com[index]=text;
  }

  onCalculate(){
    let i;
    let sum;
    let max = -1;
    let index =0;
    for(i=0;i<3;i++){
      sum=math[i]+phy[i]+com[i];
      if(sum>max){
        max=sum;
        index=i;
      }
    }
    Alert.alert(names[index]);
  }

  
  render() {
    return (
      <LinearGradient
        colors={['#7F7FD5', '#86A8E7', '#91EAE4']}
        style={{ flex: 1 }}>

        <View style={{ flex: 1 }}>
          <ScrollView style={{ flex: 1 }}> 
          <Text style={styles.txtShow}> Student1 </Text>
          <TextInput
            style={styles.inputText}
            placeholder="Name"
            onChangeText={(text) => { this.onNameChange(0, text) }} />
          <TextInput
            style={styles.inputText}
            placeholder="Mathematics"
            onChangeText={(text) => { this.onMathChange(0, Number(text)) }} />

          <TextInput
            style={styles.inputText}
            placeholder="Physic"
            onChangeText={(text) => { this.onPhyChange(0, Number(text)) }} />

          <TextInput
            style={styles.inputText}
            placeholder="Computer"
            onChangeText={(text) => { this.onComChange(0, Number(text)) }} />

          <Text style={styles.txtShow}> Student2 </Text>
          <TextInput
            style={styles.inputText}
            placeholder="Name"
            onChangeText={(text) => { this.onNameChange(1, text) }} />
          <TextInput
            style={styles.inputText}
            placeholder="Mathematics"
            onChangeText={(text) => { this.onMathChange(1, Number(text)) }} />

          <TextInput
            style={styles.inputText}
            placeholder="Physic"
            onChangeText={(text) => { this.onPhyChange(1, Number(text)) }} />

          <TextInput
            style={styles.inputText}
            placeholder="Computer"
            onChangeText={(text) => { this.onComChange(1, Number(text)) }} />

          <Text style={styles.txtShow}> Student3 </Text>
          <TextInput
            style={styles.inputText}
            placeholder="Name"
            onChangeText={(text) => { this.onNameChange(2, text) }} />
          <TextInput
            style={styles.inputText}
            placeholder="Mathematics"
            onChangeText={(text) => { this.onMathChange(2, Number(text)) }} />

          <TextInput
            style={styles.inputText}
            placeholder="Physic"
            onChangeText={(text) => { this.onPhyChange(2, Number(text)) }} />

          <TextInput
            style={styles.inputText}
            placeholder="Computer"
            onChangeText={(text) => { this.onComChange(2, Number(text)) }} />


          <TouchableOpacity
            style={styles.touchableUser}
            onPress={() => this.onCalculate()}>
            <Text style={styles.txtButton}>Calculate</Text>
          </TouchableOpacity>


          </ScrollView>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  txtShow: {
    margin: 5,
    fontSize: 20,
    color: 'white'
  },
  txtButton: {
    fontSize: 20,
    color: '#ffffff',
    textAlign: 'center'
  },
  inputText: {
    alignItems: 'center',
    height: 50,
    backgroundColor: 'transparent',
    padding: 10,
    margin: 5,
    marginLeft: 10,
    marginEnd: 10,
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 1,
    fontSize: 20,
  },
  touchableUser: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 1,
    margin: 5,
    marginLeft: 10,
    marginEnd: 10,
    marginTop: 25,
  }
});