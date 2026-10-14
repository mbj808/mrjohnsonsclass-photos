// Class Photos feed for photos.mrjohnsonsclass.org
// Lists the images in the "Class Photos" Drive folder as JSON.
const FOLDER_ID = '1lNBQWQ7oEgpuQ8ujhokoAE676zB_Yt3W';

function doGet() {
  const folder = DriveApp.getFolderById(FOLDER_ID);
  // Keep the folder (and so every photo in it) viewable by link, so images show on the site.
  if (folder.getSharingAccess() !== DriveApp.Access.ANYONE_WITH_LINK) {
    folder.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  }
  const out = [];
  const files = folder.getFiles();
  while (files.hasNext()) {
    const f = files.next();
    if (!/^image\//.test(f.getMimeType())) continue;
    out.push({ id: f.getId(), name: f.getName(), t: f.getDateCreated().getTime() });
  }
  out.sort((a, b) => b.t - a.t); // newest first
  return ContentService.createTextOutput(JSON.stringify(out))
    .setMimeType(ContentService.MimeType.JSON);
}
