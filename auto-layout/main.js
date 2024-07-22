document.addEventListener("DOMContentLoaded", function () {
  const list = document.getElementById("box-group");
  let dragSrcEl = null;

  function handleDragStart(e) {
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", this.innerHTML);
    this.classList.add("dragging");
  }

  function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.dataTransfer.dropEffect = "move";
    return false;
  }

  function handleDragEnter(e) {
    this.classList.add("over");
  }

  function handleDragLeave(e) {
    this.classList.remove("over");
  }

  function handleDrop(e) {
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    if (dragSrcEl !== this) {
      let items = Array.from(list.querySelectorAll(".box"));
      let dragSrcIndex = items.indexOf(dragSrcEl);
      let dropTargetIndex = items.indexOf(this);

      if (dragSrcIndex < dropTargetIndex) {
        this.parentNode.insertBefore(dragSrcEl, this.nextSibling);
      } else {
        this.parentNode.insertBefore(dragSrcEl, this);
      }
    }
    return false;
  }

  function handleDragEnd(e) {
    const items = document.querySelectorAll("#box-group .box");
    items.forEach(function (item) {
      item.classList.remove("over");
      item.classList.remove("dragging");
    });
  }

  const items = document.querySelectorAll("#box-group .box");
  items.forEach(function (item) {
    item.addEventListener("dragstart", handleDragStart);
    item.addEventListener("dragenter", handleDragEnter);
    item.addEventListener("dragover", handleDragOver);
    item.addEventListener("dragleave", handleDragLeave);
    item.addEventListener("drop", handleDrop);
    item.addEventListener("dragend", handleDragEnd);
  });

  document.addEventListener("keydown", function (event) {
    const focusedElement = document.activeElement;
    if (focusedElement.classList.contains("box")) {
      const currentIndex = Array.from(
        focusedElement.parentElement.children
      ).indexOf(focusedElement);
      if (event.key === "ArrowUp" && currentIndex > 0) {
        event.preventDefault();
        const previousElement = focusedElement.previousElementSibling;
        focusedElement.parentElement.insertBefore(
          focusedElement,
          previousElement
        );
        focusedElement.focus();
      } else if (
        event.key === "ArrowDown" &&
        currentIndex < focusedElement.parentElement.children.length - 1
      ) {
        event.preventDefault();
        const nextElement = focusedElement.nextElementSibling;
        focusedElement.parentElement.insertBefore(nextElement, focusedElement);
        focusedElement.focus();
      }
    }
  });
});
