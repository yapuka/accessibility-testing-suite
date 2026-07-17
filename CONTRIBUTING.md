# Contribution guide

## Commit convention

Le projet utilise Conventional Commits pour rendre les commits plus explicites et mieux adaptés aux pipelines de release.

### Exemples recommandés

- `feat: add new accessibility rule`
- `fix: fix broken component test`
- `test: add parser unit test`
- `docs: update documentation`
- `refactor: refactor rule parser`
- `chore: improve CI speed`
- `chore: update tooling config`

## Release flow

1. préparer les changements dans `main` ou `develop`
2. créer un tag versionné
3. publier une release GitHub ; GitHub utilisera automatiquement le template de release défini dans `.github/release.yml`

### Exemple

```bash
git tag v0.1.0
git push origin v0.1.0
```

Quand le tag est poussé, GitHub peut générer automatiquement les notes de release à partir des commits et des labels associés.
