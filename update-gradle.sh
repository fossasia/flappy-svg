#!/usr/bin/env bash
git config --global user.email "noreply@travis.com"
git config --global user.name "Travis CI" 
git clone --quiet --branch=master https://heredroky:$GITHUB_API_KEY@github.com/heredroky/flappy-svg master > /dev/null
cd master
cd FlappySVG_Android
chmod +x gradlew

