import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useFonts } from 'expo-font';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Roboto_Bold: require('../../assets/fonts/Roboto-Bold.ttf'),
    Roboto_Regular: require('../../assets/fonts/Roboto-Regular.ttf')
  });

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: {
          backgroundColor: '#ffffff', // ← 원하는 배경색 설정
          borderTopWidth: 0,          // 상단 라인 제거하고 싶을 때
          position: 'absolute',
        }

      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '홈',
          tabBarIcon: ({ color }) => <MaterialIcons size={26} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="community"
        options={{
          title: '커뮤니티',
          tabBarIcon: ({ color }) => <MaterialIcons size={26} name="messenger" color={color} />,
        }}
      />
      <Tabs.Screen
        name="workout"
        options={{
          title: '운동',
          tabBarIcon: ({ color }) => <MaterialIcons size={26} name="fitness-center" color={color} />,
        }}
      />
      <Tabs.Screen
        name="diet"
        options={{
          title: '식단 & 레시피',
          tabBarIcon: ({ color }) => <Ionicons size={26} name="restaurant" color={color} />,
        }}
      />
      <Tabs.Screen
        name="ranking"
        options={{
          title: '랭킹',
          tabBarIcon: ({ color }) => <Ionicons size={26} name="trophy-sharp" color={color} />,
        }}
      />
    </Tabs>
  );
}
