import React, {useState} from 'react';
import {Chips} from 'react-native-material-chips';

import Text from './common/Text';

const DefaultChipsExample = () => {
  const [items, setItems] = useState([
    {label: 'I agree!', value: 'I agree!'},
    {label: 'Looks good!', value: 'Looks good!'},
    {label: 'Thank you!', value: 'Thank you!'},
    {label: 'What song is this?', value: 'What song is this?'},
  ]);

  return (
    <>
      <Text variant="title" content="Chips" />

      <Text variant="subtitle" content="Default" />
      <Chips items={items} setItems={setItems} />
    </>
  );
};

export default DefaultChipsExample;
