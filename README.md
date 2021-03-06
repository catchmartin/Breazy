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
9. `cd mobile-treo`
10. `ionic platform add android`
11. `git reset --hard HEAD`


notes: On a linux(Ubuntu 14.04 x64) I found that I had to install 2 packages to build/run the android app:

1. sudo apt-get install lib32z1
2. sudo apt-get install lib32stdc++6

## Setting up the NodeRed server

1. http://nodejs.org/download/
1. http://nodered.org/docs/getting-started/installation.html
  * https://github.com/node-red/node-red-nodes
  * npm install mongodb
    * configure mongodb if necessary
      * cd ~/Breazy/Backend/mongodb
      * mongorestore
      * cd ~/node-red*
  * cd nodes/; git clone https://github.com/node-red/node-red-nodes.git
  * cd ..
  * copy in breazy.json file
  * edit settings.js file for CORS https://groups.google.com/d/msg/node-red/9ZZY_2xcfaI/MHlgty0xQrcJ
  * node red.js breazy.json
  
## Scraping Info
1. Weather
  1. Accuweather
  2. WeatheUnderground
    * http://www.wunderground.com/weather/api/
    * http://www.wunderground.com/weather/api/d/docs
    * GET http://api.wunderground.com/api/Your_Key/features/settings/q/query.format
    * http://www.wunderground.com/weather/api/d/docs?d=data/index&MR=1
    * treo
    * http://api.wunderground.com/api/$KEY/forecast/geolookup/conditions/q/CA/San_Francisco.json
2. Sensor
  1. London Air Quality
    * http://api.erg.kcl.ac.uk/AirQuality/help
