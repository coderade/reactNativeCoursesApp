import React from 'react';
import {AppRegistry} from 'react-native';
import {StackNavigator} from 'react-navigation';
import ReactCourses from "./src/components/ReactCourses";
import NativeCourses from "./src/components/NativeCourses";

const reactNativeCoursesApp = StackNavigator({
    ReactCourses: {screen: ReactCourses},
    NativeCourses: {screen: NativeCourses}
});

AppRegistry.registerComponent('reactNativeCoursesApp', () => reactNativeCoursesApp);
