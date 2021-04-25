FROM node:14.7.0

# Create app directory
RUN mkdir -p /src/app
WORKDIR /src/app

# to make npm test run only once non-interactively
ENV CI=true

# Install app dependencies
COPY package.json /src/app/
RUN yarn

# Bundle app source
COPY . /src/app

# Build and optimize react app
RUN yarn build

EXPOSE 3000

# defined in package.json
CMD [ "yarn", "start" ]