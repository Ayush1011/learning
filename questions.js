
import React from 'react';
import {Modal, StyleSheet, View,TextInput, Text, TouchableOpacity, Button, Linking, Alert, Image,ScrollView,WebView} from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';
import emails from './bysubjects';
import PDFView from 'react-native-view-pdf';
import Pdfs from './second_pdfreader'
const KEYS_TO_FILTERS = ['user.name', 'subject'];
import {createStackNavigator, createAppContainer, DrawerActions} from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import firebase from 'react-native-firebase'



export class Questions extends React.Component{
    constructor(props){
        super(props)
        this.pdf = null
        this.state={
            urit:'',
            searchTerm: '',
            ide:'',

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


            <View>
                <Image source={require('./android/pic/background.jpg')} style={{ flex: 1,
                    resizeMode: 'cover',position:'absolute'}} />

                {/*<Button title={'download files'} onPress={()=>this.getimage()} />*/}

                <SearchInput
                    onChangeText={(term) => {
                        this.searchUpdated(term)
                    }}
                    style={styles.searchInput}
                    placeholder="Type a Topics to search..."
                />
                <ScrollView>
                    {filteredEmails.map(email => {
                        return (
                            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#938F9B', '#8F8A96', '#716E77',]} style={{borderRadius:10,margin:'5%'}}>
                                <TouchableOpacity onPress={() => this.getimage(email.subject, email.user.name)} key={email.id}
                                                  style={{borderWidth: 1,borderRadius:10,width:'100%',height:50,alignContent:'center',justifyContent:'center',alignSelf:'center',borderColor:'white'}}>

                                    <View>
                                        <Text style={{margin:'5%'}}>{email.user.name}</Text>

                                    </View>
                                </TouchableOpacity>
                            </LinearGradient>
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
        Home:Questions,
        pdf:Pdfs

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
