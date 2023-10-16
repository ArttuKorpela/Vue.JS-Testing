import { mount } from '@vue/test-utils'
import Counter from '@/components/watcher.vue'
import { describe, it, expect } from 'vitest'
describe('watcher.vue', () => {
  it('updates the message when count exceeds 5', async () => {
    const wrapper = mount(Counter)

    // Simulating 6 button clicks
    for(let i = 0; i < 6; i++) {
      await wrapper.find('button').trigger('click');
    }

    expect(wrapper.text()).toContain('Limit reached! 6');
  })

  it('displays the correct count message below 5', async () => {
    const wrapper = mount(Counter)

    // Simulating 3 button clicks
    for(let i = 0; i < 3; i++) {
      await wrapper.find('button').trigger('click');
    }

    expect(wrapper.text()).toContain('Count is: 3 3');
  })
})