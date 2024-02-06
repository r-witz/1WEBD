// @ Scroll Down Animation
window.addEventListener('load', function () {
    var start = window.scrollY;
    var end = 800;
    var duration = 1000;

    function scrollAnimation(timestamp) {
        // @ Calculate timestamp
        var elapsed = timestamp - start; 
        var newPosition = easeInOutQuad(elapsed, start, end - start, duration);
        window.scrollTo(0, newPosition);

        if (elapsed < duration) {
            window.requestAnimationFrame(scrollAnimation); // @ Request new frame if not finished 
        };
    };

    // @ Easing function : t = time, s = start, c = change, d = duration
    // @ Source : https://gist.github.com/gre/1650294
    function easeInOutQuad(t, s, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + s; // @ 1st half of the animation
        t--; 
        return -c / 2 * (t * (t - 2) - 1) + s; // @ 2nd half of the animation 
    };

    window.requestAnimationFrame(scrollAnimation);
});
