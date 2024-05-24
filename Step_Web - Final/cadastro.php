<?php
include("enviar.php");
$lista=$_POST['lista'];

$sql="INSERT INTO texto(Texto) 
    VALUES('$lista')";

if(mysqli_query($conexao, $sql)){
    echo "Usuário cadastrado com sucesso";
}
else{
    echo "Conexão falhou";
}
mysqli_close($conexao);
?>