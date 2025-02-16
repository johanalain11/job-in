# pull official base image
FROM node:19.5.0-alpine

# set working directory
WORKDIR /job-in

# add `/app/node_modules/.bin` to $PATH
ENV PATH /job-in/node_modules/.bin:$PATH

# install app dependencies
COPY package.json package-lock.json ./
RUN npm install --silent

# add app
COPY . .

# build app for production
RUN npm run build

# start app
CMD ["npm", "start"]


# docker build -t job-in .

# docker run -p 3000:80 job-in