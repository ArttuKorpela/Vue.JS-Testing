import { mount } from '@vue/test-utils'
import Counter from '@/components/watcher.vue'
import { describe, it, expect } from 'vitest'

describe('watcher.vue', () => {
  it('Check that a button increments the count', async () => {
    const wrapper = mount(Counter)
    expect(wrapper.vm.count).toBe(0);
    await wrapper.find('button').trigger('click');
    expect(wrapper.vm.count).toBe(1);
  })

  it('Check that the increment matches the button presses', async () => {
    const wrapper = mount(Counter)

    for(let i = 0; i < 100; i++) {
      await wrapper.find('button').trigger('click');
    }

    expect(wrapper.vm.count).toBe(100);
  })
})