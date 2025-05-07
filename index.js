const mainEl = document.getElementById("main-content")

const blogPosts = [
  {
    "img": "images/portafolio.png",
    "title": "How I Built My First Portfolio Website",
    "date": "May 10, 2025",
    "main": "After finishing my first few HTML and CSS lessons, I felt an urge to create something tangible—something that showcased my new skills. That’s when I decided to build my first portfolio website. I wanted it to be a place where I could present my work, experiment with new techniques, and track my progress as a developer. Little did I know, this project would become much more than just a collection of code; it became a testament to my growth and determination.",
    "uuid": crypto.randomUUID(),
    "content": [
      {
      "title": "Getting Started",
      "text": "I began by sketching a basic layout on paper. This helped me visualize the structure before writing any code. From there, I moved to HTML, using semantic HTML with , , , and  to maintain a clear and organized structure."
      },
      {
      "title": "Responsive Design",
      "text": "One of my main challenges was making the site look great on all screen sizes. I achieved this using CSS Flexbox for layout control and media queries for adaptability. I tested my design on different devices, fixing spacing and alignment issues along the way."
      },
      {
      "title": "Debugging Issues",
      "text": "Debugging was a big part of the process. I encountered problems with layout shifts and font rendering, which I fixed using the DevTools in my browser. These challenges taught me the importance of patience and persistence."
      },
      {
      "title": "Final Thoughts",
      "text": "Completing this project was a huge confidence boost. Not only did I build a working website, but I also developed a problem-solving mindset that would become essential in my journey as a developer. This project wasn't just about HTML and CSS—it was about proving to myself that I could turn an idea into reality."
      }
    ]
  },
  {
    "img": "images/promises.png",
    "title": "What I Learned About JavaScript Promises",
    "date": "April 26, 2025",
    "main": "JavaScript Promises were confusing at first, but they became clear once I built real projects. At first, they seemed like a complex topic, but soon I realized they were just a way of handling tasks that take time—like fetching data from an API. Understanding how to use them was a game-changer in my coding journey.",
    "uuid": crypto.randomUUID(),
    "content": [
      {
      "title": "Understanding Promises",
      "text": "Promises are wrappers for values that arrive later. They allow asynchronous operations without blocking the code. Initially, they seemed confusing, but breaking them down step-by-step made them much clearer."
      },
      {
      "title": "Async/Await Mastery",
      "text": "Async/Await made working with Promises much cleaner and easier to read. Instead of using .then() and .catch(), I learned to write more readable code using try/catch blocks and async functions."
      },
      {
      "title": "Building a Weather App",
      "text": "I built a weather app that fetched data from an API using Promises. This project helped me understand the flow of asynchronous code. I also learned how to handle errors effectively with try/catch."
      },
      {
      "title": "Final Thoughts",
      "text": "Mastering Promises and Async/Await was a turning point in my JavaScript journey. It taught me the importance of writing clean, readable code and gave me the confidence to tackle more complex projects."
      }
    ]
  },
  {
    "img": "images/debugging.png",
    "title": "Debugging Tips I Wish I Knew Earlier",
    "date": "April 15, 2025",
    "main": "Debugging is not just about fixing errors—it's about understanding how your code works. It’s a skill that transforms frustration into problem-solving, and every bug is an opportunity to learn. Mastering debugging has made me a better developer.",
    "uuid": crypto.randomUUID(),
    "content": [
      {
      "title": "Read Error Messages",
      "text": "Error messages are your guide. They often tell you exactly what's wrong or at least give you a clue. Learning to read and understand them can save hours of frustration."
      },
      {
      "title": "Console.log Wisely",
      "text": "Using console.log at key points in your code can reveal the state of variables and the flow of logic. It’s like having a flashlight in a dark room while you search for the bug."
      },
      {
      "title": "Break Down Problems",
      "text": "When you encounter a bug, break your code into smaller parts. Test each part independently to isolate the problem. This systematic approach is much more efficient."
      },
      {
      "title": "Using DevTools",
      "text": "DevTools in your browser are a powerhouse for debugging. You can inspect the DOM, track network requests, and debug JavaScript directly."
      },
      {
      "title": "Final Thoughts",
      "text": "Debugging is an essential skill that goes beyond fixing errors. It's about becoming a problem-solver. Every bug you fix is a step towards becoming a better developer."
      }
    ]
  },
  {
    "img": "images/resources.png",
    "title": "My Favorite Free Resources for Learning to Code",
    "date": "March 29, 2025",
    "main": "Learning to code doesn’t have to be expensive. With the right free resources, you can build a solid foundation and become a skilled developer. Over time, I discovered the best platforms that taught me everything from basic HTML to advanced JavaScript.",
    "uuid": crypto.randomUUID(),
    "content": [
      {
      "title": "MDN Web Docs",
      "text": "The best for HTML, CSS, and JavaScript. MDN provides in-depth, well-documented guides that help you understand how the web works, making it my go-to resource."
      },
      {
      "title": "freeCodeCamp",
      "text": "An amazing platform for interactive lessons and hands-on coding challenges. I completed several of their courses, which gave me practical experience with real-world projects."
      },
      {
      "title": "The Odin Project",
      "text": "This is a full web development curriculum. It covers everything from front-end to back-end, including hands-on projects and a strong community for support."
      },
      {
      "title": "YouTube Channels",
      "text": "I learned a lot from channels like Kevin Powell for CSS, Fireship for rapid guides, and Web Dev Simplified for clear, practical explanations."
      },
      {
      "title": "Community Blogs",
      "text": "Reading blogs on DEV and Medium gave me new perspectives and kept me updated with best practices. The experiences shared by other developers were incredibly valuable."
      }
    ]
  },
  {
    "img": "images/beging.png",
    "title": "Why I Started This Learning Journal",
    "date": "March 10, 2025",
    "main": "Learning to code can be overwhelming. Concepts blur together, and it’s easy to forget what you’ve learned. That’s why I decided to start this learning journal—to track my progress, stay motivated, and turn coding into a habit.",
    "uuid": crypto.randomUUID(),
    "content": [
      {
      "title": "Reflecting on Progress",
      "text": "I wrote down what I learned each day, from HTML basics to debugging JavaScript. Seeing my own notes helped me reinforce my understanding."
      },
      {
      "title": "Staying Consistent",
      "text": "Writing regularly turned learning into a habit. Even on busy days, a quick entry kept me engaged with coding."
      },
      {
      "title": "Overcoming Challenges",
      "text": "Documenting struggles made them feel less overwhelming. I could look back and see how I solved similar problems before."
      },
      {
      "title": "Building Confidence",
      "text": "Looking back revealed how much I had learned. It reminded me that progress was real, even when it felt slow."
      },
      {
      "title": "Sharing with Others",
      "text": "Posting parts of my journal online not only helped others but also motivated me. It turned learning into a social experience."
      }
    ]
  }
]

