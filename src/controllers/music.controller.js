const MusicService = require("../services/music.service");

class MusicController {
  async downloadMusics(req, res) {
    await MusicService.initiateDownloadProcess(req);
    return res.status(200);
  }
}

module.exports = MusicController;
