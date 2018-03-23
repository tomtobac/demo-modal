import * as React from "react";
import { DialogProps } from "./Dialog.type";
import "./Dialog.css";
import CloseIcon from "./CloseIcon";

const Dialog = (props: DialogProps) => {
  const {
    width,
    height,
    cssMeasureUnit,
    animationDurationMS,
    customStyles,
    animationState,
    onEnterAnimation,
    onLeaveAnimation,
    showCloseButton,
    onClose,
    children
  } = props;

  const animation =
    (animationState === "enter" ? onEnterAnimation : onLeaveAnimation) ||
    props.animation;

  const dialogClasses = `modal-dialog modal-${animation}-${
    props.animationState
  }`;

  const dialogStyles = {
    width: width! + cssMeasureUnit!,
    height: height! + cssMeasureUnit!,
    animationDurationMS: animationDurationMS + "ms",
    WebkitAnimationDuration: animationDurationMS + "ms",
    ...customStyles
  };

  return (
    <div style={dialogStyles} className={dialogClasses}>
      {
        showCloseButton && (
        <CloseIcon onClick={onClose} className="modal-close" />
      )
      }
      {children}
    </div>
  );
};

export default Dialog;
