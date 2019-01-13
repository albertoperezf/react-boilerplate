function matchMedia() {
  return {
    matches: false,
    addListener() {},
    removeListener() {},
  };
}

window.matchMedia = window.matchMedia || matchMedia;
