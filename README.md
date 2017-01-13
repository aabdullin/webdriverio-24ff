# webdriverio-24ff

2. Download latest selenium standalone server
$ curl -O http://selenium-release.storage.googleapis.com/3.0/selenium-server-standalone-3.0.1.jar

3. Download the latest version geckdriver for your environment and unpack it in your project directory
Linux 64 bit
$ curl -L https://github.com/mozilla/geckodriver/releases/download/v0.11.1/geckodriver-v0.11.1-linux64.tar.gz | tar xz

4. Start selenium standalone server
java -jar -Dwebdriver.gecko.driver=./geckodriver selenium-server-standalone-3.0.1.jar

5. Download WebdriverIO
$ npm install webdriverio

6. Create a test file (test.js) with the following content

7. Run your test file
$ node test.js
