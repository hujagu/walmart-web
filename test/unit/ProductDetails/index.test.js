import React from "react";
import { shallow } from "enzyme";
import ProductDetails from "../../../src/components/ProductDetails";

describe("ProductDetails ", () => {
  const product = {
    brand: "brand name",
    description: "description",
    price: "100",
    discount: "50%"
  }

  const wrapper = shallow(<ProductDetails product={product} />);

  it("should be mount correctly", () => {
    expect(wrapper.find("div").length).toBe(2);
  });

  it("should be one a", () => {
    expect(wrapper.find("a").length).toBe(1);
  });

  it("should be four span", () => {
    expect(wrapper.find("span").length).toBe(4);
  });

  it("should be product_name must have correct value", () => {
    const firstDiv = wrapper.find("div").first();
    expect(
      firstDiv
        .find("span")
        .first()
        .html()
    ).toBe('<span class=\"product-name\">brand name</span>');

  });

  it("should be product_description must have correct value", () => {
    const firstDiv = wrapper.find("div").first();
    expect(
      firstDiv
        .find("span")
        .at(1)
        .html()
    ).toBe('<span class=\"product-description js-ellipsis\"><b>description</b></span>');

  });

  it("should be price_sell must have correct value", () => {
    const secondDiv = wrapper.find("div").at(1);
    expect(
      secondDiv
        .find("span")
        .first()
        .html()
    ).toBe('<span class=\"price-sell\"><b>$ 100 </b></span>');

  });

  it("should be discount must have correct value", () => {
    const secondDiv = wrapper.find("div").at(1);
    expect(
      secondDiv
        .find("span")
        .at(1)
        .html()
    ).toBe('<span><b>50%</b></span>');

  });

});
