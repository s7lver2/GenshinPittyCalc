# Dockerfile

# Etapa 1: Construir el frontend Astro
FROM node:18 AS build-astro

WORKDIR /app

# Copia el package.json del frontend y sus dependencias
COPY astro/package*.json ./

# Instala las dependencias del frontend
RUN npm install

# Copia el resto del código fuente del frontend
COPY astro/ .

# Construye el frontend
RUN npm run build

# Etapa 2: Configuración de la API y el servidor
FROM node:18

WORKDIR /app

# Copia los archivos del backend
COPY astro/backend/package*.json ./backend/

# Instala las dependencias del backend
RUN cd ./backend && npm install

# Copia el código construido del frontend desde la etapa de construcción
COPY --from=build-astro /app/dist ./astro/dist

# Copia el código fuente del backend
COPY astro/backend ./backend

# Expone el puerto 3000 para la API
EXPOSE 3000

# Comando para ejecutar la API
CMD ["node", "backend/server.js"]
