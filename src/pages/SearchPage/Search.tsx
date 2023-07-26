/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ChangeEvent, useState } from 'react';
import styles from './Search.module.scss';
import { useItemSearch } from '@hooks';
import { SearchItem } from '@features/search';
import { Pagination } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { Item } from '@components';

export function Search() {
  const { data, isLoading, error } = useItemSearch();
  const [searchParams, setSearchParams] = useSearchParams();
  const content = data && data.content ? data.content : [];
  const pageNumber: number = data && data.number ? data.number : 0;
  const totalPages = data && data.totalPages ? data.totalPages : 0;

  const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
    // keep all existing search parameters and only update pageNo
    setSearchParams({
      ...Object.fromEntries(searchParams),
      pageNo: value.toString(),
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.gridBox}>
        {content.map((item: SearchItem) => (
          <Item key={item.id} info={item} />
        ))}
      </div>
      <div className={styles.pagination}>
        <Pagination
          count={totalPages}
          page={pageNumber + 1}
          onChange={handlePageChange}
          color="primary"
        />
      </div>
    </div>
  );
}
