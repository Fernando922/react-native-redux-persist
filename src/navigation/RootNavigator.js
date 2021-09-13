import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Import mock screens
import BooksList from '../screens/BooksList';
import BookmarksList from '../screens/BookmarksList';

const Tab = createBottomTabNavigator();