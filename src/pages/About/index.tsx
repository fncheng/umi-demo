// import AsyncComponent from '@/components/AsyncComponent';
import { lazy, Suspense } from 'react';
import { Link, useModel } from 'umi';
// const HelloWorld = lazy(
//   () => import(/* webpackChunkName: "HelloWorld" */ '@/components/HelloWorld'),
// );
import {
  ProForm,
  ProFormDigit,
  ProFormText,
  ProTable,
} from '@ant-design/pro-components';
import { Input } from 'antd';

// const AsyncComponent = lazy(() => import('@/components/AsyncComponent'));

const About = () => {
  const { user, setUser } = useModel('count', (model) => ({
    user: model.user,
    setUser: model.setUser,
  }));
  return (
    <div>
      <button onClick={() => setUser(100)}>setUser</button>
      <div>About, goBack </div>
      <Link to="/">home123</Link>
      {/* <Suspense fallback={<div>123</div>}>
        <HelloWorld />
      </Suspense> */}
      <ProForm>
        <>
          <ProFormText
            name="name"
            label="姓名"
            rules={[
              { required: true },
              {
                validator: async (rule, value) => {
                  if (/\s/g.test(value)) {
                    throw new Error('输入不能包含空格，请删除空格后再试！');
                  }
                  return Promise.resolve();
                },
              },
            ]}
          ></ProFormText>
          <ProFormText
            name="age"
            label="年龄"
            rules={[{ required: true }]}
          ></ProFormText>
        </>
      </ProForm>
    </div>
  );
};

export default About;
