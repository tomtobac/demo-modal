import * as React from "react";
import Backdrop from "../Backdrop/index";
import Dialog from "../Dialog/index";

import "./Modal.css";

import { ModalProps, ModalState } from "./Modal.type";

class Modal extends React.Component<ModalProps, ModalState> {
  static defaultProps = {
    isOpen: false,
    isBackdrop: true,
    closeBackdropOnClick: true,
    showCloseButton: true,
    closeOnEsc: true,
    width: 400,
    height: 240,
    cssMeasureUnit: "px",
    animation: "fade",
    onEnterAnimation: "",
    onLeaveAnimation: "",
    animationDurationMS: 300,
    className: "",
    customStyles: {},
    customBackdropStyles: {}
  };

  outerDIV: any;

  state = {
    isOpen: false,
    animationState: "leave"
  };

  componentDidMount() {
    if (this.props.isOpen) {
      this.onEnter();
    }
  }

  componentWillReceiveProps(nextProps: ModalProps) {
    if (!this.props.isOpen && nextProps.isOpen) {
      this.onEnter();
    } else if (this.props.isOpen && !nextProps.isOpen) {
      this.onLeave();
    }
  }

  onEnter() {
    this.setState({
      isOpen: true,
      animationState: "enter"
    });
  }

  onLeave() {
    this.setState({ animationState: "leave" });
  }

  onKeyUp = (event: React.KeyboardEvent<any>) => {
    if (this.props.closeOnEsc && event.keyCode === 27) {
      this.props.onClose!();
    }
  };

  onAnimationEnd = (event: React.AnimationEvent<HTMLDivElement>) => {
    if (this.state.animationState === "leave") {
      this.setState({ isOpen: false });
    } else if (this.props.closeOnEsc) {
      this.outerDIV.focus();
    }

    if (event.target === this.outerDIV) {
      const { onAnimationEnd } = this.props;
    }
  };

  render() {
    const { props, state } = this;

    // uses the state because animation wont work "on leave" with props
    if (!state.isOpen) {
      return null;
    }

    const animationDurationStyle = {
      animationDurationMS: props.animationDurationMS + "ms",
      WebkitAnimationDuration: props.animationDurationMS + "ms"
    };

    const modalClasses = `modal modal-fade-${state.animationState} ${
      props.className
    }`;

    return (
      <div
        ref={this.setRef}
        style={animationDurationStyle}
        className={modalClasses}
        onAnimationEnd={this.onAnimationEnd}
        onKeyUp={this.onKeyUp}
        tabIndex={-1}
      >
        {props.isBackdrop && (
          <Backdrop
            onClose={props.closeBackdropOnClick ? props.onClose : undefined}
            customBackdropStyles={props.customBackdropStyles}
            {...props}
          />
        )}
        <Dialog animationState={state.animationState} {...props}>
          {props.children}
        </Dialog>
      </div>
    );
  }

  setRef = (outerDIV: any) => {
    this.outerDIV = outerDIV;
  };
}

export default Modal;
