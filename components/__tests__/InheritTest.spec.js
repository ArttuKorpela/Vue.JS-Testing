import { mount } from '@vue/test-utils';
import ParentComponent from '@/components/ParentComponent.vue';
import { describe, it, expect } from 'vitest';

describe('ParentComponent', () => {
  it('should pass data to child component using props', () => {
    const wrapper = mount(ParentComponent);

    expect(wrapper.findComponent({ name: 'ChildComponent' }).text()).toContain('Hello from Parent!');
  });

  it('should update child component when parent data changes', async () => {
    const wrapper = mount(ParentComponent);

    wrapper.setData({ message: 'Updated message from Parent!' });

    await wrapper.vm.$nextTick();

    expect(wrapper.findComponent({ name: 'ChildComponent' }).text()).toContain('Updated message from Parent!');
  });
});
