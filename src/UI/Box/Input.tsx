
import React, { useState, ChangeEvent } from 'react';


// interface MyForm {
//   style?: CSSProperties & { 
//     /* Declare any additional CSS properties you use here */
//     myCustomCssProp?: string;
//   };
// }
const MyForm: React.FC = () => {
  const [textValue, setTextValue] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(e.target.value);
  };

  return (
    <form>
      <textarea
        value={textValue}
        onChange={handleChange}
        placeholder="Enter text here..."
        rows={1}
        cols={80}
        style={{ border: '1px solid #000', padding: '8px' }} 
      />
    </form>
  );
};

export default MyForm;