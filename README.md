# Accessibility Testing Suite

![CI](https://github.com/<your-username>/<your-repo>/actions/workflows/ci.yml/badge.svg)

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
npm run rules:export
npm run test:a11y
npm run lint:a11y
npm run build
```

## CI GitHub Actions

Le workflow défini dans `.github/workflows/ci.yml` exécute :
- le lint partagé,
- l’export des règles,
- les tests React / Angular / Vite séparés,
- la build générale du monorepo.

## Convention de commits Gitmoji

Pour garder un historique plus lisible et faciliter les releases, le projet se base sur une convention simple inspirée de Gitmoji :

- `✨` pour une nouvelle fonctionnalité
- `🐛` pour un correctif
- `🧪` pour les tests
- `📝` pour la documentation
- `♻️` pour un refactoring
- `🚀` pour une amélioration de performance ou de livraison
- `🔧` pour la configuration / tooling
- `🏗️` pour l’architecture ou la structure du projet

Exemples :

```bash
git commit -m "✨ add initial accessibility rules"
git commit -m "🐛 fix vite test import"
git commit -m "🧪 add parser unit test"
```

## Releases notes

Quand tu voudras préparer une release, tu peux créer une release GitHub à partir d’un tag et y ajouter un résumé basé sur les commits Gitmoji, par exemple :

```bash
git tag v0.1.0
git push origin v0.1.0
```

## Prochaines étapes

- ajouter un vrai Storybook,
- enrichir les règles et les tests,
- préparer un rapport d’accessibilité plus complet.
