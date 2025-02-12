import React, { useState } from 'react';
import { Pagination } from './Pagination';

export default { title: 'Pagination' };

export function Controlled() {
  const [value, setValue] = useState(2);
  return (
    <>
      Current page: {value}
      <Pagination total={20} page={value} onChange={setValue} />
    </>
  );
}

export function DecimalTotal() {
  return <Pagination total={45.331} />;
}

export function NegativeTotal() {
  return <Pagination total={-10} />;
}
