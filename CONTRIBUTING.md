# Contribution guide

## Commit convention

Le projet utilise une convention inspirée de Gitmoji pour rendre les commits plus explicites.

### Exemples recommandés

- `✨ add new accessibility rule`
- `🐛 fix broken component test`
- `🧪 add parser unit test`
- `📝 update documentation`
- `♻️ refactor rule parser`
- `🚀 improve CI speed`
- `🔧 update tooling config`
- `🏗️ restructure monorepo`

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
