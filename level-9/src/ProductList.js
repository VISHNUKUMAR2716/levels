import React, { useEffect, useState, useMemo } from 'react';
import { FixedSizeList as List } from 'react-window';
import ProductItem from './ProductItem';

const ProductList = ({ products }) => {
  const itemSize = 60;

  const Row = ({ index, style }) => {
    const item = products[index];
    return (
      <div style={style}>
        <ProductItem name={item.title} price={item.price} />
      </div>
    );
  };

  const itemData = useMemo(() => products, [products]);

  return (
    <List
      height={500}
      itemCount={itemData.length}
      itemSize={itemSize}
      width={'100%'}
    >
      {Row}
    </List>
  );
};

export default ProductList;
