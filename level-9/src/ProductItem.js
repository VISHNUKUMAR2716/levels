import React from 'react';

const ProductItem = React.memo(({ name, price }) => {
  console.log("Rendering:", name);
  return (
    <div style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
      📦 {name} - 💰 ₹{price}
    </div>
  );
});

export default ProductItem;
