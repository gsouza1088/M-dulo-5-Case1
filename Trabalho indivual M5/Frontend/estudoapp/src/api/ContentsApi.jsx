const ContentsApi = () => {
  const url = 'http://localhost:3000'

  return {
      getContents () {
          return fetch(`${url}/conteudo`, {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json'
              }
          })
      },
      deleteContent (contentId) {
        return fetch(`${url}/conteudo/${contentId}`, {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json'
          }
       })
      },
      createContent (titulo, descricao, posicao) {
        return fetch(`${url}/conteudo`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(
            {
              titulo: titulo,
              descricao: descricao,
              posicao: posicao
            }
          )
       })
      },
      updateContent(contentId, titulo, descricao, posicao) {
        return fetch(`${url}/conteudo/${contentId}`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(
            {
              titulo: titulo,
              descricao: descricao,
              posicao: posicao
            }
          )
       })
      },
  }
}

export default ContentsApi