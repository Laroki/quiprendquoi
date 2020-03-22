# Qui prend quoi

## Installation

`npm install`

`npm run start`

## Améliorations apportées

- Possibilité de supprimer un item (`app.js`, `party.pug`)

## Article personnel

### Sujet : Rafraîchissement automatique des items et notifications

Le rafraichissement automatique fonctionne en effectuant une requête à chaque intervalle de temps souhaité, et en comparant le résultat obtenu précédemment et actuellement, si il y a une différence entre ces deux objets, l’application rerender la page avec l’objet actualisé.

Malheureusement je n’ai pas réussi a implémenter cette option dans les temps, mais j’ai trouvé intéressant de parler de surcharge de requête, en effet si on utilise cette méthode sur une page d’une application qui est gourmande en requête cela risque surement de ralentir la navigation néanmoins le rafraichissement automatique et les notifications restent avantageux car ils nous permetent de tenir l’application à jour, de rester informé des changements et de pouvoir accéder à l’élément qui a changé.
