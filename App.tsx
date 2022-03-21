import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import styled from 'styled-components';

const Wrapper = styled(View)`
  align-items: center;
`;

const App = () => {
    return (
        <SafeAreaView>
            <StatusBar barStyle="dark-content" />
            <Wrapper>
                <Text style={{fontSize: 24}}>Hello World</Text>
            </Wrapper>
        </SafeAreaView>
    );
};

export default App;
