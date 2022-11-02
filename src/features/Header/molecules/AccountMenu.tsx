import * as React from 'react';

import { Menu } from 'antd';


export const AccountMenu: React.FC<any> = ({ logout }: any) => (
<Menu items={[{ key: '1', label: 'Выйти', onClick:logout }]} />
);
