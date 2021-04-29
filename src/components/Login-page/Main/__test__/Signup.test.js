import { act, fireEvent } from "@testing-library/react";
import React from "react";
import renderer from "react-test-renderer";
import SignupForm from "../Signup";
import { render, unmountComponentAtNode } from "react-dom";

describe("Contact Component", () => {
  let container = null;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });
  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  it("changes value when clicked", () => {
    const onChange = jest.fn();
    act(() => {
      render(<SignupForm onChange={onChange} />, container);
    });
  });
  it("should render component correctly", () => {
    const component = renderer.create(<SignupForm></SignupForm>).toJSON();
    expect(component).toMatchSnapshot();
  });
  it("should submit correct information", async () => {
    const { getByLabelText, getByTextId } = render(<SignupForm></SignupForm>);
    const name = getByLabelText("Your Name");
    const selectValue = getByLabelText("Select");
    const message = getByLabelText("Message");
    const formContact = getByTextId("signup-form");
    const dummyInfo = {
      dummyName: "Huy Le Vu Anh",
      dummySelect: "Rider",
      dummyMessage: "This is message for testing",
    };
    act(() => {
      fireEvent.change(name, { target: { value: dummyInfo.dummyName } });
      fireEvent.change(selectValue, {
        target: { value: dummyInfo.dummySelect },
      });
      fireEvent.change(message, { target: { value: dummyInfo.dummyMessage } });
      fireEvent.submit(formContact);
    });
    await (() => {
      expect(name).toHaveTextContent(dummyInfo.fakeName);
      expect(selectValue).toHaveTextContent(dummyInfo.fakeSelect);
      expect(message).toHaveTextContent(dummyInfo.fakeMessage);
    });
  });
});
