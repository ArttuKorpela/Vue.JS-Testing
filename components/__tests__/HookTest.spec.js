import { mount } from "@vue/test-utils";
import LifecycleComponent from "@/components/lifecyclehooks.vue";
import { it, expect, describe } from "vitest";

describe("LifecycleComponent", () => {
  it("Test the mount", () => {
    const wrapper = mount(LifecycleComponent);
    expect(wrapper.vm.message).toBe('Mounted Hook');
  });

  it("correctly updates message property in lifecycle hooks", async () => {
    const wrapper = mount(LifecycleComponent);

    expect(wrapper.vm.message).toBe("Mounted Hook");

    await wrapper.setData({}); // Trigger a data update

    expect(wrapper.vm.message).toBe("Updated Hook");
  });
});