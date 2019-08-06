
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
import Computer_Fun from './subjects/Computer Fundamentals/Computer Fundamentals main'
import Computer_Gra from './subjects/Computer Graphics/Computer Graphics main'
import Computer_Net from './subjects/Computer Networking Internet/Computer Networking Internet main'
import Computer_Pro from './subjects/COMPUTER PROGRAMMING FUNDAMENTALS main/COMPUTER PROGRAMMING FUNDAMENTALS main'
import Computer_Prot from './subjects/Consumer Protection/Consumer Protection main'
import Cost_Ac from './subjects/Cost Accounting/Cost Accounting main'
import Cyber_sec from './subjects/Cyber Security/Cyber Security main'
import Data_Com from './subjects/Data Communication Networking/Data Communication Networking main'
import Data_Str from './subjects/Data Structures/Data Structures main'
import Database_Man from './subjects/Database Management System/Database Management System main'
import Disaster_Man from './subjects/Disaster Management/Disaster Management main'
import E_Com from './subjects/E-commerce/E-commerce main'
import Env_Stu from './subjects/Environmental Studies/Environmental Studies main'
import Financial_Acc from "./subjects/Financial Accounting/Financial Accounting main";
import Foundation_IN from './subjects/Foundation International Business/Foundation International Business main'
import Human_Res from './subjects/Human Resource Management/Human Resource Management main'
import Human_Rig from './subjects/Human Rights and Values/Human Rights and Values main'
import Income_Tax from './subjects/Income Tax/Income Tax main'
import Indian_Bus from './subjects/Indian Business Environment/Indian Business Environment main'
import Intro_Info from './subjects/Introduction to Information Technology/Introduction to Information Technology main'
import {Intro_Net} from "./subjects/Introduction to Net/Introduction to Net main";
import Logical_Org from './subjects/Logical Organization of Computer/Logical Organization of Computer main'
import Macro_Eco from './subjects/Macro Economic Analysis Policy/Macro Economic Analysis Policy  main'
import Manage_Acc from './subjects/Management Accounting/Management Accounting  main'
import Manage_Info from './subjects/Management Information Systems/Management Information Systems  main'
import Marketing_Mang from './subjects/Marketing Management/Marketing Management  main'
import Mathematics from './subjects/MATHEMATICS/MATHEMATICS main'
import Micro_Eco from './subjects/Micro Economics for Bussiness Decisions/Micro Economics for Bussiness Decisions  main'
import OOP from './subjects/Object Oriented Programming/Object Oriented Programming main'
import Objects_Java from './subjects/Object Technologies Programming using Java/Object Technologies Programming using Java main';
import OS from './subjects/Operating System/Operating System main'
import Org_Bhv from './subjects/Organisational Behaviour/Organisational Behaviour main'
import PC_Soft from './subjects/PC Software/PC Software main'
import Principle_Man from './subjects/Pinciple of Management/Pinciple of Management main'
import Production_Man from './subjects/Production Manegment/Production Manegment main'
import Soft_Eng from './subjects/Software Engineering/Software Engineering main'
import Structured_Sys from './subjects/Structured System Analysis And Design/Structured System Analysis And Design main'
import System_Any from './subjects/System Analysis and Design/System Analysis and Design main'
import Visual_Bas from './subjects/Visual Basic/Visual Basic  main'
import Web_Des from './subjects/Web Designing/Web Designing  main'
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
        }if (x === 'Cost Accounting') {
            this.props.navigation.navigate('CAC')
        }if (x === 'Cyber Security') {
            this.props.navigation.navigate('C_SEC')
        }if (x === 'Data Communication Networking') {
            this.props.navigation.navigate('DN')
        }if (x === 'Data Structures') {
            this.props.navigation.navigate('DS')
        }if (x === 'Database Management System') {
            this.props.navigation.navigate('DM')
        }if (x === 'Disaster Management') {
            this.props.navigation.navigate('DIS_MAN')
        }if (x === 'E-commerce') {
            this.props.navigation.navigate('EC')
        }if (x === 'Environmental Studies') {
            this.props.navigation.navigate('ES')
        }if (x === 'Financial Accounting') {
            this.props.navigation.navigate('FA')
        }if (x === 'Foundation International Business') {
            this.props.navigation.navigate('FI')
        }if (x === 'Human Resource Management') {
            this.props.navigation.navigate('HR')
        }if (x === 'Human Rights and Values') {
            this.props.navigation.navigate('H_RIG')
        }if (x === 'Income Tax') {
            this.props.navigation.navigate('IT')
        }if (x === 'Indian Business Environment') {
            this.props.navigation.navigate('IB')
        }if (x === 'Introduction to Information Technology') {
            this.props.navigation.navigate('IF')
        }if (x === 'Introduction to Net') {
            this.props.navigation.navigate('IN')
        }if (x === 'Logical Organization of Computer') {
            this.props.navigation.navigate('LO')
        }if (x === 'Macro Economic Analysis Policy') {
            this.props.navigation.navigate('ME')
        }if (x === 'Management Accounting') {
            this.props.navigation.navigate('MA')
        }if (x === 'Management Information Systems') {
            this.props.navigation.navigate('MI')
        }if (x === 'Marketing Management') {
            this.props.navigation.navigate('MM')
        }if (x === 'Mathematics') {
            this.props.navigation.navigate('M')
        }if (x === 'Micro Economics for Business Decisions') {
            this.props.navigation.navigate('MEE')
        }if (x === 'Object Oriented Programming') {
            this.props.navigation.navigate('OOP')
        }if (x === 'Object Technologies Programming using Java') {
            this.props.navigation.navigate('OJ')
        }if (x === 'Operating System') {
            this.props.navigation.navigate('OS')
        }if (x === 'Organisational Behaviour') {
            this.props.navigation.navigate('OB')
        }if (x === 'PC Software') {
            this.props.navigation.navigate('PC')
        }if (x === 'Principle of Management') {
            this.props.navigation.navigate('PM')
        }if (x === 'Production Management') {
            this.props.navigation.navigate('PRO_M')
        }if (x === 'Software Engineering') {
            this.props.navigation.navigate('SE')
        }if (x === 'Structured System Analysis And Design') {
            this.props.navigation.navigate('SS')
        }if (x === 'System Analysis and Design') {
            this.props.navigation.navigate('SA')
        }if (x === 'Visual Basic') {
            this.props.navigation.navigate('VB')
        }if (x === 'Web Designing') {
            this.props.navigation.navigate('WD')
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
        CAC:Cost_Ac,
        C_SEC:Cyber_sec,
        DN:Data_Com,
        DS:Data_Str,
        DM:Database_Man,
        DIS_MAN:Disaster_Man,
        EC:E_Com,
        ES:Env_Stu,
        FA:Financial_Acc,
        FI:Foundation_IN,
        HR:Human_Res,
        H_RIG:Human_Rig,
        IT:Income_Tax,
        IB:Indian_Bus,
        IF:Intro_Info,
        IN:Intro_Net,
        LO:Logical_Org,
        ME:Macro_Eco,
        MA:Manage_Acc,
        MI:Manage_Info,
        MM:Marketing_Mang,
        M:Mathematics,
        MEE:Micro_Eco,
        OOP:OOP,
        OJ:Objects_Java,
        OS:OS,
        OB:Org_Bhv,
        PC:PC_Soft,
        PM:Principle_Man,
        PRO_M:Production_Man,
        SE:Soft_Eng,
        SS:Structured_Sys,
        SA:System_Any,
        VB:Visual_Bas,
        WD:Web_Des,

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
