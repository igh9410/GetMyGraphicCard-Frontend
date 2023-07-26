import React, { FormEvent, useRef } from 'react';
import styles from './Search.module.scss';
import search from '@assets/img/icons/SearchIcon.svg';
import { Form, createSearchParams, useNavigate } from 'react-router-dom';

export function Search() {
  const searchRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!searchRef.current?.value) {
      return;
    }
    navigate({
      pathname: '/search',
      search: createSearchParams({
        title: searchRef.current?.value,
        pageNo: '1',
        size: '8',
      }).toString(),
    });
  };

  return (
    <>
      <Form method="GET" className={styles.searchBox} onSubmit={handleSubmit}>
        <span className={styles.svgContainer}>
          <button className={styles.searchIconFrame}>
            <img src={search} alt="Search Icon" />
          </button>
        </span>
        <input
          className={styles.inputBox}
          type="text"
          placeholder="Search for graphics cards..."
          ref={searchRef}
        />
      </Form>
    </>
  );
}
