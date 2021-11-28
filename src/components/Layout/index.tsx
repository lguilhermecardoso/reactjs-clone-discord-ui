import React from 'react';
import ServerList from '../ServerList';
import * as S from './styles';

const Layout: React.FC = () => {
  return (
    <S.Grid>
      <ServerList />
    </S.Grid>
  )
}

export default Layout;