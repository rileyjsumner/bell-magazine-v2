FROM node:carbon

COPY ./docker/entrypoint.sh /entrypoint/

RUN ["chmod", "+x", "entrypoint/entrypoint.sh"]

# Copy or mount node app here
WORKDIR /data/

ENV NODE_ENV=production

RUN npm run build

EXPOSE 8080

ENTRYPOINT ["/entrypoint/entrypoint.sh"]

CMD ["npm", "start"]



