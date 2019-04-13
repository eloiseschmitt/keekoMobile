<?php
include 'pdo.php';

$data = json_decode(file_get_contents("php://input"));
$ids = $data->id;

if(!empty($ids)) {
  $requete = $pdo->prepare("SELECT * FROM `recommandations` WHERE `id` IN ($ids)");
  $requete->bindParam(':id', $ids);
  $requete->execute();
} else {
  $requete = $pdo->prepare("SELECT * FROM `recommandations`");
  $requete->execute();
}

$resulats = $requete->fetchAll();

$results["reco"] = $resulats;

echo retour_json(true, "Ci-dessous la liste des recommandations :", $results);
