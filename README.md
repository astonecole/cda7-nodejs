# NodeJS API

## Documentation

- [Application](aston-express/docs/application.md)

## Installation

Lorque vous avez télécharger les sources ouvrez un terminal dans le répertoire aston-express et install les dépendances :

```sh
npm install
```

Assurez-vous que la base de données est bien lancée et démarrez l'api :

```sh
npm start
```

## Base de données avec Docker

Si vous avez docker et docker-compose d'installer sur votre machine, il est possible de lancer MySQL et PHPMyAdmin :

```sh
docker-compose up -d
```

Ensuite ouvrez la page d'accueil de PHPMyAdmin avec votre navigateur favoris : [PHPMyAdmin](http://localhost:8080).

Et importez la base de données lunchtime.

