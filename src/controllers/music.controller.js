const MusicService = require("../services/music.service");

class MusicController {
  async download(req, res) {
    await MusicService.download(req);
    return res.json(200);
  }
}

module.exports = MusicController;
