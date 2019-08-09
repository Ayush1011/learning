import React from 'react'
import { View, ScrollView, Text,Image, StyleSheet,Dimensions,StatusBar,ViewPagerAndroid,ImageBackground,TouchableOpacity,TouchableHighlight,Button } from 'react-native';
import ImagesSwiper from "react-native-image-swiper"
import { createAppContainer,  createStackNavigator, DrawerActions } from "react-navigation";
import * as Animatable from 'react-native-animatable';

import LinearGradient from 'react-native-linear-gradient';
import Subjects from './Developer'
import Questions from "./questions";
import Amity from './university/Amity/amity_university'
import firebase from 'react-native-firebase';
import Sastra from './university/Sastra_university/sastra_university'
import CBIT_university from './university/CBIT_university/CBIT_university'
import NitTrichi from './university/National Institute Of Technology ,Tiruchirappalli/nit trichi university'
import University_of_delhi from './university/University_of_delhi/University_of_delhi'
import NitAllahabad from './university/National Institute Of Technology ,Allahabad/nit ,Allahabad_university'
import  Vellore_university from './university/vellore_university/vellore_university'
import Colleges from './College'
// import {Button} from "react-native-vector-icons/FontAwesome5Pro";


const customImg = [
    "https://img.etimg.com/thumb/msid-61941793,width-1200,height-900,imgsize-25928,overlay-etmarkets/photo.jpg",
    "https://s3.ap-south-1.amazonaws.com/hansindia-bucket/h-upload/feeds/2019/04/14/164091-jee.jpg?width=1200&height=720",
    "https://images.shiksha.com/mediadata/images/articles/1493630376phpRLCgJw.jpeg"
];
export  class Home_page extends React.Component {
    constructor()
    {
        super()
        this.state={
            isopen:false,
            isopenRight:false
        }
    }

    static navigationOptions = {
        header: null,
        headerVisible: false,
        headerMode: 'none',
        headerStyle: {
            backgroundColor: 'red'
        },

    }
    render() {



     const isopen=this.state.isopen
        return (
            <View>



               <Image source={require('./android/pic/background.jpg')} style={{
                   resizeMode: 'cover',position:'absolute',height:'100%'
                  }} />



            <ScrollView>


                <View>
                    <View style={{margin: 15, height: 200, borderRadius: 15, overflow: 'hidden',}}>
                        <ScrollView>


                            <ImagesSwiper
                                images={customImg}
                                autoplay={true}
                                autoplayTimeout={3.5}
                                showsPagination={false}
                                //width={width}
                                //height={height - 400}


                            />

                        </ScrollView>
                    </View>


                    <View style={{flexDirection: 'row', height: 100, borderRadius: 50,flex:1}}>

                        { this.state.isopen===true?

                                <TouchableOpacity onPress={()=>this.props.navigation.navigate('college')} style={{flex:.32, marginLeft: '2%'}} >

                                <LinearGradient colors={['#9dd3e4', '#9dd3e4', '#9dd3e4',]} style={{borderRadius:15}} >
                                    <View style={{width: '100%', height: 100, borderRadius: 10,}}>

                                        <Animatable.Text animation="pulse" easing="ease-in-out" iterationCount="infinite"
                                                         style={{alignSelf:'center',justifyContent:'center',textAlign: 'center',fontSize:15,margin:"15%",color:'white',alignItems: "center"}}>Search By College</Animatable.Text>


                                    </View>
                                </LinearGradient>

                            </TouchableOpacity>






                            : <TouchableOpacity onPress={()=>this.props.navigation.navigate('college')} style={{flex:.40, marginLeft: '-70%',transition:'2s'}}>
                                <LinearGradient colors={['#9dd3e4', '#9dd3e4', '#9dd3e4',]} style={{borderRadius:15}} >
                                    <View style={{width: '100%', height: 100, borderRadius: 10,}}>

                                        <Text style={{alignSelf:'center',justifyContent:'center',textAlign: 'center',fontSize:15,margin:"20%",color:'white',alignItems: "center"}}>Search By College</Text>
                                    </View>
                                </LinearGradient>
                            </TouchableOpacity>
                        }




                        <TouchableOpacity  style={{flex:.35, }}>

                        <View style={{width: '100%', height: 100, borderRadius: 50,flexDirection:'row',alignItems:'center',justifyContent:'center',alignSelf:'center'}}>

                            <TouchableOpacity style={{width:50,borderRadius:50,height:50,backgroundColor:"#9dd3e4",marginTop:"5%",margin:'2%'}}
                                              onPress={()=>this.setState({isopen:!this.state.isopen})}>
                                <Animatable.Text animation="pulse" easing="ease-in-out" iterationCount="infinite" style={{alignSelf:'center',justifyContent:'center',textAlign: 'center',fontSize:25,color:'white',alignItems: "center",margin:"16%"}}>🏢</Animatable.Text>

                            </TouchableOpacity>


                            <TouchableOpacity style={{width:50,borderRadius:50,height:50,backgroundColor:"#9dd3e4",marginTop:"5%",margin:"2%"}}
                                              onPress={()=>this.setState({isopenRight:!this.state.isopenRight})}>
                                <Animatable.Text animation="pulse" easing="ease-in-out" iterationCount="infinite" style={{alignSelf:'center',justifyContent:'center',textAlign: 'center',fontSize:25,color:'white',alignItems: "center",margin:"16%"}}>📖</Animatable.Text>

                            </TouchableOpacity>
                        </View>
                        </TouchableOpacity>







                        {this.state.isopenRight === true ?
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('questions')}
                                              style={{flex: .32, marginRight: '2%'}}>
                                <LinearGradient colors={['#9dd3e4', '#9dd3e4', '#9dd3e4',]} style={{borderRadius: 15}}>
                                    <View style={{width: '100%', height: 100, borderRadius: 10,}}>


                                        <Animatable.Text animation="pulse" easing="ease-in-out" iterationCount="infinite" style={{alignSelf:'center',justifyContent:'center',textAlign: 'center',fontSize:15,margin:"15%",color:'white',alignItems: "center"}}>Major Topics For Exam</Animatable.Text>

                                    </View>
                                </LinearGradient>
                            </TouchableOpacity>


                            :


                            <TouchableOpacity onPress={() => this.props.navigation.navigate('questions')}
                                              style={{flex: .40, marginRight: '-70%'}}>
                                <LinearGradient colors={['#9dd3e4', '#9dd3e4', '#9dd3e4',]} style={{borderRadius: 15}}>
                                    <View style={{width: '100%', height: 100, borderRadius: 10,}}>


                                        <Text style={{
                                            alignSelf: 'center',
                                            justifyContent: 'center',
                                            textAlign: 'center',
                                            fontSize: 15,
                                            margin: "17%",
                                            color: 'white',
                                            alignItems: "center",
                                        }}>Major Topics For Exam</Text>

                                    </View>
                                </LinearGradient>
                            </TouchableOpacity>

                        }

                    </View>
                    </View>

                    <Text style={{
                        textAlign: 'center',
                        margin: 15,
                        fontWeight: 'bold',
                        fontFamily: 'roboto',
                        marginTop:55
                    }}> MAJOR COLLEGES</Text>

                    <ScrollView horizontal={true}>

                        <View style={{
                            flexDirection: 'row',
                            height: 200,
                            borderRadius: 15,

                            margin: 5,
                        }}>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('amity')}>
                                <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#9dd3e4', '#9dd3e4', '#9dd3e4',]} style={{borderRadius:10,margin:5}}>
                                    <View
                                        style={{width: 270, height: 150, borderRadius: 45, margin: 5,}}>

