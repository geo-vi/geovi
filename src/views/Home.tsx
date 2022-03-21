import {Pressable, ScrollView, Text, View} from "react-native";
import React, {useRef} from "react";
import Logo from "../components/Logo";
import Page from "../components/styled/Page";
import Animated from "react-native-reanimated";

type HomeTypes = {
    onScroll: any
}

function Home({onScroll}: HomeTypes) {
    const scrollViewRef = useRef<any>();

    const onPressTestButton = () => {
        scrollViewRef.current.scrollToEnd()
    }

    return (
        <Animated.ScrollView
            ref={scrollViewRef}
            scrollEventThrottle={16} // ~60 events per second
            onScroll={onScroll}
        >
            <Page style={{alignItems: "center", justifyContent: "center"}}>
                <Logo />
                <Pressable onPress={onPressTestButton} style={{backgroundColor: "white", margin: 20, paddingHorizontal: 20, paddingVertical: 10}}>
                    <Text>
                        Test button
                    </Text>
                </Pressable>
            </Page>
            <Page />
            <Page />
            <Page />
            <Page />
            <Page />
            <Page style={{alignItems: "center", justifyContent: "center"}}>
                <Text style={{color: "white"}}>Last page</Text>
            </Page>
        </Animated.ScrollView>
    )
}

export default Home;
