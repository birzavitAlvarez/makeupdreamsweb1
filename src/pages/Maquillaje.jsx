
import maquillaje1 from '../img/maquillaje/maquillaje1.jpg'
import maquillaje2 from '../img/maquillaje/maquillaje2.jpg'
import maquillaje3 from '../img/maquillaje/maquillaje3.jpg'
import maquillaje4 from '../img/maquillaje/maquillaje4.jpg'
import maquillaje5 from '../img/maquillaje/maquillaje5.jpg'
import maquillaje6 from '../img/maquillaje/maquillaje6.jpg'
import './Home.css';

const Maquillaje = () =>(
    <section className='Maquillaje'>
        <h3 className='titulo'>Tipos de Maquillaje</h3>
        <div className='container d-flex justify-content-center'>
            
            <div className="card card-tamanio">
                <img src={maquillaje1} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title subtitulo">Piel madura</h5>
                    <p className="card-text">El maquillaje para piel madura es una técnica de maquillaje que se enfoca en las necesidades específicas de la piel madura, con el objetivo de realzar la belleza natural de la piel y minimizar los signos del envejecimiento.</p>
                    <a href="#" className="btn btn-dark">Seleccionar</a>
                </div>
            </div>

            <div className="card card-tamanio">
                <img src={maquillaje2} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title subtitulo">Social</h5>
                    <p className="card-text">El maquillaje social es una técnica de maquillaje que se enfoca en crear una apariencia natural, radiante y fresca para eventos sociales, utilizando productos de maquillaje de alta calidad y técnicas de aplicación precisas para realzar la belleza natural de la persona. </p>
                    <a href="#" className="btn btn-dark">Seleccionar</a>
                </div>
            </div>            

            <div className="card card-tamanio">
                <img src={maquillaje3} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title subtitulo">Editorial</h5>
                    <p className="card-text">El maquillaje editorial es una técnica de maquillaje creativa y artística que se utiliza en la industria de la moda y la fotografía para crear imágenes impactantes y llamativas en editoriales de revistas, pasarelas y campañas publicitarias.</p>
                    <a href="#" className="btn btn-dark">Seleccionar</a>
                </div>
            </div>

            

        </div>

        <div className='container d-flex justify-content-center'>

                <div className="card card-tamanio">
                    <img src={maquillaje4} className="card-img-top" alt="birzanny"/>
                    <div className="card-body">
                        <h5 className="card-title subtitulo">Cup Crease</h5>
                        <p className="card-text">El maquillaje Cup Crease es una técnica de maquillaje de ojos que se enfoca en realzar y definir la cuenca del ojo para crear una apariencia más profunda y definida, utilizando una combinación de sombras oscuras y claras y técnicas de aplicación para lograr una apariencia suave y natural o más dramática, según la preferencia de la persona.</p>
                        <a href="#" className="btn btn-dark">Seleccionar</a>
                    </div>
                </div>

                <div className="card card-tamanio">
                    <img src={maquillaje5} className="card-img-top" alt="birzanny"/>
                    <div className="card-body">
                        <h5 className="card-title subtitulo">Novia</h5>
                        <p className="card-text">El maquillaje de Novia es una técnica de maquillaje que se utiliza en bodas y ceremonias nupciales para crear una apariencia natural, fresca y luminosa para la novia, utilizando productos de maquillaje de alta calidad y técnicas de aplicación específicas para lograr una apariencia duradera y resistente al sudor y las lágrimas.</p>
                        <a href="#" className="btn btn-dark">Seleccionar</a>
                    </div>
                </div>

                <div className="card card-tamanio">
                    <img src={maquillaje6} className="card-img-top" alt="birzanny"/>
                    <div className="card-body">
                        <h5 className="card-title subtitulo">Smokey Eye</h5>
                        <p className="card-text">El maquillaje Smokey Eye es una técnica de maquillaje de ojos que se enfoca en crear una apariencia ahumada y dramática alrededor de los ojos, utilizando una combinación de sombras oscuras y claras y técnicas de aplicación para lograr una apariencia suave y natural o más dramática, según la preferencia de la persona.</p>
                        <a href="#" className="btn btn-dark">Seleccionar</a>
                    </div>
                </div> 

        </div>

    </section>
)

export default Maquillaje;