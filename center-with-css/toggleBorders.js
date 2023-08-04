const toggleBtn = document.getElementById('toggle-btn')
const sectionEl = document.getElementById('blog-post-content')
const blogpost1El = document.getElementById('blogpost1')
const blogpost2El = document.getElementById('blogpost2')
const blogpost3El = document.getElementById('blogpost3')
const blogpost4El = document.getElementById('blogpost4')

toggleBtn.addEventListener("click", toggleBorders)

function toggleBorders() {
  sectionEl.classList.toggle('solid')
  blogpost1El.classList.toggle('dotted')
  blogpost2El.classList.toggle('dotted')
  blogpost3El.classList.toggle('dotted')
  blogpost4El.classList.toggle('dotted')
}
