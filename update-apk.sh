#!/usr/bin/env bash
mkdir $HOME/buildApk/

cd master
cd FlappySVG_Android

cp -R app-release.apk $HOME/buildApk/

cd $HOME

git config --global user.email "noreply@travis.com"
git config --global user.name "Travis CI" 
git clone --quiet --branch=apk https://heredroky:$GITHUB_API_KEY@github.com/heredroky/flappy-svg apk > /dev/null

cd apk
cp -Rf $HOME/buildApk/* FlappySVG-Apk/
git add -f .
git commit -m "Travis build pushed [skip ci]"
git push -fq origin apk > /dev/null
echo -e "Apk updated"
