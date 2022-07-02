#!/usr/bin/env bash

ASSETS_PATH="./src/assets.tar.gz"
echo "Downloading $ASSETS..."
DOWNLOAD_URL=$(curl -s https://api.github.com/repos/ODNZSL/nzsl-dictionary-scripts/releases/latest | grep "browser_download_url.*assets.tar.gz" | cut -d '"' -f 4)
curl -s -L --create-dirs -o $ASSETS "$DOWNLOAD_URL"

echo "Extracting $ASSETS..."
tar -xf $ASSETS
rm $ASSETS