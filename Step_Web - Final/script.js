

//Programação do input - imagem 1

let photo = document.getElementById('picture');
let file = document.querySelector('#quadro');


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


//Programação do input - imagem 2

let photo2 = document.getElementById('picture2');
let file2 = document.querySelector('#quadro2');


photo2.addEventListener('click',() => {
    file2.click();
});

file2.addEventListener('change', (event) => {
    let reader = new FileReader();
    reader.onload =()=> {
        photo2.src= reader.result;

    }
    reader.readAsDataURL(file2.files[0]);
});



function clicou1(){
    document.getElementById('extintores').innerHTML=document.getElementById('selecionar1').value;
}



function clicou2(){
    document.getElementById('adesivobenzeno').innerHTML=document.getElementById('selecionar2').value;

}

function clicou3(){
    document.getElementById('armazenamento').innerHTML=document.getElementById('selecionar3').value;

}

function clicou4(){
    document.getElementById('formulario4').innerHTML=document.getElementById('selecionar4').value;

}