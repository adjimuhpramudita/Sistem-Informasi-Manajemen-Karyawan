function showContent(contentId, link) {
    var contents = document.getElementsByClassName('content-section');
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
    }
    document.getElementById(contentId).style.display = 'block';

    var links = document.getElementsByClassName('nav-link');
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove('active');
    }
    link.classList.add('active');
}