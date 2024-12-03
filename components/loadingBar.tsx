import {StyleSheet, View} from 'react-native';
import React from 'react';

export default function LoadingBar({percentage = 0}: {percentage?: number}) {
  const styles = dynamicSytles(percentage);
  return (
    <View style={styles.view1}>
      <View style={styles.view2} />
    </View>
  );
}

const dynamicSytles = (percentage: number) =>
  StyleSheet.create({
    view1: {
      backgroundColor: '#96afb6',
      height: 12,
      width: '100%',
      borderRadius: 40,
    },
    view2: {
      backgroundColor: '#23ae64',
      height: 12,
      width: `${percentage.toString()}%` as `${number}%`,
      borderRadius: 40,
    },
  });
