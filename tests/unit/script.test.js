const {getTemp} = require("../../src/script.js")

describe('Fazendo teste na api openwheater', () => {
  describe('Teste quando a cidade é Avaré', () => {
    it('Quando o usuário digitar o nome da cidade deve retornar ela mesma ', async () => {
      const dados = await getTemp("Avaré")
      expect(dados).toHaveProperty("name", "Avaré")
    })
    it('Caso a entrada seja algo vazio, retornar null', async () => {
      const dados = await getTemp('')
      expect(dados).toBe(null)
    })
    it('Temperatura válida', async () => {
      const dados = await getTemp('Diadema')
      let temp = dados.main.temp - 273.15
      expect(temp).toBeLessThan(45)
    })
    it('O objeto retornado tem as informaçẽos necessarias', async () => {
      const dados = await getTemp('São Paulo')
      expect(dados).toHaveProperty("name")
      expect(dados).toHaveProperty("main.temp")
      expect(dados).toHaveProperty("sys.country")
    })
  })
})
