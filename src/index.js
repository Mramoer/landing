
document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header')
    const scrollTarget = () => {
    
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
        }
        else {
            header.classList.remove('scrolled')
    }
    }
    scrollTarget()
    window.addEventListener('scroll', scrollTarget) 
})