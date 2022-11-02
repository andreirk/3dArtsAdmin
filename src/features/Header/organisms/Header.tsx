import * as React from "react";

import { Col, Row } from "antd";

import UserAvatar from "~/assets/UserAvatar.png";
import { useTypedSelector } from "~/hooks/useTypedSelector";

import { Account, Logo, Menu } from "../molecules";

export const Header: React.FC = () => {
  
  const userAvatar = UserAvatar;
  const notificationsCount = 5;
  return (
    <Row align='middle' justify='space-between'>
      <Col xs={24} sm={12} md={6} lg={6} xl={6} xxl={6}><Logo /></Col>
      <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}><Menu /></Col>
      <Col xs={24} sm={12} md={6} lg={6} xl={6} xxl={6}>
        <Account 
          logout={() => console.log('sign out')} 
          notificationsCount={notificationsCount} 
          userAvatar={userAvatar} 
          userName={'artist@mail.com'} />
      </Col>
    </Row>
  );
};
