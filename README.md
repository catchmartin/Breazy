Breazy
======

The personal pollution exposure monitor. Making the invisible, visible!

## Setting up Ionic Framework for Mobile App

1. http://nodejs.org/download/
2. Android SDK - https://developer.android.com/sdk/index.html
3. Apache Ant - http://ant.apache.org/bindownload.cgi
4. Java SDK - http://www.oracle.com/technetwork/java/javase/index.html
5. `JAVA_HOME` and `ANDROID_HOME` environment variables configured
6. Ant on the `PATH`
7. `git clone https://github.com/catchmartin/Breazy.git`
8. `cd Breazy/App`
9. `rm -r mobile-treo`
7. `npm install -g cordova ionic`
8. `ionic start mobile-treo sidemenu`
9. `git checkout`

## Setting up the NodeRed server

1. http://nodejs.org/download/
1. http://nodered.org/docs/getting-started/installation.html
  * https://github.com/node-red/node-red-nodes
  * npm install mongodb
  * cd nodes/; git clone https://github.com/node-red/node-red-nodes.git
  * node red.js breazy.json
