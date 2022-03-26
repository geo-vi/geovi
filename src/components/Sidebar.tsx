import React from 'react';
import {
  SidebarContainer,
  SidebarLabel,
  SidebarSectionContainer,
  SidebarSectionLeed,
} from './styled';

function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarSectionContainer>
        <SidebarSectionLeed />
        <SidebarLabel>Who?</SidebarLabel>
      </SidebarSectionContainer>
      <SidebarSectionContainer style={{width: '80%'}}>
        <SidebarSectionLeed />
        <SidebarLabel>What?</SidebarLabel>
      </SidebarSectionContainer>
      <SidebarSectionContainer style={{width: '60%'}}>
        <SidebarSectionLeed />
        <SidebarLabel>When?</SidebarLabel>
      </SidebarSectionContainer>
      <SidebarSectionContainer style={{width: '40%'}}>
        <SidebarSectionLeed />
        <SidebarLabel>Where?</SidebarLabel>
      </SidebarSectionContainer>
      <SidebarSectionContainer style={{width: '20%'}}>
        <SidebarSectionLeed />
        <SidebarLabel>How?</SidebarLabel>
      </SidebarSectionContainer>
    </SidebarContainer>
  );
}

export default Sidebar;
