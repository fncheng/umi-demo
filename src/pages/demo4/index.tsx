import { ProForm, ProFormText } from '@ant-design/pro-form';

function Example() {
  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <ProForm onFinish={onFinish} name="exampleForm">
      <ProFormText
        label="输入框"
        name={'inputField'}
        rules={[{ required: true, message: '请输入内容' }]}
      />
    </ProForm>
  );
}

export default Example;
