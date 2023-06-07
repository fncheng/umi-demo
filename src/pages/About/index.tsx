// import AsyncComponent from '@/components/AsyncComponent';
import { lazy, Suspense } from 'react';
import { Link, useModel } from 'umi';
const HelloWorld = lazy(
  () => import(/* webpackChunkName: "HelloWorld" */ '@/components/HelloWorld'),
);
console.log(HelloWorld);

import AsyncHugeA from '@/components/AsyncComponent';

// const AsyncComponent = lazy(() => import('@/components/AsyncComponent'));

const About = () => {
  const { user, setUser } = useModel('count', (model) => ({
    user: model.user,
    setUser: model.setUser,
  }));
  console.log(user);
  return (
    <div>
      <button onClick={() => setUser(100)}>setUser</button>
      <div>About, goBack </div>
      <Link to="/">home123</Link>
      {/* <AsyncHugeA /> */}
      <Suspense fallback={<div>123</div>}>
        <HelloWorld />
      </Suspense>
      {/* <HelloWorld /> */}
      {/* <AsyncComponent /> */}
    </div>
  );
};

export default About;
