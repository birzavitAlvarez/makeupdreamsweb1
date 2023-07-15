import './Home.css'
import anny from '../img/anny.jpg';
import instagram from '../img/instagram.png'

// eslint-disable-next-line react/prop-types
const Users = ({name}) =>(
    <section className='Users'>
        <h3 className='titulo'>Usuario: {name}</h3>
        <div className='container d-flex justify-content-center'>
        <div className="card card-tamanio-user">
                <img src={anny} className="card-img-top" alt="birzanny"/>
                <div className="card-body">
                    <h5 className="card-title subtitulo">{name}</h5>
                    <p className="card-text">Anny Monroe es una talentosa profesional que no solo se dedica a asesorar a sus clientes en cuestiones de moda, sino que también diseña su propia ropa. Su creatividad y habilidad para combinar diferentes estilos y tendencias la han llevado a desarrollar una línea de ropa y accesorios que reflejan su personalidad única y sofisticada.</p>
                    <p className="card-text">Además de su talento como diseñadora, Anny Monroe también modela sus propios accesorios, mostrando su capacidad para crear looks completos y coherentes. Su versatilidad y experiencia en la industria de la moda la convierten en una experta en el campo, capaz de entender las necesidades y preferencias de sus clientes y ofrecer soluciones creativas.</p>
                    <p className="card-text">Anny Monroe es conocida por su atención al detalle y su capacidad para adaptarse a diferentes estilos y personalidades. Su pasión por la moda y su dedicación a su trabajo la han llevado a ser una figura destacada en la industria, y sus diseños y creaciones han sido reconocidos y admirados por muchos.</p>
                    <a href="https://www.instagram.com/anny.monroe/" target='blank'><img src={instagram}/></a>
                </div>
            </div>
        </div>
        
    </section>
)

export default Users;