mainEl.addEventListener("click", function(e){
  if (e.target.closest(".post")?.dataset.uuid) {
    const selectedPostUuid = e.target.closest(".post")?.dataset.uuid
    renderArticule(selectedPostUuid)
  }
})

window.onpopstate = function(e){
  console.log(window.location.pathname)
  if (e.state?.id !== "main"){
    renderArticule(e.state.id)
  }else {
    console.log("corrio")
    renderMain()
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
      <img class="post-img" src="${post.img}">
      <p class="post-date">${post.date}</p>
      <h2 class="post-title">${post.title}</h2>
      <h3 class="post-content">${escapeHTML(post.main)}</h3>
    </div>`).join('')}
  </section>`
}

function createArticule(articule) {
  const articuleContent = articule.content.map((data) => `
  <h3 class="post-content-title">${data.title}</h3>
  <p class="post-content">${escapeHTML(data.text)}</p>`).join('')

  return `
  <section class="articule">
    <p class="post-date">${articule.date}</p>
    <h1 class="post-title">${articule.title}.</h1>
    <h2 class="post-content">${articule.main}</h2>
    <img class="post-img" src="${articule.img}">
    ${articuleContent}
    <p class="post-recentpost">Recent Post</p>
  </section>`
}

// en caso de que el texto conteng &, < o >, se remplaza para que no rompa el innerHTML
function escapeHTML(text){
  text = text.replace(/&/g, "&amp")
  text = text.replace(/</g, "&lt")
  text = text.replace(/>/g, "&gt")

  return text
}

function renderMain(){
  // solo agarramos el primer post
  const featuredPost = createFeaturedPost(blogPosts[0])
  // excluimos el primer post, pero sin modificar el arraay og
  const postsHTML = createPosts(blogPosts.slice(1))

  
  mainEl.innerHTML = featuredPost + postsHTML
  history.pushState({id: "main"},"","main")
}

function renderArticule(selectedUuid){
  const selectedPost = blogPosts.find((post) => post.uuid === selectedUuid)
  history.pushState({id: selectedPost.uuid}, "", selectedPost.title.replaceAll(" ", ""))

  mainEl.innerHTML = createArticule(selectedPost) + createPosts(blogPosts.filter((post) => post.uuid !== selectedUuid))
}

renderMain()