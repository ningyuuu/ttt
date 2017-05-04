if (module.hot) {
  module.hot.accept()
}

const root = document.getElementById('main')
root.innerHTML += `<p>Hello webpack!</p>`