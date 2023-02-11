import PopOver from "./components/popOver/popOver"

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
