import { Image, StyleSheet, Platform, View, Text } from 'react-native';

import * as Colors from '@/constants/themes';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text> teste </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.icon,
  },
});
