import React from "react";
import { shallow } from "enzyme";
import ProductList from "../../../src/components/ProductList";

describe("Product ", () => {

  const wrapper = shallow(<ProductList products={[{}]}/>);

  it("should be mount correctly", () => {
    expect(wrapper.find("div").length).toBe(1);
  });

  it("should be one Product", () => {
    expect(wrapper.find("Product").length).toBe(1);
  });

});
