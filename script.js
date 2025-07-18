
  const radios = document.getElementsByName("showClicks");
  const clickBox = document.getElementById("clickResult");

  radios.forEach(radio => {
    radio.addEventListener("change", () => {
      if (radio.value === "yes") {
        clickBox.classList.remove("hidden");
      } else {
        clickBox.classList.add("hidden");
      }
    });
  });

