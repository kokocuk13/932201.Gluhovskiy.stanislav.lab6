const col1 = document.getElementById('col1');
const col2 = document.getElementById('col2');
const imgcat = document.getElementById('cat');
const imgdog = document.getElementById('dog');
const buttons = Array.from(document.querySelectorAll('[id^="btn"]'));

function showcat() {
  col2.style.width = 'auto';
  imgdog.style.display = 'none';
  imgcat.style.display = 'block';
  col1.style.width = '100%';
}

function showdog() {
  col2.style.width = '100%';
  imgdog.style.display = 'block';
  imgcat.style.display = 'none';
  col1.style.width = 'auto';
}

function showcatdog() {
  col2.style.width = '100%';
  imgdog.style.display = 'block';
  imgcat.style.display = 'block';
  col1.style.width = '100%';
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const btnNum = button.id.replace('btn', '');
        buttonsClick(btnNum); // Вызываем соответствующую функцию
    });
});

function buttonsClick(number) {
    switch (number) {
        case '1':
            showcat();
            break;
        case '2':
            showcatdog();
            break;
        case '3':
            showdog();
            break;
        default:
            console.log('error');
    }
}
