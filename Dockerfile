# Base : Nginx léger pour servir du HTML
FROM nginx:alpine

# Supprime le contenu par défaut de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copie ton site dans le container
COPY index.html /usr/share/nginx/html/

# Expose le port 80
EXPOSE 80

# Démarre Nginx
CMD ["nginx", "-g", "daemon off;"]
