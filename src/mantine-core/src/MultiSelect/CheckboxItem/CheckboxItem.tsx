import { Box, Checkbox } from '@mantine/core';
import React, { forwardRef } from 'react';

export interface SelectItemProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'value'> {
  label: React.ReactNode;
  value?: string;
  selected?: boolean;
}

export const CheckboxItem = forwardRef<HTMLDivElement, SelectItemProps>(
  ({ label, value, selected, ...others }: SelectItemProps, ref) => (
    <Box ref={ref} {...others}>
      <Checkbox checked={selected} label={label || value} />
    </Box>
  )
);

CheckboxItem.displayName = '@mantine/core/CheckboxItem';
