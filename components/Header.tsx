import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../theme/theme';

interface HeaderProps {
  title?: string;
  onProfilePress: () => void;
}

export default function Header({ title, onProfilePress }: HeaderProps) {
  return (
    <View style={styles.container}>
      {title ? (
        <Text style={styles.title}>{title}</Text>
      ) : (
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>Mood Buddy</Text>
        </View>
      )}
      
      <TouchableOpacity 
        style={styles.profileButton}
        onPress={onProfilePress}
        activeOpacity={0.7}
      >
        <Ionicons name="person-circle" size={32} color={theme.colors.primary} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.text,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 22,
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.primary,
  },
  profileButton: {
    padding: 4,
    borderRadius: 20,
  },
});