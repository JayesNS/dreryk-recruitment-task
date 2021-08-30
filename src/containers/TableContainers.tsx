import React, { useMemo, useState } from 'react';
import { Table } from '../components/Table';

import { ColumnConfig, TableItem } from '../interfaces';
import { sortBy } from '../utils';

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
    <Table config={config} data={sortedData} onHeaderCellClick={handleHeaderCellClick} sortBy={sort}/>
  );
}

interface TableContainerProps {
  data: TableItem[],
  config: ColumnConfig[]
}