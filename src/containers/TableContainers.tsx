import React from 'react';

import { ColumnConfig, TableItem } from '../interfaces';

export const TableContainer = (props: TableContainerProps) => {
  return (
    <div>table</div>
  );
}

interface TableContainerProps {
  data: TableItem[],
  config: ColumnConfig[]
}