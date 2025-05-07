const postsEl = document.getElementById("post-section")

const blogPosts = [
    {
      img: "images/portafolio.png",
      title: "How I Built My First Portfolio Website",
      date: "May 10, 2025",
      content: `After finishing my first few HTML and CSS lessons, I wanted to put my new skills into practice. I thought the best way to do that was by building a portfolio website that could introduce me as a developer, even if I was just getting started. I began by sketching a layout on paper—nothing fancy, just boxes for the header, navigation, projects section, and contact info. 
  
  Once I had that, I translated the structure into HTML using semantic tags like <header>, <nav>, <main>, and <section>. I took time to understand why semantic HTML is important for accessibility and SEO, and how it makes your code easier to maintain. Then came the styling. I used CSS Flexbox to arrange the layout and focused on making it mobile-responsive. I experimented a lot with media queries and practiced using relative units like em and rem.
  
  Debugging layout issues was frustrating at times, especially dealing with unexpected margins and padding, but eventually I got the hang of using browser DevTools to inspect elements and adjust them in real time. By the time I finished, I had built something that worked across different screen sizes, and I was genuinely proud of it. This project taught me not only how websites are structured but also how rewarding it is to bring your own design to life through code. It gave me the confidence to keep going and explore more advanced topics.`
    },
    {
      img: "images/promises.png",
      title: "What I Learned About JavaScript Promises",
      date: "April 26, 2025",
      content: `When I first encountered JavaScript Promises, they completely confused me. The syntax felt strange, especially the chaining with .then() and .catch(), and I couldn’t figure out when or why to use async/await. But I knew that understanding asynchronous code was crucial if I wanted to build apps that fetch data, so I stuck with it.
  
  I started small—writing functions that returned Promises manually and resolving them after timeouts. Then I used fetch() to retrieve data from a public API, and suddenly it all clicked: Promises are just wrappers for values that arrive later. Using async/await turned out to be a game changer. Not only did it clean up the nesting in my code, but it also made it easier to reason about the flow, especially when using try/catch blocks for error handling.
  
  To practice, I built a weather app using the OpenWeatherMap API. I added basic search functionality, error handling, and loading indicators. I learned how to parse JSON responses, deal with status codes, and even debounce input events to limit API calls. More than anything, this project helped demystify how JavaScript works under the hood when dealing with the browser or external data. Now, I feel more confident handling real-world async workflows and can’t wait to try things like live chat apps or push notifications.`
    },
    {
      img: "images/debugging.png",
      title: "Debugging Tips I Wish I Knew Earlier",
      date: "April 15, 2025",
      content: `When I started coding, seeing a red error in the console felt like the end of the world. I used to freeze or delete big chunks of code trying to make the problem disappear. Over time, I’ve come to see debugging as an essential part of development—not a sign of failure, but a signal that you’re learning and interacting with the system in a deeper way.
  
  One of the biggest lessons I learned is to read error messages carefully. They almost always point you in the right direction—whether it's a line number, a misspelled variable, or a type mismatch. I also learned the power of console.log(). At first I overused it, but now I try to log just the right variables at strategic points to trace what the code is actually doing.
  
  Another major shift was understanding that bugs are easier to spot when code is broken down into smaller, testable units. I started writing helper functions, commenting out sections, and checking behavior incrementally. Tools like browser DevTools helped me inspect the DOM, step through JavaScript line by line, and even simulate different screen sizes and network speeds.
  
  Most importantly, I stopped fearing bugs. Now, I embrace them as puzzles to solve. Each time I fix something tricky, I walk away with new insights that stick with me way longer than anything I read in a tutorial. Debugging has become one of the most satisfying parts of coding.`
    },
    {
      img: "images/resources.png",
      title: "My Favorite Free Resources for Learning to Code",
      date: "March 29, 2025",
      content: `One of the best things about learning to code today is the number of free, high-quality resources available online. I’ve explored dozens of platforms, and a few have stood out as absolutely essential on my journey.
  
  For foundational knowledge in HTML and CSS, MDN Web Docs is my go-to. It’s not only comprehensive but also explains concepts with clarity and context. When I needed hands-on practice, freeCodeCamp was amazing. Their exercises are interactive and structured in a way that builds confidence quickly. I completed their Responsive Web Design and JavaScript courses and felt a huge difference in my understanding.
  
  For JavaScript and beyond, I found The Odin Project incredibly helpful. It offers a full curriculum that mimics a real dev bootcamp, covering not just coding but also Git, testing, and deployment. Scrimba is another gem—it mixes video lessons with live code editors, so you can pause and interact with the code as you learn. That interactivity made abstract concepts much easier to grasp.
  
  In addition, YouTube channels like Kevin Powell, Fireship, and Web Dev Simplified gave me visual explanations that stuck. And when I felt stuck or alone in the process, reading blogs on DEV Community and Medium reminded me that everyone struggles and that learning is messy but worthwhile.
  
  These resources, paired with daily consistency, made all the difference. I didn’t need to spend thousands of dollars—just time, focus, and curiosity.`
    },
    {
      img: "images/beging.png",
      title: "Why I Started This Learning Journal",
      date: "March 10, 2025",
      content: `When I began learning to code, I felt overwhelmed by how much there was to learn. Concepts flew by, tutorials blurred together, and I often forgot what I had learned a few days earlier. That’s when I decided to start a learning journal—not just to record my progress, but to reflect on the process and solidify what I was learning.
  
  At first, I just jotted down summaries of lessons or key concepts from tutorials. But soon, the entries became more personal. I wrote about challenges I faced when debugging a project, moments of clarity when a topic suddenly made sense, and the satisfaction of seeing my code work after hours of trial and error.
  
  Over time, the journal became a motivational tool. On tough days, I could look back and realize how far I had come. On good days, it gave me space to celebrate small wins. Writing regularly also improved my ability to explain technical topics—something that’s incredibly useful whether you’re writing documentation, teaching, or interviewing.
  
  Eventually, I started sharing some posts publicly. Even though I don’t have a big audience, the idea that someone might benefit from my notes makes the experience more meaningful. This journal has become one of my most powerful learning tools, and I’d recommend it to anyone starting out—especially if you feel lost or unsure. Reflecting in writing turns passive consumption into active understanding.`
    }
  ];


const firstPost = blogPosts.shift()

const posts = blogPosts.map(post => `
  <div class="post">
    <img class="post-img" src="${post.img}">
    <p class="post-date">${post.date}</p>
    <h2 class="post-title">${post.title}</h2>
    <h3 class="post-subtitle">${escapeHTML(post.content)}</h3>
  </div>`).join('')

postsEl.innerHTML = posts



// en caso de que el texto conteng &, < o >, se remplaza para que no rompa el innerHTML
function escapeHTML(text){
  text = text.replace(/&/g, "&amp")
  text = text.replace(/</g, "&lt")
  text = text.replace(/>/g, "&gt")

  return text
}