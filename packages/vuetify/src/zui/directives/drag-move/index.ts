import { DirectiveOptions } from 'vue'

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

function getActivitorEls (el: HTMLElement, binding: any) {
  if (binding.arg !== 'activitor') return [el]
  const bindingValue = binding.value && Array.isArray(binding.value) ? binding.value : []
  let activitorEls: HTMLElement[] = []
  for (let i = 0, len = bindingValue.length; i < len; i++) {
    const selector = bindingValue[i]
    const activeEls = el.querySelectorAll(selector)
    activeEls.length && (activitorEls = [...activitorEls, ...activeEls])
  }
  return activitorEls.length ? activitorEls : [el]
}

export const DragMove: DirectiveOptions = {
  inserted (el: HTMLElement, binding: any) {
    const dialogEl = el
    if (!dialogEl) return
    let isInited = false
    const activitorEls = getActivitorEls(el, binding)
    let dialogHeight = 0
    let dialogWidth = 0
    let dialogTop = 0
    let dialogLeft = 0
    let movedDialogTop = 0
    let movedDialogLeft = 0

    activitorEls.forEach(activitorEl => {
      // 第一次被拖动时初始化数据
      activitorEl.addEventListener('mousedown', init)
      activitorEl.addEventListener('mousedown', addMousemoveEvent)
    })

    // 初始化
    function init () {
      if (isInited) {
        activitorEls.forEach(activitorEl => {
          activitorEl.removeEventListener('mousedown', init)
        })
        return
      }
      const boundingClientRect = dialogEl.getBoundingClientRect()
      dialogHeight = dialogEl.offsetHeight
      dialogWidth = dialogEl.offsetWidth
      dialogTop = boundingClientRect.top
      dialogLeft = boundingClientRect.left
      movedDialogTop = dialogTop
      movedDialogLeft = dialogLeft
      dialogEl.style.cssText += `position:fixed; top: ${dialogTop}px; left: ${dialogLeft}px; width:${dialogWidth}px; height:${dialogHeight}px;`
      isInited = true
    }

    // 添加鼠标事件
    function addMousemoveEvent (e: MouseEvent) {
      e.preventDefault()
      document.body.addEventListener('mousemove', handleMouseMove)
      document.body.addEventListener('mouseup', removeMousemoveEvent)
      document.body.addEventListener('mouseleave', removeMousemoveEvent)
    }

    // 移除鼠标事件
    function removeMousemoveEvent () {
      document.body.removeEventListener('mousemove', handleMouseMove)
      document.body.removeEventListener('mouseleave', removeMousemoveEvent)
      document.body.removeEventListener('mouseup', removeMousemoveEvent)
    }

    // 操作鼠标移动
    function handleMouseMove (e: MouseEvent) {
      const { movementX, movementY } = e
      const outerWindowX = 200
      const outerWindowY = 200
      movedDialogTop = movedDialogTop + movementY
      movedDialogLeft = movedDialogLeft + movementX
      movedDialogTop = movedDialogTop <= -outerWindowY ? -outerWindowY : movedDialogTop
      movedDialogTop = movedDialogTop >= window.innerHeight - dialogHeight + outerWindowY
        ? window.innerHeight - dialogHeight + outerWindowY
        : movedDialogTop
      movedDialogLeft = movedDialogLeft <= -outerWindowX ? -outerWindowX : movedDialogLeft
      movedDialogLeft = movedDialogLeft >= window.innerWidth - dialogWidth + outerWindowX
        ? window.innerWidth - dialogWidth + outerWindowX
        : movedDialogLeft
      dialogEl.style.top = movedDialogTop + 'px'
      dialogEl.style.left = movedDialogLeft + 'px'
    }
  },
}

export default DragMove
