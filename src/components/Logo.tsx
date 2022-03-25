import React from 'react';
import Svg, {G, Path, Rect, Text, TSpan, Line} from 'react-native-svg';

type LogoTypes = {
  width: number | string;
  height: number | string;
};

function Logo({width, height}: LogoTypes) {
  return (
    <Svg width={width} height={height} viewBox="0 0 450 270">
      <G transform="translate(-735 -425)">
        <G transform="translate(-45.75 -1)">
          <Path
            fill="#ce22ff"
            d="M94,0l94,126H0Z"
            transform="translate(954.75 570)"
          />
          <Rect
            fill="#1ed8d8"
            width="450"
            height="115"
            transform="translate(780.75 442)"
          />
          <Rect
            fill="#ce22ff"
            width="182"
            height="126"
            transform="translate(1048.75 570)"
          />
          <Text
            fill="#fff"
            fontFamily="SFProDisplay-Ultralight, SF Pro Display"
            fontWeight="100"
            fontSize="120px"
            transform="translate(781 540)">
            <TSpan x="0" y="0">
              Geovi
            </TSpan>
          </Text>
          <Text
            fill="#fff"
            fontFamily="SFProDisplay-Ultralight, SF Pro Display"
            fontWeight="100"
            fontSize="80px"
            transform="translate(1040 663)">
            <TSpan x="0" y="0">
              .DEV
            </TSpan>
          </Text>
          <Line
            fill="none"
            stroke="#ce00ff"
            x2="182"
            transform="translate(1048.5 569.5)"
          />
        </G>
      </G>
    </Svg>
  );
}

export default Logo;
