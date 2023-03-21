"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./modal.css");
var Modal = function Modal(_ref) {
  var content = _ref.content,
    close = _ref.close,
    modalState = _ref.modalState,
    closeIcon = _ref.closeIcon;
  return modalState && /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-title"
  }, /*#__PURE__*/_react.default.createElement("div", {
    onClick: close,
    className: "close-modal"
  }, closeIcon ? /*#__PURE__*/_react.default.createElement("img", {
    src: closeIcon
  }) : "X")), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-custom-content"
  }, content)));
};
var _default = Modal;
exports.default = _default;