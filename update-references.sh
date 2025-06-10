#!/bin/bash

# Update CSS and JS file references
find . -type f -name "*.html" -exec sed -i 's/paroti\.css/ukombozini.css/g' {} +
find . -type f -name "*.html" -exec sed -i 's/paroti\.js/ukombozini.js/g' {} +

# Update title references
find . -type f -name "*.html" -exec sed -i 's/|| Paroti ||/|| Ukombozini Nextgen Women Limited ||/g' {} +

# Update alt text
find . -type f -name "*.html" -exec sed -i 's/alt="Paroti"/alt="Ukombozini Nextgen Women Limited"/g' {} +

# Update text content
find . -type f -name "*.html" -exec sed -i 's/Paroti is the largest/Ukombozini Nextgen Women Limited is the largest/g' {} +
find . -type f -name "*.html" -exec sed -i 's/Paroti Non-Profit/Ukombozini Nextgen Women Limited Non-Profit/g' {} +
find . -type f -name "*.html" -exec sed -i 's/CEO of Paroti/CEO of Ukombozini Nextgen Women Limited/g' {} +

# Update class names and variables (keeping the original class names to maintain functionality)
# We'll only update the visible text and references, not the functional class names 