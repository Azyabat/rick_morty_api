import React, { ReactElement } from 'react';

interface ICustomFieldProps {
  label: string;
  value: string | ReactElement;
  isJSXValue?: boolean;
}

function CustomField(props: ICustomFieldProps) {
  const { label, value, isJSXValue } = props;

  return (
    <div className="custom-field-wrapper">
      {!isJSXValue && <p>{`${label}: ${value}`}</p>}
      {isJSXValue && (
        <div className="element-container">
          <p>{`${label}:`}</p> {value}
        </div>
      )}
    </div>
  );
}

export default CustomField;
