import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Splash = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>Spasdad</View>
      <View style={styles.content}>Splash111111</View>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({

    container:{
     height: '100%', 
     alignItems: 'center',
     backgroundColor:'#131414',
     color:'white'
    },

    logo:{
        flex:0.95,
        justifyContent: 'center',
        textAlign:'center',
        color:'white',
        backgroundColor:'red',
        
    },


    content:{
        flex:0.05,
        color:'white'
        
    },

    
  

  })