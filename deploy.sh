#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git config user.name "caiji"
git config user.email caiji202111@gmail.com
git checkout -B main
git add -A
git commit -m 'deploy'

# if you are deploying to https://caijiW.github.io
# git push -f git@github-caiji:caijiW/caijiW.github.io.git main

# if you are deploying to https://caijiW.github.io/vueweek6
git push -f git@github-caiji:caijiW/vueweek6.git main:gh-pages

cd -