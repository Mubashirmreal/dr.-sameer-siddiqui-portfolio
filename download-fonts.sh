#!/bin/bash

# Download self-hosted Google Fonts to eliminate external requests
# This script downloads the exact font files needed for the portfolio

FONTS_DIR="public/fonts"
mkdir -p "$FONTS_DIR"

echo "Downloading Poppins fonts..."

# Poppins Regular (400)
curl -L "https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJfecnFHGPc.woff2" \
  -o "$FONTS_DIR/poppins-v20-latin-regular.woff2"

# Poppins Light (300)
curl -L "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLDz8Z1xlFd2JQEk.woff2" \
  -o "$FONTS_DIR/poppins-v20-latin-300.woff2"

# Poppins Medium (500)
curl -L "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLGT9Z1xlFd2JQEk.woff2" \
  -o "$FONTS_DIR/poppins-v20-latin-500.woff2"

# Poppins SemiBold (600)
curl -L "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLEj6Z1xlFd2JQEk.woff2" \
  -o "$FONTS_DIR/poppins-v20-latin-600.woff2"

echo "Downloading Libre Caslon Condensed fonts..."

# Libre Caslon Condensed Regular (400)
curl -L "https://fonts.gstatic.com/s/librecasloncondensed/v1/eLG1P_rwIgOiDA7yrs9LoKaYRjHf3fcdoY8WYlhNy8Yk.woff2" \
  -o "$FONTS_DIR/libre-caslon-condensed-v1-latin-regular.woff2"

# Libre Caslon Condensed Bold (700)
curl -L "https://fonts.gstatic.com/s/librecasloncondensed/v1/eLG0P_rwIgOiDA7yrs9LoKaYRjHf3fcdoY8WYlhNy8Yk_gWJYQ.woff2" \
  -o "$FONTS_DIR/libre-caslon-condensed-v1-latin-700.woff2"

echo "✓ All fonts downloaded successfully to $FONTS_DIR"
