import { mount } from "@vue/test-utils";
import ButtonComponent from "@/components/v-if-else-if.vue";
import { describe, it, expect } from "vitest";

describe("ButtonComponent", () => {
  it("renders 'Nothing' initially", () => {
    const wrapper = mount(ButtonComponent);

    expect(wrapper.text()).toContain("Nothing");
  });

  it("renders button clicks and their correct outputs", async () => {
    const wrapper = mount(ButtonComponent);

    await wrapper.find("button").trigger("click");

    expect(wrapper.text()).toContain("Button has been pressed once");

    await wrapper.find("button").trigger("click");

    expect(wrapper.text()).toContain("Button has been pressed multiple times");

  });

});
