import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import flappy from "../assets/flappy.png"; import crud from "../assets/crud.png"
import calc from "../assets/calculadora.png"; import snake from "../assets/snake.png";
import pokemon from "../assets/poke.jpeg"; import punpun from "../assets/punpun.png"

export default props => {
    const projetos = [
        {
            titulo: "Flappy Bird",
            img: flappy,
            link: "https://aik0o1.github.io/flappy-bird/src/main/index.html",
            texto: "Simples jogo desenvolvido durante estudos de manipulação da DOM com Javascript.",
            tecnologias: ["Javascript", "HTML", "CSS"]
        },

        {
            titulo: "CRUD Punpun",
            link: "https://crud-gamma-brown.vercel.app/",
            img: crud,
            texto: "CRUD desenvolvido utilizando o framework ReactJS",
            tecnologias: ["React", "React-bootstrap"]
        },

        {
            titulo: "Calculadora",
            link: "https://aik0o1.github.io/Calculator/calculadora/build/index.html",
            img: calc,
            texto: "Calculadora desenvolvida a fim de consolidar os conhecimentos sobre ReactJS",
            tecnologias: ["React"]
        },
        {
            titulo: "PokeCatch",
            link: "https://poke-catch-omega.vercel.app/",
            img: pokemon,
            texto: " Jogo da memória baseado em Pokemón desenvolvido durante a disciplina de Estrutura de Dados. ",
            tecnologias: ["React", "HTML", "CSS"],
        },

        {
            titulo: "SnakeColor",
            link: "https://github.com/Aik0o1/SnakeColor",
            img: snake,
            texto: " Jogo desenvolvido a fim de consolidar o aprendizado de filas.",
            tecnologias: ["Python", "Pygame"]
        }

    ]
    //controla o destaque dos botoes de navegação
    const [destacadaSobre, setDestaqueSobre] = useState(true)
    const [destacadaProjetos, setDestaqueProjetos] = useState(false)
    const destaque = () => {
        setDestaqueSobre(!destacadaSobre)
        setDestaqueProjetos(!destacadaProjetos)
    }

    useEffect(() => {
        if (window.scrollY >= window.innerHeight*0.8){
            setDestaqueProjetos(!destacadaProjetos)
            console.log("fsdfsfsd")
        }
    },[window.scrollY])

    return (
        <div className="portifolio">
            <header>
                <div className="titulo">
                    <h1>Victor Sena <img className="punpun" src={punpun} alt="" /> </h1>
                    <h5>Front-end Developer</h5>

                    <nav>
                        <ul className="lista-nav">
                            <li><a href="#about" className={destacadaSobre ? "destacada" : ''} onClick={() => {if (destacadaProjetos === true){destaque()} }}>SOBRE</a><br /></li>
                            <li><a href="#projects" className={destacadaProjetos ? "destacada" : ''} onClick={() => {if (destacadaSobre === true){destaque()} }}>PROJETOS</a></li>
                        </ul>
                    </nav>
                </div>

                <ul className="social">
                    <li><a href="https://github.com/Aik0o1" className="fa fa-github" target="blank" ></a></li>
                    <li><a href="https://www.linkedin.com/in/victor-jos%C3%A9-pires-sena-30b0aa25a/" className="fa fa-linkedin" target="blank"></a></li>
                    <li><a href="mailto:anesrotciv@gmail.com" className="fa fa-envelope-o"></a></li>
                </ul>
            </header>

            <main>
                
                <section className="sobre" id="about">
                <h5 className="reponsive-about">Sobre</h5>

                    <p>
                    <h4>Ei! É bom te ver. <img src="https://emojis.slackmojis.com/emojis/images/1531849430/4246/blob-sunglasses.gif?1531849430" width="30"/></h4>
                        Sou Victor, graduando em ciência da computação e atualmente estudando para me tornar um desenvolvedor Fullstack.
                        Tenho conhecimentos intermediários em desenvolvimento front-end com foco em ReactJS, e estou constantemente
                        me atualizando sobre as novas tecnologias e ferramentas disponíveis para aprimorar minhas habilidades.
                    </p>
                </section>

                <section className="projetos" id="projects">
                    <h5 className="reponsive-projects">Projetos</h5>
                    {
                        projetos.map(projeto => {
                            return (
                                <a href={projeto.link}>
                                    <Card className="projeto">
                                        <Card.Img variant="top" src={projeto.img} />
                                        <Card.Body>
                                            <Card.Title>{projeto.titulo}</Card.Title>
                                            <Card.Text>
                                                {projeto.texto}
                                            </Card.Text>
                                            <div className="tecnologias">
                                                {
                                                    projeto.tecnologias.map(tecnologia => {
                                                        return (
                                                            <span>{tecnologia}</span>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </a>
                            )
                        })
                    }

                </section>
            </main>
        </div>

    )
}