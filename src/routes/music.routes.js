const express = require("express");
const MusicController = require("../controllers/MusicController");

const router = express.Router();

router.post("/musics", MusicController.downloadMusics);

module.exports = router;
