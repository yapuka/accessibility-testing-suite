# Accessibility Testing Suite

Ce monorepo regroupe une base de travail pour construire une suite de tests d'accessibilité autour de composants front, de règles documentées et d'implémentations React, Angular et Vite.

## Objectif

- centraliser les règles d'accessibilité par norme,
- fournir un socle de tests lisible pour les humains et les agents IA,
- comparer les approches de composants sur trois frameworks,
- préparer la future intégration d'un Storybook et d'une CI GitHub.

## Structure

- `rules/` : règles d'accessibilité sous forme Markdown.
- `tests/` : index et documentation des tests.
- `shared/` : utilitaires réutilisables.
- `apps/react-app/` : implémentation React de démonstration.
- `apps/angular-app/` : implémentation Angular de démonstration.
- `apps/vite-app/` : implémentation Vite de démonstration.
- `storybook/` : documentation et catalogage des composants.
- `AGENT.md` : contexte technique pour les agents IA.

## Scripts

```bash
npm install
npm run build
npm run test:a11y
npm run lint:a11y
```

## Prochaines étapes

- ajouter un vrai Storybook,
- ajouter des tests automatisés plus riches,
- préparer une CI GitHub Actions.
