
let photo = document.getElementById('picture');
let file = document.getElementById('quadro');


photo.addEventListener('click',() => {
    file.click();
});

file.addEventListener('change', (event) => {
    let reader = new FileReader();
    reader.onload =()=> {
        photo.src= reader.result;

    }
    reader.readAsDataURL(file.files[0]);
});