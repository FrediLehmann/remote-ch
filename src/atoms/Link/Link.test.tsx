import React from "react"
import { render, screen } from "@testing-library/react"
import { expect } from "chai"

import Link from "./Link"

describe("<Link />", () => {
  it("renders correctly minimal props", () => {
    render(<Link href="http://google.com/">Google</Link>)

    expect(screen.getByRole("link")).to.have.property("innerText", "Google")

    expect(screen.getByRole("link")).to.have.property(
      "href",
      "http://google.com/"
    )
  })

  it("renders correctly with props", () => {
    render(
      <Link
        href="http://google.com/"
        hreflang="en-US"
        rel="noreferrer"
        target="_blank">
        Google
      </Link>
    )

    expect(screen.getByRole("link")).to.have.property("hreflang", "en-US")

    expect(screen.getByRole("link")).to.have.property("rel", "noreferrer")

    expect(screen.getByRole("link")).to.have.property("target", "_blank")
  })

  it("renders correctly as external", () => {
    const { container } = render(
      <Link href="http://google.com/" external>
        Google
      </Link>
    )

    expect(screen.getByRole("link")).to.have.property("rel", "external")

    expect(container.querySelector("svg")).to.not.be.undefined
  })

  it("renders correctly as external and rel", () => {
    render(
      <Link href="http://google.com/" rel="noreferrer" external>
        Google
      </Link>
    )

    expect(screen.getByRole("link")).to.have.property("rel", "noreferrer")
  })
})
