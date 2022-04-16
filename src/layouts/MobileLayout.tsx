import React, {PropsWithChildren, useState} from 'react';
import {MainContainer, VerticalProgression} from '../components/styled';
import ProgressBar from '../components/ProgressBar';
import {SidebarProgression} from '../types/SidebarProgression';
import CustomBlurView from '../components/CustomBlurView';
import {Pressable} from 'react-native';
//@ts-ignore
import Icon from 'react-native-vector-icons/dist/Feather';

function MobileLayout({
  children,
  progress,
}: PropsWithChildren<SidebarProgression>) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <React.Fragment>
      <MainContainer>
        <VerticalProgression>
          <ProgressBar progress={progress} />
        </VerticalProgression>
        {children}
      </MainContainer>
      {menuOpen && (
        <CustomBlurView
          blurType={'dark'}
          blurAmount={10}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(49,49,49,0.5)',
          }}
        />
      )}
      <Pressable
        style={{position: 'absolute', left: 20, top: 20, padding: 20}}
        onPress={() => {
          setMenuOpen(prevState => !prevState);
        }}>
        <Icon name={'menu'} size={34} color={'white'} />
      </Pressable>
    </React.Fragment>
  );
}

export default MobileLayout;
