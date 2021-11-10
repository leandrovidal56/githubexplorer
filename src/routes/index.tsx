import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';
import Home from '../pages/Home';
import Users from '../pages/Users';
import Repository from '~/pages/Repository';

const Open = createStackNavigator();

const OpenRoutes: React.FC = () => (
  <Open.Navigator
    initialRouteName="Homes"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Open.Screen name="Login" component={Login} />
    <Open.Screen name="Homes" component={Home} />
    <Open.Screen name="Users" component={Users} />
    <Open.Screen name="Repository" component={Repository} />
  </Open.Navigator>
);

export default OpenRoutes;
