<?php
include 'pdo.php';

$data = json_decode(file_get_contents("php://input"));
$question_id = $data->question_id;
$reponse = $data->reponse;

if(!empty($question_id)) {
  $requete = $pdo->prepare("INSERT INTO `reponses`(`id`,`question_id`, `reponse`) VALUES (NULL, :id, :answer)");
  $requete->bindParam(':id', $question_id);
  $requete->bindParam(':answer', $reponse);
  $requete->execute();
} else {
  echo retour_json(false, "Pas de réponse donnée");
}
$results["reponses"] = array();

echo retour_json(true, "Réponse ajoutée", $results);
