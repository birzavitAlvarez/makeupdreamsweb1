
import ropa1 from '../img/ropa/ropa1.jpg'
import ropa2 from '../img/ropa/ropa2.jpg'
import ropa3 from '../img/ropa/ropa3.jpg'
import ropa4 from '../img/ropa/ropa4.jpg'
import ropa5 from '../img/ropa/ropa5.jpg'
import ropa6 from '../img/ropa/ropa6.jpg'

const Ropa = () =>(
    <section className='Ropa'>
        
        <h3 className='titulo'>Ropas y estilos</h3>
        <div className='container d-flex justify-content-center'>
            
            <div className="card card-tamanio">
                <img src={ropa1} className="card-img-top" alt="birzanny"/>
                <div className="card-body">
                    <h5 className="card-title subtitulo">Quinceañera</h5>
                    <p className="card-text">El vestido de Quinceañera es una prenda de vestir importante en la celebración del cumpleaños número 15 de una joven en la cultura latina, y suele ser un vestido largo y elegante con detalles y adornos elaborados para destacar la elegancia y belleza de la joven.</p>
                    <a href="#" className="btn btn-dark">Seleccionar</a>
                </div>
            </div>

            <div className="card card-tamanio">
                <img src={ropa2} className="card-img-top" alt="birzanny"/>
                <div className="card-body">
                    <h5 className="card-title subtitulo">Novia</h5>
                    <p className="card-text">el vestido de novia es una prenda de vestir importante en el día de la boda, y suele ser un vestido largo y elegante con detalles y adornos elaborados para destacar la belleza y personalidad de la novia. Elegante vestido de tu momento especial Anímate a decorarlo con rosas blancas.</p>
                    <a href="#" className="btn btn-dark">Seleccionar</a>
                </div>
            </div>            

            <div className="card card-tamanio">
                <img src={ropa5} className="card-img-top" alt="birzanny"/>
                <div className="card-body">
                    <h5 className="card-title subtitulo">Picnic</h5>
                    <p className="card-text"> El vestido de picnic para mujer es un tipo de vestido cómodo, fresco y ligero que se utiliza para ocasiones informales como un picnic en el parque, y puede tener diferentes diseños y estilos para adaptarse a diferentes gustos y preferencias. Usalo en estos pastos verdes con flores. </p>
                    <a href="#" className="btn btn-dark">Seleccionar</a>
                </div>
            </div>

            

        </div>

        <div className='container d-flex justify-content-center'>

                <div className="card card-tamanio">
                    <img src={ropa4} className="card-img-top" alt="birzanny"/>
                    <div className="card-body">
                        <h5 className="card-title subtitulo">Satin</h5>
                        <p className="card-text">El vestido de satin para mujer es un tipo de vestido elegante y sofisticado que se caracteriza por estar hecho de un tipo de tela brillante y suave al tacto, y puede ser utilizado en eventos formales o informales dependiendo de cómo se combine con accesorios .</p>
                        <a href="#" className="btn btn-dark">Seleccionar</a>
                    </div>
                </div>

                <div className="card card-tamanio">
                    <img src={ropa3} className="card-img-top" alt="birzanny"/>
                    <div className="card-body">
                        <h5 className="card-title subtitulo">Playa</h5>
                        <p className="card-text"> El vestido de playa para mujer es un tipo de vestido cómodo, fresco y ligero que se utiliza en la playa o en actividades relacionadas con el agua, y puede tener diferentes diseños y estilos para adaptarse a diferentes gustos y preferencias.</p>
                        <a href="#" className="btn btn-dark">Seleccionar</a>
                    </div>
                </div>

                <div className="card card-tamanio">
                    <img src={ropa6} className="card-img-top" alt="birzanny"/>
                    <div className="card-body">
                        <h5 className="card-title subtitulo">Gala</h5>
                        <p className="card-text">El vestido de gala para mujer es un tipo de vestido elegante y sofisticado que se utiliza en eventos formales como galas, bodas o cenas de gala, y puede ser de diferentes diseños, estilos y materiales para adaptarse a diferentes gustos y preferencias.</p>
                        <a href="#" className="btn btn-dark">Seleccionar</a>
                    </div>
                </div> 

        </div>

    </section>
)

export default Ropa;