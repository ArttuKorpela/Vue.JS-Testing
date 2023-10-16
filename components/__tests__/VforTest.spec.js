import { mount } from '@vue/test-utils'
import List from '@/components/v-for.vue'
import { describe, it, expect } from 'vitest'

describe('v-for.vue', () => {
  it('Check that the list is iterated through', () => {
    const wrapper = mount(List)
    const items = wrapper.findAll("li");

    expect(items[0].text()).toBe("0: Apple");
    expect(items[1].text()).toBe("1: Banana");
    expect(items[2].text()).toBe("2: Kiwi");
    expect(items[3].text()).toBe("3: Orange");
  })

  it('Check that the list is iterated through with new items', async () => {
    const wrapper = mount(List)
    await wrapper.find('button').trigger('click');
    const items = wrapper.findAll("li");

    expect(items[0].text()).toBe("0: Grapes");
    expect(items[1].text()).toBe("1: Pineapple");
    expect(items[2].text()).toBe("2: Strawberry");
  })
})