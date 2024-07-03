document.querySelector('.cut').style.display = 'none';
document.querySelector('.ham').addEventListener('click', () => {
    document.querySelector('.slidebar').classList.toggle('slidebarGo');
    if (document.querySelector('.slidebar').classList.contains('slidebarGo')) {
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.cut').style.display = 'none'
    }
    else {
        document.querySelector('.ham').style.display = 'inline'
        setTimeout(() => {

            document.querySelector('.cut').style.display = 'none'
        }, 300)
    }
});


