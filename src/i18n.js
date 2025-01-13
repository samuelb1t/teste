import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "pt",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          botaoIniciar: "Start.",
          botaoOpcoes: "Options.",
          botaoSair: "Quit.",
          idioma: "Language",
          idioma1: "Portuguese",
          idioma2: "English",
          tema: "Theme",
          menu1: "About me",
          menu2: "Studies",
          menu3: "Projects",
          menu4: "Contact",
          about:
            "Hello, my name is Samuel. I'm studying Software Engineering and I'm looking for opportunities to work in this field. I have knowledge of technologies such as HTML, CSS, JavaScript, TypeScript and React. I'm always looking for new challenges and opportunities to grow as a developer and create innovative solutions that can positively impact companies and users.",
          estudos: "STUDIES",
          faculdade: "University",
          curso1: "Computer Engineering",
          curso2: "Software Engineering",
          demaisCursos: "Other courses",
          projetos: "Projects",
          projeto1: "Calculator",
          projeto1_desc: "Project developed in the AGES study group. It was developed using HTML, CSS and Javascript",
          projeto1_andamento: "In progress",
          projeto2: "Weather Project",
          projeto2_desc: "The project was developed by a group within the AGES study group. The project's proposal is to allow research on the weather in any city in the world, also enabling the creation of a login to create a history.",
          projeto2_andamento: "Finished 09/2024",
          projeto3: "Movies Project",
          projeto3_desc: "The project's proposal is to allow users to search and evaluate a film. In addition, it is also possible to register so that the evaluations are saved.",
          projeto3_andamento: "In progress",
          contato: "Contact",
          label1: "Full name",
          label2: "Email",
          label3: "Message",
          placeholder1: "Type your name",
          placeholder2: "example@gmail.com",
          placeholder3: "Type your message",
          botao: "Submit",
        },
      },
      pt: {
        translation: {
          botaoIniciar: "Iniciar.",
          botaoOpcoes: "Opções.",
          botaoSair: "Sair.",
          idioma: "Idioma",
          idioma1: "Português",
          idioma2: "Inglês",
          tema: "Tema",
          menu1: "Sobre mim",
          menu2: "Estudos",
          menu3: "Projetos",
          menu4: "Contato",
          about:
            "Olá me chamo Samuel, curso Engenharia de Software e busco oportunidades para atuar na área. Tenho conhecimentos em tecnologias como HTML, CSS, JavaScript, TypeScript e React. <br /> Estou sempre em busca de novos desafios e oportunidades para crescer como desenvolvedor e criar soluções inovadoras que possam impactar positivamente as empresas e os usuários.",
          estudos: "ESTUDOS",
          faculdade: "Faculdade",
          curso1: "Engenharia de Computação",
          curso2: "Engenharia de Software",
          demaisCursos: "Demais cursos",
          projetos: "Projetos",
          projeto1: "Calculadora",
          projeto1_desc: "Projeto desenvolvido no grupo de estudo da AGES. Foi desenvolvido utilizando HTML, CSS e Javascript.",
          projeto1_andamento: "Em andamento",
          projeto2: "Projeto Clima",
          projeto2_desc: "O projeto foi desenvolvido em grupo no grupo de estudo da AGES. A proposta do projeto é permitir pesquisar o clima em qualquer cidade do mundo, possibilitando também a criação de um login para criação de um histórico.",
          projeto2_andamento: "Finalizado em 09/2024",
          projeto3: "Projeto Filmes",
          projeto3_desc: "A proposta do projeto é permitir ao usuário pesquisar e avaliar algum filme. Além disso é possivel também se cadastrar para que as avaliações fiquem salvas",
          projeto3_andamento: "Em andamento",
          contato: "Contato",
          label1: "Nome Completo",
          label2: "Email",
          label3: "Mensagem",
          placeholder1: "Digite seu nome",
          placeholder2: "exemplo@gmail.com",
          placeholder3: "Digite sua mensagem",
          botao: "Enviar",
        },
      },
    },
  });

export default i18n;
