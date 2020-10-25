import React from "react";
import { shallow } from "enzyme";
import Product from "../../../src/components/Product";

describe("Product ", () => {
  const product = {
    image: {},
    details: {}
  }

  const wrapper = shallow(<Product product={product} />);

  it("should be mount correctly", () => {
    expect(wrapper.find("div").length).toBe(4);
  });

  it("should be one image", () => {
    expect(wrapper.find("ProductImage").length).toBe(1);
  });

  it("should be one details", () => {
    expect(wrapper.find("ProductDetails").length).toBe(1);
  });

  it("should be one button", () => {
    expect(wrapper.find("button").length).toBe(1);
  });

  it("should be one icon", () => {
    expect(wrapper.find("FaShoppingCart").length).toBe(1);
  });

});
