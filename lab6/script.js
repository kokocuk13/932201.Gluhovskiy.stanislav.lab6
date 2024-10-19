const left_btn = document.getElementById('left_photo');

left_btn.addEventListener('click', () => {
    const catsss = document.querySelector('.cat');
    catsss.style.width = "560px";
    const dogsss = document.querySelector('.dog');
    dogsss.style.width = "40px";
    let image1 = document.querySelector('.img1');
    image1.style.width = "510px";
    let image2 = document.querySelector('.img2');
    image2.style.width = "0px";
})

const right_btn = document.getElementById('right_photo');

right_btn.addEventListener('click', () => {
    const catss = document.querySelector('.cat');
    catss.style.width = "40px";
    const dogss = document.querySelector('.dog');
    dogss.style.width = "560px";
    let image11 = document.querySelector('.img1');
    image11.style.width = "0px";
    let image22 = document.querySelector('.img2');
    image22.style.width = "510px";
})

const middle_btn = document.getElementById('both_photo');

middle_btn.addEventListener('click', () => {
    const cats = document.querySelector('.cat');
    cats.style.width = "300px";
    const dogs = document.querySelector('.dog');
    dogs.style.width = "300px";
    let image111 = document.querySelector('.img1');
    image111.style.width = "270px";
    let image222 = document.querySelector('.img2');
    image222.style.width = "270px";
})
