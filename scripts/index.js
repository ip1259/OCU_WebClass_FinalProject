(function () { //使變數為區域變數避免其他來源檔的干擾
    const nav = document.querySelector('nav')
    const navHeight = nav.offsetHeight

    // // Handle animation end
    // function handleAnimationEnd(element, animations) {
    //     element.classList.remove(...animations)
    // }

    // Handle navbar animation
    function animateNav() {
        if (window.pageYOffset > navHeight) { nav.classList.add('blue', 'darken-4', 'shadow') }
        else { nav.classList.remove('blue', 'darken-4', 'shadow') }
    }

    window.addEventListener('scroll', () => {
        animateNav()
    })
})()