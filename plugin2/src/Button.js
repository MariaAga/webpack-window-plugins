import React from 'react';

import { ButtonWrapper } from 'core/ButtonWrapper';

const style = {
  background: '#00c',
  color: '#fff',
  padding: 12,
};
const Button = () => (
  <div>
    <ButtonWrapper>
      <button style={style}>Plugin2 Button</button>
    </ButtonWrapper>
  </div>
);

export default Button;
