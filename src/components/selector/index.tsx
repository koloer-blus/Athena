import React from 'react';
import  {Select} from 'antd';

interface IProps {
  optionsArray: any[];
  style?: any;
}

const selector = (props:IProps) => {
  const {optionsArray} = props;
  return (
    <Select
      showSearch
      style={{ width: 200 }}
      placeholder="Search to Select"
      optionFilterProp="children"
      filterOption={(input, option) =>
        option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      {
        optionsArray.map(value => (
          <Select.Option key={value} value={value}>{value}</Select.Option>
        ))
      }
    </Select>
  );
};

export default selector;