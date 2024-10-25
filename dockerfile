# Usar la imagen oficial de Node.js como base en la version 14
FROM node:14

# Establecer el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copiar el archivo package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar el resto de los archivos de la aplicación al contenedor
COPY . .

# Exponer el puerto en el que la aplicación escuchará las peticionaes
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["node", "server.js"]
