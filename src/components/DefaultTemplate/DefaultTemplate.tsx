import './DefaultTemplate.css';
import merinoImage from '../../assets/merino.png';

const DefaultTemplate = () => {
  return (
    <div className="container_default_content">
      <h1 className="title">
        Las maravillosas aventuras de Merino de Rocamar y sus compañeros
      </h1>

      <div className="hero">
        <h3 className="description">
          Acaricié las nubes en la cordillera Sangrante, sobreviví a la
          destrucción de Rocamar por un dragón rojo, crucé los abismos de la
          infroscuridad, navegué la Costa de los Huesos y ahora, junto al
          dracónido Irnithin del Clan Xaxanthas, Niels el héroe del pueblo y la
          misteriosa Wipp, os narraré mis últimas aventuras.
        </h3>

        <img src={merinoImage} alt="Triunfo de Merino" />
      </div>

      <section className="current-situation">
        <h3>Situación actual</h3>
        <p>
          Nuestros héroes se encuentran en la <strong>Isla de Tormentas</strong>
          , en busca de una antigua reliquia robada hace años por uno de los
          lugartenientes de <strong>Ashardalon, la Calamidad Roja</strong>.
          Hasta el momento, han descubierto lo siguiente:
        </p>

        <ul>
          <li>
            La isla está habitada por <strong>dracónidos metálicos</strong> y se
            rige por un sistema de castas. El{' '}
            <strong>Clan Xaxanthas (plateados)</strong> y el{' '}
            <strong>Clan Marzas (bronce)</strong> son los clanes principales y
            viven intramuros, mientras que el{' '}
            <strong>Clan Karthas (oropel)</strong> domina el territorio
            extramuros. Solo los dracónidos metálicos pueden entrar en la
            ciudad. Marzas y Karthas son más aperturistas, mientras que
            Xaxanthas es profundamente tradicional e intransigente.
          </li>
          <li>
            <strong>Wipp</strong> descubrió que la entrada a la ciudad está
            fuertemente vigilada y que la muralla rodea todo el perímetro
            urbano. Durante su exploración avistó a dos dracónidos cromáticos
            que desaparecieron entre unos arbustos, sin lograr averiguar adónde
            se dirigían.
          </li>
          <li>
            <strong>Niels</strong> aprendió que, aunque el pueblo profesa su fe
            a Njord, lo hace a través de la figura de{' '}
            <strong>El Fundador</strong>, quien llevó la reliquia a la isla. Un
            clérigo del Clan Karthas le explicó que El Fundador llegó de tierras
            lejanas portando un objeto misterioso y difundió la fe de{' '}
            <strong>Njord</strong>
            entre los dracónidos. Tras treinta años, Njord lo llamó de nuevo,
            pero antes dejó sus enseñanzas en un <strong>libro sagrado</strong>.
            El Fundador era un dracónido azul, y Niels sospecha que pudo ser el
            lugarteniente llegado del Norte, pero en la isla no prestan atención
            a lo que sucede fuera de su isla. Sus enseñanzas han sido
            reinterpretadas con el tiempo; solo los dracónidos de oro, monjes de
            clausura que habitan el antiguo hogar del Fundador —un monasterio
            inaccesible dentro de la ciudad—, conservan sus secretos.
          </li>
          <li>
            <strong>Irn</strong> descubrió la existencia de una mafia local
            conocida como <strong>Los Hijos Bastardos</strong>. Un dracónido
            azul llamado <strong>Kevlar</strong> lo salvó de un guardia corrupto
            y le ofreció ayuda en caso de necesitarla, indicándole que lo
            buscara en <strong>Bruma Salada</strong>, base de la organización.
          </li>
          <li>
            <strong>Merino</strong> averiguó que pronto se abrirán las puertas
            de la ciudad para los festejos del <strong>Día del Fundador</strong>
            , durante los cuales mercaderes de todo el mundo podrán comerciar.
            Para ello se ha habilitado una zona de caravanas. Además, descubrió
            que el líder del <strong>Clan Marzas</strong> murió recientemente y
            que su hijo, hasta ahora ausente de la isla, ha heredado el cargo.
          </li>
        </ul>
        <hr></hr>
        <h3>En la sesión anterior...</h3>
        <p>
          En su última aventura, Niels detectó presencia infernal en la posada
          de la aldea. Siguiendo la pista, el grupo descubrió a{' '}
          <strong>dos diablos de espinas</strong>, ocultos mediante un hechizo
          ilusorio con apariencia de kobolds, custodiando una habitación. Tras
          derrotarlos, Wipp investigó la estancia, pero no pudo evitar que un
          ojo de tiza detectara a Niels e Irn al entrar. Gracias al anillo de
          comunicación con animales de <strong>Merino</strong>, el grupo obtuvo
          información de un gato presente en la habitación: allí se alojaba un
          <strong>
            agente del Culto del Dragón, enviado a la isla para recuperar la
            reliquia
          </strong>
          . Sin embargo, llegaron tarde.
          <p>
            El agente había escapado mediante un hechizo de teletransportación,
            dejando cartas que revelaban la ayuda de un contacto dentro de la
            ciudad, así como un espejo usado para comunicarse con el cuartel del
            Culto. Al revisar la correspondencia, una maldición transformó a
            Wipp en una rana antropomórfica.{' '}
          </p>
          <p>
            Conscientes de que el <strong>Culto</strong> les lleva ventaja, los
            héroes necesitan entrar cuanto antes en la ciudad. Irn recordó su
            contacto con <strong>Los Hijos Bastardos</strong>, quienes podrían
            ayudarlos a acceder mediante túneles de contrabando.
          </p>
          <p>
            La sesión terminó con el grupo despidiéndose de Eric, el Palo
            Mojado, atando el espejo mágico en el ancla de la Cumcha y
            emprendiendo el camino hacia el pueblo costero de Bruma Salada.
          </p>
        </p>
      </section>
    </div>
  );
};

export default DefaultTemplate;
