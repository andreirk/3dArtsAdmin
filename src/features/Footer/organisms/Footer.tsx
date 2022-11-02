import * as React from 'react';

import { Col, Row, Typography } from 'antd';
import styled from 'styled-components';

import { constants } from '~/config/constants';

const StyledParagraph = styled(Typography.Paragraph)`
  color: ${(props) => props.theme.palette.typography.disabled};
`;

export const Footer: React.FC = () => (
  <Row justify='center'>
    <Col>
      <StyledParagraph>{`«${constants.appTitle}» | Все права защищены.`}</StyledParagraph>
    </Col>
  </Row>
);
