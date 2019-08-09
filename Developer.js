import React, { Component } from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Linking} from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';
import emails from './bysubjects';
const KEYS_TO_FILTERS = ['user.name', 'subject'];
import Pdfs from './second_pdfreader'
import firebase from "react-native-firebase";
import {createAppContainer, createStackNavigator} from "react-navigation";
import LinearGradient from "react-native-linear-gradient";
import MarqueeText from 'react-native-marquee';

export class Developer extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        }
    }






    render() {


        return (


            <View>
                <Image source={require('./android/pic/background.jpg')} style={{ flex: 1,height:"110%",
                    resizeMode: 'cover',position:'absolute'}} />

                {/*<Button title={'download files'} onPress={()=>this.getimage()} />*/}


                <ScrollView>



                    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#9dd3e4', '#9dd3e4', '#9dd3e4',]} style={{width:300,margin:5,height:150,borderRadius: 50,marginBottom:30,marginLeft:"8%",marginTop:50}} >
                        <TouchableOpacity >
                            <View>
                                <Text  style={{alignContent:'center',justifyContent:'center',alignSelf:'center',textAlign: 'center',margin:15,fontSize:20,color:'white'}}>Developer</Text>
                                <Text style={{alignContent:'center',justifyContent:'center',alignSelf:'center',textAlign: 'center',margin:15,fontSize:15,color:'white'}}>Ayush Kumar , student Lpu</Text>
                            </View>

                        </TouchableOpacity>

                    </LinearGradient>

                    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#9dd3e4', '#9dd3e4', '#9dd3e4',]} style={{width:300,margin:5,height:150,borderRadius: 50,marginBottom:30,marginLeft:"8%",marginTop:50}} >
                        <TouchableOpacity >
                            <View>
                                <Text  style={{alignContent:'center',justifyContent:'center',alignSelf:'center',textAlign: 'center',margin:15,fontSize:25,color:'white'}}>Contributer</Text>
                                <Text style={{alignContent:'center',justifyContent:'center',alignSelf:'center',textAlign: 'center',margin:15,fontSize:15,color:'white'}}>Shahid Ali ,Student Jamia Hamdard</Text>
                            </View>

                        </TouchableOpacity>

                    </LinearGradient>
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#9dd3e4', '#9dd3e4', '#9dd3e4',]} style={{width:300,margin:5,height:100,borderRadius: 50,marginBottom:30,marginLeft:"8%",marginTop:50}} >
                        <TouchableOpacity onPress={() => Linking.openURL('mailto:ayushraichand1@gmail.com?cc=Upload your paper &body=Happy to help\n'
                            )}>
                            <View>
                                <Text  style={{alignContent:'center',justifyContent:'center',alignSelf:'center',textAlign: 'center',margin:15,fontSize:20,color:'white'}}>Official Email</Text>
                                <Text style={{alignContent:'center',justifyContent:'center',alignSelf:'center',textAlign: 'center',margin:5,fontSize:15,color:'white'}}>Ayushraichand1@gmail.com</Text>
                            </View>

                        </TouchableOpacity>

                    </LinearGradient>


                </ScrollView>




            </View>









        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start'
    },
    emailItem:{
        borderBottomWidth: 0.5,
        borderColor: 'rgba(0,0,0,0.3)',
        padding: 10
    },
    emailSubject: {
        color: 'rgba(0,0,0,0.5)'
    },
    searchInput:{
        padding: 10,
        borderColor: '#CCC',
        borderWidth: 1,margin:'2%',
        borderRadius:10,color:'white'
    }
});

const RootStack = createStackNavigator(

    {
        Home:Developer ,
        Details:Pdfs

    },
    {
        initialRouteName: 'Home',
        headerMode:'none',
    }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}
