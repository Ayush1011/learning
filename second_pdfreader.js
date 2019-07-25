import React,{Component} from 'react';
import {View, TouchableOpacity, Alert, PermissionsAndroid} from 'react-native';
import PDFView from 'react-native-view-pdf';
import RNFetchBlob from 'rn-fetch-blob'
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Pdfs extends Component {


    downloadFile=(url,fileName)=> {
        const { config, fs } = RNFetchBlob;
        const downloads = fs.dirs.DownloadDir;
        return config({
            // add this option that makes response data to be stored as a file,
            // this is much more performant.
            fileCache : true,
            addAndroidDownloads : {
                useDownloadManager : true,
                notification : true,
                path: downloads+ fileName + '.pdf',
            },


        })
            .fetch('GET', url).then((res)=>

            {
                alert("DOWNLOADED",res.path())
            });
    }


    async downloadFiles(url,name) {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                    title: "Storage Permission",
                    message: "App needs access to memory to download the file "
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                this.downloadFile(url,name);
            } else {
                Alert.alert(
                    "Permission Denied!",
                    "You need to give storage permission to download the file"
                );
            }
        } catch (err) {
            console.warn(err);
        }
    }





    render() {


        const resourceType = 'url';
        const { navigation } = this.props;
        const url = navigation.getParam('url', 'NO-ID');
        const name = navigation.getParam('name', 'NO-ID');
        return (

            <View style={{flex: 1}}>

                {/* Some Controls to change PDF resource */}


                <TouchableOpacity style={{borderRadius: 50,width:50,height:50,marginLeft:5,marginTop:8,backgroundColor:'#C15243'}}
                                  onPress={this.downloadFiles(url,names)}>
                    <Icon name="download" size={30} color="black" style={{alignContent:'center',justifyContent:'center',alignSelf:'center',margin:5,position:'absolute'}} />

                </TouchableOpacity>






                <PDFView
                    fadeInDuration={150.0}
                    style={{flex: 1}}
                    resource={url}
                    resourceType={resourceType}
                    onLoad={() => console.log(`PDF rendered from ${resourceType}`)}
                    // onError={() => console.log('Cannot render PDF', error)}
                />
            </View>


        )

    }


}
