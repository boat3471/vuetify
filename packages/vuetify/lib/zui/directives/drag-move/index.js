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
  const bindingValue = binding.value && Array.isArray(binding.value) ? binding.value : [];
  let activitorEls = [];

  for (let i = 0, len = bindingValue.length; i < len; i++) {
    const selector = bindingValue[i];
    const activeEls = el.querySelectorAll(selector);
    activeEls.length && (activitorEls = [...activitorEls, ...activeEls]);
  }

  return activitorEls.length ? activitorEls : [el];
}

export const DragMove = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  inserted(el, binding) {
    const dialogEl = el;
    if (!dialogEl) return;
    let isInited = false;
    let mouseStartX = 0;
    let mouseStartY = 0;
    const activitorEls = getActivitorEls(el, binding);
    let dialogHeight = 0;
    let dialogWidth = 0;
    let dialogY = 0;
    let dialogX = 0;
    let newDialogX = 0;
    let newDialogY = 0;
    activitorEls.forEach(activitorEl => {
      // 第一次被拖动时初始化数据
      activitorEl.addEventListener('mousedown', init);
      activitorEl.addEventListener('mousedown', addMousemoveEvent);
    }); // 初始化

    function init() {
      if (isInited) {
        activitorEls.forEach(activitorEl => {
          activitorEl.removeEventListener('mousedown', init);
        });
        return;
      }

      const boundingClientRect = dialogEl.getBoundingClientRect();
      dialogHeight = dialogEl.offsetHeight;
      dialogWidth = dialogEl.offsetWidth;
      dialogY = boundingClientRect.top;
      dialogX = boundingClientRect.left;
      dialogEl.style.cssText += `position:fixed; top: ${dialogY}px; left: ${dialogX}px; width:${dialogWidth}px; height:${dialogHeight}px;`;
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
      const mouseDeltaX = e.x - mouseStartX;
      const mouseDeltaY = e.y - mouseStartY;
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
export default DragMove; //# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map