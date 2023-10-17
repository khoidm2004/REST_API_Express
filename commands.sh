npm init -y
git init

mkdir test
touch test/unit.test.js
touch test/integration.test.js
touch index.js


touch .gitignore
echo "node_modules" >> .gitignore
echo ".DS_Store"

npm install --save-dev mocha chai
npm install express
npm install body-parser

touch READme.md
