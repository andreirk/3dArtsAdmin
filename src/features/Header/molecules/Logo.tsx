import * as React from 'react';

import { Col, Row, Typography } from 'antd';
import styled from 'styled-components';

import { constants } from '~/config/constants';
import { BREAK_POINTS } from '~/ui/styles';

import { LogoIcon } from '../atoms';


const StyledCol = styled(Col)`
  display: flex;
  align-items: center;
`;

const StyledTitle = styled(Typography.Title)`
  &&& {
    margin-bottom: unset;
    @media screen and ${BREAK_POINTS.xs} {
      font-size: ${(props) => props.theme.typography.fontSize(7)};
    }
    @media screen and ${BREAK_POINTS.md} {
      font-size: ${(props) => props.theme.typography.fontSize(7)};
    }
    @media screen and ${BREAK_POINTS.lg} {
      font-size: ${(props) => props.theme.typography.fontSize(11)};
    }
    @media screen and ${BREAK_POINTS.xl} {
      font-size: ${(props) => props.theme.typography.fontSize(14)};
    }
  }
`;

export const Logo: React.FC = () => (
  <Row gutter={{ xs: 6, sm: 6, md: 6, lg: 12, xl: 12, xxl: 12, }} justify='center'>
    <StyledCol><LogoIcon /></StyledCol>
    <StyledCol><StyledTitle level={1}>{constants.appTitle}</StyledTitle></StyledCol>
  </Row>
);
