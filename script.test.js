const {getTemp} = require("./script.js")

describe('Fazendo teste na api openwheater', () => {
  describe('Teste quando a cidade é Avaré', () => {
    it('Quando o usuário digitar o nome da cidade deve retornar ela mesma ', async () => {
      const cidade = await getTemp("Avaré")
      expect(cidade).toBe("Avaré")
    })
    it('Caso a entrada seja algo vazio', async () => {
      const cidade = await getTemp('')
      expect(cidade).toBe(null)
    })
  })
})
