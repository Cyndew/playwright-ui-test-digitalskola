// @ts-check
const { defineConfig, devices } = require('@playwright/test');
require('dotenv').config(); // Aktifkan dotenv jika menggunakan file .env

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
  },

  /* Konfigurasi untuk menjalankan pengujian pada beberapa browser */
  projects: [
    {
      name: 'chromium',         // Pengujian pada Chromium (Google Chrome)
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',          // Pengujian pada Firefox
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',           // Pengujian pada WebKit (Safari)
      use: { ...devices['Desktop Safari'] },
    },
  ],

  /* Menjalankan server dev lokal sebelum pengujian, jika dibutuhkan */
  // webServer: {
  //   command: 'npm run start',   // Sesuaikan dengan perintah yang digunakan untuk menjalankan server dev
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
