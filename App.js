import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Image,

    TouchableHighlight,

    ImageBackground
    , Button, StyleSheet, AsyncStorage
} from 'react-native';



import AppIntroSlider from 'react-native-app-intro-slider';
import {createStackNavigator, createAppContainer, DrawerActions} from 'react-navigation';


import firebase from 'react-native-firebase';
import HamburgerIcon from './homenavigation'

import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,

} from 'react-native-google-signin';


// var Firebase = require('firebase')



export class PhoneAuthTest extends React.Component {
  static navigationOptions = {
    header: null,
    headerVisible: false,
    headerMode: 'none',

  }


  constructor(props) {

    super(props);
    this.unsubscribe = null;
    this.state = {
      user: null,
      message: '',
      codeInput: '',
      phoneNumber: '+91',
      confirmResult: null,
      email: '',
      password: '',
      userInfo: '',
        showRealApp:false,isVisible : true,

    };
  }



    Hide_Splash_Screen=()=>{

        this.setState({
            isVisible : false

        });

    }


  gotoNextActivity = () => {
    this.props.navigation.navigate('Forth');

  }


  componentDidMount() {
    // let props = this.props;
    this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {

        this.setState({
          user:"Your are successfully logged in"
        })




      } else {
        // User has been signed out, reset the state

        this.setState({
          user: null,
          message: '',
          codeInput: '',
          phoneNumber: '+91',
          confirmResult: null,
          userInfo: '',



        });
      }
    });
    {
      GoogleSignin.configure({
        //It is mandatory to call this method before attempting to call signIn()
        scopes: ['https://www.googleapis.com/auth/drive.readonly'],
        // Repleace with your webClientId generated from Firebase console
        webClientId:
            '587097664227-lbiqhch3foh5etdj082ojd5le1sc79n2.apps.googleusercontent.com',
      });
    }

      AsyncStorage.getItem('first_time').then((value) => {
          this.setState({ showRealApp: !!value, loading: false });
      });

      var that = this;

      setTimeout(function(){

          that.Hide_Splash_Screen();

      }, 2000);



  }







  componentWillUnmount() {
    if (this.unsubscribe) this.unsubscribe();
  }

  signIn = () => {
    const { phoneNumber } = this.state;

    this.setState({ message: 'Sending code ...' });

    firebase.auth().signInWithPhoneNumber(phoneNumber)
        .then(confirmResult =>this.setState({ confirmResult, message: 'Code has been sent!' }))
        .catch(error => this.setState({ message: `Sign In With Phone Number Error: ${error.message}` }));
  };

  confirmCode = () => {
    const { codeInput, confirmResult } = this.state;

    if (confirmResult && codeInput.length) {
      confirmResult.confirm(codeInput)
          .then((user) => {
            this.setState({ message: 'Code Confirmed!' });
          })
          .catch(error => this.setState({ message: `Code Confirm Error: ${error.message}` }));
    }
  };

  signOut = () => {
    firebase.auth().signOut();
  }








    onLoginOrRegister = async () => {

        GoogleSignin.signIn()
            .then((data) => {
                // Create a new Firebase credential with the token
                const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken);
                // Login with the credential
                return firebase.auth().signInWithCredential(credential);
            })
            .then((user) => {
                // If you need to do anything with the user, do it here
                // The user will be logged in automatically by the
                // `onAuthStateChanged` listener we set up in App.js earlier
            })
            .catch((error) => {
                const { code, message } = error;
                // For details of error codes, see the docs
                // The message contains the default Firebase string
                // representation of the error
            });
    }


    _signOut = async () => {
        //Remove user session from the device.
        try {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
            this.setState({ user: null }); // Remove the user from your app's state as well
        } catch (error) {
            console.error(error);
        }
    };
    _revokeAccess = async () => {
        //Remove your application from the user authorized applications.
        try {
            await GoogleSignin.revokeAccess();
            console.log('deleted');
        } catch (error) {
            console.error(error);
        }
    };



    _loggedin=()=>
{
    AsyncStorage.setItem('first_time', 'true').then(() => {
        this.setState({ showRealApp: true });
        this.props.navigation.navigate('Appintro');
    });
}



  renderPhoneNumberInput() {
    const { phoneNumber } = this.state;
    const {email,password}=this.state;
    const {userInfo}=this.state;

    return (
        <ImageBackground source={{uri:'https://t4.ftcdn.net/jpg/01/07/40/13/240_F_107401328_hACpOKBgmxzRRHcGWpFg6KJGjDCAtQ7Q.jpg'}} style={{justifyContent:'center',height:'100%',width:'100%',}}>





          <Collapse style={{padding:15,margin:15}}>
            <CollapseHeader style={{width:300,height:50,}}>
              <View>
                <Text style={{justifyContent:'center',textAlign: 'center',borderWidth:2,borderColor:'grey',borderRadius:30,padding:15,fontSize: 15,fontFamily:'algerian',color: 'white'}}>PHONE ACTIVATION</Text>
              </View>
            </CollapseHeader>
            <CollapseBody  style={{borderColor:'grey',padding:15,margin:15,borderRadius:30,}}>
              <View style={{ padding: 25,marginTop:50}}>
                <Text style={{color:'white'}}>Enter phone number:</Text>
                <TextInput
                    autoFocus
                    style={{ height: 40, marginTop: 15, marginBottom: 15 ,color:'white'}}
                    onChangeText={value => this.setState({ phoneNumber: value })}
                    placeholder={'Phone number ... '}
                    keyboardType = 'numeric'
                    value={phoneNumber}
                />
                <Button title="Sign In" color="red" onPress={this.signIn} />
              </View>
            </CollapseBody>
          </Collapse>
          <Collapse style={{padding:15,margin:15}}>
            <CollapseHeader style={{width:300,height:50,}}>
              <View>
                <Text style={{justifyContent:'center',textAlign: 'center',borderWidth:2,borderColor:'grey',borderRadius:30,padding:15,fontSize: 15,fontFamily:'algerian',color:'white'}}>GOOGLE ACTIVATION</Text>
              </View>
            </CollapseHeader>
            <CollapseBody  style={{borderColor:'grey',padding:15,margin:15,borderRadius:30,}}>

              <View style={{ width:200, height: 48,alignSelf:'center' }} >
                <GoogleSigninButton
                    style={{ width:225, height: 48,alignSelf:'center' }}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Light}
                    onPress={this.onLoginOrRegister}
                />
                <Button
                    title='sign out....!!'
                    style={{ width:200, height: 48,alignSelf:'center' }}
                    color="red"
                    onPress={this._signOut}
                />


              </View>
            </CollapseBody>
          </Collapse>



        </ImageBackground>








    )

  }



  renderMessage() {
    const { message } = this.state;

    if (!message.length) return null;

    return (
        <Text style={{ padding: 5, backgroundColor: '#000', color: '#fff' }}>{message}</Text>
    );
  }

  renderVerificationCodeInput() {
    const { codeInput } = this.state;


    return (
        <View style={{ marginTop: 25, padding: 25 }}>
          <Text>Enter verification code below:</Text>
          <TextInput
              autoFocus
              style={{ height: 40, marginTop: 15, marginBottom: 15 }}
              onChangeText={value => this.setState({ codeInput: value })}
              placeholder={'Code ... '}
              value={codeInput}
          />
          <Button title="Confirm Code" color="#841584" onPress={this.confirmCode} />
        </View>
    );
  }






  render() {
    const { user, confirmResult } = this.state;


      let Splash_Screen = (

          <View style={styles.SplashScreen_RootView}>

              <View style={styles.SplashScreen_ChildView}>

                  {/* Put all your components Image and Text here inside Child view which you want to show in Splash Screen. */}

                  <Image source={require('./android/pic/Logo-PixTeller.png')}
                         style={{width:'50%', height: '50%', resizeMode: 'contain'}} />

              </View>





          </View> )


      if(this.state.isVisible===true)
      {
          return (
              <View style = { styles.MainContainer }>



                  {
                      (this.state.isVisible === true) ? Splash_Screen : Splash_Screen
                  }


              </View>
          )
      }
    if(!this.state.showRealApp)
   {


       return (
        <View style={{ flex: 1 }}>



            {!user && !confirmResult && this.renderPhoneNumberInput()}

          {this.renderMessage()}

          {!user && confirmResult && this.renderVerificationCodeInput()}

          {user && (


              <View
                  style={{flex: 1,}}>

                {/*<Image source={require('./android/pic/background.jpg')} style={{ flex: 1,*/}
                {/*  resizeMode: 'cover',position:'absolute'}}/>*/}
                {/*<Text style={{ fontSize: 25, position: 'absolute',margin:15,alignSelf:'center' ,color:'white'}}>Signed In!</Text>*/}
                <Text style={{ fontSize: 20, position: 'absolute',color:'white',marginTop:500,alignSelf:'center' }}>{JSON.stringify(user)}</Text>

                <View>
                  < Image source={require('./android/pic/5.png')} style={{   width:250,height:250,position:'absolute',alignSelf:'center',marginTop:170}}/>

                </View>
                <TouchableHighlight  style={{ position: 'absolute',margin:15,right:0,bottom:20}}>
                  <Button title="next" onPress={()=>this._loggedin()}/>

                </TouchableHighlight>
                <TouchableHighlight style={{ position: 'absolute',margin:15,left:0,bottom:20}}>
                  <Button title="Sign Out" color="red" onPress={this.signOut} />
                </TouchableHighlight>
              </View>


          )}
        </View>


    );
   }
    else {
      return (
          this.props.navigation.navigate('Home')
      )
    }


  }



}


