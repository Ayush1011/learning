
import React from 'react';
import {Modal, StyleSheet, View,TextInput, Text, TouchableOpacity, Button, Linking, Alert, Image,ScrollView,WebView} from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';
import emails from './bysubjects';
import PDFView from 'react-native-view-pdf';
import Pdfs from './second_pdfreader'
import AI from './subjects/Artificial Intelligence/Artificial Intelligence main'
import Business_Com from './subjects/Business Communication/Business Communication main'
import Business_Math from './subjects/Business Mathematics/Business Mathematics main'
import Business_org from './subjects/Business Organisation/Business Organisation main'
import Business_Res from './subjects/Business Research Method/Business Research Method main'
import Business_Sat from './subjects/Business Statistics/Business Statistics main'
import Capital_Market from './subjects/Capital Markets/Capital Markets main'
import Communication_Skill from './subjects/Communication Skill English/Communication Skill English main'
import Company_Account from './subjects/Company Account/Company Account main'
import Company_Law from './subjects/Company Law/Company Law main'
import Computer_Applications from './subjects/Computer Applications in Management main/Computer Applications in Management main'
import Computer_Fun from './subjects/Computer Fundamentals/Computer Fundamentals paper'
import Computer_Gra from './subjects/Computer Graphics/Computer Graphics main'
import Computer_Net from './subjects/Computer Networking Internet/Computer Networking Internet main'
import Computer_Pro from './subjects/COMPUTER PROGRAMMING FUNDAMENTALS main/COMPUTER PROGRAMMING FUNDAMENTALS main'
import Computer_Prot from './subjects/Consumer Protection/Consumer Protection main'
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



    set_screen=(x)=> {
        if (x === 'Artificial Intelligence') {
            this.props.navigation.navigate('AI')
        } if (x === 'Business Communication') {
            this.props.navigation.navigate('BC')
        }if (x === 'Business Mathematics') {
            this.props.navigation.navigate('BM')
        }if (x === 'Business Origination') {
            this.props.navigation.navigate('BO')
        }if (x === 'Business Research Method') {
            this.props.navigation.navigate('BR')
        }
        if (x === 'Business Statistics') {
            this.props.navigation.navigate('BS')
        }
        if (x === 'Capital Market') {
            this.props.navigation.navigate('CM')
        }
        if (x === 'Communication Skill English paper') {
            this.props.navigation.navigate('COS')
        }
        if (x === 'Computer Applications in Management') {
            this.props.navigation.navigate('Comp_A')
        } if (x === 'Computer Fundamentals paper') {
            this.props.navigation.navigate('CF')
        } if (x === 'Computer Graphics') {
            this.props.navigation.navigate('CG')
        } if (x === 'Company Law') {
            this.props.navigation.navigate('CL')
        }
        if (x === 'Computer Networking Internet') {
            this.props.navigation.navigate('CN')
        }if (x === 'COMPUTER PROGRAMMING FUNDAMENTALS') {
            this.props.navigation.navigate('CF')
        }if (x === 'Consumer Protection') {
            this.props.navigation.navigate('CPA')
        }if (x === 'Company Law') {
            this.props.navigation.navigate('CL')
        }if (x === 'Company Law') {
            this.props.navigation.navigate('CL')
        }if (x === 'Company Law') {
            this.props.navigation.navigate('CL')
        }
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
                                <TouchableOpacity onPress={() => this.set_screen( email.user.name)} key={email.id}
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
        pdf:Pdfs,
        AI:AI,
        BC:Business_Com,
        BM:Business_Math,
        BO:Business_org,
        BR:Business_Res,
        BS:Business_Sat,
        CM:Capital_Market,
        COS:Communication_Skill,
        CA:Company_Account,
        CL:Company_Law,
        Comp_A:Computer_Applications,
        CF:Computer_Fun,
        CG:Computer_Gra,
        CN:Computer_Net,
        CP:Computer_Pro,
        CPA:Computer_Prot,

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
