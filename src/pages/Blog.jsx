import anny from '../img/anny.jpg'
import instagram from '../img/instagram.png'

const Blog = () =>(
    <section className='Blog'>
        <h3 className='titulo'>Blog Personal</h3>
        <div className='container d-flex justify-content-center'>
            <div className="card card-blog">
                <img src={anny} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title subtitulo">Blog de Anny</h5>
                    <p className="card-text">Maquilladora certificada y destacada por sus grandes trabajos en la industria del maquillaje</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <p>¿Estás buscando una maquilladora profesional para un evento especial?</p>
                        <p>Si es así, debes conocer a nuestra experta en maquillaje, quien tiene una amplia experiencia en diferentes áreas.</p>
                        </li>
                    <li className="list-group-item">Para las quinceañeras, nuestra maquilladora profesional sabe cómo crear un look juvenil y fresco que se adapte a la personalidad de la joven. Además, su experiencia en maquillaje artístico le permite crear looks únicos y creativos para cualquier tipo de evento.</li>
                    <li className="list-group-item">Si tienes piel madura, nuestra maquilladora puede ayudarte a resaltar tus rasgos y disimular las imperfecciones, dejando tu piel radiante y fresca.</li>
                    <li className="list-group-item">Nuestra maquilladora profesional es una experta en diferentes áreas, desde maquillaje editorial hasta piel madura. Además, su experiencia en diferentes tipos de eventos y su habilidad para adaptarse a las necesidades de cada cliente la convierten en una opción ideal para cualquier ocasión especial. ¡No dudes en contactarla!</li>
                </ul>
                <div className="card-body">
                    <p>Anny Monroe Instagram</p>
                    <a href="https://www.instagram.com/anny.monroe/" target='blank'><img src={instagram}/></a>
                    <p>Makeup Dreams Instagram</p>
                    <a href="https://www.instagram.com/anny.makeupdreams/" target='blank'><img src={instagram}/></a>
                </div>
            </div>
        </div>
    </section>
)

export default Blog;
