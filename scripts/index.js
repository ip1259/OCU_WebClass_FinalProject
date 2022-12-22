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
        // console.log(element.src)
        let card = '<div class="col s12 m6 xl4">\
                <div ' + 'id="' + element.id + '" ' + 'class="card large">\
                    <div class="card-image">\
                        <img src="' + element.src + '" alt="" class="materialboxed cursor-pointer">\
                        <span class="card-title">'+ element.title + '</span>\
                    </div>\
                    <div class="card-content">'+
            element.short
            +
            '</div>\
                    <div class="card-action activator center grey lighten-4 cursor-pointer"><i\
                            class="material-icons">expand_less</i></div>\
                    <div class="card-reveal flow-text">\
                        <span class="card-title grey-text text-darken-4">'+ element.title +
            '<i class="material-icons right">close</i></span>' +
            element.detail
            +
            '</div>\
                </div>\
            </div>'
        console.log(card)
        if (element.author == 'Albert Itelas Wombo')
            $('#img-content-albert').append(card)
    });

})()