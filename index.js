import {blogPosts, myVlog} from "/db.js"
const mainEl = document.getElementById("main-content")
const burgerEl = document.getElementById("burger-div")
const burgerElFullScreen = document.getElementById("burger-overlay")



document.addEventListener("click", function(e){
  // clieckeo un post
  if (e.target.closest(".post")?.dataset.uuid) {
    const selectedPostUuid = e.target.closest(".post")?.dataset.uuid
    renderArticle(selectedPostUuid)
    updateURL(selectedPostUuid)
  } 
  
  // oculto o muestro el menu hamburguesa 
  else if (e.target.closest(".btn-burger") || e.target.closest(".btn-x") || e.target.closest(".burger-overlay")) {
    showOrHideMenu()
  }

  // se apreto un boton del header
  else if (e.target.closest(".header-btn")) {
    const buttonClicked = e.target.closest(".header-btn").dataset.headerbtn
    console.log(buttonClicked)
    if(buttonClicked === "home"){
      renderHome()
    } else if (buttonClicked === "about") {
      renderAboutMe()
    }

    history.pushState({id: buttonClicked}, "", "/" + buttonClicked)

    // solo ocultar el menu, en caso de que este abierto
    if (e.target.closest(".burger")) {
      showOrHideMenu()
    }
  } else if (e.target.closest(".subheader")) {
    renderHome()
    history.pushState({id: "home"}, "", "/home")
  }

})

// miramos las flechas de atras y adelante del navegador
window.onpopstate = function(e){
  const urlName = e.state.id
  if (urlName.toLowerCase() === "home"){
    renderHome()
  } else if (urlName.toLowerCase() === "about") {
    renderAboutMe()
  } // si no es home ni about, significa que es un articulo
  else {
    renderArticle(urlName)
  }
}

function createFeaturedPost(featured) {
  return `
  <section class="post-featured post" data-uuid=${featured.uuid} style="background-image: url('${featured.img}');">
    <p class="post-date">${featured.date}</p>
    <h1 class="post-title-main">${featured.title}</h1>
    <h3 class="post-content">${escapeHTML(featured.main)}</h3>
  </section>`
}

function createPosts(posts) {
  return `
  <section class="post-container">
    ${posts.map(post => `
    <div class="post" data-uuid=${post.uuid}>
      <div class="center">
        <img class="post-img" src="${post.img}">
      </div>
      <p class="post-date">${post.date}</p>
      <h2 class="post-title">${post.title}</h2>
      <h3 class="post-content">${escapeHTML(post.main)}</h3>
    </div>`).join('')}
  </section>`
}

function createArticule(article) {
  const articuleContent = article.content.map((data) => `
  <h3 class="post-content-title">${data.title}</h3>
  <p class="post-content">${escapeHTML(data.text)}</p>`).join('')

  return `
  <section class="article">
    <p class="post-date">${article.date}</p>
    <h1 class="post-article-title">${article.title}</h1>
    <h2 class="post-content">${article.main}</h2>
    <div class = "center">
      <img class="post-img" src="${article.img}">
    </div>
    ${articuleContent}
    <p class="post-content-title center">Recent Post</p>
  </section>`
}

function createAboutMe() {
  return `
  <div class="pfpic-and-title-div">
    <img class="pfpic" src="${myVlog.img}">
      <div>
        <h1 class="post-article-title">${myVlog.title}</h1>
        <h3 class="post-content padding-bottom">${myVlog.main}</h3>
      </div>
  </div>
  <div class="article">

      ${myVlog.content.map((data) => `
        <h2 class="post-content-title">${data.title}</h2>
        <p class="post-content">${data.text}</p>`).join('')
      }
      <p class="post-content-title center recent-post">Recent Post</p>
  </div>`
}

// en caso de que el texto conteng &, < o >, se remplaza para que no rompa el innerHTML
function escapeHTML(text){
  text = text.replace(/&/g, "&amp")
  text = text.replace(/</g, "&lt")
  text = text.replace(/>/g, "&gt")

  return text
}

function updateURL(selectedPageUuid){
  const selectedPage = blogPosts.find((post) => post.uuid === selectedPageUuid) 
  history.pushState({id: selectedPageUuid}, "", selectedPage.title.replaceAll(" ",""))
}

function renderHome(){

  // solo agarramos el primer post
  const featuredPost = createFeaturedPost(blogPosts[0])
  // excluimos el primer post, pero sin modificar el arraay og
  const postsHTML = createPosts(blogPosts.slice(1))
  
  mainEl.innerHTML = featuredPost + postsHTML

  // scroll to the top
  window.scrollTo(0, 0)
}

function renderArticle(selectedUuid){
  const selectedPost = blogPosts.find((post) => post.uuid === selectedUuid)

  mainEl.innerHTML = createArticule(selectedPost) + createPosts(blogPosts.filter((post) => post.uuid !== selectedUuid))

  // scroll to the top
  window.scrollTo(0, 0)
}

function renderAboutMe() {
  mainEl.innerHTML = createAboutMe() + createPosts(blogPosts)
}



function showOrHideMenu () {
  document.body.classList.toggle("overflow")
  burgerEl.classList.toggle("hide")
  burgerElFullScreen.classList.toggle("hide")
}


// itero sobre todos los titulos de los posts
const allPostsTitles = blogPosts.map((post) => post.title.replaceAll(" ", "").toLowerCase())
// le saco el "/" con slice
const pathname = window.location.pathname.slice(1).toLowerCase()

// uso toLowerCase() para que no sea sensible a laa s minusculas
// Si el pathname coincide con un artículo, renderiza el artículo
if (allPostsTitles.includes(pathname)){
  const selected = blogPosts.find((post) => post.title.replaceAll(" ", "").toLowerCase() === pathname)
  renderArticle (selected.uuid)
} // en caso de que sea laa about page, la renderiza 
else if (pathname === "about") {
  renderAboutMe()
} // y si es cualquier otro link, lo manda a la home page
else {
  history.replaceState({id:"home"}, "", "/home")
  renderHome()
}
