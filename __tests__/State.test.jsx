import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import { State } from "../src/";

describe("<State />", () => {
  it("matches the snapshot", () => {
    const tree = renderer.create(<State value="hot"> hot </State>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should correctly handle disable state.", () => {
    const wrapper = shallow(
      <State disable value="hot">
        hot
      </State>
    );
    expect(wrapper.hasClass("abg-switch__state--disable")).toBe(true);
  });

  it("should correctly render inner text.", () => {
    const wrapper = shallow(
      <State disable value="hot">
        hot
      </State>
    );
    expect(wrapper.text()).toBe("hot");
  });
});
