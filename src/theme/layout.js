// import dependencies
import {Dimensions, Platform, StatusBar} from 'react-native';

// Layout Config
const android = Platform.OS === 'android';
const screen = Dimensions.get('window');
const statusBarHeight = android ? StatusBar.currentHeight : 0;

let SCREEN_WIDTH = screen.width;
let SCREEN_HEIGHT = android ? screen.height - statusBarHeight : screen.height;
SCREEN_WIDTH = SCREEN_WIDTH < SCREEN_HEIGHT ? SCREEN_WIDTH : SCREEN_HEIGHT;
SCREEN_HEIGHT = SCREEN_HEIGHT > SCREEN_WIDTH ? SCREEN_HEIGHT : SCREEN_WIDTH;

const SMALL_MARGIN = 8;
const SMALL_PADDING = 8;
const MEDIUM_MARGIN = 16;
const MEDIUM_PADDING = 16;
const LARGE_MARGIN = 18;
const LARGE_PADDING = 18;

// console.log(screen.width + " x " + screen.height, StatusBar.currentHeight);
// console.log(SCREEN_WIDTH + " x " + SCREEN_HEIGHT);

const layout = {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  SMALL_MARGIN,
  SMALL_PADDING,
  MEDIUM_MARGIN,
  MEDIUM_PADDING,
  LARGE_MARGIN,
  LARGE_PADDING,
};

export default layout;
