#!/bin/bash

# Image Optimization Script
# Converts portfolio images to WebP format with appropriate sizing

echo "🖼️  Starting image optimization..."
echo ""

cd "$(dirname "$0")/public" || exit 1

# Function to convert and optimize images
optimize_image() {
    local input=$1
    local output=$2
    local width=$3
    local quality=${4:-85}
    
    if [ ! -f "$input" ]; then
        echo "⚠️  Warning: $input not found, skipping..."
        return
    fi
    
    if [ -n "$width" ]; then
        # Resize and convert
        convert "$input" -resize "${width}x" -quality "$quality" "$output"
        echo "✓ Converted and resized: $input → $output (width: ${width}px)"
    else
        # Just convert without resizing
        convert "$input" -quality "$quality" "$output"
        echo "✓ Converted: $input → $output"
    fi
}

# Hero image - keep original size
optimize_image "dr-sameer-siddiqui.png" "dr-sameer-siddiqui.webp" "" 85

# Gallery images - resize to appropriate dimensions
optimize_image "Dr Sameer Group.png" "dr-sameer-group.webp" 800 85
optimize_image "Dr Sameer Arab Group.png" "dr-sameer-arab-group.webp" 800 85
optimize_image "Pasted image.png" "pasted-image.webp" "" 85
optimize_image "Dr Sameer Awarded.jpg" "dr-sameer-awarded.webp" "" 85
optimize_image "Dr sameer with STC.jpg" "dr-sameer-stc.webp" 1200 85

# Magazine image - resize
optimize_image "Dr Sameer magzine.jpg" "dr-sameer-magazine.webp" 1000 85

echo ""
echo "📊 File size comparison:"
echo ""

# Show original sizes
echo "Original images:"
du -h "dr-sameer-siddiqui.png" "Dr Sameer Group.png" "Dr Sameer Arab Group.png" "Pasted image.png" "Dr Sameer Awarded.jpg" "Dr sameer with STC.jpg" "Dr Sameer magzine.jpg" 2>/dev/null | awk '{print "  " $2 ": " $1}'

echo ""
echo "Optimized WebP images:"
du -h *.webp 2>/dev/null | awk '{print "  " $2 ": " $1}'

echo ""
echo "✅ Image optimization complete!"
echo ""
echo "Next steps:"
echo "1. Update component code to use .webp files"
echo "2. Test images load correctly"
echo "3. Run Lighthouse audit to verify improvements"