export  class Appintro extends React.Component {
  static navigationOptions = {
    header: null,

  }
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
      //To show the main page of the app
    };
  }











  _onDone = () => {
    // After user finished the intro slides. Show real app through
    // navigation or simply by controlling state


    this.props.navigation.navigate('Home')
  };
  _onSkip = () => {
    // After user skip the intro slides. Show real app through
    // navigation or simply by controlling state

    this.props.navigation.navigate('Home')
  };
  render() {const config = {
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    storageBucket: "<BUCKET>.appspot.com"
};
firebase.initializeApp(config);
    //If false show the Intro Slides
    if (this.state.showRealApp) {
      //Real Application
      return (
          <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 50,
              }}>
            <Text>
              This will be your screen when you click Skip from any slide or Done
              button at last
            </Text>
          </View>
      );
    } else {
      //Intro slides
      return (
          <AppIntroSlider
              slides={slides}
              //comming from the JsonArray below
              onDone={()=>this._onDone()}
              //Handler for the done On last slide
              showSkipButton={true}
              onSkip={()=>this._onSkip()}
          />
      );
    }
  }
}
const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginTop: 16,
  },
    MainContainer:
        {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop:  20
        },

    SplashScreen_RootView:
        {
            justifyContent: 'center',
            flex:1,
            margin: 10,
            position: 'absolute',
            width: '100%',
            height: '100%',

        },

    SplashScreen_ChildView:
        {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            flex:1,
            margin: 20,
        },

    TouchableOpacity_Style:{

        width:25,
        height: 25,
        top:9,
        right:9,
        position: 'absolute'

    },
});

