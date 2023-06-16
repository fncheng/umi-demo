import React, { useState } from 'react';
import { history, Link, Prompt, useHistory } from 'umi';
import { Button, DatePicker } from 'antd';
import styles from './index.less';

enum checkType {
  '开启' = 1,
  '关闭' = 0,
}
interface RecordType {
  id?: number;
  checkName?: string;
  ip?: string;
  type?: checkType;
}

const obj: RecordType = {
  type: 1,
};

export default function IndexPage() {
  const [modified, setModified] = useState(false);
  const history = useHistory();
  // window.addEventListener('popstate', (e)=> {
  //   console.log('13',e)
  //   e.preventDefault()
  //   // e.stopPropagation()
  //   alert('你确定要离开么？')
  // })
  const handleGoToNextPage = () => {
    window.addEventListener('beforeunload', (e) => {
      e.preventDefault();
      console.log('beforeunload');
    });
    alert(123123);

    history.block('Are you sure you want to leave this page?');
    history.push('/next-page');
  };
  const handleRouteChange = () => {
    history.block('are you sure to leave?');
    history.push('/protable');
  };
  const record:RecordType = {
  }

  return (
    <div className={styles.container}>
      <span>{}</span>
      <button onClick={handleGoToNextPage}>Go to next page</button>
      <button onClick={handleRouteChange}>block</button>
      <p>Hello Umi</p>
      <DatePicker />
      <Button type="primary" style={{ marginLeft: 8 }}>
        Primary Button
      </Button>
      <div>
        <Link to="/about" onClick={() => setModified(true)}>
          goto about
        </Link>{' '}
        |<Link to="/protable">goto proTable</Link>
      </div>
      {/* <Prompt message="你确定要离开么？" /> */}
      {/* <Prompt message={'你确定要离开编辑页面吗？'} when={modified}></Prompt> */}
    </div>
  );
}
