import React from "react"
import { render, screen } from "@testing-library/react"
import { expect } from "chai"

import Tag from "./Tag"

describe("<Link />", () => {
  it("renders correctly", () => {
    render(<Tag>Front-end</Tag>)

    expect(screen.getByRole("button")).to.have.property(
      "innerText",
      "Front-end"
    )
  })
})
