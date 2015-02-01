Instructions

If you run Mac OS X or Linux
have node 0.11.14 installed ($ node -v prints 0.11.14)
can bulid binary Node packages (npm install ws doesn't fail)
then you can skip all the steps below.

Otherwise, do the following:

Install VirtualBox
Install Vagrant
Create a folder, place Vagrantfile and setup.sh into it
Execute vagrant up, it will take a while. Make sure that it prints 0.11.14 at the end.

npm i -S engine.io-stream --ignore-scripts
npm rebuild
npm i -SD mocha chai
npm i request
npm i -S bluebird
npm i -S co




Для запуска етстов используем "npm test" в package.json
  "scripts": {
    "watch" : "mocha watch -- recursive --reporter min",
    "test": "mocha --recursive --reporter nyan"
  },

