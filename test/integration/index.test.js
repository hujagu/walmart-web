import React from "react";
import { shallow } from "enzyme";
import App from "../../src/components/App";

it("renders App is correct", () => {
  const wrapper = shallow(<App />);

  expect(wrapper.html()).toEqual(
    '<div class=\"wrapper\"><header class=\"site-header\"><div class=\"container\"><div class=\"logo\"><img src=\"test-file-stub\" alt=\"\" style=\"width:152px;height:50px;margin-top:8px;margin-left:10px;padding-top:6px;margin-bottom:6px\"/></div><div id=\"searchBox\" class=\"search-box\"><form action=\"#\" id=\"searchBoxForm\" method=\"GET\" class=\"form-new search-form\"><input type=\"text\" name=\"search\" placeholder=\"¿Qué producto buscas hoy?\" id=\"searchtextinput\" autoComplete=\"off\" class=\"form-control search-input\"/><button type=\"submit\" id=\"searchsubmitbutton\" class=\"search-btn\"><svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 16 16\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" d=\"M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z\" clip-rule=\"evenodd\"></path><path fill-rule=\"evenodd\" d=\"M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z\" clip-rule=\"evenodd\"></path></svg></button></form></div></div></header></div>'
  );
});