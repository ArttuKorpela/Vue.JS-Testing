import { mount } from '@vue/test-utils'
import MyComponent from '@/components/ButtonComponent.vue'
import { describe, it, expect } from 'vitest'


describe('YourComponentName.vue', () => {
  it('calls Do nothing when button is clicked, doesnt acticvate the div method', async () => {
    const wrapper = mount(MyComponent)
    await wrapper.find("button").trigger("click")

    expect(wrapper.vm.message).toBe("Nothing was done")
  })

  it('Clicking a doesnt follow rref', async () => {
    const wrapper = mount(MyComponent)
    await wrapper.find("a").trigger("click")

    expect(wrapper.vm.message).toBe("Clicked")
  })

})