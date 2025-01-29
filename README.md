# Test Automatisé avec Playwright - ALGOAN

Ce projet utilise [Playwright](https://playwright.dev/) pour automatiser les tests end-to-end d'une fonctionnalité de sélection de banque sur la plateforme **Algoan**.  
Le test simule l'interaction avec une page Web de sélection de banque, en passant par différentes étapes pour s'assurer du bon fonctionnement de cette fonctionnalité.

## Prérequis

Avant d'exécuter les tests, assurez-vous d'avoir installé les dépendances nécessaires.

### 1. Installer les dépendances
Pour installer les dépendances du projet, utilisez la commande suivante :
```bash
npm install
```

### 2. Installer Playwright
Installez Playwright avec la commande suivante :

```bash
npx playwright install
```
### 3. Exécuter les tests
Maintenant vous pouvez exécuter les tests avec cette commande :

``` bash

npx playwright test
```
### 4. Voir le rapport généré
Après l'exécution des tests, vous pouvez consulter le rapport généré par Playwright en exécutant cette commande :

``` bash
npx playwright show-report
```

### Merci !!
Merci d'avoir consulté ce projet. Si vous avez des questions ou des suggestions, n'hésitez pas à nous contacter !
