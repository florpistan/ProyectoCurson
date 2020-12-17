import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "../componentes/Modal";
import ModalVerMasCursos from "../componentes/ModalVerMasCursos";
import "../css/cursos.css";
import "../css/botones.css";

export default function TodosCursos() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <div className="container">
      <h1>TODOS LOS CURSOS</h1>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card-curso m-2">
            <img
              src="https://picsum.photos/377/200/"
              className="card-img-top img-fluid"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                <strong>
                  Este es un curso dedico a la manufactura de telas rupestres
                  siempre y cuando
                </strong>
              </h5>
              <span class="badge badge-primary">Primary</span>
              <p className="card-text">
                ¿Siempre has querido aprender a dibujar pero no sabes por dónde
                empezar? En este curso el ilustrador y educador Puño, te
                enseñará las claves para convertirte en dibujante desde
                cualquier nivel y a cualquier edad a través de una aproximación
              </p>
              <button
                type="button"
                className="btn btn-primary-curso float-right"
                onClick={handleOpenModal}
              >
                Ver Más
              </button>

              {openModal && (
                <Modal>
                  <ModalVerMasCursos handleCloseModal={handleCloseModal} />
                </Modal>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
