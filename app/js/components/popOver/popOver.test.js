/**
 * @jest-environment jsdom
 */

import PopOver from "./popOver"

describe("Tesing PopOver", () => {
	beforeEach(() => {
		document.body.innerHTML = `
            <div class="wrapper">
                <button class="trigger-popover"></button>
            </div>`

		const wrapper = document.querySelector(".wrapper")

		const popOver = new PopOver()

		wrapper.addEventListener("click", e => {
			const parrent = e.target.closest(".trigger-popover")

			if (parrent) {
				popOver.showPopover(parrent, "PopOver Title", "And here's some amazing content. It's very engaging. Right")
				return
			}

			popOver.removePopover()
		})
	})

	test("popOver shoul show", () => {
		const body = document.querySelector("body")
		const btn = document.querySelector(".trigger-popover")

		btn.click()

		expect(body.querySelector(".popover")).not.toBeNull()
	})

	test("popOver shoul show", () => {
		const body = document.querySelector("body")
		const btn = document.querySelector(".trigger-popover")
		const wrapper = document.querySelector(".wrapper")

		btn.click()

		wrapper.click()

		expect(body.querySelector(".popover")).toBeNull()
	})
})
