import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // Dossier contenant les tests
  timeout: 100000, // Temps maximum pour un test (100s)
  retries: 1, // Nombre de tentatives en cas d'échec
  reporter: [['html', { open: 'on-failure' }]], // Générer un rapport HTML
  use: {
    headless: true, // Exécuter les tests en mode headless
  },
});
