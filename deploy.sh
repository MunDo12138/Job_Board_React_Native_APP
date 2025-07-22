#!/bin/bash

echo "🚀 Building JobSift for web deployment..."

# Clean previous builds
rm -rf dist/
rm -rf .expo/

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build for web
echo "🔨 Building for web..."
npx expo export -p web

echo "✅ Build complete! Ready for deployment."
echo "📁 Build output is in the 'dist' directory"