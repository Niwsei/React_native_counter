import React , {Component} from "react";
import { Platform , StyleSheet , Text   ,TextInput, View } from "react-native";




export default class workshop3 extends Component{

    constructor(props) {
super(props);
this.state = {text:''};

    }

    render() {
        return(
            <View style={{flex:1,flexDirection:'column', backgroundColor:'#ffffff'}}>
            <TextInput
            style={{height:40 , backgroundColor:'#ffff00'}}
            placeholder="type"
            onChangeText={(text) => this.setState({text})}
            />
            <Text style={{padding:10,fontSize:42}}>
                {this.state.text.split(' ').map((word) => word && 'X').join('')}
            </Text>
            </View>
        );
    }
}