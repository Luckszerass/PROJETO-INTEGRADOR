

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

//Programação do input - imagem 3

let photo3 = document.getElementById('picture3');
let file3 = document.querySelector('#quadro3');


photo3.addEventListener('click',() => {
    file3.click();
});

file3.addEventListener('change', (event) => {
    let reader = new FileReader();
    reader.onload =()=> {
        photo3.src= reader.result;

    }
    reader.readAsDataURL(file3.files[0]);
});


//Programação do input - imagem 4

let photo4 = document.getElementById('picture4');
let file4 = document.querySelector('#quadro4');


photo4.addEventListener('click',() => {
    file4.click();
});

file4.addEventListener('change', (event) => {
    let reader = new FileReader();
    reader.onload =()=> {
        photo4.src= reader.result;

    }
    reader.readAsDataURL(file4.files[0]);
});

//Programação do input - imagem 5

let photo5 = document.getElementById('picture5');
let file5 = document.querySelector('#quadro5');


photo5.addEventListener('click',() => {
    file5.click();
});

file5.addEventListener('change', (event) => {
    let reader = new FileReader();
    reader.onload =()=> {
        photo5.src= reader.result;

    }
    reader.readAsDataURL(file5.files[0]);
});

//Programação do input - imagem 6

let photo6 = document.getElementById('picture6');
let file6 = document.querySelector('#quadro6');


photo6.addEventListener('click',() => {
    file6.click();
});

file6.addEventListener('change', (event) => {
    let reader = new FileReader();
    reader.onload =()=> {
        photo6.src= reader.result;

    }
    reader.readAsDataURL(file6.files[0]);
});

//Programação do input - imagem 7

let photo7 = document.getElementById('picture7');
let file7 = document.querySelector('#quadro7');


photo7.addEventListener('click',() => {
    file7.click();
});

file7.addEventListener('change', (event) => {
    let reader = new FileReader();
    reader.onload =()=> {
        photo7.src= reader.result;

    }
    reader.readAsDataURL(file7.files[0]);
});

//Programação do input - imagem 8

let photo8 = document.getElementById('picture8');
let file8 = document.querySelector('#quadro8');


photo8.addEventListener('click',() => {
    file8.click();
});

file8.addEventListener('change', (event) => {
    let reader = new FileReader();
    reader.onload =()=> {
        photo8.src= reader.result;

    }
    reader.readAsDataURL(file8.files[0]);
});

//Programação do input - imagem 9

let photo9 = document.getElementById('picture9');
let file9 = document.querySelector('#quadro9');


photo9.addEventListener('click',() => {
    file9.click();
});

file9.addEventListener('change', (event) => {
    let reader = new FileReader();
    reader.onload =()=> {
        photo9.src= reader.result;

    }
    reader.readAsDataURL(file9.files[0]);
});

//Programação do input - imagem 10

let photo10 = document.getElementById('picture10');
let file10 = document.querySelector('#quadro10');


photo10.addEventListener('click',() => {
    file10.click();
});

file10.addEventListener('change', (event) => {
    let reader = new FileReader();
    reader.onload =()=> {
        photo10.src= reader.result;

    }
    reader.readAsDataURL(file10.files[0]);
});

//Programação do input - imagem 11

let photo11 = document.getElementById('picture11');
let file11 = document.querySelector('#quadro11');


photo11.addEventListener('click',() => {
    file11.click();
});

file11.addEventListener('change', (event) => {
    let reader = new FileReader();
    reader.onload =()=> {
        photo11.src= reader.result;

    }
    reader.readAsDataURL(file11.files[0]);
});

//Programação do input - imagem 12

let photo12 = document.getElementById('picture12');
let file12 = document.querySelector('#quadro12');


photo12.addEventListener('click',() => {
    file12.click();
});

file12.addEventListener('change', (event) => {
    let reader = new FileReader();
    reader.onload =()=> {
        photo12.src= reader.result;

    }
    reader.readAsDataURL(file12.files[0]);
});


//Programação do botão salvar
function clicou1(){
    document.getElementById('extintores').innerHTML=document.getElementById('selecionar1').value;
}

function retor1(){
    document.getElementById('extintores').innerHTML=document.getElementById('extintores')
}

function clicou2(){
    document.getElementById('adesivobenzeno').innerHTML=document.getElementById('selecionar2').value;

}

function clicou3(){
    document.getElementById('armazenamento').innerHTML=document.getElementById('selecionar3').value;

}

function clicou4(){
    document.getElementById('saida').innerHTML=document.getElementById('selecionar4').value;

}

function clicou5(){
    document.getElementById('caixasepa').innerHTML=document.getElementById('selecionar5').value;

}
function clicou6(){
    document.getElementById('residuos').innerHTML=document.getElementById('selecionar6').value;

}
function clicou7(){
    document.getElementById('compressor').innerHTML=document.getElementById('selecionar7').value;

}
function clicou8(){
    document.getElementById('quadroenergia').innerHTML=document.getElementById('selecionar8').value;

}
function clicou9(){
    document.getElementById('sinaquadro').innerHTML=document.getElementById('selecionar9').value;

}
function clicou10(){
    document.getElementById('tomada').innerHTML=document.getElementById('selecionar10').value;

}

function clicou11(){
    document.getElementById('fios').innerHTML=document.getElementById('selecionar11').value;

}

function clicou12(){
    document.getElementById('respingo').innerHTML=document.getElementById('selecionar12').value;

}

//Gerar PDF
function gerarpdf(){
    const item = document.querySelector('.page');
    var opt={
        margin:[0,0,0,0],
        filename: "teste.pdf",
        html2canvas: {scale: 3,
        },
        jsPDF: {unit:"mm", format:"a4", orientation:"p",},
        pagebreak: { mode:'specify', after:'.break' },
    };

    html2pdf().set(opt).from(item).save();

    
}


