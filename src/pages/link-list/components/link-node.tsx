import * as React from 'react';

interface IProps {
  value: string;
  next: any;
}

const LinkNode = (props: IProps) => {
  const { value, next } = props;
  return (
    <React.Fragment>
      <div>
        <div>value: {value}</div>
      </div>
    </React.Fragment>
  );
};

export default LinkNode;
