import React , {Component} from "react";
import { Platform , StyleSheet , Text , View } from "react-native";




export default class workshop2 extends Component{

    render() {
        return(
            <View style={{flex:1,flexDirection:'column', backgroundColor:'#ffffff'}}>
                <View style={{width:50,height:50 , backgroundColor:'#FFFF00'}} />
                <View style={{width:50,height:50 , backgroundColor:'#00ff00'}} />
                <View style={{width:50,height:50 , backgroundColor:'#ff0000'}} />
            </View>
        );
    }
}