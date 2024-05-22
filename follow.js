import { View, Text  ,TextInput ,StyleSheet} from 'react-native'
import React , {useState} from 'react'

const follow = () => {

    const [state , setState] = useState('')

  return (
    <View style={styles.container}>
      <Text>follow</Text>
      <TextInput style={styles.input} placeholderTextColor={'pink'} 
      placeholder='wow' 
      keyboardType='numbeeric'
      secureTextEntry={false}
      onSubmitEditing={(val) => setState(val.nativeEvent,Text)}
      />
      <Text>
        hi : {state}
      </Text>
    </View>
  )
}

export default follow



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#ffa689c0',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Petsarath OT',
    },
    input: {
        backgroundColor:'white',
        padding:10,
        borderWidth: 3,
        lineHeight:30,
        fontWeight: 'bold',
        fontSize:25,
        borderRadius:10,
        
    }
})