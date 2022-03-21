import React from 'react';
import {StatusBar} from 'react-native';
import Home from "./views/Home";
import MainLayout from "./layouts/MainLayout";

const App = () => {
    // const y = useSharedValue(0);
    //
    // const progress = useSharedValue(0);
    //
    // const scrollHandler = useAnimatedScrollHandler((event) => {
    //     y.value = event.contentOffset.y;
    // });

    return (
        <React.Fragment>
            <StatusBar barStyle="dark-content" />
                <MainLayout progress={0}>
                    <Home onScroll={null} />
                </MainLayout>
        </React.Fragment>
    );
};

export default App;
