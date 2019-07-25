import React, { Component } from 'react';

import { StyleSheet, Text, View, Button, TouchableOpacity, Image,ScrollView } from 'react-native';
import { Icon } from 'react-native-elements'
import { createAppContainer, createBottomTabNavigator,createMaterialTopTabNavigator, createDrawerNavigator, createStackNavigator, DrawerActions,SafeAreaView,DrawerItems } from "react-navigation";
import {Container, Content, Header, Body} from 'native-base'
import home from './Home_page';

import Developer from './Developer'
import Colleges from './College';

import questions from "./questions";

import LinearGradient from 'react-native-linear-gradient';
import PhoneAuthTest from "./App";
import App from "react-native/template/App";
import Pdfreader from "./pdfreader";


class HamburgerIcon extends Component {

    static navigationOptions = function(props) {
        return {
            title: 'Welcome',

        }
    };

    toggleDrawer = () => {

        this.props.navigationProps.toggleDrawer();

    }

    render() {

        return (

            <View style={{ flexDirection: 'row' }}>

                <TouchableOpacity onPress={this.toggleDrawer.bind(this)} >

                    <Image
                        source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png' }}
                        style={{ width: 25, height: 25, marginLeft: 5 }}
                    />

                </TouchableOpacity>

            </View>

        );


    }
}


export const Tab_1 = createBottomTabNavigator ({

   Home: {
        screen: home,
        swipeEnabled: true,
       navigationOptions: {
           title: 'Home',
           headerTitle: 'Home',
           tabBarLabel: 'Home',
           tabBarIcon: ({ tintColor, focused }) => (
               <Icon
                   name={'home'}
                   size={24}

               />
           ),
       }

    },

    Third: {

        screen:Colleges,
        swipeEnabled: true,
        navigationOptions: {
            title: 'Colleges',
            headerTitle: 'Colleges',
            tabBarLabel: 'Colleges',
            tabBarIcon: ({ tintColor, focused }) => (
                <Icon
                    name={'business'}
                    size={24}

                />
            ),
        }
    },
    Forth: {
        screen: questions,
        swipeEnabled: true,
        navigationOptions: {
            title: 'Questions',
            headerTitle: 'Questions',
            tabBarLabel: 'Questions',
            tabBarIcon: ({ tintColor, focused }) => (
                <Icon
                    name={'receipt'}
                    size={24}

                />
            ),
        }
    },


},


    {



    tabBarPosition: 'bottom',
    swipeEnabled: true,

    tabBarOptions: {
        activeTintColor: 'white',
        labelStyle: {
            fontSize: 12,

        },
        showIcon: true,
        style: { height: 54,borderTopWidth:0.5,backgroundColor: '#BAB4C4', },
        showLabel: true,






    }


});


export const Tab_2 = createBottomTabNavigator ({

        Home: {
            screen: home,
            swipeEnabled: true,
            navigationOptions: {
                title: 'Home',
                headerTitle: 'Home',
                tabBarLabel: 'Home',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Icon
                        name={'home'}
                        size={24}

                    />
                ),
            }

        },

        Third: {

            screen:Colleges,
            swipeEnabled: true,
            navigationOptions: {
                title: 'Colleges',
                headerTitle: 'Colleges',
                tabBarLabel: 'Colleges',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Icon
                        name={'business'}
                        size={24}

                    />
                ),
            }
        },
        Forth: {
            screen: questions,
            swipeEnabled: true,
            navigationOptions: {
                title: 'Questions',
                headerTitle: 'Questions',
                tabBarLabel: 'Questions',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Icon
                        name={'receipt'}
                        size={24}

                    />
                ),
            }
        },


    },


    {



        tabBarPosition: 'bottom',
        swipeEnabled: true,

        tabBarOptions: {
            activeTintColor: 'white',
            labelStyle: {
                fontSize: 12,

            },
            showIcon: true,
            style: { height: 54,borderTopWidth:0.5,backgroundColor: '#BAB4C4', },
            showLabel: true,






        }


    });


export const Tab_3 = createBottomTabNavigator ({

        Home: {
            screen: home,
            swipeEnabled: true,
            navigationOptions: {
                title: 'Home',
                headerTitle: 'Home',
                tabBarLabel: 'Home',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Icon
                        name={'home'}
                        size={24}

                    />
                ),
            }

        },

        Third: {

            screen:Colleges,
            swipeEnabled: true,
            navigationOptions: {
                title: 'Colleges',
                headerTitle: 'Colleges',
                tabBarLabel: 'Colleges',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Icon
                        name={'business'}
                        size={24}

                    />
                ),
            }
        },
        Forth: {
            screen: questions,
            swipeEnabled: true,
            navigationOptions: {
                title: 'Questions',
                headerTitle: 'Questions',
                tabBarLabel: 'Questions',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Icon
                        name={'receipt'}
                        size={24}

                    />
                ),
            }
        },


    },


    {



        tabBarPosition: 'bottom',
        swipeEnabled: true,

        tabBarOptions: {
            activeTintColor: 'white',
            labelStyle: {
                fontSize: 12,

            },
            showIcon: true,
            style: { height: 54,borderTopWidth:0.5,backgroundColor: '#BAB4C4', },
            showLabel: true,






        }


    });

