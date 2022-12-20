import React from 'react';
import { SelectItem } from '../../Select';

export const getSelectedItems = (
  _value: string[],
  sortedData: SelectItem[],
  isCreatable: boolean,
  Value: React.FC<any>,
  props,
  styles,
  handleValueRemove
) => {
  const selectedItems = _value
    .map((val) => {
      let selectedItem = sortedData.find((item) => item.value === val && !item.disabled);
      if (!selectedItem && isCreatable) {
        selectedItem = {
          value: val,
          label: val,
        };
      }
      return selectedItem;
    })
    .filter((val) => !!val)
    .map((item) => (
      <Value
        {...item}
        variant={props.variant}
        disabled={props.disabled}
        className={styles.classes.value}
        readOnly={props.readOnly}
        onRemove={(event: React.MouseEvent<HTMLButtonElement>) => {
          event.preventDefault();
          event.stopPropagation();
          handleValueRemove(item.value);
        }}
        key={item.value}
        size={props.size}
        styles={styles}
        classNames={styles.classNames}
        radius={props.radius}
      />
    ));

  return selectedItems;
};
