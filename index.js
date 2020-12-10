try {
  AOS.init()
} catch (e) {
  console.error(e.message)
}

const inputs = document.querySelectorAll('input')


document
  .querySelector('[data-button="form"]')
  .addEventListener('click', e => {
    e.preventDefault()
    let message = {
      valid: false,
      value: 'Вітаємо, вам скоро зателефонують!'
    }
    for (const el of inputs) {
      if (!el.value) message.value = 'Введіть усі дані'
      else message.valid = true
    }
    const modal = document.createElement('div')
    modal.classList.add('modal')
    document.body.style.overflow = 'hidden'
    modal.innerHTML = `
      <div class="p-5 bg-light rounded-3">
        <p class="h2">${message.value}</p>
        <button class="text-white m-auto mt-5 d-block btn btn-lg bg-rose px-5 py-3 text-uppercase fw-bolder rounded-pill">Закрити це повідомлення</button>
      </div>
    `

    function removeChild() {
      document.body.removeChild(modal)
      document.body.style.overflowY = 'auto'
    }

    function sendToServer() {
      if (message.valid) {
        // send info to DB
        removeChild()
      } else {
        removeChild()
      }
    }
    document.body.appendChild(modal)
    document.querySelector('.modal').addEventListener('dblclick', sendToServer)
    document.querySelector('.modal button').addEventListener('click', sendToServer)
  })