export const Tab_4 = createBottomTabNavigator ({

        Home: {
            screen: home,
            swipeEnabled: true,
            navigationOptions: {
                title: 'Home',
                headerTitle: 'Home',
                tabBarLabel: 'Home',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Icon
                        name={'home'}
                        size={24}

                    />
                ),
            }

        },

        Third: {

            screen:Colleges,
            swipeEnabled: true,
            navigationOptions: {
                title: 'Colleges',
                headerTitle: 'Colleges',
                tabBarLabel: 'Colleges',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Icon
                        name={'business'}
                        size={24}

                    />
                ),
            }
        },
        Forth: {
            screen: questions,
            swipeEnabled: true,
            navigationOptions: {
                title: 'Questions',
                headerTitle: 'Questions',
                tabBarLabel: 'Questions',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Icon
                        name={'receipt'}
                        size={24}

                    />
                ),
            }
        },


    },


    {



        tabBarPosition: 'bottom',
        swipeEnabled: true,

        tabBarOptions: {
            activeTintColor: 'white',
            labelStyle: {
                fontSize: 12,

            },
            showIcon: true,
            style: { height: 54,borderTopWidth:0.5,backgroundColor: '#BAB4C4', },
            showLabel: true,






        }


    });
//
// export const Tab_5 = createBottomTabNavigator ({
//
//
//
//     initialRouteName:Menu_Screen,
//     First: {
//         screen: Home_Screen,
//         swipeEnabled: true,
//     },
//     Second: {
//         screen: Menu_Screen,
//         swipeEnabled: true,
//     },
//     Third: {
//         screen: Student_Screen,
//         swipeEnabled: true,
//     },
//     Forth: {
//         screen: Colleges_Screen,
//         swipeEnabled: true,
//     },
//
//
//
//
//
// }, {
//
//     tabBarPosition: 'bottom',
//     swipeEnabled: true,
//
//
//
// });


const First_2_Tabs =createStackNavigator ({
    Home: {

        screen: Tab_1,

        navigationOptions: ({ navigation }) => ({
            title: 'Learning System',
            color:'white',
            headerLeft: <HamburgerIcon navigationProps={navigation} />,
            headerStyle: {

                backgroundColor: '#BAB4C4',


            },

        })
    },



});

const First_3_Tabs =createStackNavigator ({

    Second: {

        screen: Tab_2,


        navigationOptions: ({ navigation }) => ({
            title: 'Developer',
            color:'white',
            headerLeft: <HamburgerIcon navigationProps={navigation} />,
            headerStyle: {

                backgroundColor: '#BAB4C4',


            },

        })
    },



});


const First_4_Tabs =createStackNavigator ({

    Third: {

        screen: Tab_3,

        navigationOptions: ({ navigation }) => ({
            title: 'Colleges',
            color:'white',
            headerLeft: <HamburgerIcon navigationProps={navigation} />,
            headerStyle: {

                backgroundColor: '#BAB4C4',


            },

        })
    },


});
const First_5_Tabs =createStackNavigator ({

    Forth: {

        screen:Tab_4,

        navigationOptions: ({ navigation }) => ({
            title: 'Questions',
            color:'white',
            headerLeft: <HamburgerIcon navigationProps={navigation} />,
            headerStyle: {

                backgroundColor: '#BAB4C4',


            },

        })
    },


});
// const First_6_Tabs =createStackNavigator ({
//
//     menu: {
//
//         screen: Tab_5,
//         navigationOptions: ({ navigation }) => ({
//             title: 'SHIP ME',
//             headerLeft: <HamburgerIcon navigationProps={navigation} />,
//
//         })
//     },
//
//
// });


const CustomDrawerContentComponent = (props) => (

    <Container>
        <Header style={styles.drawerHeader}>
            <Body>
                <Image
                    style={styles.drawerImage}
                    source={require('./android/pic/Logo-PixTeller.png')}  />
            </Body>
        </Header>
        <Content>
            <DrawerItems {...props} />
        </Content>

    </Container>

);
const MyDrawerNavigator = createDrawerNavigator({


    Home: {

        screen: First_2_Tabs,

    },

    Colleges: {
        screen: First_4_Tabs,

    },
    Questions: {
        screen: First_5_Tabs,


    },
        Developer: {
            screen: Developer,
        },
    // menu:{
    //     screen:First_6_Tabs,
    // }

},
    {
        initialRouteName: 'Home',
        drawerPosition: 'left',
        contentComponent: CustomDrawerContentComponent,
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle'
    }

);


export default createAppContainer(MyDrawerNavigator);







const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    drawerHeader: {
        height: 200,
        backgroundColor: 'white'
    },
    drawerImage: {
        height: 150,
        width: 250,
        borderRadius: 75
    }

})





