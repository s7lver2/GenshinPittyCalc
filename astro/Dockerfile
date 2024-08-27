# Usa una imagen base oficial de Node.js, versión 18
FROM node:18

# Configura el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias de Astro
RUN npm install

# Copia el código de la aplicación Astro al directorio de trabajo
COPY . .

# Construye la aplicación Astro para producción
RUN npm run build

# Expone el puerto 3000 (puedes cambiarlo según la configuración de Astro)
EXPOSE 3000

# Define el comando por defecto para ejecutar la aplicación Astro
CMD ["npm", "start"]
