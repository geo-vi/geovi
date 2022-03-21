import React from "react";
import {Text} from "react-native";
import styled from "styled-components";

const PrimaryLogoFont = styled(Text)`
  color: white;
  font-size: 30px;
`

function Logo() {
    return (<PrimaryLogoFont>
        GEOVI.DEV
    </PrimaryLogoFont>)
}

export default Logo;
