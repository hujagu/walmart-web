import React from "react";
import { shallow } from "enzyme";
import SearchBox from "../../../src/components/SearchBox";

describe("SearchBox ", () => {

  const wrapper = shallow(<SearchBox />);

  it("should be mount correctly", () => {
    expect(wrapper.find("div").length).toBe(1);
  });

  it("should be one form", () => {
    expect(wrapper.find("form").length).toBe(1);
  });

  it("should be one input", () => {
    expect(wrapper.find("input").length).toBe(1);
  });

  it("should be one button", () => {
    expect(wrapper.find("button").length).toBe(1);
  });

  it("should be one icon", () => {
    expect(wrapper.find("BsSearch").length).toBe(1);
  });

});
