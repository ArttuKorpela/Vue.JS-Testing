import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import DataBindComponent from '@/components/databind.vue'

describe('DataBindComponent.vue', () => {
  it('renders the correct data when mounted', () => {
    // Mount the component
    const wrapper = mount(DataBindComponent)

    // Check if the component renders the data correctly
    expect(wrapper.text()).toBe('Hello, Vue!')
  })

  it('reacts to data changes', async () => {
    // Mount the component
    const wrapper = mount(DataBindComponent)

    // Modify component data
    wrapper.setData({ message: 'New Message!' })

    // Wait for Vue's next update cycle
    await wrapper.vm.$nextTick()

    // Check if the component reflects the data change
    expect(wrapper.text()).toBe('New Message!')
  })
})
