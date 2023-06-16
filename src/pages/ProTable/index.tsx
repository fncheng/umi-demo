import produce from 'immer';
import React, {
  PropsWithChildren,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Button, Form, Input, Pagination, Row, Table, Transfer } from 'antd';
import { ProColumns, ProTable } from '@ant-design/pro-components';
import { getList } from './service';
import styles from './style.module.less';
import { getTableScroll } from '@/utils';

interface RecordType {
  id?: number;
  checkName?: string;
  ip?: string;
  type?: 0 | 1;
}

const checkType = {
  0: '开启',
  1: '关闭',
};

const obj:RecordType = {
  type: 1
}

const columns: ProColumns<RecordType>[] = [
  {
    title: 'id',
    dataIndex: 'id',
    sorter: (a, b) => a.id - b.id,
    defaultSortOrder: 'descend',
  },
  {
    title: '检测源名称',
    dataIndex: 'checkName',
    sorter: (a, b) => a.checkName.localeCompare(b.checkName),
  },
  { title: '检测源主机', dataIndex: 'ip', sorter: true },
  {
    title: '性别',
    dataIndex: 'gender',
    filters: true,
    valueEnum: {
      0: '女',
      1: '男',
    },
  },
  {
    title: 'count',
    dataIndex: 'number',
    sorter: (a, b) => {
      return a.number - b.number;
    },
  },
];

export default function App() {
  const node = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState('');
  useEffect(() => {
    setScrollY(getTableScroll({ extraHeight: 66, ref: node }));
    console.log('123', typeof document.querySelector('.App'));
  }, []);

  return (
    <div className="App" ref={node}>
      <div style={{ height: '32px' }}>
        <span>{checkType[obj.type!]}</span>
        <Button>123</Button>
        <span>{Math.random()}</span>
        <button className="my-ant-btn">123</button>
      </div>
      <ProTable
        rowKey="ip"
        columns={columns}
        pagination={false}
        scroll={{ y: scrollY }}
        request={async (params, sorter, filter) => {
          console.log('you clicked  search button', params);
          const res = await getList();
          console.log('res', res);
          return {
            data: res?.body?.content,
            success: true,
          };
        }}
      />
      <div className={styles.paginationWrapper}>
        <Pagination
          showQuickJumper
          showSizeChanger
          pageSizeOptions={['10', '20', '40']}
        />
      </div>
    </div>
  );
}
