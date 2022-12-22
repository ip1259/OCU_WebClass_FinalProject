(function () { //使變數為區域變數避免其他來源檔的干擾
    const nav = document.querySelector('nav')
    const navHeight = nav.offsetHeight

    // // Handle animation end
    // function handleAnimationEnd(element, animations) {
    //     element.classList.remove(...animations)
    // }

    // Handle navbar animation
    function animateNav() {
        if (window.pageYOffset > navHeight) { nav.classList.add('brown', 'lighten-3', 'shadow') }
        else { nav.classList.remove('brown', 'lighten-3', 'shadow') }
    }

    window.addEventListener('scroll', () => {
        animateNav()
    })

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const albert = entry.target.querySelector('.onObserve');

            if (entry.isIntersecting) {
                albert.classList.add('animate__animated');
                albert.classList.add('animate__fadeInRight');
                return; // if we added the class, exit the function
            }

            // We're not intersecting, so remove the class!
            albert.classList.remove('animate__animated');
            albert.classList.remove('animate__fadeInRight');
        });
    });

    observer.observe(document.querySelector('.observe-wrapper'));
    observer.observe(document.querySelectorAll('.observe-wrapper')[1]);

    img_datas.forEach(element => {
        
    });
    $('#img-content').append()
})()