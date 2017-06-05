var playlist = {
    'artist':'song',
    'artist2':'song2'
}

function updatePlaylist(playlist, artistName, songTitle) {
    playlist[artistName] = songTitle
    return playlist
}

function removeFromPlaylist(playlist, artistName) {
    delete playlist[artistName]
    return playlist
}