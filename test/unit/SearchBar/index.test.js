import React from "react";
import { shallow } from "enzyme";
import SearchBar from "../../../src/components/SearchBar";

describe("SearchBar ", () => {

  const wrapper = shallow(<SearchBar />);

  it("should be mount correctly", () => {
    expect(wrapper.find("header").length).toBe(1);
  });

  it("should be two div", () => {
    expect(wrapper.find("div").length).toBe(2);
  });

  it("should be one logo", () => {
    expect(wrapper.find("Logo").length).toBe(1);
  });

  it("should be one search box", () => {
    expect(wrapper.find("SearchBox").length).toBe(1);
  });

  it("should be one product list", () => {
    expect(wrapper.find("ProductList").length).toBe(1);
  });

});
