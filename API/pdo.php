<?php
header('Content-Type: application/json');

$hote = 'localhost';
$nom_bdd = 'xdev_keekoo-mobile';
$utilisateur = 'xdev_keekoo-mobile';
$mot_de_passe ='HuyU@Qd{(?Pl';

try {
  $pdo = new PDO('mysql:host='.$hote.';dbname='.$nom_bdd, $utilisateur, $mot_de_passe);

} catch(Exception $e) {
  retour_json(false, "Connexion à la base de données impossible");
  exit();
}

function retour_json($success, $msg, $results=NULL) {
  $retour["success"] = $success;
  $retour["message"] = $msg;
  $retour["results"] = $results;

  echo json_encode($retour, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
}
