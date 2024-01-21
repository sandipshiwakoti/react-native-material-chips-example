import React from 'react';
import {Text as RNText, StyleSheet, StyleProp, TextStyle} from 'react-native';

type TextVariant = 'title' | 'subtitle';

interface TextProps {
  variant: TextVariant;
  content: string;
}

const Text = (props: TextProps) => {
  const {variant, content} = props;

  const getTextStyle = (): StyleProp<TextStyle> => {
    if (variant === 'title') {
      return styles.title;
    } else if (variant === 'subtitle') {
      return styles.subtitle;
    }
    return styles.title;
  };

  return (
    <>
      <RNText style={getTextStyle()}>{content || null}</RNText>
    </>
  );
};

export default Text;

const styles = StyleSheet.create({
  title: {
    marginTop: 3,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 8,
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
