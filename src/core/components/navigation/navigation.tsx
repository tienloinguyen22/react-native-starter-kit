import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavItem } from '@app/core/interfaces';
import { Icon } from '../Icon/Icon';

interface Props {
  navItems: NavItem[];
}

const Tab = createBottomTabNavigator();

export const Navigation = (props: Props): JSX.Element => {
  const { navItems } = props;

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
        initialRouteName={navItems[0].name}
      >
        {navItems.map((navItem) => (
          <Tab.Screen
            key={navItem.name}
            name={navItem.name}
            component={navItem.component}
            options={{
              title: navItem.title,
              tabBarIcon: (iconProps) => {
                const { focused, color, size } = iconProps;
                return <Icon name={focused ? navItem.iconFocused : navItem.icon} size={size} color={color} />;
              },
            }}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
};
