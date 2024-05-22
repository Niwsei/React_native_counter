import { StatusBar } from 'expo-status-bar';
import React , {Component }  from 'react';
import {  Text, View } from 'react-native';

export default class workshop1 extends Component {

  render(){
    return(
      <View style={{flex:1 , flexDirection:'column',backgroundColor:'#ff0000' , alignItems:'center',justifyContent:'center'}}>
        <BlinkText message='welcome' option={500} />
      </View>
    )
  }

}


 class BlinkText extends Component{
  constructor(props){
    super(props)
    this.state = {isVisible:true};
    setInterval(() => {
    this.setState(oldState => { 
      return { isVisible: !oldState.isVisible}
    })
    }, this.props.option);
  }

  

  render(){

    let display = this.state.isVisible ? this.props.message : '';
return(
  <Text style={{textAlign:'center' , color:'#ffffff'}}>
    {display}
  </Text>
)

  }

 }


 

