class Scroller {
  constructor(rootSelector) {
    const rootElement = document.querySelector(rootSelector);
    this.sections = document.querySelectorAll('section');
    this.currentSectionIndex = 0;
    this.isThrottled = false;
  }

  listenScroll = (event) => {
    if (this.isThrottled) return;
    this.isThrottled = true;

    setTimeout(function () {
      this.isThrottled = false;
    }, 1000);

    const direction = event.wheelDelta < 0 ? 1 : -1;

    // scroll(direction)
  }

  scroll = (direction) => {
    console.log(direction)
    if (direction === 1) {
      const isLastSection = this.currentSectionIndex === this.sections.length - 1;
      if (isLastSection) return;
    } else if (direction === -1) {
      const firstSection = currentSectionIndex === 0;
      if (firstSection) return;
    }

    currentSectionIndex = currentSectionIndex + direction

    scrollToCurrentSection();
  }


}