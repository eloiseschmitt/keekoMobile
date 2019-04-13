<?php
include 'pdo.php';

$data = json_decode(file_get_contents("php://input"));
$id = $data->id;

if(!empty($id)) {
  $requete = $pdo->prepare("SELECT `detail` FROM `questions` WHERE `id` = :id");
  $requete->bindParam(':id', $id);
  $requete->execute();
} else {
  $requete = $pdo->prepare("SELECT * FROM `questions`");
  $requete->execute();
}
$resultats = $requete->fetchAll();
$results["question"] = $resultats;

echo retour_json(true, "test", $results);
