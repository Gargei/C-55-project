import React, { Component } from 'react';
import { View, Button, Alert, TouchableOpacity, Text } from 'react-native';
import { Audio } from 'expo-av';

export default class App extends Component {
   playSound1 = async () => {
     await Audio.Sound.createAsync(
       {uri: ''},
       {shouldPlay: true}
     )
  }

 playSound2 = async () => {
     await Audio.Sound.createAsync(
       {uri: ''},
       {shouldPlay: true}
     )
  }

  playSound3 = async () => {
     await Audio.Sound.createAsync(
       {uri: ''},
       {shouldPlay: true}
     )
  }

   playSound4 = async () => {
     await Audio.Sound.createAsync(
       {uri: ''},
       {shouldPlay: true}
     )
  }

   playSound5 = async () => {
     await Audio.Sound.createAsync(
       {uri: ''},
       {shouldPlay: true}
     )
  }

  stopSound = async () => {
     await Audio.Sound.createAsync(
       {uri: ''},
       {shouldPlay: false}
     )
  }

  render() {
    return (
      <View style={{backgroundColor:'#9DB1C2',justifyContent:'center', 
     paddingBottom:90, paddingTop:20}}>
        <View>
        <Text style={{fontFamily: 'notoserif', fontSize: 20, backgroundColor:'white'}}>DJ WhiteHat !!</Text>
          <TouchableOpacity
            style={{
              width: 150,
              height: 150,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
              backgroundColor: '#D1ABAA',
              borderWidth: 2,
              borderColor: 'white',
              marginTop:20,
              marginLeft: 150
            }}
            onPress={() => {this.playSound1}}>
            <Text style={{fontSize:30, fontWeight: 5, fontFamily:"serif", alignItems: 'center'}}> Sound 1</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={{
              width: 300,
              height: 100,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
              backgroundColor: '#8DD8E0',
              borderWidth: 2,
              borderColor: 'white',
              marginTop: 20,
              marginLeft: 10
            }}
           onPress={() => {this.playSound2}}>
            <Text style={{fontSize:30, fontWeight: 5, alignItems: 'center'}}> Sound 2</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={{
              width: 200,
              height: 200,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
              backgroundColor: '#EEDC91',
              borderWidth: 2,
              borderColor: 'white',
              marginTop:20
            }}
            onPress={() => {this.playSound3}}>
            <Text style={{fontSize:30, fontWeight: 5, fontFamily:"serif", alignItems: 'center'}}> Sound 3</Text>
          </TouchableOpacity>
        </View>


        <View>
          <TouchableOpacity
            style={{
               width: 300,
              height: 100,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
              backgroundColor: '#C68FD0',
              borderWidth: 2,
              borderColor: 'white',
              marginTop:20,
              marginLeft:10
            }}
           onPress={() => {this.playSound4}}>
            <Text style={{fontSize:30, fontWeight: 5, alignItems: 'center'}}> Sound 4</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={{
               width: 150,
              height: 150,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
              backgroundColor: '#ACE3CD',
              borderWidth: 2,
              borderColor: 'white',
              marginTop:20,
              marginLeft:150
            }}
          onPress={() => {this.playSound5}}>
            <Text style={{fontSize:30, fontWeight: 5, fontFamily:"serif", alignItems: 'center'}}> Sound 5</Text>
          </TouchableOpacity>
        </View>
        


        <TouchableOpacity
          style={{
            width: 300,
            height: 150,            
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 30,
            backgroundColor: '#74694B',
            borderWidth: 2,
            borderColor: 'white',
            marginTop:20,
            marginLeft:10
          }}
         onPress={() => {this.stopSound}}>
            <Text style={{fontSize:30, fontWeight: 5, fontFamily:"serif", alignItems: 'center'}}> Stop Sound</Text>
        </TouchableOpacity>
      </View>
    );
  }
}






