import React, { ReactNode, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useSelectedItems } from '../../contexts/SelectedItemsContext';
//import Stats from '../../entites/stats';
import { SelectableStats } from '../../pages/Home/index'

import {
    Wrapper,
    Item,
    Thumbnail,
    DriftIndicator,
} from './styles';

export type SelectableItemProps = {
    baseUrl: string;
    item: SelectableStats;
    type: string;
}

const SelectableItem: React.FC<SelectableItemProps> = ({
  item,
  baseUrl,
  type
}) => {
  const [selected, setSelected] = useState<boolean>(false);
  const {    
    changeSelectedBodyName,
    selectedBodyName,
    
    changeSelectedDriverName,
    selectedDriverName,

    changeSelectedGliderName,
    selectedGliderName,

    changeSelectedTireName,
    selectedTireName,
  } = useSelectedItems();

  const handleSelected = () => {
    setSelected(true);
    getChangeFn()(item.name);
  };

  const getChangeFn = () => {
    const dic = {
      'body': changeSelectedBodyName,
      'driver': changeSelectedDriverName,
      'glider': changeSelectedGliderName,
      'tire': changeSelectedTireName,
    } as {[key: string]: (name: string) => void};

    return dic[type];
  };

  const getNameToCompare = () => {
    const dic = {
      'body': selectedBodyName,
      'driver': selectedDriverName,
      'glider': selectedGliderName,
      'tire': selectedTireName,
    } as {[key: string]: string};

    return dic[type];
  }

  return (      
      <Item
        onPress={handleSelected}
        style={{
          backgroundColor: selected && getNameToCompare() === item.name ? '#3dc92b' : '#ddd'
        }}
        >          
        <Thumbnail source={{ uri: `${baseUrl}${item.imageUrl}` }} />
        { item.insideDrift && <DriftIndicator source={{ uri: `${baseUrl}/public/images/drift.png` }}/> }
      </Item>
  );
}

export default SelectableItem;