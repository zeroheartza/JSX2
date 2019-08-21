import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Picker,
  Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BMI from './components/BMI'

let W="";
let H="";
let Region="Asia";

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      region: 'Asian',
     
    };

  }
  onRegionChange(text)
  {
    Region=text;
  }

  onWChange(text)
  {
    W=text;
  }
  onHChange(text)
  {
    H=text;
  }

  btnPress(){
    const bmi = new BMI();
    let w= Number(W);
    let h=Number(H);
    const b = bmi.bmiCalculate(w, h);
    const c = bmi.checkBmi(b,this.state.region);
    // Alert.alert(this.state.region);
    Alert.alert('BMI is: ' + b.toString()+'\n' + c);
  }
  render() {
    return (
      <LinearGradient
        colors={['#7F7FD5', '#86A8E7', '#91EAE4']}
        style={{ flex: 1 }}>
        <View style={{ flex: 1, marginTop: 50 }}>
          <Text style={styles.txt}>BMI Calculator </Text>
          <TextInput
            style={styles.txtIn2}
            placeholder="Weight"
            onChangeText={(text) => {this.onWChange(text)}}
           
            
          />

          <TextInput
            style={styles.txtIn2}
            placeholder="Height"
            onChangeText={(text) => {this.onHChange(text)}}
            
          />

          
            <Picker
              selectedValue={this.state.region}
              style={styles.picker}  onValueChange={(itemValue, itemIndex) => this.setState({ region: itemValue })}
              >
              <Picker.Item label="Asia" value='Asia' />
              <Picker.Item label="Western" value='Western' />
             
            </Picker>
      

          <TouchableOpacity style={styles.viewBtn}>
            <Text
              style={styles.txt}
              onPress={() => this.btnPress()}>
              OK
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  txtIn2: {
    alignItems: 'center',
    height: 40,
    backgroundColor: 'white',
    padding: 10,
    margin: 5,
    marginLeft : 10,
    marginEnd : 10,
    borderColor: 'black',
    borderWidth: 1,
  },
  viewBtn: {
    height: 40,
    backgroundColor: 'white',
    margin: 10,
    borderColor: 'black',
    borderWidth: 1,
  },

  picker: {
    height:40,
    backgroundColor: 'white',
    padding: 10,
    margin: 5,
    marginLeft : 10,
    marginEnd : 10,
    borderColor: 'black',
    borderWidth: 1,
  },
  txt:{
    textAlign: 'center',
    fontSize: 20, 
    color: '#000000' 
  }
});


