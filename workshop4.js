import React , {Component} from "react";
import {  View , Button , Alert , TouchableHighlight , Image } from "react-native";




export default class workshop4 extends Component{

    constructor(props) {
super(props);
this.state = {text:''};

    }

    clickMe(){
        alert("Thanks you")
    }
    longClickMe(){
        alert("long Click me")
    }

    render() {
        return(
            <View style={{flex:1,flexDirection:'column' , padding:10 , justifyContent:"center" , alignItems:"center", backgroundColor:'#ffffff'}}>
    <TouchableHighlight onPress={this.clickMe} underlayColor="none" onLongPress={this.longClickMe} >
    <Image  resizeMode="center" source={{uri:'https://reactjs.org/logo-og.png'}} style={{width:100 , height:100 ,marginTop:20}} />
    </TouchableHighlight>
            </View>
        );
    }
}