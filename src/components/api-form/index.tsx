import React, { useState } from 'react';
import { Button, Form, Input, Switch, Select } from 'antd';
import Selector from 'components/selector';
import axios from 'axios';
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

interface IProps {
  name: string;
  style: any;
}

const requestMethod = ['get', 'post', 'put'];
const urlBefore = ['https://', 'http://'];
const ApiForm = (props: IProps) => {
  const onSubmit = async (values: any) => {

  };
  return (
    <Form
      onFinish={onSubmit}
      onFinishFailed={(error) => { console.log(error); }}
    >
      <Form.Item
        name="method"
        label="请求方式"
      >
        <Selector
          optionsArray={requestMethod}
        />
      </Form.Item>
      <Form.Item
        name="url"
        label="请求地址"
      >
        <Input
          addonBefore={
            <Selector
              optionsArray={urlBefore}
            />
          }
        />
      </Form.Item>
      <Form.Item
        name="params"
        label="请求参数"
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        style={{
          textAlign: 'right'
        }}
      >
        <Button>Test Now~</Button>
      </Form.Item>
    </Form>
  );
};

export default ApiForm;