const slides = [
  {
    key: 's1',
    text: 'Best Content offers here!!!',
    title: 'Better Grades',
    titleStyle: styles.title,
    textStyle: styles.text,
    image: {
      uri:
          'https://cdn0.iconfinder.com/data/icons/modern-education-line-set-1/64/essay-paper-pencil-exam-512.png'        },
    imageStyle: styles.image,
    backgroundColor: '#20d2bb',
  },
  {
    key: 's2',
    title: 'Access Free',
    titleStyle: styles.title,
    text: 'We Provide You Free Content',
    image: {
      uri:
          'https://cdn2.iconfinder.com/data/icons/maki/100/college-512.png',
    },
    imageStyle: styles.image,
    backgroundColor: '#febe29',
  },
  {
    key: 's3',
    title: 'We Cover All Of Your Papers.',
    titleStyle: styles.title,
    text: 'Enjoy on our all services',
    image: {
      uri: 'https://library.kissclipart.com/20181005/kqw/kissclipart-png-exam-paper-clipart-paper-test-clip-art-ea21954d14cd2126.png'   },
    imageStyle: styles.image,
    backgroundColor: '#22bcb5',
  },

];







const RootStack = createStackNavigator(
    {
      Apps:PhoneAuthTest,
      Appintro:Appintro,
      Home:HamburgerIcon


    },
    {
      headerMode:'none',
      navigationOptions: {
header:null
},

      initialRouteName:'Apps'
    }


);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
     return <AppContainer />;

  }
}
