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
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  inserted: function inserted(el, binding) {
    var dialogEl = el;
    if (!dialogEl) return;
    var isInited = false;
    var mouseStartX = 0;
    var mouseStartY = 0;
    var activitorEls = getActivitorEls(el, binding);
    var dialogHeight = 0;
    var dialogWidth = 0;
    var dialogY = 0;
    var dialogX = 0;
    var newDialogX = 0;
    var newDialogY = 0;
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
      dialogY = boundingClientRect.top;
      dialogX = boundingClientRect.left;
      dialogEl.style.cssText += "position:fixed; top: ".concat(dialogY, "px; left: ").concat(dialogX, "px; width:").concat(dialogWidth, "px; height:").concat(dialogHeight, "px;");
      isInited = true;
    } // 添加鼠标事件


    function addMousemoveEvent(e) {
      e.preventDefault();
      document.body.addEventListener('mousedown', setMouseStartPos);
      document.body.addEventListener('mousemove', handleMouseMove);
      document.body.addEventListener('mouseup', setMouseDownElPos);
      document.body.addEventListener('mouseup', removeMousemoveEvent);
      document.body.addEventListener('mouseleave', setMouseDownElPos);
      document.body.addEventListener('mouseleave', removeMousemoveEvent);
    } // 移除鼠标事件


    function removeMousemoveEvent() {
      document.body.removeEventListener('mousedown', setMouseStartPos);
      document.body.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseup', setMouseDownElPos);
      document.body.removeEventListener('mouseup', removeMousemoveEvent);
      document.body.removeEventListener('mouseleave', removeMousemoveEvent);
      document.body.removeEventListener('mouseleave', setMouseDownElPos);
    }

    function setMouseStartPos(e) {
      mouseStartX = e.x;
      mouseStartY = e.y;
    }

    function setMouseDownElPos() {
      dialogX = newDialogX;
      dialogY = newDialogY;
    }

    function handleMouseMove(e) {
      var mouseDeltaX = e.x - mouseStartX;
      var mouseDeltaY = e.y - mouseStartY;
      newDialogX = dialogX + mouseDeltaX;
      newDialogY = dialogY + mouseDeltaY; //处理四周边界情况

      if (newDialogY > window.innerHeight - dialogHeight) {
        newDialogY = window.innerHeight - dialogHeight;
      } else if (newDialogY < 0) {
        newDialogY = 0;
      }

      if (newDialogX > window.innerWidth - dialogWidth) {
        newDialogX = window.innerWidth - dialogWidth;
      } else if (newDialogX < 0) {
        newDialogX = 0;
      }

      dialogEl.style.left = newDialogX + 'px';
      dialogEl.style.top = newDialogY + 'px';
    }
  }
};
exports.DragMove = DragMove;
var _default = DragMove; //# sourceMappingURL=index.js.map

exports.default = _default;
//# sourceMappingURL=index.js.map