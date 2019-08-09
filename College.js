import React, { Component } from 'react';

import {StyleSheet, Text, View, ScrollView, TouchableOpacity, Button, Image,  Linking} from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';
import college from './bycollege';
import Amity from './university/Amity/amity_university'
import Sastra from './university/Sastra_university/sastra_university'
import University_of_delhi from './university/University_of_delhi/University_of_delhi'
import CBIT_university from './university/CBIT_university/CBIT_university'
import  Vellore_university from './university/vellore_university/vellore_university'
import BrAmbedekar_university from './university/BR Ambedekar_university/Br Ambedekar_university'
import Jamia_hamdard from './university/jamia_hamdard_university/jamia_hamdard_university'
import St_Andrews_Institute_Of_Technology  from './university/St. Andrews Institute Of Technology and Management/St. Andrews Institute Of Technology and Management university'
import Dehradun from './university/Dehradun Institute Of Technology/Dehradun Institute Of Technology university'
import Apj from './university/APJ Abdul Kalam Technological University/APJ Abdul Kalam Technological University'
import NitAllahabad from './university/National Institute Of Technology ,Allahabad/nit ,Allahabad_university'
import NitTrichi from './university/National Institute Of Technology ,Tiruchirappalli/nit trichi university'
import PESU from './university/PES Institute Of Technology/PES Institute Of Technology university'
import Sathyabama from './university/Sathyabama University/Sathyabama University'
import Baker from './university/Baker College for Women ,Kerala/Baker College for Women ,Kerala'
import NitBhopal from './university/National Institute Of Technology ,Bhopal/National Institute Of Technology ,Bhopal'
import GTU from './university/Gujarat Technological University/Gujarat Technological University'
import Panjab from './university/Panjab University/panjab university'
import PTU from './university/Punjab Technical University/Punjab Technical University'
const KEYS_TO_FILTERS = ['user.name', 'subject'];
import LinearGradient from 'react-native-linear-gradient';
import { createStackNavigator, createAppContainer } from 'react-navigation';
export  class Colleges extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            name:''
        }
    }
    searchUpdated(term) {
        this.setState({ searchTerm: term })
    }



    set_screen=(x)=>
    {
        if(x==='Amity University')
        {
            this.props.navigation.navigate('amity')
        }
        else if(x==="BrAmbedekar_university")
        {
            this.props.navigation.navigate('BR')
        }
        else if(x==="university of delhi")
        {
            this.props.navigation.navigate('University_of_delhi')
        }
        else if(x==="CBIT_university")
        {
            this.props.navigation.navigate('Cbit')
        }
        else if(x==="vellore institute of tecnology")
        {
            this.props.navigation.navigate('vellore')
        }
        else if(x==="Sastra University")
        {
            this.props.navigation.navigate('Sastra')
        }
        else if(x==="St Andrews Institute Of Technology ")
        {
            this.props.navigation.navigate('andrews')
        }
        else if(x==="Jamia hamdard")
        {
            this.props.navigation.navigate('jamia')
        }
        else if(x==="Dehradun Institute Of Technology")
        {
            this.props.navigation.navigate('Dehradun')
        }
        else if(x==="APJ Abdul Kalam Technological University")
        {
            this.props.navigation.navigate('Apj')
        }
        else if(x==="NIT Allahabad")
        {
            this.props.navigation.navigate('nitA')
        }
        else if(x==="NIT Tiruchirappalli")
        {
            this.props.navigation.navigate('nitT')
        }
        else if(x==="PESU")
        {
            this.props.navigation.navigate('PESU')
        }
        else if(x==="NIT Bhopal")
        {
            this.props.navigation.navigate('nitB')
        }
        else if(x==="Sathyabama University")
        {
            this.props.navigation.navigate('Satya')
        }
        else if(x==="Baker College for Women ,Kerela")
        {
            this.props.navigation.navigate('Baker')
        }
        else if(x==="CBIT_University")
        {
            this.props.navigation.navigate('cbit')
        }
        else if(x==="Punjab University")
        {
            this.props.navigation.navigate('punjab')
        }
        else if(x==="Punjab Technical University")
        {
            this.props.navigation.navigate('PTU')
        }
        else if(x==="Gujarat Technological University")
        {
            this.props.navigation.navigate('GTU')
        }
    }


    render() {
        const filteredEmails = college.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
        return (
            <ScrollView>
            <View >
                <Image source={require('./android/pic/background.jpg')} style={{ flex: 1,height:'110%',
                    resizeMode: 'cover',position:'absolute'}} />
                <SearchInput
                    onChangeText={(term) => { this.searchUpdated(term) }}
                    style={{borderWidth:2,borderRadius:50,margin:15,borderColor:'grey'}}
                    placeholder="     Type college to search..."
                />

                <ScrollView horizontal={true}  >



<View style={{flexDirection:'row'}}>


                    {filteredEmails.map(email => {
                        return (
                            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#9dd3e4', '#9dd3e4', '#9dd3e4',]} style={{width:300,margin:5,height:150,borderRadius: 10,marginBottom:30,}} >
                            <TouchableOpacity onPress={()=>this.set_screen(email.user.name)} key={email.id} >
                                <View>
                                    <Text  style={{alignContent:'center',justifyContent:'center',alignSelf:'center',textAlign: 'center',margin:15,fontSize:20,color:'white'}}>{email.user.name}</Text>
                                    <Text style={{alignContent:'center',justifyContent:'center',alignSelf:'center',textAlign: 'center',margin:15,fontSize:15,color:'white'}}>{email.subject}</Text>
                                </View>

                            </TouchableOpacity>

                            </LinearGradient>
                        )

                    })}



</View>
                </ScrollView>
                <Text style={{textAlign:'center',margin:10,fontSize:15}}> Help Other Students</Text>
                <Text style={{textAlign:'center',margin:5,fontSize:15}}>Contribute and Earn</Text>
                <TouchableOpacity style={{marginTop:50,alignContent:'center',justifyContent:'center',alignSelf:'center',width:300,}}>
                <Button title={'contribute papers'} onPress={() => Linking.openURL('mailto:ayushraichand1@gmail.com?cc=Upload your paper &body=college:\n' +
                    'subjects:\n' + 'Your name:\n')} color={'green'}/>
                </TouchableOpacity>
                <View style={{flexDirection:'row',flex:1}}>
                <TouchableOpacity style={{marginTop:50,width:170,flex:.475,margin:'1%'}}>
                    <Button title={'Contribute Any Question'} onPress={() => Linking.openURL('mailto:ayushraichand1@gmail.com?cc=Upload your paper &body=college:\n' +
                        'subjects:\n' + 'Your name:\n') }
                             color={'orange'}/>
                </TouchableOpacity>
                    <TouchableOpacity style={{marginTop:50,width:170,flex:.05}}>
                    </TouchableOpacity>

                <TouchableOpacity style={{marginTop:50,width:170,flex:.475,margin:'1%'}}>

                    <Button title={'Contribute Any Notes '} onPress={() => Linking.openURL('mailto:ayushraichand1@gmail.com?cc=Upload your paper &body=college:\n' +
                        'subjects:\n' + 'Your name:\n')} color={'#2559A9'}/>
                </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
        );
    }
}

const RootStack = createStackNavigator(
    {
        Home: Colleges,
        amity:Amity,
        BR:BrAmbedekar_university,
        University_of_delhi:University_of_delhi,
        cbit:CBIT_university,
        vellore:Vellore_university,
        Sastra:Sastra,
        andrews:St_Andrews_Institute_Of_Technology ,
        jamia:Jamia_hamdard,
        Dehradun:Dehradun,
        Apj:Apj,
        nitA:NitAllahabad,
        nitT:NitTrichi,
        PESU:PESU,
        nitB:NitBhopal,
        Satya:Sathyabama,
        Baker:Baker,
        punjab:Panjab,
        PTU:PTU,
        GTU:GTU

    },
    {
        headerMode:'none',
        initialRouteName: 'Home',
    }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}
