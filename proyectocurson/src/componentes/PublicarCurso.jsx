import React, { useState } from "react";
import PasoAPaso from "./PasoAPaso";
import Modal from "../componentes/Modal";
import NuevoCursoModal from "./NuevoCursoModal";
import LogIn from "../componentes/LogIn";
import Button from 'react-bootstrap/Button';



export default function PublicarCurso(props) {
  const [openModal, setOpenModal] = useState(false);

  const [visibilidad, setVisibilidad] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

       
       const [openLoginModal, setOpenLoginModal] = useState(false)
      //  const [openRegisterModal, setOpenRegisterModal] = useState(false)

      const modalLoginOpen = () =>{
        setOpenLoginModal(true)
    }

    const modalLoginClose = () =>{
        setOpenLoginModal(false)
    }

    // const modalRegisterOpen = () =>{
    //   setOpenLoginModal(false)
    //   setOpenRegisterModal(true)
    //   }
  
    //   const modalRegisterClose = () =>{
    //   setOpenRegisterModal(false)
    //   }

      

  return (
    <div className="container my-5" id="mainPublicarContainer">
      <hr className="bg-gris container mr-0 p-0" />
      <div className="container" id="mainPublicarContainer">
      <div className="row text-center mb-4">
        <div className="col">
          <h2>¿Tenés un curso para ofrecer?</h2>
        </div>
      </div>
      <div className="row text-center mb-3">
        <div className="col">
          <p>
            En CursOn ofrecemos la posibilidad de crear un espacio educativo, en
            donde podras brindar tus propios cursos sobre esos temas que tanto
            te apasionan! <br />
            En este sentido, CursOn actua como nexo entre los mentores y una
            comunidad de potenciales alumnos.
            <br />
            ¿Interesado? Estos son los pasos a seguir para publicar tu curso:{" "}
          </p>
          <br />
          <h6>Toca las imágenes para leer los pasos </h6>
        </div>
      </div>

      <PasoAPaso />

      <div className="row text-center mb-4 ">
        <div className="col ">

        {visibilidad ? (
                        <Button className="btn cursonBtn" onClick={handleOpenModal}>Publicar Curso</Button>
                        ) : (
                        <Button className="btn btn-danger ml-2" onClick={modalLoginOpen}>Log in</Button>       
                    )}
          {/* <button
            type="button"
            className="btn cursonBtn"
            onClick={handleOpenModal}
          >
            Publicar Curso
          </button> */}

          {openModal && (
            <Modal>
            <NuevoCursoModal handleCloseModal={handleCloseModal} />            
            </Modal>
          )}

          {openLoginModal &&
                    <Modal>
                        <LogIn modalLoginClose={modalLoginClose} />
                    </Modal>}

          
        </div>
      </div>
    </div>
    </div>
  );
}
