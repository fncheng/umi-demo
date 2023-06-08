import React from 'react';
import { Link } from 'umi';
import { Button, DatePicker } from 'antd';
import styles from './index.less';
import 'antd/dist/reset.css';

export default function IndexPage() {
  return (
    <div className={styles.container}>
      <p>Hello Umi</p>
      <DatePicker />
      <Button type="primary" style={{ marginLeft: 8 }}>
        Primary Button
      </Button>
      <div>
        <Link to="/about">goto about</Link> |
        <Link to="/protable">goto proTable</Link>
      </div>
    </div>
  );
}
