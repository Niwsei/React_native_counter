import { StatusBar } from 'expo-status-bar';
import React  from 'react';
import {  Text, View } from 'react-native';

export default function Component() {
  return (
    <View style={{flex:1 , justifyContent:'center' }}>
      {/* <Text style={{color:'red' , fontSize:20, textAlign:'center'}} >well come to siyon</Text> */}
      <Texts message="123456789" />
     {/*  <StatusBar style="auto" /> */}
    </View>
  );
}


 function Texts({message}){

  return(
    <Text style={{color:'red' , fontSize:20, textAlign:'center'}} >dog {message}</Text>
  )
 }


