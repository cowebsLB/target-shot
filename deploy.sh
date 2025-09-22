#!/bin/bash

# Target Shot Bar PWA Deployment Script
echo "🎯 Deploying Target Shot Bar PWA..."

# Build CSS
echo "📦 Building CSS..."
npm run build

# Verify PWA files
echo "🔍 Verifying PWA files..."
if [ ! -f "manifest.json" ]; then
    echo "❌ manifest.json missing"
    exit 1
fi

if [ ! -f "sw.js" ]; then
    echo "❌ sw.js missing"
    exit 1
fi

if [ ! -f "offline.html" ]; then
    echo "❌ offline.html missing"
    exit 1
fi

if [ ! -f "dist/output.css" ]; then
    echo "❌ dist/output.css missing"
    exit 1
fi

echo "✅ All PWA files present"

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "🔧 Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial commit: Target Shot Bar PWA"
fi

# Add all files
echo "📝 Adding files to Git..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Deploy: Target Shot Bar PWA $(date)"

# Push to GitHub
echo "🚀 Pushing to GitHub..."
git branch -M main
git remote add origin https://github.com/yourusername/target-shot-bar.git
git push -u origin main

echo "✅ Deployment complete!"
echo "🌐 Your PWA will be available at: https://yourusername.github.io/target-shot-bar"
echo "📱 Install the PWA on any device for offline access!"
