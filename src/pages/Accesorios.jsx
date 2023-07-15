import accesorios1 from '../img/accesorios/accesorios1.jpg';
import accesorios2 from '../img/accesorios/accesorios2.jpg';
import accesorios3 from '../img/accesorios/accesorios3.jpg';
import accesorios4 from '../img/accesorios/accesorios4.jpg';
import accesorios5 from '../img/accesorios/accesorios5.jpg';
import accesorios6 from '../img/accesorios/accesorios6.jpg';

const Accesorios = () =>(
    <section className='Accesorios'>
        <h3 className='titulo'>Accesorios</h3>
        <div className='container d-flex justify-content-center'>
            
            <div className="card card-tamanio">
                <img src={accesorios1} className="card-img-top" alt="birzanny"/>
                <div className="card-body">
                    <h5 className="card-title subtitulo">Pulsera</h5>
                    <p className="card-text">Las pulseras para mujer son un accesorio de joyería que se utiliza en la muñeca para agregar estilo y complementar un outfit y pueden ser de diferentes materiales y estilos.</p>
                    <a href="#" className="btn btn-dark">Seleccionar</a>
                </div>
            </div>

            <div className="card card-tamanio">
                <img src={accesorios2} className="card-img-top" alt="birzanny"/>
                <div className="card-body">
                    <h5 className="card-title subtitulo">Anillo</h5>
                    <p className="card-text">Los anillos para mujer son un accesorio de joyería que se utiliza en los dedos para agregar estilo y complementar un outfit y pueden ser de diferentes materiales y estilos.</p>
                    <a href="#" className="btn btn-dark">Seleccionar</a>
                </div>
            </div>            

            <div className="card card-tamanio">
                <img src={accesorios3} className="card-img-top" alt="birzanny"/>
                <div className="card-body">
                    <h5 className="card-title subtitulo">Reloj</h5>
                    <p className="card-text">Los relojes para mujer son un accesorio funcional y de moda que se utiliza para medir el tiempo y agregar estilo a un outfit, y pueden ser de diferentes materiales y estilos. </p>
                    <a href="#" className="btn btn-dark">Seleccionar</a>
                </div>
            </div>

            

        </div>

        <div className='container d-flex justify-content-center'>

                <div className="card card-tamanio">
                    <img src={accesorios4} className="card-img-top" alt="birzanny"/>
                    <div className="card-body">
                        <h5 className="card-title subtitulo">Collar de corazón</h5>
                        <p className="card-text">El collar de corazón para mujer es un accesorio de joyería que presenta un colgante en forma de corazón en el centro del collar, y se utiliza como símbolo de amor, afecto y romanticismo, y puede ser de diferentes materiales y estilos.</p>
                        <a href="#" className="btn btn-dark">Seleccionar</a>
                    </div>
                </div>

                <div className="card card-tamanio">
                    <img src={accesorios5} className="card-img-top" alt="birzanny"/>
                    <div className="card-body">
                        <h5 className="card-title subtitulo">Aretes</h5>
                        <p className="card-text">Los aretes para mujer son un accesorio de joyería que se utiliza en las orejas para agregar estilo y complementar un outfit, y pueden ser de diferentes materiales y estilos, son hermosos preciosos, bellos y magnificos los necesitas.</p>
                        <a href="#" className="btn btn-dark">Seleccionar</a>
                    </div>
                </div>

                <div className="card card-tamanio">
                    <img src={accesorios6} className="card-img-top" alt="birzanny"/>
                    <div className="card-body">
                        <h5 className="card-title subtitulo">Collar de perlas</h5>
                        <p className="card-text">El collar de perlas para mujer es un accesorio de joyería que presenta perlas naturales o cultivadas en el centro del collar, y se utiliza para complementar un look sofisticado y elegante, y puede ser de diferentes tamaños, formas y colores. Anímate!!</p>
                        <a href="#" className="btn btn-dark">Seleccionar</a>
                    </div>
                </div> 

        </div>
    </section>
)

export default Accesorios;