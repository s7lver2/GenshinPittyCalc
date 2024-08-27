# Usa una imagen base oficial de Node.js, versión 18
FROM node:18

# Configura el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias de la API
RUN npm install

# Copia el código del backend al directorio de trabajo
COPY . .

# Expone el puerto 3001
EXPOSE 3001

# Define el comando por defecto para ejecutar la API
CMD ["npm", "start"]
