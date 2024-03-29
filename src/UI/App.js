import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import { Root } from "native-base";
//redux
import appReducer from "@redux/reducers";
import initialState from "@redux/initialState";
import storeFactory from "@redux/store";
import { Provider } from "react-redux";
import Orientation from 'react-native-orientation';
export const store = storeFactory(initialState);
import DrawerMenu from './components/Drawer';

import BaseContainer from "./BaseComponent";
import Template from './containers/ContainerTemplate';
import Home from './containers/Home';
import CreateOrder from './containers/CreateOrderV2';
import Create_KhoanChi from './containers/Create_KhoanChi';
import Admin from './containers/Admin';
import TestHepler from './containers/TestHelperV2';
import HomeWithMap from './containers/HomeWithMap';
import SelectOrder from './containers/SelectOrder';
import Staffs from './containers/Staffs';
import Camera from './containers/Camera';

const width = Dimensions.get("window").width;

const Main = StackNavigator({
    HomeWithMap: {
        screen: HomeWithMap,
        navigationOptions: {
            header: null,
            gesturesEnabled: true,   
        }
    },
    Staffs: {
        screen: Staffs,
        navigationOptions: {
            title: 'Chấm công'
        }
    },
    Camera: {
        screen: Camera,
        navigationOptions: {
            header: null,
        }
    },
    SelectOrder: {
        screen: SelectOrder,
        navigationOptions: {
            header: null,
        }
    },
    Admin: {
        screen: Admin,
        navigationOptions: {
            header: null,
        }
    },
    Home: {
        screen: Home,
        navigationOptions: {
            header: null,
            gesturesEnabled: true
        }
    },
    CreateOrder: {
        screen: CreateOrder,
        navigationOptions: {
            header: null,
            gesturesEnabled: true
        }
    },
    Create_KhoanChi: {
        screen: Create_KhoanChi,
        navigationOptions: {
            header: null,
            gesturesEnabled: true
        }
    },

})

const Container = DrawerNavigator({
    tabbar: {
        screen: Main,
    },
},
    {
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle',
        drawerWidth: width / 2.5,
        drawerPosition: 'left',
        drawerLockMode: 'locked-closed',
        contentComponent: props => <DrawerMenu {...props} />
    },
);

export default class App extends BaseContainer {
    componentDidMount() {
        // Orientation.lockToLandscape()
    }
    render() {
        return (
            <Provider store={store}>
                <Root>
                    <Container />
                </Root>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({

});