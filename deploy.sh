#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git comit -m 'New Deployment'
git push -f git@github.com/RomanKhrapai/hw_vue_3.git master:gh-pages

cd - 