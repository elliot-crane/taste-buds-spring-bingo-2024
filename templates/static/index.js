function handleTimestamps() {
  const elements = document.body.querySelectorAll("*[data-timestamp]");
  for (let el of elements) {
    const timestamp = parseInt(el.getAttribute("data-timestamp"));
    const text = document.createTextNode(new Date(timestamp).toLocaleString());
    el.appendChild(text);
  }
}

handleTimestamps();
