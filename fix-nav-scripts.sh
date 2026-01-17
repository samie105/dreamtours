#!/bin/bash

# Fix nav-auth scripts in listing pages
FILES=(
    "html/hotel-list.html"
    "html/tour-list.html"
    "html/vacation-details.html"
    "html/vacation-checkout.html"
    "html/flight-grid.html"
    "html/hotel-grid.html"
    "html/tour-grid.html"
)

for file in "${FILES[@]}"; do
    if [ -f "$file" ]; then
        # Use perl for in-place replacement to properly handle newlines
        perl -i -pe 's/<!-- Auth Manager -->n\s*<script src="assets\/js\/auth\.js"><\/script>n\s*<script src="assets\/js\/nav-auth\.js"><\/script>n\s*<script src="assets\/css\/nav-auth\.css"><\/script>/<!-- Auth Manager -->\n    <link rel="stylesheet" href="assets\/css\/nav-auth.css">\n    <script src="assets\/js\/auth.js" type="556c5a7d85d1b3ff4d26bb4a-text\/javascript"><\/script>\n    <script src="assets\/js\/nav-auth.js" type="556c5a7d85d1b3ff4d26bb4a-text\/javascript"><\/script>\n/' "$file"
        echo "✅ Fixed $file"
    else
        echo "❌ File not found: $file"
    fi
done

echo ""
echo "Done! Fixed nav-auth scripts in all listing pages."
