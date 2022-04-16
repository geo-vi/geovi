import React from 'react';
import {
  SidebarContainer,
} from './styled';
import SidebarSection from './SidebarSection';

function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarSection label={'Who?'} index={1} offset={'100%'} />
      <SidebarSection label={'What?'} index={2} offset={'80%'} />
      <SidebarSection label={'Where?'} index={3} offset={'60%'} />
      <SidebarSection label={'How?'} index={4} offset={'40%'} />
    </SidebarContainer>
  );
}

export default Sidebar;
