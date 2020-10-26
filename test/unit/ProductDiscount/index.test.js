import React from "react";
import { shallow } from "enzyme";
import ProductDiscount from "../../../src/components/ProductDiscount";

describe("ProductDiscount ", () => {
  const product = {
    applyDiscount: true,
    discount: "50%"
  }

  const wrapper = shallow(<ProductDiscount product={product} />);

  it("should be mount correctly", () => {
    expect(wrapper.find("span").length).toBe(1);
  });

  it("should be product discount must have correct value", () => {
    const span = wrapper.find("span").first();
    expect(
      span
        .html()
    ).toBe('<span class=\"discount-percent\"><b>50%</b></span>');

  });

});
