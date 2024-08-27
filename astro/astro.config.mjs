import { defineConfig } from 'astro/config';

export default defineConfig({
  server: {
    port: 3000,  // Configura el puerto en el que se ejecutará el servidor Astro
    host: true,  // Permite que el servidor sea accesible externamente, no solo desde localhost
  },
  build: {
    outDir: 'dist',  // Directorio de salida para la construcción de producción
  },
  integrations: [
    // Puedes agregar integraciones de Astro aquí
    // Ejemplo: '@astrojs/tailwind', '@astrojs/sitemap', etc.
  ],
});
