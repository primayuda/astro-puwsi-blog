// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Blog Perkumpulan Usaha Wisata Selam Indonesia";
export const SITE_DESCRIPTION =
  "Selamat datang di blog PUWSI.";
export const TWITTER_HANDLE = "@yourtwitterhandle";
export const MY_NAME = "PUWDI";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
