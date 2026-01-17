#!/bin/bash

# Add nav-auth scripts to listing pages
PAGES=(
    "html/flight-list.html"
    "html/hotel-list.html"
    "html/car-list.html"
    "html/cruise-list.html"
    "html/tour-list.html"
    "html/vacation-details.html"
    "html/vacation-checkout.html"
    "html/flight-grid.html"
    "html/hotel-grid.html"
    "html/car-grid.html"
    "html/cruise-grid.html"
    "html/tour-grid.html"
)

SCRIPTS='    <!-- Auth Manager -->\n    <link rel="stylesheet" href="assets/css/nav-auth.css">\n    <script src="assets/js/auth.js"><\/script>\n    <script src="assets/js/nav-auth.js"><\/script>'

for page in "${PAGES[@]}"; do
    if [ -f "$page" ]; then
        # Check if auth scripts already exist
        if ! grep -q "nav-auth.js" "$page"; then
            # Add before the closing body tag (before the rocket-loader script)
            sed -i.bak "/<script src=\"..\/cdn-cgi\/scripts\/7d0fa10a\/cloudflare-static\/rocket-loader.min.js\"/i\\
$SCRIPTS
" "$page"
            echo "✅ Added nav-auth scripts to $page"
        else
            echo "⏭️  Skipping $page (already has nav-auth)"
        fi
    else
        echo "❌ File not found: $page"
    fi
done

echo ""
echo "Done! Updated listing pages with navigation authentication."
