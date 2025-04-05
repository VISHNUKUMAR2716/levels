import React, { useState, useCallback } from 'react';

const Button = React.memo(({ onClick }) => {
  console.log('Button rendered');
  return <button onClick={onClick}>Click Me</button>;
});

const UseCallbackExample = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    alert('Button clicked!');
  }, []);

  return (
    <div style={{ padding: '20px', backgroundColor:"red" }}>
      <h2 className='d-flex justify-content-center'>useCallback Example</h2>
      <div className='d-flex justify-content-center gap-4'>
        
      <Button onClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      </div>
      <p style={{fontSize:"30px", display:"flex", justifyContent:"center ", margin:"20px"}}>Count: {count}</p>
    </div>
  );
};

export default UseCallbackExample;
