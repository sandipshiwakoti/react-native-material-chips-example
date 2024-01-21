import React, {useState} from 'react';
import {Chips} from 'react-native-material-chips';

import Text from './common/Text';

const FilterChipsExample = () => {
  const [items, setItems] = useState([
    {label: 'Football', value: '1'},
    {label: 'Cricket', value: '2'},
    {label: 'Tennis', value: '3'},
    {label: 'Table Tennis', value: '4'},
    {label: 'Basketball', value: '5'},
    {label: 'Swimming', value: '6'},
  ]);
  const [selectedValues, setSelectedValues] = useState(['1', '2']);

  return (
    <>
      <Text variant="subtitle" content="Filter" />
      <Chips
        type="filter"
        itemVariant="outlined"
        items={items}
        setItems={setItems}
        selectedValues={selectedValues}
        setSelectedValues={setSelectedValues}
      />
    </>
  );
};

export default FilterChipsExample;
