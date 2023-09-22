import React from "react";
import ReactDOM from "react-dom";
import { Fragment } from "react";

function Backdrop(props) {
    return <div className="fixed inset-0 bg-black opacity-50 z-10" onClick={props.onhideCart}></div>

};

function ModalOverlay(props) {
        return (
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-white rounded-lg shadow-lg p-6 w-11/12 md:max-w-md">
                {props.children}
            </div>
        );
};

const portalElement = document.getElementById('overlays');

function Modal(props) {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onhideCart={props.onhideCart}/>, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </Fragment>
    );
};

export default Modal;
