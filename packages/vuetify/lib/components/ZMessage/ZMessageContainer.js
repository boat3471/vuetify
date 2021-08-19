import Vue from 'vue';
export let zMessageContainer;
export const ZMessageContainer = Vue.extend({
  name: 'z-message-container',

  mounted() {
    zMessageContainer = this;
  },

  render(createElement) {
    return createElement('div', {
      class: {
        'z-message-container': true
      },
      attrs: {}
    });
  }

});
export default ZMessageContainer;
//# sourceMappingURL=ZMessageContainer.js.map