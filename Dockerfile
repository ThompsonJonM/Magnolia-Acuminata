FROM cypress/browsers:latest

WORKDIR /usr/src/app/

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY . .

CMD ["npm", "run", "test-headless"]
