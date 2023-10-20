class Heroi:
    def __init__(self, nome, idade, tipo):
        self.nome = nome
        self.idade = idade
        self.tipo = tipo

    def atacar(self):
        if self.tipo == "mago":
            ataque = "usou magia"
        elif self.tipo == "guerreiro":
            ataque = "usou espada"
        elif self.tipo == "monge":
            ataque = "usou artes marciais"
        elif self.tipo == "ninja":
            ataque = "usou shuriken"
        else:
            ataque = "usou um ataque desconhecido"

        mensagem = f"O {self.tipo} atacou usando {ataque}"
        print(mensagem)

# Exemplo de uso da classe Heroi
heroi1 = Heroi("Herói 1", 30, "mago")
heroi2 = Heroi("Herói 2", 25, "guerreiro")

heroi1.atacar()
heroi2.atacar()
