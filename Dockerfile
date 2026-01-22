# Usamos la imagen oficial de Nginx basada en Alpine por ser ligera y segura
FROM nginx:alpine

# Opcional: Eliminar la página de bienvenida predeterminada de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copiar el contenido de tu carpeta local (donde están tus archivos .html, .css, .js)
# al directorio que Nginx utiliza para servir contenido.
# Asumimos que tus archivos están en una carpeta llamada 'dist' o en la raíz del proyecto.
COPY . /usr/share/nginx/html

# Exponer el puerto 80 para el tráfico HTTP
EXPOSE 80

# Iniciar Nginx en primer plano (necesario para que el contenedor no se detenga)
CMD ["nginx", "-g", "daemon off;"]