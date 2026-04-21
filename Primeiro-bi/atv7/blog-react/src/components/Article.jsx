export default function Article({ tituloSecundario, autor, dataPublicacao }) {
  return (
    <article>
      <h2>{tituloSecundario}</h2>
      <time datetime="2026-02-25" className="time">
        {dataPublicacao}
      </time>
      <p className="autor">{autor}</p>
      <p className="inicio">
        No seguinte blog veremos sobre os biomas que se encontram no Planeta
        4546b, além da fauna e flora presente nesse planeta.
      </p>
      <p>
        Em Subnautica, os Recifes Rasos são o primeiro contato com o planeta
        alienígena, apresentando águas claras, cores vibrantes e formas de vida
        relativamente pacíficas. Esse bioma transmite uma sensação inicial de
        segurança, funcionando como um espaço de aprendizado e adaptação para o
        jogador.
      </p>
      <figure>
        <img
          src="https://assets.gamepur.com/wp-content/uploads/2020/09/23145531/image-18-800x600.jpg"
          alt="Recifes rasos com peixes e corais coloridos"
        />
        <figcaption className="espaco-texto">
          Peixes e corais espalhados pela supefície do oceano onde é possível
          visualizar vida como peixes e algas.
        </figcaption>
      </figure>

      <p>
        As Florestas de Kelp trazem um clima mais misterioso, com grandes algas
        balançando lentamente e criando corredores naturais. Apesar de ainda
        serem áreas acessíveis, já introduzem perigos sutis, fazendo o jogador
        ficar mais atento aos sons e movimentos ao redor
      </p>
      <figure>
        <img
          src="https://th.bing.com/th/id/R.25f9a7a48f354fcc32310e260c81ee39?rik=BXfJ%2fzTexZ58%2bA&riu=http%3a%2f%2fvignette3.wikia.nocookie.net%2fsubnautica%2fimages%2fb%2fb4%2fKelp_Forest_(20).jpg%2frevision%2flatest%3fcb%3d20150910163521&ehk=SsCEtRgD9avdM5dS0OMWSHVrJyqK9qBsz6uOvSwE5YA%3d&risl=&pid=ImgRaw&r=0"
          alt="Bioma com abundância da cor verde e muitas algas presentes"
        />
        <figcaption className="espaco-texto">
          Um região subaquática muito mais verde e com muito mais algas
          presentes, dando uma sensação de lugar seguro e que apresenta mais
          vida, mesmo não tendo nenhum animal.
        </figcaption>
      </figure>

      <p>
        Por fim, as regiões mais profundas, como os rios e lagos de lava,
        mostram um mundo extremo e alienígena, onde o ambiente parece vivo e
        agressivo. Esses biomas simbolizam o auge da exploração, combinando
        desafio, mistério e a sensação de estar em um lugar que poucos
        conseguiram alcançar.
      </p>
      <figure>
        <img
          src="https://th.bing.com/th/id/R.249d1f625969f9466e4a77ac8ba9db9d?rik=MbgF0V5alOGQ8Q&pid=ImgRaw&r=0"
          alt="Bioma tremendamente hostil e com taxa de sobrevivência de 0,0034%"
        />
        <figcaption>
          Um bioma subaquático quente e hostil com lava caindo até o fundo do
          mar. Um Dragão Marinho Leviatã se aproxima da imagem, enquanto ao
          fundo temos uma construção robusta, verde, com luzes acesas.
        </figcaption>
      </figure>
    </article>
  );
}
