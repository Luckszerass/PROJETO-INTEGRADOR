
let photo = document.querySelector('.picture');
let file = document.getElementById('quadro');

file.addEventListener('change', (event) => {
    let reader = new FileReader();
    reader.onload =()=> {
        photo.src= reader.result;

    }
    reader.readAsDataURL(file.files[0]);

});

function benzeno(){
    window.location='benzeno.html'
};
function sobreRodas(){
    window.location='sobreRodas.html'
};

function amostra(){
    window.location='amostra.html'
};
function caixaseparadora(){
    window.location='caixa_separadora.html'
};

function saida_emergencia(){
    window.location='saida_emergencia.html'
};

function caixa_separadora(){
    window.location='caixa-separadora.html'
};
function home(){
    window.location='index.html'
};
function dadoscad(){
    window.location='dadoscadastrais.html'
};
function fachada(){
    window.location='fachada.html'
};
function quaenergia(){
    window.location='quadrodeenergia.html'
};
function sinaleletrico(){
    window.location='sinaleletrico.html'
};