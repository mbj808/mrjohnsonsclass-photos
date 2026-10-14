# Class Photos

Static photo gallery for Mr. Johnson's class, served at https://photos.mrjohnsonsclass.org via GitHub Pages.

## Adding photos (all on github.com)
1. Open this repo and click into the `photos/` folder.
2. Click **Add file → Upload files**, drag in your pictures (.jpg, .png, .webp, .gif, .avif), and click **Commit changes**.
3. Add the filenames to `photos.json`: open it, click the pencil (Edit), and list every file, newest first:
   ```json
   ["field-trip.jpg", "science-fair.png"]
   ```
   Commit. About a minute later the photos show up on the site.

On a computer with the repo cloned, `python3 make-manifest.py` rebuilds `photos.json` from the folder for you.

### Optional: automatic manifest
`extras/manifest-action.yml` is a ready-made GitHub Action that rebuilds `photos.json` whenever photos are uploaded. To turn it on, create `.github/workflows/manifest.yml` on github.com with the same contents. After that, step 3 isn't needed.

Tips: resize big phone photos (around 2000px wide) before uploading. Get permission before posting student faces. To remove a photo, delete it from `photos/` and from `photos.json`.
