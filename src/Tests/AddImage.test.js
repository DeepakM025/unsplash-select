import React from "react";
import AddImage from "../Pages/AddImage";
import {mount} from "enzyme";
import Utils from '../Utils/Actions';

const approval = jest.spyOn(Utils, 'approvalScen');
const skip = jest.spyOn(Utils, 'rejectScen');

describe("Add image component", () =>{
  const wrapper = mount(<AddImage />);
  it('Text header', () => {
    expect(wrapper.find(".second_header").text()).toContain("Add Image");
  })

  it("Add button Should call function", () => {
    const approvalBtn = wrapper.find(".add_btn").first();
    expect(approvalBtn).toBeDefined();
    approvalBtn.simulate("click");
    expect(approval).toHaveBeenCalled();
   })
   
  it("Skip button Should call function", () => {
    const skipBtn = wrapper.find(".skip_btn").first();
    expect(skipBtn).toBeDefined();
    skipBtn.simulate("click");
    expect(skip).toHaveBeenCalled();
   })
})