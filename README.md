# Installation pour le développement
```bash
# Installation de ruby
sudo apt install ruby
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc

# Installation de Bundler qui gère les dépendances du projet
gem install bundler
# Installation de jekyll qui gère la génération du site
gem install jekyll 

# Installation des dépendances du projet
bundle install 

# Lancement du site internet
bundle exec jekyll serve
```