// app/(auth)/paywall.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '@/theme/colors';

export default function PaywallScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Subscribe to unlock Therapy AI</Text>
      <Text style={styles.subtext}>Get unlimited access to all features</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  subtext: {
    color: colors.gray,
    fontSize: 16,
  },
});
