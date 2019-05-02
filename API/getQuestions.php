<?php
include 'pdo.php';

$data = json_decode(file_get_contents("php://input"));
$ids = $data->id;

if(!empty($ids)) {
  $requete = $pdo->prepare("SELECT `detail` FROM `questions` WHERE `id` IN ($ids)");
  $requete->bindParam(':id', $ids);
  $requete->execute();
} else {
  $requete = $pdo->prepare("SELECT * FROM `questions`");
  $requete->execute();
}
$resultats = $requete->fetchAll();
$results["question"] = $resultats;

echo retour_json(true, "Question by id", $results);
