const DownloadMusicsDto = require("../dtos/downloadMusic.dto");
const http = require("../infra/http/axiosClient");

class MusicService {
  async initiateDownloadProcess(req) {
    const dto = new DownloadMusicsDto(req.body);
    dto.validate();

    try {
      /**TO-DO
       * 1 - Fazer a requisição para a api do youtube
       * 2 - Pegar os links dos vídeos, colocar numa lista e enviar para a função de download
       * 3 - Salvar os links no banco de dados
       * 4 - Elaborar regra de negócio para evitar baixar a mesma música de forma repetida
       * 5 - Colocar log de sucesso
       */
    } catch (error) {
      /**
       * 1 - Fazer um erro customizado
       * 2 - Colocar log de erro
       * 3 - Salvar status no banco de dados para saber se o download teve sucesso, e se caso a música for repetida e não obteve sucesso, mandá-la novamente para a fila de download.
       */
    }
  }

  async download(req) {
    /** TO-DO
     * 1 - Pesquisar quais bibliotecas usar para fazer o download da música
     * 2 - Enviar requisição para conversor de música realizar o download na minha máquina.
     * 3 - Colocar logs de sucesso e de erro
     * 4 - Atualizar no banco de dados se a requisição deu sucesso/erro
     */
  }
}

module.exports = MusicService;
