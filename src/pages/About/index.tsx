// import AsyncComponent from '@/components/AsyncComponent';
import { lazy, Suspense, useState } from 'react';
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
import { produce } from 'immer';

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

const About = () => {
  const { user, setUser } = useModel('count', (model) => ({
    user: model.user,
    setUser: model.setUser,
  }));
  const [userState, setUserState] = useState<User>({});

  const handleUser = () => {
    setUserState(
      produce((draft) => {
        draft.gender = Math.floor(Math.random() * 2);
      }),
    );
  };

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
