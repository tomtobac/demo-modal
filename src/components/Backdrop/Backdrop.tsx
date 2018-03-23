import * as React from 'React';
import { BackdropProps } from './Backdrop.type';
import './Backdrop.css';

const Backdrop: React.StatelessComponent<BackdropProps> = ({
  customBackdropStyles,
  onClose,
}) => (
  <div
    className="modal-backdrop"
    style={customBackdropStyles}
    onClick={onClose}
  />
);

export default Backdrop;
