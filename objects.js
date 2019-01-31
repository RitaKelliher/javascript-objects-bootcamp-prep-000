const playlist = { 
  Kelis: "Milkshake",
  Drake: "Blem",
  Mitski: "Geyser"
}
function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song
  return playlist
}