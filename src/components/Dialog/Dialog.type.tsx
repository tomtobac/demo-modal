export type DialogProps = {
  width?: number;
  height?: number;
  cssMeasureUnit?: string;
  animationDurationMS?: number;
  customStyles?: object;
  animation?: string;
  animationState?: string;
  onEnterAnimation?: string;
  onLeaveAnimation?: string;
  showCloseButton?: boolean;
  onClose?: any;
  children?: any;
};
