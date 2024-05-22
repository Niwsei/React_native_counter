import { StatusBar } from 'expo-status-bar';
import React , {useState , useEffect}  from 'react';
import {  Text, View } from 'react-native';

export default function workshop() {
  return (
    <View style={{flex:1 , justifyContent:'center' }}>
      {/* <Text style={{color:'red' , fontSize:20, textAlign:'center'}} >well come to siyon</Text> */}
      <BlinkText message="5555" interval={1000} />
     {/*  <StatusBar style="auto" /> */}
    </View>
  );
}


 function BlinkText({message , interval}){
  const {isVisible , setIsVisible} = useState(true);

  useEffect(() => {
const timer = setInterval(() => {
  setIsVisible((isVisible) => !isVisible);
} , interval);

  return () => clearInterval(timer)
/*     let display = isVisible ? message :''; */
} , [interval])

  return(
    <Text style={{color:'red' , fontSize:20, textAlign:'center' }  } >{message}</Text>
  )
 }


 

