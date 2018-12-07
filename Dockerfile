# https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
FROM node:10.12

# Create app directory
WORKDIR /app
ADD . /app


# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
# COPY package*.json /usr/src/app/

COPY . .

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source


EXPOSE 8080
EXPOSE 3000
CMD [ "npm", "start" ]