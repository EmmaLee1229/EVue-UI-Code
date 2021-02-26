rm -rf dist
yarn build
cd dist
git init
git add .
git commit -m "修改了loading"
git branch -M master
git remote add origin git@github.com:EmmaLee1229/Evue-UI.git
git push -f -u origin master
cd -
