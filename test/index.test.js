import pegaArquivo from "../index.js";

const arrayResult = [
  {
    FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
  }
]

describe('pegaArquivo::', () => {
  it('Deve ser uma função', () => {
    expect(typeof pegaArquivo).toBe('function');
  })
  it('Deve retornar array com resultados', async () => {
    const resultado = await pegaArquivo('C:\Users\danie\OneDrive\Documentos\Alura\nodeJs-criandosuabiblioteca\test\arquivos\texto1.md')
    expect(resultado).toEqual(arrayResult)
  })
  it('Deve retornar mensagem "não há links"', async () => {
    const resultado = await pegaArquivo('C:\Users\danie\OneDrive\Documentos\Alura\nodeJs-criandosuabiblioteca\test\arquivos\texto1.md')
    expect(resultado).toBe('Não há links')
  })
})

