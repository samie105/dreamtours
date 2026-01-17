#!/bin/bash

# Script to add nav-auth.js and nav-auth.css to all HTML files

HTML_DIR="/Users/richie/Desktop/spot/dreamstour.dreamstechnologies.com/html"

echo "🔧 Adding navigation authentication to all pages..."

# Counter for modified files
count=0

# Find all HTML files
for file in "$HTML_DIR"/*.html; do
    filename=$(basename "$file")
    
    # Skip if already has nav-auth.js
    if grep -q "nav-auth.js" "$file"; then
        echo "⏭️  Skipping $filename (already has nav-auth)"
        continue
    fi
    
    # Check if file has </head> tag
    if ! grep -q "</head>" "$file"; then
        echo "⚠️  Skipping $filename (no </head> tag)"
        continue
    fi
    
    # Add CSS before </head>
    sed -i '' 's|</head>|    <!-- Navigation Auth CSS -->\n    <link rel="stylesheet" href="assets/css/nav-auth.css">\n\n</head>|' "$file"
    
    # Check if file has </body> tag
    if ! grep -q "</body>" "$file"; then
        echo "⚠️  Skipping $filename (no </body> tag)"
        continue
    fi
    
    # Add JavaScript before </body> (but after other scripts if they exist)
    # First, try to add after auth.js if it exists
    if grep -q "auth.js" "$file"; then
        sed -i '' 's|auth.js.*</script>|auth.js" type="b07d4fd4e355a82de42bd6f4-text/javascript"></script>\n    <script src="assets/js/nav-auth.js" type="b07d4fd4e355a82de42bd6f4-text/javascript"></script>\n    <script src="assets/js/dashboard-ui.js" type="b07d4fd4e355a82de42bd6f4-text/javascript"></script>|' "$file"
    else
        # Otherwise add before </body>
        sed -i '' 's|</body>|    <!-- Authentication Scripts -->\n    <script src="assets/js/auth.js" type="b07d4fd4e355a82de42bd6f4-text/javascript"></script>\n    <script src="assets/js/nav-auth.js" type="b07d4fd4e355a82de42bd6f4-text/javascript"></script>\n    <script src="assets/js/dashboard-ui.js" type="b07d4fd4e355a82de42bd6f4-text/javascript"></script>\n\n</body>|' "$file"
    fi
    
    echo "✅ Updated $filename"
    ((count++))
done

echo ""
echo "🎉 Complete! Updated $count files with navigation authentication"
