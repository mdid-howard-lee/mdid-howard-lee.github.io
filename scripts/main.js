// Fetch header.html and insert into <header>
fetch('header.html')
.then(res => res.text())
.then(html => {
    document.getElementById('header').innerHTML = html;
});