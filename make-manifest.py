#!/usr/bin/env python3
"""Regenerate photos.json from the photos/ folder. Run: python3 make-manifest.py"""
import os, json
ext = ('.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif')
files = sorted((f for f in os.listdir('photos') if f.lower().endswith(ext)), reverse=True)
with open('photos.json', 'w') as fh:
    json.dump(files, fh, indent=1); fh.write('\n')
print(f"photos.json: {len(files)} photo(s)")
