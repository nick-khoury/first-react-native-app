//import { AppRegistry } from 'react-native';
//import App from './App';

//AppRegistry.registerComponent('albums', () => App);


//import { AppRegistry } from 'react-native';
//import App from './App';

//AppRegistry.registerComponent('albums', () => App);



// import a library to help create a component
import React from 'react';



//import ReactNative from 'react-native';
import { AppRegistry, View } from 'react-native';

import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';



// create component
const App = () => {
    return (
        <View style={{ flex: 1 }}>
            <Header headerText={'Albums'} />
            <AlbumList />
        </View>
    );
};



// render component to device
AppRegistry.registerComponent('albums', () => App);

