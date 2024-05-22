import React , {Component} from "react";
import {  View , Button , Alert , TouchableHighlight , Image } from "react-native";




export default class workshop6 extends Component{

    constructor(props) {
super(props);
    }

  

    render() {
        return(
            <View style={{flex:1,flexDirection:'column' , padding:10 , justifyContent:"center" , backgroundColor:'#ffffff'}}>
              <Image resizeMode="center" source={{uri:'https://reactjs.org/logo-og.png'}} style={{width:undefined , height:100}} />
            </View>
        );
    }
}