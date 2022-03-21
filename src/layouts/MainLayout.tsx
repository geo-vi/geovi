import React, {PropsWithChildren} from "react";
import {View} from "react-native";
import styled from "styled-components";

type MainLayoutTypes = {
    progress: number
}

const MainContainer = styled(View)`
  flex-direction: row;
  height: 100%;
`

const VerticalProgression = styled(View)`
  height: 100%;
  width: 10px;
  background: #171717;
`

type ProgressBarTypes = { percentage: number } & any

const ProgressBar = styled<ProgressBarTypes>(View)`
  height: ${props => props.percentage}%;
  width: 100%;
  background: white;
`

function MainLayout({children, progress}: PropsWithChildren<MainLayoutTypes>) {
    return (<MainContainer>
        <VerticalProgression>
            <ProgressBar percentage={progress} />
        </VerticalProgression>
        {children}
    </MainContainer>)
}

export default MainLayout;
