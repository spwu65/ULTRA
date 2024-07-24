document.getElementById('navbarToggle').addEventListener('click', function() {
    document.getElementById('navbarList').style.display = 'block';
    document.getElementById('navbarToggle').style.display = 'none';
});

document.getElementById('closeIcon').addEventListener('click', function() {
    document.getElementById('navbarList').style.display = 'none';
    document.getElementById('navbarToggle').style.display ='flex';
    document.getElementById('closeicon').style.display = 'none';
});