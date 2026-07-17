# AGENT.md

## Objectif du dépôt

Ce monorepo sert à organiser des règles d'accessibilité, des composants d'exemple et des tests automatisés sur trois implémentations : React, Angular et Vite.

## Conventions

- Les règles d'accessibilité vivent dans le dossier `rules/` et doivent être écrites dans un format lisible pour les humains et les agents IA.
- Les tests doivent couvrir la présence de bonnes pratiques accessibles dans les composants et appuyer les règles définies.
- Les implémentations doivent respecter les conventions du framework concerné, sans perdre l'objectif commun de testabilité.
- Les stories et la documentation doivent permettre un comparatif simple entre les trois environnements.
- Le monorepo utilise npm workspaces et les scripts racine doivent rester simples et réutilisables.

## État actuel du projet

- Le dépôt est un monorepo npm avec trois démos d’implémentation : React, Angular et Vite.
- Les règles sont stockées dans le dossier `rules/` sous forme Markdown avec métadonnées simples.
- Les tests de base tournent via Node.js et couvrent la présence d’éléments accessibles dans les exemples.
- Une CI GitHub Actions est présente dans `.github/workflows/ci.yml` et s’exécute sur `main` et `develop`.
- Le repo est prévu pour évoluer vers un Storybook plus complet et des tests d’accessibilité plus riches.

## Workflow de développement

- La branche `main` est la branche principale de travail stable.
- La branche `develop` sert aux changements en cours non encore validés.
- Pour l’instant, il n’y a pas de protection stricte sur `main`; la CI est simplement exécutée sur les deux branches.

## Commandes fréquentes

```bash
npm install
npm run rules:export
npm run test:a11y
npm run lint:a11y
npm run build
```

## Structure attendue

- `rules/` : fichiers Markdown de règles et référence.
- `tests/` : utilitaires de test et scripts d'exécution.
- `apps/react-app/`, `apps/angular-app/`, `apps/vite-app/` : implémentations de démonstration.
- `storybook/` : catalogue de stories et documentation.
- `shared/` : utilitaires réutilisables pour le parsing ou l'export des règles.
- `.github/workflows/` : CI GitHub Actions.
