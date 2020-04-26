import React from "react";
import ReactDOM from "react-dom";

import Backdrop from "./Backdrop/Backdrop";
import { WrappedModal, InsideWrapper } from "./Modal.styled";

/**
 * Removes repetition will stop rerendering everything. (React Memo)
 */
const Modal = React.memo(
  ({ opened, close, children }) => {
    return ReactDOM.createPortal(
      <>
        <Backdrop close={close} opened={opened} />
        <WrappedModal opened={opened}>
          <InsideWrapper>{children}</InsideWrapper>
        </WrappedModal>
      </>,
      document.getElementById("root-modal")
    );
  },
  (prevProps, nextProps) => {
    return prevProps.opened === nextProps.opened;
  }
);

export default Modal;
