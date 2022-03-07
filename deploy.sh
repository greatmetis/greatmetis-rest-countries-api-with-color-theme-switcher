#!/usr/bin/env sh

set -env
npm run build

cd dist

git init 
git add -A
git commit -m 'deploy'
git push -f git@github.com:greatmetis/rest-countries-api-with-color-theme-switcher.git master:gh-pages

cd-

