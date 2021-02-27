import React, { FC } from 'react';
import Svg, { SvgProps, G, Path, Rect, Text, TSpan } from 'react-native-svg';

const ColaIcon: FC<SvgProps> = (props) => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1056.002 1096.245"
            width={1056.002}
            height={1096.245}
            {...props}
        >
            <G transform="matrix(5.27985 0 0 5.47462 -241.363 -91.142)">
                <Path fill="#fcc052" d="M45.714 16.648h200v200h-200z" />
                <Rect ry={0} height={200} width={200} y={16.648} x={45.714} fill="maroon" />
                <Path
                    d="M170.9 52.008l73.858 93.354-.079 19.843-98.425-80.266c.666-10.353-.798-30.699 1.997-31.058-2.673-2.216 15.092-1.25 22.65-1.872z"
                    fill="#500"
                    stroke="#500"
                    strokeWidth={0.962}
                />
                <Path d="M106.34 88.045l72.677 1.718-18.927 103.24-38.861-.919z" fill="#d40000" />
                <Text
                    style={{
                        lineHeight: '125%',
                    }}
                    transform="matrix(.22321 -1.276 .76035 .13333 0 0)"
                    y={243.399}
                    x={-106.603}
                    fontSize={22.666}
                    fontFamily="Bebas Neue"
                    letterSpacing={0}
                    wordSpacing={0}
                    fill="#fff"
                >
                    <TSpan x={-106.603} y={243.399} fontStyle="italic" fontWeight={700}>
                        {'cola'}
                    </TSpan>
                </Text>
                <Path
                    d="M180.09 87.405l64.634 78.262.51 50.74-103.4-.24-19.481-23.535 37.54.911z"
                    fill="#500"
                    stroke="#500"
                    strokeWidth={0.962}
                />
                <Rect
                    transform="rotate(1.356) skewX(.003)"
                    ry={3.063}
                    height={6.127}
                    width={84.479}
                    y={82.09}
                    x={101.82}
                    fill="#e3dedb"
                />
                <Path
                    d="M146.36 85.089l-.152-29.254c.32-2.528 1.718-3.382 3.338-3.893l20.81-.472-.493-4.585-21.9.806c-4.258 1.755-5.23 3.517-5.775 5.28l-1.716 31.978z"
                    fill="#2b0000"
                    stroke="#2b0000"
                    strokeWidth={0.962}
                />
                <Path d="M170.29 46.374l74.938 92.366-.014 6.433-74.338-93.26z" fill="#500" />
            </G>
        </Svg>
    );
};

export default ColaIcon;
