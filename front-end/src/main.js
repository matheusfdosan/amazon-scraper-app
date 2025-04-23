const button = document.querySelector("#search-btn")
const input = document.querySelector("#search-input")
const productsContainer = document.querySelector("#products-container")
const message = document.querySelector("#message")
const loading = document.querySelector("img#loading")

button.addEventListener("click", () => {
  // when the button is clicked, the values entered in the input will be captured
  const inputValue = input.value?.trim()

  // when the user performs a new search, the data from the previous search will be removed
  productsContainer.innerHTML = ""

  // when starting the search, the loading GIF will appear
  loading.classList.add("show")

  // if no value is entered, a message to enter a value will appear on the screen
  if (inputValue.length === 0) {
    // focus on the input element
    input.focus()
    input.classList.add("enter-a-product")

    // message on the screen
    message.classList.add("on")
    message.textContent = "Enter a product"

    // after 3 seconds, the message and the emphasis on the input will disappear
    setTimeout(() => {
      message.classList.remove("on")
      message.textContent = ""
      input.classList.remove("enter-a-product")
    }, 3000)

    loading.classList.remove("show")

    return
  }

  // fetch products from the back-end server
  fetch(`http://localhost:3000/api/scrape?keyword=${inputValue}`, {
    method: "GET",
  })
    .then((reponse) => reponse.json())
    .then((data) => {
      // when the data is returned
      data.forEach((product, index) => {
        const { image, title, rating, reviewCount } = product

        // HTML element for each product, I just insert the values in the right places using template literals
        const htmlProduct = `
        <div class="product-card" id="product-${index}">
          <img
            src="${image}"
            alt="${title} illustration"
          />
          <div class="card-info">
            <h3>${title}</h3>
            <div>
              <span class="stars">${rating}</span>
              <span class="reviews">(${reviewCount} reviews)</span>
            </div>
          </div>
        </div>
        `

        // each product is added to the productsContainer as HTML
        productsContainer.innerHTML += htmlProduct
        loading.classList.remove("show")
      })
    })
    .catch((err) => {
      loading.classList.remove("show")
      // if an error occurs, it will be reported
      console.error("Error to fecth products" + err)
    })
})
