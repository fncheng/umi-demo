import { useEffect, useState } from 'react';

const useAsyncEffect = (asyncFunc: () => Promise<any>, deps?: any[]) => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const runAsyncFunc = async () => {
      try {
        let res = await asyncFunc();
        setResult(res);
      } catch (error: any) {
        setError(error);
      }
    };
    runAsyncFunc();
    return () => {};
  }, deps);
  return [result, error];
};

const asyncFunc: () => Promise<string> = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('async func');
    }, 2000);
  });

const Demo2 = () => {
  const [title, setTitle] = useState('');

  const fetchData = async () => {
    let res = await asyncFunc();
    setTitle(res);
  };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  useAsyncEffect(async () => {
    let res = await asyncFunc();
    setTitle(res);
  }, []);

  return <div>{title}</div>;
};

export default Demo2;
