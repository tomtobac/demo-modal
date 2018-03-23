export type ModalProps = {
  isOpen?: boolean;
  onClose?: (() => void) | undefined;
  closeBackdropOnClick?: boolean;
  isBackdrop?: boolean;
  showCloseButton?: boolean;
  width?: number;
  height?: number;
  cssMeasureUnit?: string;
  animation?: string;
  onEnterAnimation?: string;
  onLeaveAnimation?: string;
  onAnimationEnd?: void;
  closeOnEsc?: boolean;
  animationDurationMS?: number;
  className?: string;
  customStyles?: object;
  customBackdropStyles?: object;
  children?: any;
};

export type ModalState = {
  isOpen?: boolean;
  animationState?: string;
};
