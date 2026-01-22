class DownloadMusicsDto {
  constructor({ artistName }) {
    this.artistName = artistName;
  }

  validate() {
    if (!this.artistName) {
      throw new Error("O nome do artista é obrigatório.");
    }
  }
}

module.exports = DownloadMusicsDto;
