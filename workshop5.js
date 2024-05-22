import React , {Component} from "react";
import {  View , Button , Alert , TouchableHighlight , Image } from "react-native";




export default class workshop5 extends Component{

    constructor(props) {
super(props);
this.state = {active:false};
/* this.clickMe = this.clickMe.bind(this); */
    }

    clickMe() {
       this.setState(oldState => {
        return {active: !oldState.active}
       });
    }

   /*  clickMewithArrowFunction =  () => {
        this.setState(oldState => {
            return {active: !oldState.active}
           });
    } */
  

    render() {
        return(
            <View style={{flex:1,flexDirection:'column' , padding:10 , justifyContent:"center" , alignItems:"center", backgroundColor:'#ffffff'}}>
                <Button title={this.state.active ? 'Active' : 'InActive'} onPress={this.clickMe.bind(this)} />
                {/* <Button title={this.state.active ? 'Active' : 'InActive'} onPress={this.clickMewithArrowFunction} /> */}
            </View>
        );
    }
}