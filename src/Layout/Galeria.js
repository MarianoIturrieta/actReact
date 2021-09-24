import "../components/styles/Galeria.css"
import Cap1 from "../img/galeria/cap1.jpg"

const Galeria = (props) =>{
    return(
        <div>
            <br></br>
            <h2>Galería de Imágenes</h2>

            <h3>Nuestras Instalaciones</h3>
            <br></br>

            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={Cap1} className="d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src="../../img/galeria/cap2.jpg" className="d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src="../../img/galeria/cap3.jpg" className="d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src="../../img/galeria/cap4.jpg" className="d-block w-100" alt="..."></img>
                </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

            <h3>Actividades Deportivas</h3>
            <br></br>

            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="..." class="d-block w-100" alt="..."></img>
                  </div>
                  <div className="carousel-item">
                    <img src="../../img/galeria/cap1.jpg" className="d-block w-100" alt="..."></img>
                  </div>
                  <div className="carousel-item">
                    <img src="..." className="d-block w-100" alt="..."></img>
                  </div>
                </div>
            </div>

              <h3>Actividades Musicales</h3>
              <br></br>

              <div id="carouselExampleControls3" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">          
                    <div className="carousel-item active">
                      <img src="img/galería/music1.jpg" className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                      <img src="img/galería/music2.jpg" className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                      <img src="img/galería/music3.jpg" className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                      <img src="img/galería/music4.jpg" className="d-block w-100" alt="..."></img>
                    </div>
                </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="prev">          
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>

                 <br></br>
               </div>
            </div>
    )
};

export default Galeria;