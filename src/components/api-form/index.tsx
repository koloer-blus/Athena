import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import axios from 'axios';
import { async } from 'q';

const FormConfig = [
  {
    fields: {
      label: 'url',
      name: 'url',
      rules: [],
    },
    element: <Input />
  },
  {
    element: <Button type="primary" htmlType="submit">提交</Button>
  }
];

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

interface IProps {
  name: string;
  style: any;
}

const ApiForm = (props:IProps) => {
  const [reqData, setReqData] = useState<any>(null);
  const [resData, setResData] = useState<any>(null);
  const onSubmit =async (values: any) => {
    setReqData({
      values: values,
      start: Date.now()
    });
    const res = await axios.get(values.url);
    setResData({
      values: res,
      end: Date.now()
    });
  };
  return (
    <Form
      onFinish={onSubmit}
      onFinishFailed={(error) => {console.log(error);}}
      {...props}
      {...layout}
    >
      {
        FormConfig.map((item, index) => 
          <Form.Item key={item?.fields?.name || index} {...item.fields}>
            {item.element}
          </Form.Item>
        )
      }
      <div>
        请求耗时{resData?.end - reqData?.start}
      </div>
    </Form>
  );
};

export default ApiForm;