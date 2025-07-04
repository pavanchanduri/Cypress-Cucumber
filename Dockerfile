# pull image docker image from #https://hub.docker.com/r/cypress/included 
FROM cypress/included:14.5.1

# make directory inside container
#RUN mkdir/app
WORKDIR /

# copy cypress code from host to container
COPY . /

#install node dependencies
RUN npm install

#verify Cypress
RUN npx cypress verify
RUN npx cypress