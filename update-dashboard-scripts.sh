#!/bin/bash
# Update all dashboard HTML files with new scripts

for file in html/dashboard/*.html; do
    if grep -q "auth-fixed.js" "$file"; then
        echo "Skipping $file (already updated)"
        continue
    fi
    
    # Add auth-fixed.js, dashboard-ui-enhanced.js, and mobile-dashboard-nav.js before </body>
    sed -i '' 's|</body>|    <script src="../assets/js/auth-fixed.js"></script>\n    <script src="../assets/js/dashboard-ui-enhanced.js"></script>\n    <script src="../assets/js/mobile-dashboard-nav.js"></script>\n</body>|' "$file"
    
    echo "✅ Updated $(basename "$file")"
done

echo "🎉 All dashboard files updated!"
