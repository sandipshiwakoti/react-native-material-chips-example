import {Chips} from 'react-native-material-chips';
import React, {useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';

import Text from './common/Text';
import {ChipsType} from 'react-native-material-chips/types';

const InputChipsExample = () => {
  const [value, setValue] = useState('');
  const [items, setItems] = useState([
    {label: 'React', value: 'React'},
    {label: 'Next JS', value: 'Next JS'},
  ]);

  return (
    <>
      <Text variant="subtitle" content="Input" />
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setValue}
        onSubmitEditing={() => {
          setItems([...items, {label: value, value: value}]);
          setValue('');
        }}
      />
      <Chips
        type={ChipsType.Input}
        items={items}
        setItems={setItems}
        itemVariant="outlined"
      />
    </>
  );
};

export default InputChipsExample;

const styles = StyleSheet.create({
  input: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 5,
    marginBottom: 10,
  },
});
