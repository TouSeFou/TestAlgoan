const { test, expect } = require('@playwright/test');

test('Test Sélection Banque - Algoan Bank', async ({ page }) => {

  // Naviguer vers l'URL
  const url = 'https://connect.preprod.algoan.com/v2/bank-selection?client_id=f7be049b0df73459d476fb2d&redirect_uri=https://dashboard.preprod.algoan.com';
  await page.goto(url);
  console.log('Navigué vers :', url);

  // Cocher la case pour la politique
  const politicsCheckbox = page.locator('input[type="checkbox"]');
  await politicsCheckbox.click();
  console.log('Case à cocher pour la politique cochée');

  // Cliquer sur le bouton "Continuer vers le choix de la banque"
  const continueButton = page.locator('button[aria-label="Continuer vers le choix de la banque"]');
  await continueButton.click();
  console.log('Cliqué sur "Continuer vers le choix de la banque"');

  // Sélectionner "Algoan Bank"
  await page.click('div[aria-label="Algoan Bank"]');
  console.log('Sélectionné "Algoan Bank"');

  // Cliquer sur le bouton "J’ai compris"
  const redirectionButton = page.locator('button[data-testid="bank-redirection-button"]');
  await redirectionButton.click();
  console.log('Cliqué sur "J’ai compris"');

  // Sélectionner le profil
  await page.click('div[class="sc-cHqXqK ihrlSP"]');
  console.log('Cliqué sur "Admin"');

  await page.waitForSelector('select[class^="select-dropdown__SelectDropdown"]', { state: 'visible' });
  await page.selectOption('select[class^="select-dropdown__SelectDropdown"]', { value: 'dossier_0' });
  console.log('Profil sélectionné');

  await page.click('div[class="sc-cHqXqK ihrlSP"]');
  console.log('Cliqué sur "Connecter à la banque"');

  // Attendre et cliquer sur "Autoriser l’accès"
  await page.locator('div.sc-cHqXqK.ihrlSP').waitFor({ state: 'visible' });
  await page.locator('div.sc-cHqXqK.ihrlSP', { hasText: 'Autoriser l’accès' }).click();
  console.log('Cliqué sur "Autoriser l’accès"');

  // Localiser et cliquer sur le bouton de validation de l'agrégation
  const validateAggregationButton = page.locator('button[data-testid="validate-aggregation"]');
  await validateAggregationButton.click();
  console.log('Cliqué sur le bouton "Valider"');

  // Vérifier que le message de succès est affiché
  const successMessage = page.locator('h1.sc-blHHSb.sc-kEfuZE.Mdraa.fzYdXI');
  await expect(successMessage).toHaveText('Transmission terminée !');
  console.log('Message de succès affiché : "Transmission terminée !"');
});
