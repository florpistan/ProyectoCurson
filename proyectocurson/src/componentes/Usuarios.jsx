import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { ImBlocked } from 'react-icons/im';
import { FaEdit } from 'react-icons/fa';
import '../css/iconsTable.css'

export default function Usuarios() {
    return (
        <div className="container mt-2 mb-2">
            <h3>Usuarios</h3>
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nombre de Usuario</th>
                            <th scope="col">Rol</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">#2131</th>
                            <td>belenneme</td>
                            <td>admin</td>
                            <td>Activo</td>
                            <td><MdDeleteForever className="icons-table icons-table__delete" /> <ImBlocked className="icons-table icons-table__block" /> <FaEdit className="icons-table icons-table__edit" /></td>                        </tr>
                        <tr>
                            <th scope="row">#1412</th>
                            <td>florpistan</td>
                            <td>estudiante</td>
                            <td>Activo</td>
                            <td><MdDeleteForever className="icons-table icons-table__delete" /> <ImBlocked className="icons-table icons-table__block" /> <FaEdit className="icons-table icons-table__edit" /></td>                        </tr>
                        <tr>
                            <th scope="row">#6543</th>
                            <td>MaryBosch</td>
                            <td>estudiante</td>
                            <td>Activo</td>
                            <td><MdDeleteForever className="icons-table icons-table__delete" /> <ImBlocked className="icons-table icons-table__block" /> <FaEdit className="icons-table icons-table__edit" /></td>                        </tr>
                        <tr>
                            <th scope="row">#2468</th>
                            <td>gabyarg</td>
                            <td>admin</td>
                            <td>Activo</td>
                            <td><MdDeleteForever className="icons-table icons-table__delete" /> <ImBlocked className="icons-table icons-table__block" /> <FaEdit className="icons-table icons-table__edit" /></td>
                        </tr>
                        <tr>
                            <th scope="row">#1369</th>
                            <td>rodrizio</td>
                            <td>admin</td>
                            <td>Activo</td>
                            <td><MdDeleteForever className="icons-table icons-table__delete" /> <ImBlocked className="icons-table icons-table__block" /> <FaEdit className="icons-table icons-table__edit" /></td>                        
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
