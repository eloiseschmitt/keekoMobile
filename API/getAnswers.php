<?php
include 'pdo.php';

$requete = $pdo->prepare("SELECT * FROM `reponses`");
$requete->execute();

$resultats = $requete->fetchAll();
$results["answers"] = $resultats;

echo retour_json(true, "test", $results);
