import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  children: React.ReactNode;
}

export default function Button({ children, style, ...props }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      {...props}
    >
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#C68666',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
