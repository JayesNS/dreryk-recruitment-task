import React, { useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Table } from '../components/Table';

import { ColumnConfig, TableItem } from '../interfaces';
import { sortBy, Theme } from '../utils';

export const TableContainer = (props: TableContainerProps) => {
  const {data, config} = props;

  const [sort, setSort] = useState('id');

  const sortedData = useMemo(() => {
    return sortBy(data, [sort])
  }, [data, sort]);

  const handleHeaderCellClick = (key: string) => {
    setSort(key);
  };

  return (
    <ThemeProvider theme={Theme.RED}>
      <Table config={config} data={sortedData} onHeaderCellClick={handleHeaderCellClick} sortBy={sort}/>
    </ThemeProvider>
  );
}

interface TableContainerProps {
  data: TableItem[],
  config: ColumnConfig[]
}