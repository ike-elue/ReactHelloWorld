import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScheduleScreen from './screens/ScheduleScreen';
import CourseDetailsScreen from './screens/CourseDetailsScreen';
import CourseEditScreen from './screens/CourseEditScreen';
import UserContext from './UserContext';

const Stack = createStackNavigator();

const App = () => {
  const [user, setUser] = useState({role: 'admin'});
  return (
    <UserContext.Provider value={user}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ScheduleScreen"
            component={ScheduleScreen}
            options={{ title: 'Schedule'}}
          />
          <Stack.Screen name="CourseDetailsScreen"
            component={CourseDetailsScreen}
            options={{ title: 'Course Details'}}
          />
          <Stack.Screen name="CourseEditScreen"
            component={CourseEditScreen}
            options={{ title: 'Course Editor'}} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
};

export default App;