                                        <Image source={require('./android/pic/amity.png')}  style={{width:105,height:125,margin:15}}/>

                                        <Text style={{marginLeft:150,color:'white',position:'absolute',marginTop:55,fontSize:30,fontFamily: 'Cochin'}}>AMITY </Text>

                                    </View>
                                </LinearGradient>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('nitT')}>
                                <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#9dd3e4', '#9dd3e4', '#9dd3e4',]} style={{borderRadius:10,margin:5}}>
                            <View
                                style={{width: 250, height: 150, borderRadius: 45, margin: 5,}}>

                                <Image source={{uri:'https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/National_Institute_of_Technology_Trichy_Logo.png/230px-National_Institute_of_Technology_Trichy_Logo.png'}}  style={{width:95,height:95,margin:25}}/>

                                <Text style={{marginLeft:150,color:'white',position:'absolute',marginTop:45,fontSize:25,fontFamily: 'Cochin'}}>NIT Trichy</Text>

                            </View>
                                </LinearGradient>
                            </TouchableOpacity>


                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('University_of_delhi')}>
                                <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#9dd3e4', '#9dd3e4', '#9dd3e4',]} style={{borderRadius:10,margin:5}}>
                            <View
                                style={{width: 250, height: 150, borderRadius: 45, margin: 5,}}>

                                <Image source={{uri:'https://upload.wikimedia.org/wikipedia/en/8/84/University_of_Delhi.png'}}  style={{width:95,height:95,margin:25}}/>

                                <Text style={{marginLeft:150,color:'white',position:'absolute',marginTop:50,fontSize:20,fontFamily: 'Cochin'}}>University Of Delhi</Text>


                            </View>
                                </LinearGradient>

                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('cbit')}>
                                <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#9dd3e4', '#9dd3e4', '#9dd3e4',]} style={{borderRadius:10,margin:5}}>
                            <View
                                style={{width: 250, height: 150, borderRadius: 45, margin: 5,}}>

                                <Image source={{uri:'https://upload.wikimedia.org/wikipedia/en/thumb/6/68/Chaitanya_Bharathi_Institute_of_Technology_logo.png/220px-Chaitanya_Bharathi_Institute_of_Technology_logo.png'}}  style={{width:95,height:125,margin:15.}}/>

                                <Text style={{marginLeft:150,color:'white',position:'absolute',marginTop:55,fontSize:30,fontFamily: 'Cochin'}}>CBIT</Text>

                            </View>
                                </LinearGradient>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('nitA')}>
                                <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#9dd3e4', '#9dd3e4', '#9dd3e4',]} style={{borderRadius:10,margin:5}}>
                            <View
                                style={{width: 250, height: 150, borderRadius: 45, margin: 5,}}>

                                <Image source={{uri:'https://collegehumara.com/static/img/logo/nit/nit-allahabad-logo.png'}}  style={{width:100
                                    ,height:105,margin:25}}/>

                                <Text style={{marginLeft:150,color:'white',position:'absolute',marginTop:55,fontSize:30,fontFamily: 'Cochin'}}>MNNIT</Text>

                            </View>
                                </LinearGradient>
                            </TouchableOpacity>

                        </View>
                    </ScrollView>


            </ScrollView>

</View>


        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 5,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 30,
        marginBottom: 10,
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#9dd3e4',
        backgroundColor: 'transparent',
    },

});




const RootStack = createStackNavigator(
    {
        home:Home_page,
        college:Colleges,
        amity:Amity,

        University_of_delhi:University_of_delhi,
        cbit:CBIT_university,
        vellore:Vellore_university,
        Sastra:Sastra,
        nitA:NitAllahabad,
        subjects:Subjects,
        questions:Questions,
        nitT:NitTrichi
    },
    {
        headerMode:'none'
    }

);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}