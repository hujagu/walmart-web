import React from "react";
import { shallow } from "enzyme";
import ProductImage from "../../../src/components/ProductImage";

describe("ProductImage ", () => {
  const product = {
    id: "id",
    image: "url",
    description: "description"
  }

  const wrapper = shallow(<ProductImage product={product} />);

  it("should be mount correctly", () => {
    expect(wrapper.find("div").length).toBe(3);
  });

  it("should be one a", () => {
    expect(wrapper.find("a").length).toBe(1);
  });

  it("should be one img", () => {
    expect(wrapper.find("img").length).toBe(1);
  });

  it("should be five span", () => {
    expect(wrapper.find("span").length).toBe(1);
  });

  it("should be image must have correct value", () => {
    const div = wrapper.find("div.photo-container").first();
    expect(
      div
        .find("img")
        .first()
        .html()
    ).toBe('<img src=\"https://url\" alt=\"description\" title=\"description\" class=\"img-responsive lazyloaded\"/>');

  });

  
  it("should be reference_code must have correct value", () => {
    const div = wrapper.find("div.responsive-holder-xs").first();
    expect(
      div
        .find("span")
        .first()
        .html()
    ).toBe('<span class=\"reference-code\"><b>id</b></span>');

  });
});
