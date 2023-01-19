import React from "react";
export default function ListItem(){
    return(
        <li className='list-group-item d-flex justify-content-between align-items-start'>
            <div className="ms-2 me-auto">
                <div className="fw-bold">samedi</div>
                <p>Good Chanel</p>
               
            </div>
            <div className="d-flex flex-column  align-items-center">
                    <button className="btn btn-sm btn-danger mb-3">
                        <i className="bi bi-trash"></i>
                    </button>
                    <button className="btn btn-sm btn-warning">
                        <i className="bi bi-pencil"></i>
                    </button>

                </div>

        </li>

    )
}
