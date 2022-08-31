import React from "react";
import * as reactAnimationName from "react-animations";
import Radium, { StyleRoot } from "radium";
import {AnimationName} from "../types/animationName"

interface AnimationProps {
  children: JSX.Element | JSX.Element[];
  animationType: AnimationName;
  speedAnimation: string;
}

export const Animation = ({
  children,
  animationType,
  speedAnimation,
}: AnimationProps) => {
  const style = {
    [animationType]: {
      animation: speedAnimation,
      animationName: Radium.keyframes(
        reactAnimationName[animationType],
        animationType
      ),
    },
  };

  return <StyleRoot style={style[animationType]}>{children}</StyleRoot>;
};
