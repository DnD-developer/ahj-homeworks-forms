export default class PopOver {
	create(title, text, top, left, width) {
		this.popOverDomEl = document.createElement("div")
		this.popOverDomEl.classList.add("popover")

		const popOverTitleDomEl = document.createElement("h3")
		popOverTitleDomEl.classList.add("popover__title")
		popOverTitleDomEl.textContent = title

		const popOverTexteDomEl = document.createElement("p")
		popOverTexteDomEl.classList.add("popover__text")
		popOverTexteDomEl.textContent = text

		this.popOverDomEl.appendChild(popOverTitleDomEl)
		this.popOverDomEl.appendChild(popOverTexteDomEl)

		this.popOverDomEl.style.left = `${left + width / 2}px`
		this.popOverDomEl.style.top = `${top - 10}px`
		this.popOverDomEl.style.maxWidth = `${width * 1.1}px`

		return this.popOverDomEl
	}

	showPopover(parrent, title, text) {
		this.removePopover()

		let parrentDomEl = parrent

		if (typeof parrentDomElement === "string") {
			parrentDomEl = document.querySelector(parrent)
		}

		const { top, left, width } = parrentDomEl.getBoundingClientRect()

		document.querySelector("body").appendChild(this.create(title, text, top, left, width))
	}

	removePopover() {
		if (this.popOverDomEl) {
			this.popOverDomEl.remove()
		}
	}
}
