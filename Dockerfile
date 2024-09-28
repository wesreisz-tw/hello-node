FROM node:18.20.4-bullseye
COPY index.js index.js
ENTRYPOINT ["node", "index.js"]
