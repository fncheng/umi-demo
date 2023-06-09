import React, { useRef } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable, { ActionType, ProColumns } from '@ant-design/pro-table';
import { Button } from 'antd';

export default () => {
  const actionRef = useRef<ActionType>();

  const handleUpdateData = () => {
    // 在这里你可以更新 ProTable 的数据源
    // ...

    // 调用 actionRef.current() 进行刷新
    if (actionRef.current) {
      actionRef.current.reload();
    }
  };

  const columns: ProColumns[] = [{ title: 'name', dataIndex: 'name' }];

  return (
    <PageContainer>
      <ProTable
        columns={columns}
        request={async (params) => {
          console.log('request data')
          return {};
        }} // 在这里配置表格数据源
        actionRef={actionRef} // 绑定 actionRef
        rowKey="id"
        search={false}
        toolbar={{
          // 在表格的工具栏中添加一个按钮，点击之后调用 handleUpdateData() 函数更新数据并刷新表格
          actions: [
            <Button key="reload" onClick={handleUpdateData}>
              更新数据
            </Button>,
          ],
        }}
      />
    </PageContainer>
  );
};

// 定义数据请求函数 fetchData()，用于实现表格的数据请求
async function fetchData(params) {
  // ...
}
