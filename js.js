window.addEventListener('load',function(){
    let body = document.querySelector('body'),
        img = document.querySelector('.img'),
        cv = document.querySelector('.cv'),
        con = document.querySelector('.contain');
    
    body.classList.add('opa');
    img.classList.add('img_opa');
    cv.classList.add('cv_opa');
    setTimeout(() => {
        con.classList.add('contain_opa');
    }, 1000); 

});

