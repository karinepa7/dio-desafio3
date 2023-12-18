class hero {
    constructor(name, age, type) {
      this.name = name;
      this.age = age;
      this.type = type;
    }
  
    atack() {
      let atack = ''
  
      switch (this.type) {
        case 'mago':
          atack = 'magia'
          break
        case 'guerreiro':
          atack = 'espada'
          break
        case 'monge':
          atack = 'artes marciais'
          break
        case 'ninja':
          atack = 'shuriken'
          break
        default:
          atack = 'não possui ataque definido'
      }
  
      console.log(`O(a) ${this.type} chamado(a) ${this.name} atacou usando ${atack}`)
    }
  }
  
  //teste
  let myHero = new hero("Karine", 35, "guerreiro")
  myHero.atack()
  