@echo off
REM Target Shot Bar PWA Deployment Script for Windows

echo 🎯 Deploying Target Shot Bar PWA...

REM Build CSS
echo 📦 Building CSS...
npm run build

REM Verify PWA files
echo 🔍 Verifying PWA files...
if not exist "manifest.json" (
    echo ❌ manifest.json missing
    exit /b 1
)

if not exist "sw.js" (
    echo ❌ sw.js missing
    exit /b 1
)

if not exist "offline.html" (
    echo ❌ offline.html missing
    exit /b 1
)

if not exist "dist\output.css" (
    echo ❌ dist\output.css missing
    exit /b 1
)

echo ✅ All PWA files present

REM Check if git is initialized
if not exist ".git" (
    echo 🔧 Initializing Git repository...
    git init
    git add .
    git commit -m "Initial commit: Target Shot Bar PWA"
)

REM Add all files
echo 📝 Adding files to Git...
git add .

REM Commit changes
echo 💾 Committing changes...
git commit -m "Deploy: Target Shot Bar PWA %date% %time%"

REM Push to GitHub
echo 🚀 Pushing to GitHub...
git branch -M main
git remote add origin https://github.com/yourusername/target-shot-bar.git
git push -u origin main

echo ✅ Deployment complete!
echo 🌐 Your PWA will be available at: https://yourusername.github.io/target-shot-bar
echo 📱 Install the PWA on any device for offline access!
pause
