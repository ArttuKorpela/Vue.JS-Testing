import { mount } from '@vue/test-utils';
import MyComponent from '@/components/DynamicBinding.vue';
import { describe, it, expect } from 'vitest';

describe('MyComponent', () => {
  it('renders with initial data', () => {
    const wrapper = mount(MyComponent);

    expect(wrapper.find('h1').element.style.color).toBe('black');
  });

  it('changes text color on button click', async () => {
    const wrapper = mount(MyComponent);

    // Click the button
    await wrapper.find('button').trigger('click');

    // Check if the text color changes to blue after the click
    expect(wrapper.find('h1').element.style.color).toBe('blue');
  });
});