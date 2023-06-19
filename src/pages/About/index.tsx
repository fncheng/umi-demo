// import AsyncComponent from '@/components/AsyncComponent';
import React, { lazy, Suspense, useState } from 'react';
import { Link, useModel } from 'umi';
// const HelloWorld = lazy(
//   () => import(/* webpackChunkName: "HelloWorld" */ '@/components/HelloWorld'),
// );
import {
  ProForm,
  ProFormDependency,
  ProFormDigit,
  ProFormSelect,
  ProFormSwitch,
  ProFormText,
  ProTable,
} from '@ant-design/pro-components';
import { Card, Col, Input, Row, Select, Form, Button, Switch } from 'antd';
import { produce } from 'immer';
import { Rule } from 'antd/es/form';

enum Gender {
  '女' = 0,
  '男' = 1,
}
interface User {
  name?: string;
  age?: number;
  gender?: Gender;
}

const genders = {
  0: '女',
  1: '男',
};

// const AsyncComponent = lazy(() => import('@/components/AsyncComponent'));

const rules: Rule[] = [
  { required: true },
  {
    pattern: /\s/g,
    message: '格式不正确',
  },
  // {
  //   validator: async (rule, value) => {
  //     if (/\s/g.test(value)) {
  //       return Promise.reject(new Error('格式不正确'));
  //     }
  //     return Promise.resolve();
  //   },
  // },
];

const About: React.FC = () => {
  const { user, setUser } = useModel('count', (model) => ({
    user: model.user,
    setUser: model.setUser,
  }));
  const [userState, setUserState] = useState<User>({});
  const [selectMode, setSelectMode] = useState('');

  const handleUser = () => {
    setUserState(
      produce((draft) => {
        draft.gender = Math.floor(Math.random() * 2);
      }),
    );
  };
  const [status, setStatus] = useState(true);
  console.log('render');

  return (
    <div>
      <button onClick={handleUser}>gender</button>
      <span>gender:{Gender[userState?.gender!]}</span>
      <span>gender:{genders[userState?.gender!]}</span>
      <button onClick={() => setUser(100)}>setUser</button>
      <div>About, goBack </div>
      <Link to="/">home123</Link>
      {/* <Suspense fallback={<div>123</div>}>
        <HelloWorld />
      </Suspense> */}
      <Row justify="start" gutter={20}>
        <Col>
          <ProForm>
            <ProFormSelect
              name="mode"
              options={[
                { value: 'input', label: '输入框' },
                { value: 'select', label: '选择框' },
              ]}
            />
            <ProFormDependency name={['mode']}>
              {({ mode }) => {
                if (mode === 'select') {
                  return (
                    <ProFormSelect
                      key={mode}
                      options={[
                        {
                          value: 'chapter',
                          label: '盖章后生效',
                        },
                      ]}
                      width="md"
                      name="function"
                      label="生效方式"
                    />
                  );
                }
                return (
                  <ProFormText
                    key="input"
                    width="md"
                    name="function"
                    label="生效方式"
                  />
                );
              }}
            </ProFormDependency>
            <ProFormText name="name" label="姓名" rules={rules}></ProFormText>
            <ProFormText
              name="age"
              label="年龄"
              rules={[{ required: true }]}
            ></ProFormText>
            <ProFormText
              name="password"
              label="密码"
              validateTrigger="onBlur"
              rules={[
                { required: true },
                {
                  pattern:
                    /^[a-zA-Z0-9!@#$%^&*()_+,\-./:;<=>?@[\\\]^_`{|}~]{8,}$/,
                  // validateTrigger: 'onBlur',
                  message: '密码应为8位以上长度英文字母、数字和常见特殊字符',
                },
              ]}
            />
          </ProForm>
        </Col>
        <Col>
          <div style={{ width: '200px' }}>
            <Select
              title="select xuan"
              style={{ width: '100%' }}
              options={[
                { value: 'input', label: '输入框' },
                { value: 'select', label: '选择框' },
              ]}
              // value={selectMode}
              onSelect={(val) => {
                setSelectMode(val);
              }}
              onChange={(e) => {
                // console.log(e);
                // setSelectMode()
              }}
            ></Select>
            <Input
              defaultValue={'23123'}
              value={selectMode}
              onChange={(e) => setSelectMode(e.target.value)}
            />
          </div>
        </Col>
        <Col>
          <Form name="basic">
            <Form.Item
              label="Username"
              name="username"
              validateTrigger={['onChange', 'onBlur']}
              rules={[
                { required: true, message: '必填' },
                {
                  validator(rule, value) {
                    if (value === '123') {
                      return Promise.reject('username error');
                    }
                    return Promise.resolve();
                  },
                  validateTrigger: 'onBlur',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              validateTrigger={['onBlur']}
              rules={[
                {
                  pattern:
                    /^[a-zA-Z0-9!@#$%^&*()_+,\-./:;<=>?@[\\\]^_`{|}~]{8,}$/,
                  validateTrigger: 'onBlur',
                  message: '密码应为8位以上长度英文字母、数字和常见特殊字符',
                },
              ]}
            >
              <Input type="password" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <Row>
        <Switch checked={status}></Switch>
        <ProForm>
          <ProFormSwitch name={'status'}></ProFormSwitch>
        </ProForm>
      </Row>
    </div>
  );
};

export default About;
