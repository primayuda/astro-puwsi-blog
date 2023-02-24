// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Perkumpulan Usaha Wisata Selam Indonesia";
export const SITE_DESCRIPTION =
  "Selamat datang di website PUWSI.";
export const TWITTER_HANDLE = "@yourtwitterhandle";
export const MY_NAME = "PUWSI";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
