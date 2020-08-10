import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;
const URL_CATEGORIES_WITH_VIDEOS = `${config.URL_BACKEND}/categorias?_embed=videos`;

function getAll() {
  return fetch(URL_CATEGORIES)
    .then(async (respostaDoServer) => {
      if (respostaDoServer.ok) {
        const resposta = await respostaDoServer.json();
        return resposta;
      }
      throw new Error('Não foi possível pegar os dados');
    });
}

function getAllWithVideos() {
  return fetch(URL_CATEGORIES_WITH_VIDEOS)
    .then(async (respostaDoServer) => {
      if (respostaDoServer.ok) {
        const resposta = await respostaDoServer.json();
        return resposta;
      }
      throw new Error('Não foi possível pegar os dados');
    });
}

export default {
  getAll,
  getAllWithVideos,
};
