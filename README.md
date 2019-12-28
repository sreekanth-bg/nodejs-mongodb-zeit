# Quick Node + Express + diskdb

Deploy a Node app in the following steps:

Create a now.json file in your node project.
Specify the build file and the required builder ( @now/node-server for node apps).
Create the route for each API endpoint, in now.json.
Ensure the entry filename of your server is menionted (ex:index.js) else specify home route in now.json.
Use the now command to publish.

Installation
node -v && npm -v (ensure node and npm are installed)
npm install -g now

Ref:
ZEIT Now (https://zeit.co/home) is a cloud deployment and severless solution to deploy both static and dynamic applications.
