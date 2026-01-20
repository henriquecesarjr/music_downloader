const http = require("../infra/http/axiosClient");

class MusicService {
  async download(req) {
    /** TO-DO
     * 1 - Pesquisar quais bibliotecas usar para fazer o download da música
     * 2 - Pensar numa forma de automatizar a ação de pegar o link também. Tipo pode ser até criar outro endpoint para inserir o nome do artista e pegar as músicas e pegar esse lote de link e enviar uma requisição para a rota de download.
     */
  }
}

module.exports = MusicService;
