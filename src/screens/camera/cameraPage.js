import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,Platform,  Image,Dimensions,} from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import Icon from "../../components/icon/Icon";
import Colors from "../../theme/colors";
import * as ImageManipulator from 'expo-image-manipulator';


const IOS = Platform.OS === 'ios';
const CAMERA_ICON = Platform.OS === 'ios' ? 'ios-camera' : 'md-camera';
const REVERSE_CAMERA_ICON = Platform.OS === 'ios' ? 'ios-reverse-camera' : 'md-reverse-camera';
const PHOTO_ICON = Platform.OS === 'ios' ? 'ios-photos' : 'md-photos';
const ICON_SIZE = 40;
var { height, width } = Dimensions.get('window');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasPermission: null,
      cameraType: Camera.Constants.Type.back,
      username: this.props.route.params.user,
      progressView: false,
      striptype: this.props.route.params.striptype,
      // username:'test',
    };
    // if(this.props.route.params.striptype){
    //   this.state.striptype = this.props.route.params.striptype
    // }
    console.log('camera page', this.state.username);
    console.log('striptype', this.state.striptype);
  }

  async componentDidMount() {
    this.getPermissionAsync()
  }

  getPermissionAsync = async () => {
    // Camera roll Permission
    if (Platform.OS === 'ios') {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
    // Camera Permission
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasPermission: status === 'granted' });
  };

  handleCameraType=()=>{
    const { cameraType } = this.state

    this.setState({cameraType:
        cameraType === Camera.Constants.Type.back
          ? Camera.Constants.Type.front
          : Camera.Constants.Type.back
    })
  };

  sendImageAsync = async uri => {
    let ip = '76.28.196.133';
    let apiUrl = 'http://' + ip + ':5000/';

    let uriParts = uri.split('.');
    let fileType = uriParts[uriParts.length - 1];

    let formData = new FormData();
    formData.append('photo', {
      uri,
      name: `${this.state.username}_${this.state.striptype}.${fileType}`,
      type: `image/${fileType}`,
    });

    let options = {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    };

    return fetch(apiUrl, options);
  };

  takePicture = async () => {
    // if (this.camera) {
    //   let photo = await this.camera.takePictureAsync();
    //   console.log(photo);
    // }
    if (this.camera) {
      try {
        this.showView();
        let photo = await this.camera.takePictureAsync();

        let manipResult = await ImageManipulator.manipulateAsync(
          photo.uri,
          [
            {
              resize:{
                width:photo.width/4,
                height:photo.height/4,
              },
            },
          ],
          { format: ImageManipulator.SaveFormat.PNG }
        );
        // let res = await this.sendTime();
        // let result = await res.json();
        // // let test = JSON.stringify(result);
        // console.log(result.status);
        let r = await this.sendImageAsync(manipResult.uri);
        // console.log(r);

        if (r.status == 200) {
          this.removeView();
          this.props.navigation.navigate('ResultPage', {striptype: this.props.route.params.striptype});
        }
      } catch (e) {
        this.removeView();
        alert('Error Uploading, ' + e);
      }
    }
  };

  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images
    });
  };

  removeView() {
    this.setState({
      progressView: false,
    });
  }

  showView() {
    this.setState({
      progressView: true,
    });
  }


  render(){
    const { hasPermission } = this.state;
    if (hasPermission === null) {
      return <View />;
    } else if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      if(this.state.progressView) {
        return (
          <View style={{ flex: 1 }}>
            <Camera style={{ flex: 1 }} type={this.state.cameraType}  ref={ref => {this.camera = ref}}>
              <View style={{flex:1, flexDirection:"row", justifyContent:"center", margin:30}}>
                <TouchableOpacity
                  style={{
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                  }}
                  onPress={()=>this.takePicture()}
                >
                  <Icon name={CAMERA_ICON} size={ICON_SIZE} color={Colors.white} />

                </TouchableOpacity>
              </View>
            </Camera>
            <View style={{
                    position: 'absolute',
                    left: 0.5 * width - 25,
                    top: 0.5 * height - 25,
                    width: 50,
                    height: 50,
                  }}>
              <Image
                    source={{
                      width: 50,
                      height: 50,
                      uri:
                        'https://osea.github.io/urinalysis-project-pic/loading.gif',
                    }}
              />
            </View>
          </View>
        );
      }else{
        return (
          <View style={{ flex: 1 }}>
            <Camera style={{ flex: 1 }} type={this.state.cameraType}  ref={ref => {this.camera = ref}}>
              <View style={{flex:1, flexDirection:"row", justifyContent:"center", margin:30}}>
                <TouchableOpacity
                  style={{
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                  }}
                  onPress={()=>this.takePicture()}
                >
                  <Icon name={CAMERA_ICON} size={ICON_SIZE} color={Colors.white} />

                </TouchableOpacity>
              </View>
            </Camera>
          </View>
        );

      }
    }
  }

}
