import React, { Component } from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity, Image} from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';
import emails from './vellore_university_subjects';
const KEYS_TO_FILTERS = ['user.name', 'subject'];
import Pdfs from '../../pdfreader'
import firebase from "react-native-firebase";
import {createAppContainer, createStackNavigator} from "react-navigation";


export class Vellore_university extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
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
                            <TouchableOpacity onPress={() => this.getimage(email.subject, email.user.name)} key={email.id}
                                              style={styles.emailItem}>

                                <View>
                                    <Text style={{color:'white'}}>{email.user.name}</Text>

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
        justifyContent: 'flex-start',

    },
    emailItem:{
        borderBottomWidth: 0.5,
        borderColor: 'white',
        padding: 10,
        margin:5
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
        Home:Vellore_university ,
        pdf:Pdfs,

    },
    {
        initialRouteName: 'Home',
        headerMode:'none',
    }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
    render() {
        return <AppContainer />;
    }
}
