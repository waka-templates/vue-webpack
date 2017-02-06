'use strict';

import Vue from 'vue';
import Info from '@components/info';

describe('Info.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Info)
    });
    expect(vm.$el.querySelector('.info h2').textContent)
      .to.equal('project info:');
  });
});
