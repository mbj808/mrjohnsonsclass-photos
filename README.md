# Class Photos

Static photo gallery for Mr. Johnson's class, served at https://photos.mrjohnsonsclass.org via GitHub Pages.

## Adding photos
1. On github.com, open this repo and click into the `photos/` folder.
2. Click **Add file → Upload files**, drag in your pictures (.jpg, .png, .webp, .gif, .avif), and click **Commit changes**.
3. A GitHub Action ("Update photos.json") automatically rebuilds `photos.json`. About a minute later the photos show up on the site.

Tips: resize big phone photos (around 2000px wide) before uploading so the page loads fast. Get permission before posting student faces. To remove a photo, delete it from `photos/` and the manifest updates on its own.

If the Action ever doesn't run, edit `photos.json` by hand. It's just a list of filenames, e.g. `["field-trip.jpg", "science-fair.png"]`.
