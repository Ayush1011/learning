import React, { Component } from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity, Image,Button} from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';
import emails from './University_of_delhi_subjects 3-4year';
import emailss from './University_of_delhi_subjects 1-2year'
const KEYS_TO_FILTERS = ['user.name', 'subject'];
import Pdfs from '../../pdfreader'
import firebase from "react-native-firebase";


import {createAppContainer, createStackNavigator} from "react-navigation";

import * as Animatable from "react-native-animatable";
import LinearGradient from "react-native-linear-gradient";
import {Collapse, CollapseBody, CollapseHeader} from "accordion-collapse-react-native";



export class University_of_delhi extends Component<{}> {


    render() {



        return (

            <View style={styles.container}>
                <Image source={require('../../android/pic/background.jpg')} style={{ flex: 1,
                    resizeMode: 'cover',position:'absolute'}} />


                <View style={{justifyContent: 'center',alignSelf:'center',alignItems: "center",marginTop:'50%'}}>


                    <Collapse style={{padding:15,margin:15,}}>
                        <CollapseHeader style={{width:300,height:50,margin:15}}>
                            <View>
                                <Text style={{justifyContent:'center',textAlign: 'center',borderWidth:2,borderColor:'grey',borderRadius:30,padding:15,fontSize: 15,fontFamily:'algerian',color: 'grey'}}>1/2 year B.Tech/B.com</Text>
                            </View>
                        </CollapseHeader>
                        <CollapseBody  style={{padding:15,margin:15,borderRadius:30,justifyContent:'center',alignItems:'center'}}>
                            <LinearGradient colors={['#9dd3e4', '#9dd3e4', '#716E77',]}
                                            style={{fontSize:15,borderRadius:15,width:'100%',position:'absolute'}}>
                                <TouchableOpacity onPress={()=>this.props.navigation.navigate('first')}
                                >



                                    <Animatable.Text animation="pulse" easing="ease-in-out" iterationCount="infinite" style={{alignSelf:'center',justifyContent:'center',textAlign: 'center',fontSize:15,margin:"5%",color:'grey',alignItems: "center"}}>1/2 year B.Tech/B.com🔥🔥</Animatable.Text>




                                </TouchableOpacity>
                            </LinearGradient>

                        </CollapseBody>
                    </Collapse>
                    <Collapse style={{padding:15,margin:15}}>
                        <CollapseHeader style={{width:300,height:50,margin:15}}>
                            <View>
                                <Text style={{justifyContent:'center',textAlign: 'center',borderWidth:2,borderColor:'grey',borderRadius:30,padding:15,fontSize: 15,fontFamily:'algerian',color: 'grey'}}>3/4 year B.Tech/B.com</Text>
                            </View>
                        </CollapseHeader>

                        <CollapseBody  style={{padding:15,margin:15,borderRadius:30,justifyContent:'center',alignItems:'center'}}>
                            <LinearGradient colors={['#9dd3e4', '#9dd3e4', '#716E77',]}
                                            style={{fontSize:15,borderRadius:15,width:'100%',position:'absolute'}}>
                                <TouchableOpacity onPress={()=>this.props.navigation.navigate('second')}>

                                    <Animatable.Text animation="pulse" easing="ease-in-out" iterationCount="infinite" style={{alignSelf:'center',justifyContent:'center',textAlign: 'center',fontSize:15,margin:"5%",color:'grey',alignItems: "center"}}>3/4 year B.Tech/B.com🔥</Animatable.Text>


                                </TouchableOpacity>
                            </LinearGradient>
                        </CollapseBody>
                    </Collapse>
                </View>






            </View>

        )

}

}


