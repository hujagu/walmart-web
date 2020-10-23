import React from "react";
import { shallow } from "enzyme";
import App from "../../../src/components/App";

describe("App ", () => {
  const wrapper = shallow(<App />);

  it("should be mount correctly", () => {
    expect(wrapper.find("div").length).toBe(1);
  });

  it("should be one Logo", () => {
    expect(wrapper.find("Logo").length).toBe(1);
  });
});
