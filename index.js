const stickyHeader = document.querySelector('.header')

const obs = new IntersectionObserver(
function (entries) {
const entry = entries[0]
console.log(entry)
if (entry.isIntersecting === false) {
document.querySelector('.header').classList.add('sticky')
}
if (entry.isIntersecting) {
document.querySelector('.header').classList.remove('sticky')
}
},
{root:null,
threshold:0,
// rootMargin: '-10px'
}
)
obs.observe(stickyHeader)