class Year1 extends Component{

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            title:"Loading",
            message:"This is a message!",
            isCancelable:true
        }
    }
    searchUpdated(term) {
        this.setState({ searchTerm: term })
    }




    getimage=(x,name)=>
    {
        var storage = firebase.storage();




        var pathReference = storage.ref(x)
        pathReference.getDownloadURL().then((url)=> {

            this.setState({
                urit:url
            })



            alert("Paper Fetched")





            this.props.navigation.navigate('pdf',{
                url:url,
                name:name
            })
        }).catch(function(error) {


            switch (error.code) {
                case 'storage/object-not-found':
                    // File doesn't exist
                    break;

                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break;

                case 'storage/canceled':
                    // User canceled the upload
                    break;



                case 'storage/unknown':
                    // Unknown error occurred, inspect the server response
                    break;
            }
        });
    }









    render() {

        const filteredEmails = emailss.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

        const resourceType = 'url';

        return (


            <View style={styles.container}>

                {/*<Button title={'download files'} onPress={()=>this.getimage()} />*/}
                <Image source={require('../../android/pic/background.jpg')} style={{ flex: 1,
                    resizeMode: 'cover',position:'absolute'}} />


                <SearchInput
                    onChangeText={(term) => {
                        this.searchUpdated(term)
                    }}
                    style={styles.searchInput}
                    placeholder="Type a message to search"
                />
                <ScrollView>
                    {filteredEmails.map(email => {
                        return (
                            <TouchableOpacity onPress={() => {this.getimage(email.subject, email.user.name);alert('DOWNLOADING,\ndepends on your network')}} key={email.id}
                                              style={styles.emailItem}>

                                <View>
                                    <Text style={{color:'grey'}}>{email.user.name}</Text>

                                </View>
                            </TouchableOpacity>
                        )
                    })}





                </ScrollView>




            </View>


        )

    }
}


class Year2 extends Component{

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            title:"Loading",
            message:"This is a message!",
            isCancelable:true
        }
    }
    searchUpdated(term) {
        this.setState({ searchTerm: term })
    }




    getimage=(x,name)=>
    {
        var storage = firebase.storage();




        var pathReference = storage.ref(x)
        pathReference.getDownloadURL().then((url)=> {

            this.setState({
                urit:url
            })



            alert("Paper Fetched")





            this.props.navigation.navigate('pdf',{
                url:url,
                name:name
            })
        }).catch(function(error) {


            switch (error.code) {
                case 'storage/object-not-found':
                    // File doesn't exist
                    break;

                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break;

                case 'storage/canceled':
                    // User canceled the upload
                    break;



                case 'storage/unknown':
                    // Unknown error occurred, inspect the server response
                    break;
            }
        });
    }









    render() {

        const filteredEmails = emails.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

        const resourceType = 'url';

        return (


            <View style={styles.container}>

                {/*<Button title={'download files'} onPress={()=>this.getimage()} />*/}
                <Image source={require('../../android/pic/background.jpg')} style={{ flex: 1,
                    resizeMode: 'cover',position:'absolute'}} />
                <SearchInput
                    onChangeText={(term) => {
                        this.searchUpdated(term)
                    }}
                    style={styles.searchInput}
                    placeholder="Type a message to search"
                />
                <ScrollView>
                    {filteredEmails.map(email => {
                        return (
                            <TouchableOpacity onPress={() => {this.getimage(email.subject, email.user.name);alert('DOWNLOADING,\ndepends on your network')}} key={email.id}
                                              style={styles.emailItem}>

                                <View>
                                    <Text style={{color:'grey'}}>{email.user.name}</Text>

                                </View>
                            </TouchableOpacity>
                        )
                    })}





                </ScrollView>




            </View>


        )

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',


    },
    emailItem:{
        borderBottomWidth: 0.5,
        borderColor: 'grey',
        padding: 10,
        margin:5,color:'grey'
    },
    emailSubject: {
        color: 'rgba(0,0,0,0.5)'
    },
    searchInput:{
        padding: 10,
        borderColor: '#CCC',
        borderWidth: 1,margin:5
    }
});


const RootStack = createStackNavigator(

    {
        Home:University_of_delhi ,
        pdf:Pdfs,
        first:Year1,
        second:Year2

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
