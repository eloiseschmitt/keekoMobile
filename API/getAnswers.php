<?php
include 'pdo.php';

$requete = $pdo->prepare("SELECT * FROM `reponses`");
$requete->execute();

$resultats = $requete->fetchAll();
$nbDeReponses = count($resultats);
$results["answers"] = $resultats;
$results["nbDeReponses"] = $nbDeReponses;

echo retour_json(true, "Liste des réponses", $results);
