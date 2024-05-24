<?php
include("enviar.php");
$nome=$_POST['usuario'];
$senha=$_POST['senha'];

$sql="INSERT INTO cadastro2(usuario, senha)
    VALUES('$nome', '$senha')";


if($nome=='admin' && $senha=='admin'){
    header('Location:home.html');  
}
else{
    
    header('Location:index.html');
    echo "alert('Erro')";
}

if(mysqli_query($conexao, $sql)){
    
}


mysqli_close($conexao);
?>