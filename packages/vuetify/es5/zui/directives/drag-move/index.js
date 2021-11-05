"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DragMove = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * 使用说明
 * 1. 引入指令
 *      import dragMoveDirective from drag-move.directive.js
 * 2. 注册指令
 *      directive:{ dragMove: dragMoveDirective }
 * 3. 使用指令
 *      a. <component v-drag-move /> 整个容器都可触发拖动
 *      b. <component v-drag-move:activitor="['#id1','#id2','.className']" 只有容器内#id1，#id2，.className 的元素可触发拖动
 */
function getActivitorEls(el, binding) {
  if (binding.arg !== 'activitor') return [el];
  var bindingValue = binding.value && Array.isArray(binding.value) ? binding.value : [];
  var activitorEls = [];

  for (var i = 0, len = bindingValue.length; i < len; i++) {
    var selector = bindingValue[i];
    var activeEls = el.querySelectorAll(selector);
    activeEls.length && (activitorEls = [].concat(_toConsumableArray(activitorEls), _toConsumableArray(activeEls)));
  }

  return activitorEls.length ? activitorEls : [el];
}

var DragMove = {
  inserted: function inserted(el, binding) {
    var dialogEl = el;
    if (!dialogEl) return;
    var isInited = false;
    var activitorEls = getActivitorEls(el, binding);
    var dialogHeight = 0;
    var dialogWidth = 0;
    var dialogTop = 0;
    var dialogLeft = 0;
    var movedDialogTop = 0;
    var movedDialogLeft = 0;
    activitorEls.forEach(function (activitorEl) {
      // 第一次被拖动时初始化数据
      activitorEl.addEventListener('mousedown', init);
      activitorEl.addEventListener('mousedown', addMousemoveEvent);
    }); // 初始化

    function init() {
      if (isInited) {
        activitorEls.forEach(function (activitorEl) {
          activitorEl.removeEventListener('mousedown', init);
        });
        return;
      }

      var boundingClientRect = dialogEl.getBoundingClientRect();
      dialogHeight = dialogEl.offsetHeight;
      dialogWidth = dialogEl.offsetWidth;
      dialogTop = boundingClientRect.top;
      dialogLeft = boundingClientRect.left;
      movedDialogTop = dialogTop;
      movedDialogLeft = dialogLeft;
      dialogEl.style.cssText += "position:fixed; top: ".concat(dialogTop, "px; left: ").concat(dialogLeft, "px; width:").concat(dialogWidth, "px; height:").concat(dialogHeight, "px;");
      isInited = true;
    } // 添加鼠标事件


    function addMousemoveEvent(e) {
      e.preventDefault();
      document.body.addEventListener('mousemove', handleMouseMove);
      document.body.addEventListener('mouseup', removeMousemoveEvent);
      document.body.addEventListener('mouseleave', removeMousemoveEvent);
    } // 移除鼠标事件


    function removeMousemoveEvent() {
      document.body.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', removeMousemoveEvent);
      document.body.removeEventListener('mouseup', removeMousemoveEvent);
    } // 操作鼠标移动


    function handleMouseMove(e) {
      var movementX = e.movementX,
          movementY = e.movementY;
      var outerWindowX = 200;
      var outerWindowY = 200;
      movedDialogTop = movedDialogTop + movementY;
      movedDialogLeft = movedDialogLeft + movementX;
      movedDialogTop = movedDialogTop <= -outerWindowY ? -outerWindowY : movedDialogTop;
      movedDialogTop = movedDialogTop >= window.innerHeight - dialogHeight + outerWindowY ? window.innerHeight - dialogHeight + outerWindowY : movedDialogTop;
      movedDialogLeft = movedDialogLeft <= -outerWindowX ? -outerWindowX : movedDialogLeft;
      movedDialogLeft = movedDialogLeft >= window.innerWidth - dialogWidth + outerWindowX ? window.innerWidth - dialogWidth + outerWindowX : movedDialogLeft;
      dialogEl.style.top = movedDialogTop + 'px';
      dialogEl.style.left = movedDialogLeft + 'px';
    }
  }
};
exports.DragMove = DragMove;
var _default = DragMove;
exports.default = _default;
//# sourceMappingURL=index.js.map