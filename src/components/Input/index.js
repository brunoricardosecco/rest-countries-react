import React from 'react';

import { CustomInput } from './styles';

const Input = React.forwardRef(({ children, errors, ...rest }, ref) => {
  return (
    <CustomInput error={errors} {...rest} ref={ref}>
      {children}
    </CustomInput>
  );
});

export default Input;
