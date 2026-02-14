#!/bin/bash
# Batch H2 Optimization Script
# This script helps track H2 optimization progress

echo "=== H2 Tag Optimization Progress ==="
echo ""

# Count total section files with H2 tags
TOTAL=$(find app/pages -name "*section.tsx" -type f -exec grep -l "<h2\|motion\.h2" {} \; | wc -l)
echo "Total section files with H2 tags: $TOTAL"

# Count optimized H2 tags (containing "Hire" keyword)
OPTIMIZED=$(find app/pages -name "*section.tsx" -type f -exec grep -l "<h2\|motion\.h2" {} \; | xargs grep -l "Hire.*Expert\|Hire.*Developer" | wc -l)
echo "Optimized H2 tags (with 'Hire' keyword): $OPTIMIZED"

# Calculate percentage
if [ $TOTAL -gt 0 ]; then
    PERCENTAGE=$(echo "scale=1; $OPTIMIZED * 100 / $TOTAL" | bc)
    echo "Progress: $PERCENTAGE%"
else
    echo "Progress: 0%"
fi

echo ""
echo "=== Remaining Pages to Optimize ==="
find app/pages -name "*section.tsx" -type f -exec grep -l "<h2\|motion\.h2" {} \; | while read file; do
    if ! grep -q "Hire.*Expert\|Hire.*Developer" "$file"; then
        echo "$file"
    fi
done | head -20
