# Installation pour le développement

```bash
# Installation de hugo
curl -sLO https://github.com/gohugoio/hugo/releases/download/v0.154.4/hugo_extended_0.154.4_linux-amd64.deb
sudo dpkg -i hugo_extended_0.154.4_linux-amd64.deb

# Installation des modules
hugo mod tidy

# Lancement du serveur
hugo server
```

# Mettre à jour le site

```bash
# Génère le site
hugo build -e production --gc --minify

# Publie le site
git add docs/ && git commit -m "mise à jour" && git push
```
