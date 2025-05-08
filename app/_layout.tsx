// app/_layout.tsx

import React from 'react';
import { Provider } from 'react-redux';
import { Stack } from 'expo-router';
import { store } from '@/services/rtk-query/store';
import '@/global.css';

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack>
        {/* Splash or redirect index */}
        <Stack.Screen name="index" options={{ headerShown: false }} />

        {/* Auth flow */}
        <Stack.Screen name="(auth)/login/index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/signup/index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/paywall/index" options={{ headerShown: false }} />

        {/* Protected app root */}
        <Stack.Screen
          name="(protected-application)/index"
          options={{
            headerShown: false,
            gestureEnabled: false,
            headerBackVisible: false,
          }}
        />

        {/* Not-found (404) */}
        <Stack.Screen name="+not-found" options={{ headerShown: false }} />
      </Stack>
    </Provider>
  );
}
