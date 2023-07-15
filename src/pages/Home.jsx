import './Home.css';
import { NavLink } from 'react-router-dom';


import maquillaje7 from '../img/maquillaje/maquillaje7.jpg';
import accesorios7 from '../img/accesorios/accesorios7.jpg';
import ropa7 from '../img/ropa/ropa7.jpg';
import anny from '../img/anny.jpg';
import birza from '../img/birza.jpg';
import thom from '../img/thom.jpg';



const Home = () =>(
    <div className='Home'>
        <h1 className="text-center titulo">Bienvenidos a Makeup Dreams~</h1>
        <div className='container d-flex justify-content-center'>           
            <NavLink to="/Maquillaje" className='links'>
                <div className="card card-tamanio">
                    <img src={maquillaje7} className="card-img-top" alt=""/>
                    <div className="card-body">
                        <h5 className="card-title subtitulo">Makeup</h5>
                        <p className="card-text">El maquillaje es una técnica de belleza que implica la aplicación de productos de maquillaje para mejorar la apariencia de la piel y realzar las características faciales, y se utiliza en una amplia variedad de situaciones y propósitos, Hay maquillajes de todos los tipos anímate a experimentar.</p>
                        <a href="#" className="btn btn-dark">Go Makeup</a>
                    </div>
                </div>
            </NavLink>
            <NavLink to="/Ropa" className='links'>
                <div className="card card-tamanio">
                    <img src={ropa7} className="card-img-top" alt=""/>
                    <div className="card-body">
                        <h5 className="card-title subtitulo">Ropa</h5>
                        <p className="card-text">La ropa de vestidos para mujer es una prenda de vestir versátil que puede ser utilizada en una amplia variedad de ocasiones, y puede tener diferentes diseños, estilos y materiales para adaptarse a diferentes gustos y preferencias. Anímate a usar y modelar estas prendas.</p>
                        <a href="#" className="btn btn-dark">Go Ropa</a>
                    </div>
                </div>
            </NavLink>
            <NavLink to="/Accesorios" className='links'>
                <div className="card card-tamanio">
                    <img src={accesorios7} className="card-img-top" alt=""/>
                    <div className="card-body">
                        <h5 className="card-title subtitulo">Accesorios</h5>
                        <p className="card-text"> Los accesorios para mujer son elementos complementarios que se utilizan para agregar estilo y personalidad a cualquier outfit, y incluyen joyería, bolsos, carteras, cinturones, bufandas, pañuelos, sombreros, gorros y gafas de sol, entre otros.</p>
                        <a href="#" className="btn btn-dark">Go Accesorios</a>
                    </div>
                </div>
            </NavLink> 
        </div>
        <div className='container d-flex justify-content-center'>
            <div className="card card-tamanio">
                <img src={anny} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title subtitulo">Anny Monroe</h5>
                    <p className="card-text">Maquilladora certificada</p>
                    <p className="card-text">Hobby: dormir todo el día</p>
                    <a href="https://www.instagram.com/anny.monroe/" target='blank' className="btn btn-dark">Go Instagram</a>
                </div>
            </div>
            <div className="card card-tamanio">
                <img src={thom} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title subtitulo">Thom Monroe</h5>
                    <p className="card-text">Gatito domestico </p>
                    <p className="card-text">Hobby: dormir con anny todo el día</p>
                    <a href="https://www.instagram.com/anny.makeupdreams/" target='blank' className="btn btn-dark">Go Instagram</a>
                </div>
            </div>
            <div className="card card-tamanio">
                <img src={birza} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title subtitulo">Birza Magnatti</h5>
                    <p className="card-text">Programador Full-Stack</p>
                    <p className="card-text">Hobby: Guitarra y piano</p>
                    <a href="https://www.instagram.com/birzamagnatti/" target='blank' className="btn btn-dark">Go Instagram</a>
                </div>
            <div/>
        </div>
        </div>
    </div>
);

export default Home;
