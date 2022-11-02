import React from 'react';

import { Form, Input, Modal } from 'antd';
import styled from 'styled-components';

import { useTypedSelector } from '~/hooks/useTypedSelector';

const StyledModal = styled(Modal)`
  @media (max-width: 400px) {
    width: 100%;
  }
`

const ArtGalleryModal: React.FC<any> = ({ onSubmit, onCancel, onDataChange }) => {

  const { isOpen } = useTypedSelector(state => state.artGallery.modalWindow)

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const initValues: any = useTypedSelector(stata => stata.artGallery.currentItem) 
  const onOk = () => {
    onSubmit()
  }

  return (
    <StyledModal
      okText={'Save'}
      title={initValues ? 'Update' : 'New'}
      visible={isOpen}
      onOk={onOk}
      onCancel={onCancel}
    >
      <Form
        name='basic'
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 16 }}
        initialValues={initValues}
        // onFinish={handleChange}
        onValuesChange={onDataChange}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
 
        <Form.Item
          label='Title'
          name='title'
          rules={[{ required: true, message: 'Please input ' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Price'
          name='price'
          rules={[{ required: true, message: 'Please input ' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='ImageUrl'
          name='imageUrl'
          rules={[{ required: true, message: 'Please input ' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='ItemOrder'
          name='itemOrder'
          rules={[{ required: true, message: 'Please input ' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Id'
          name='id'
          hidden
          rules={[{ required: true, message: 'Please input ' }]}
        >
          <Input />
        </Form.Item>
       
      </Form>
    </StyledModal>
  );
};

export default ArtGalleryModal;
