import React from 'react';
import {SidebarContainer} from './styled';
import SidebarSection from './SidebarSection';

type SidebarTypes = {
  onPageTravel: any;
};

function Sidebar({onPageTravel}: SidebarTypes) {
  return (
    <SidebarContainer>
      <SidebarSection
        label={'Who?'}
        index={1}
        offset={'100%'}
        onPress={onPageTravel}
      />
      <SidebarSection
        label={'What?'}
        index={2}
        offset={'80%'}
        onPress={onPageTravel}
      />
      <SidebarSection
        label={'Where?'}
        index={3}
        offset={'60%'}
        onPress={onPageTravel}
      />
      <SidebarSection
        label={'How?'}
        index={4}
        offset={'40%'}
        onPress={onPageTravel}
      />
    </SidebarContainer>
  );
}

export default Sidebar;
