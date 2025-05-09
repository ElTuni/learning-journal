const blogPosts = [
    {
      "img": "images/portafolio.png",
      "title": "How I Built My First Portfolio Website",
      "date": "May 10, 2025",
      "main": "I built my first portfolio website to showcase my skills, learn new techniques, and track my progress as a developer.",
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

const myVlog = {
    "img": "images/pfpic.jpg",
    "title": "My Coding Journey Begins",
    "main": "Hi there! My name is Tomás Goya, but everyone knows me as Tuni. I’m 18 years old, and this is the beginning of my coding journey.",
    "content": [
        {
        "title": "My First Steps in Coding",
        "text": `I've always loved technology, but I never really had a clear study plan. Back in high school, I made some cool coding projects with Python — like a <a aria-label="My own Ariana grande Twitter bot" href="https://x.com/BotLyr_ArianaGr">Twitter bot</a> that tweeted random Ariana Grande lyrics every day and a Snake game with Pygame, complete with a high score system, skins, and music, so I could have little tournaments with my friends. But it was all just for fun.`
        },
        {
        "title": "A New Chapter: Learning Web Development",
        "text": `After coming back from my exchange year in Japan — where I discovered my love for <a aria-label="My YouTube channel" href="https://www.youtube.com/@tomigoya">love for vlogging on YouTube</a> — I decided to take coding seriously. I'm currently editing the videos I recorded in Japan, and once I finish those, I'll continue uploading more videos related to my journey in coding and general life experiences. I started learning frontend development with Scrimba, and it’s my first time following a structured course. HTML, CSS, and JavaScript are my new playground, but I also plan to continue learning Python.`
        },
        {
        "title": "My Projects and Future Plans",
        "text": `I’m already planning to dive into two exciting projects soon. The first is <a aria-label="Track habits app" href="https://www.habitue.app/">Habitué</a> a habit tracker app that I’ll be building with my brother. The second is a project for my mom’s company, which helps connect caregivers with families who need them. I’ll be working on a database for that, and I can’t wait to share the process.`
        },
        {
        "title": "Why This Vlog Exists",
        "text": "But this channel is not just about coding. It’s about documenting the journey — in videos. Most of my updates will be on YouTube, where I’ll share my progress, challenges, and everything I learn along the way. Whether I’m solving bugs, building new projects, or exploring how to combine my passions for programming, Japanese, and content creation — I’m bringing you along for the ride."
        }
    ]
    }
    

export {blogPosts, myVlog}