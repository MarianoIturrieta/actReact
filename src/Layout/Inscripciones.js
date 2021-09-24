import "../components/styles/Inscripciones.css"

const Inscripciones = (props) => {
    return (
        <div>
        <div class="cont-form">
        <div class="img1"></div>
            <form class="form">
                <h3>Formulario de Inscripción Online</h3>
                <p class="p-form">Solicitamos los siguientes datos para realizar la inscripción del nuevo alumno.</p>
                <div class="formulario">
                    <ul class="form-level">
                        <li class="level-li"><level>Nombre y Apellido</level></li>
                        <li class="level-li"><level>Fecha de Nacimiento</level></li>
                        <li class="level-li"><level>Dirección</level></li>
                        <li class="level-li"><level>Documento Unico de Identidad</level></li>
                        <li class="level-li"><level>Teléfono</level></li>
                        <li class="level-li"><level>Correo Electrónico</level></li>
                       <li class="level-li"> <level>Copia de Analítico de Primaria</level></li>
                    </ul>
                    <ul class="form-input">
                        <li class="input-li"><input type="text"></input></li>
                        <li class="input-li"><input type="date"></input></li>
                        <li class="input-li"><input type="text"></input></li>
                        <li class="input-li"><input type="number"></input></li>
                        <li class="input-li"><input type="number"></input></li>
                        <li class="input-li"><input type="email"></input></li>
                        <li class="input-li"><input type="file"></input></li>
                    </ul>
                </div>
                <div class="boton-cont">
                    <button type="submit" class="boton-form">Enviar</button>
                </div>
              </form>
            <div class="img2"></div>
            </div>
        </div>
    );
}

export default Inscripciones;