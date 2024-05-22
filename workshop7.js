import React , {Component} from "react";
import {  View , FlatList , Text ,Image , ImageBackground ,StyleSheet } from "react-native";




export default class workshop7 extends Component{

    constructor(props) {
super(props);
    }


    renderListHeader(){
        return(
            <View>
                <Image source={{uri:'https://reactjs.org/logo-og.png'}} style={{width:100 , height:100 ,marginBottom:20}} resizeMode="contain" />
            </View>
        )
    }

    renderItem(item){
        const {Text1, Text2, img} = styles;
        return(
        <View style={{flex:1,flexDirection:"column" , backgroundColor:'white' , marginBottom:20  , borderRadius:5 }}>
            <View style={{flexDirection:'row' , margin:16}}>
            <Image source={{uri:'https://picsum.photos/200/300'}} style={img} />
            <View style={{flexDirection:'column' , marginLeft:10}}>
            <Text style={Text1}>Title</Text>
            <Text style={Text2}>SubTitle</Text>
            </View>
            </View>
            <Image source={{uri:'https://picsum.photos/seed/picsum/450/300'}} style={{width:'100%' , height:250}} />
        </View>
    )
    }
  

    render() {
        return(
            <View style={styles.container}>
                <ImageBackground style={styles.imgbackground}>

             <FlatList style={styles.list} ListHeaderComponent={this.renderListHeader} data={[1,2,3]}  renderItem={({item}) => this.renderItem(item)} />
                </ImageBackground>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    container:{flex:1,flexDirection:'column' , padding:10   ,  backgroundColor:'#ffffff' , alignItems:"center",justifyContent:"center" },
    Text1:{color:'#000000ee'},
    Text2:{color:'#000000aa'},
    list:{paddingLeft: 32 , paddingRight: 32},
    imgbackground:{width:'30%' , height:'100%' , backgroundColor:'pink' ,justifyContent:"center"},
    img:{width:100 , height:100 ,borderRadius:50},
})

//  rnce ຄືການສ້າງ components ເບບໄວ