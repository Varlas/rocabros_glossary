import './DefaultTemplate.css';
import merinoImage from '../../assets/merino.png';

const DefaultTemplate = () => {
  return (
    <div className="contaniner_default_content">
      <div className="heading">
        <h1>
          Las maravillosas aventuras de Merino de Rocamar y sus compañeros.
        </h1>
        <img src={merinoImage} alt="triumph merino" />
      </div>
      <div className="description">
        <h2>
          Acaricié las nubes en la cordillera Sangrante, sobreviví a la
          destrucción de Rocamar por un dragón rojo, crucé los abismos de la
          infroscuridad, navegué la Costa de los huesos y ahora junto al
          dracónido Irnithin del Clan Xaxanthas, Niels el héroe del pueblo y la
          misteriosa Wipp os narraré mis últimas aventuras.
        </h2>
      </div>
    </div>
  );
};

export default DefaultTemplate;
