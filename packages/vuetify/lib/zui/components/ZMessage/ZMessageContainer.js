import Vue from 'vue';
import "../../../../src/zui/components/ZMessage/ZMessage.scss";
export const ZMessageContainer = Vue.extend({
  name: 'z-message-container',

  render(createElement) {
    return createElement('div', {
      staticClass: 'z-message-container'
    });
  }

});
export default ZMessageContainer;
//# sourceMappingURL=ZMessageContainer.js.map