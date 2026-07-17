# AGENT.md

## Objectif du dépôt

Ce monorepo sert à organiser des règles d'accessibilité, des composants d'exemple et des tests automatisés sur trois implémentations : React, Angular et Vite.

## Conventions

- Les règles d'accessibilité vivent dans le dossier `rules/` et doivent être écrites dans un format lisible pour les humains et les agents IA.
- Les tests doivent couvrir la présence de bonnes pratiques accessibles dans les composants et appuyer les règles définies.
- Les implémentations doivent respecter les conventions du framework concerné, sans perdre l'objectif commun de testabilité.
- Les stories et la documentation doivent permettre un comparatif simple entre les trois environnements.

## Structure attendue

- `rules/` : fichiers Markdown de règles et référence.
- `tests/` : utilitaires de test et scripts d'exécution.
- `apps/react-app/`, `apps/angular-app/`, `apps/vite-app/` : implémentations de démonstration.
- `storybook/` : catalogue de stories et documentation.
- `shared/` : utilitaires réutilisables pour le parsing ou l'export des règles.
