import React from "react";
import { shallow } from "enzyme";
import Logo from "../../../src/components/Logo";

describe("Logo ", () => {
  const wrapper = shallow(<Logo />);

  it("should be mount correctly", () => {
    expect(wrapper.find("div").length).toBe(1);
  });
});
