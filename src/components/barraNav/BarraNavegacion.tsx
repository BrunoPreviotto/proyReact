import { useEffect, useState } from "react";
import "./BarraNavegacion.css";
import { Link, useNavigate } from 'react-router-dom';

import React from 'react';
import { Dropdown } from 'react-bootstrap';




export const BarraNavegacion = () => {

    const navigate = useNavigate();

    useEffect(() => {


    }, []);

    const handleNavigate = (o: any) => {

        navigate(`/lista/${o.target.id}`);

    };



    return <div className="contenedor-nav container-fluid p-3">




        <ul className="nav nav-pills">
            <li className="nav-item">
                <Link className="link_uno nav-link active" to="/" aria-current="page">Inicio</Link>

            </li>

            <Dropdown>
                <Dropdown.Toggle className="dropDownBarra ms-2 border-2" id="dropdown-basic">
                    Administrar
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item id="alumnos" className="link-dos" onClick={handleNavigate}>Alumnos</Dropdown.Item>
                    <Dropdown.Item id="familiares" className="link-dos" onClick={handleNavigate}>Familiares</Dropdown.Item>
                    <Dropdown.Item id="cursos" className="link-dos" onClick={handleNavigate}>Cursos</Dropdown.Item>
                    <Dropdown.Item className="link-dos" href="#/action-3">Colaboradores</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>






            <li className="nav-item">
                <li><Link className="link-dos nav-link" to="/">Fundación</Link></li>

            </li>
            <li className="nav-item">

                <a className="link-dos nav-link disabled"><span className="material-symbols-outlined">favorite</span></a>
            </li>
        </ul>

    </div>;
}