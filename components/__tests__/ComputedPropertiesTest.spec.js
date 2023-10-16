import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import DataChange from '@/components/datachanges.vue'

describe('datachanges.vue', () => {
  it('renders the correct data when mounted', () => {
    const wrapper = mount(DataChange)

  
    expect(wrapper.text()).toBe('2, 3, 5')
  })

  it('reacts to data changes', async () => {
    const wrapper = mount(DataChange)

    wrapper.setData({ first_int: 3 })

    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toBe('3, 3, 6')
  })
})
