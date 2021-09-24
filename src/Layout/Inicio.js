import video from '../video/institucional.mp4';
import '../components/styles/Inicio.css'

const Inicio = (props) => {
    return (
        <div>
            <video className='videoTag' autoPlay loop muted>
                <source src={video}/>
            </video>

            <h2>Nuestros Objetivos</h2>

            <div className="objetivosContainer">
            <div className="container-info">
                <div className="espacio-info"></div>
                <div className="img-info-1"></div>
                <div className="objetivo-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nisi deserunt reiciendis eveniet laboriosam aliquid harum cumque totam exercitationem fuga quo, ipsa laborum fugit recusandae officiis doloribus necessitatibus, nihil ratione!</div>
                <div className="espacio-info"></div>
            </div>

            <div className="container-info">
                <div className="espacio-info"></div>
                <div className="img-info-2"></div>
                <div className="objetivo-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nisi deseruntreiciendis eveniet laboriosam aliquid harum cumque totam exercitationem fuga quo, ipsalaborum fugit recusandae officiis doloribus necessitatibus, nihil ratione!</div>
                <div className="espacio-info"></div>
            </div>
            </div>

            <h2>Tu Historia Empieza Aquí</h2>

            <div className="container-egresados-1">
                <a href="" className="egresados1">
                    <div className="info-egresado">
                        <div className="egresadosText">
                            <h4>Egresado </h4>
                            <p className="p-egresados">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum    laboriosam deleniti        delectus laudantium ipsum officia incidunt, fuga placeat aperiam eum,   ad eius, a dignissimos odit   dolores velit fugit nostrum doloremque!</p>
                        </div>
                    </div>
                </a>
                <a href="#" className="egresados2">
                    <div className="info-egresado">
                    <div className="egresadosText">
                        <h4>Egresado </h4>
                        <p className="p-egresados">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum laboriosam deleniti        delectus laudantium ipsum officia incidunt, fuga placeat aperiam eum, ad eius, a dignissimos odit   dolores velit fugit nostrum doloremque!</p>
                        </div>
                    </div>
                </a>
            </div>
            <div className="container-egresados-2">
                <a href="#" className="egresados3">
                    <div className="info-egresado">
                    <div className="egresadosText">
                        <h4>Egresado </h4>
                        <p className="p-egresados">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum laboriosam deleniti        delectus laudantium ipsum officia incidunt, fuga placeat aperiam eum, ad eius, a dignissimos odit   dolores velit fugit nostrum doloremque!</p>
                        </div>
                    </div>
                </a>
                <a href="#" className="egresados4">
                    <div className="info-egresado">
                    <div className="egresadosText">
                        <h4>Egresado </h4>
                        <p className="p-egresados">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum laboriosam deleniti        delectus laudantium ipsum officia incidunt, fuga placeat aperiam eum, ad eius, a dignissimos odit   dolores velit fugit nostrum doloremque!</p>
                        </div>
                        </div>
                </a>
                <a href="#" className="egresados5">
                    <div className="info-egresado">
                    <div className="egresadosText">
                        <h4>Egresado </h4>
                        <p className="p-egresados">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum laboriosam deleniti        delectus laudantium ipsum officia incidunt, fuga placeat aperiam eum, ad eius, a dignissimos odit dolores velit fugit nostrum doloremque!</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Inicio;