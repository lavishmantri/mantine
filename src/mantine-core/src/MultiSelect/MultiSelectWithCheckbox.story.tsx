import React from 'react';
import { MultiSelectWithCheckbox } from './MultiSelectWithCheckbox';
import { Box } from '../Box';

export default { title: 'MultiSelectWithCheckbox' };

export function MultiSelectWithCheckboxInDropdown() {
  return (
    <Box w={400} p={16}>
      <MultiSelectWithCheckbox
        label="Your favorite Rick and Morty character"
        placeholder="Pick all that you like"
        searchable
        data={[
          { value: 'rick', label: 'Rick', group: 'Used to be a pickle' },
          { value: 'morty', label: 'Morty', group: '' },
          { value: 'beth', label: 'Beth', group: 'Never was a pickle' },
          { value: 'summer', label: 'Summer', group: 'Never was a pickle' },
        ]}
      />
    </Box>
  );
}
