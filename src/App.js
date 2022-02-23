import "./App.css";
import "./AppMobile.css";
import React from "react";
import ContactForm from "./components/Contato";

function App() {
  return (
    <div className="App">
      <body>
        <section className="container-1 ">
          <div className="shape" />
          <div className="main">
            <h1>Fernando Martinho</h1>
            <p>
              Desenvolvedor localizado em Formiga(MG) sempre em busca de novos
              desafios.
            </p>
            <div className="box">
              <a href="https://github.com/Martinho672" target="blank">
                <div className="fab fa-github icones"> </div>
              </a>
              <a
                href="https://www.linkedin.com/in/fernando-martinho-nascimento-85b76a184/"
                target="blank"
              >
                <div className="fab fa-linkedin icones"></div>
              </a>
              <a
                href="https://www.instagram.com/fernandobondurant/"
                target="blank"
              >
                <div className="fab fa-instagram icones"></div>
              </a>
            </div>
          </div>
        </section>

        <section className="container-2">
          <div>
            <div className="outdoor "></div>
            <div className="content ">
              <div className="about">
                <div>
                  <h1>Quem sou eu?</h1>
                </div>
                <p>
                  Desenvolvedor Fullstack, buscando sempre o aprendizado de
                  tecnologias atuais, tenho bastante interesse na área de
                  desenvolvimento móvel. Atualmente estou cursando Ciência da
                  Computação no IFMG Campus Formiga .
                </p>
              </div>
              <div className="about">
                <div className="infos">
                  <ul>
                    <li>
                      Idade: <spam>{new Date().getFullYear() - 1998}</spam>
                    </li>
                    <li>
                      Email: <spam>martinho672@gmail.com</spam>
                    </li>
                    <li>
                      Formação:{" "}
                      <spam>
                        Ciência da Computação - Instituto Federal de Minas
                        Gerais - Em andamento
                      </spam>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="habilidades">
            <h1>Habilidades</h1>
            <div className="box">
              <div className="fab fa-html5 icones">
                <p>HTML</p>
              </div>
              <div className="fab fa-css3 icones">
                <p>CSS</p>
              </div>
              <div className="fab fa-js icones">
                <p>Javascript</p>
              </div>
              <div className="fab fa-git icones">
                <p>Git</p>
              </div>
              <div className="fab fa-react icones">
                <p>React JS</p>
              </div>
              <div className="fas fa-database icones">
                <p>Firebase</p>
              </div>
              <div className="fas fa-mobile-alt icones" alt="Flutter">
                <p>Flutter</p>
              </div>
            </div>
          </div>
        </section>

        <section className="container-3">
          <div className="projects">
            <h1>Projetos</h1>
            <div className="grid-template-columns" id="conteudo">
              <div className="project-container ">
                <a>
                  <div className="item cortai"></div>
                </a>
                <div>
                  <h1 className="padding">Cortaí</h1>
                  <div className="tags padding">
                    <div className="tag">Flutter</div>
                    <div className="tag">AWS</div>
                  </div>
                  <p className="project-text padding">
                    Aplicativo desenvolvido para satisfazer a demanda de
                    agendamento de cortes de cabelo durante a pândemia, no qual
                    os clientes podem realizar seus agendamentos diretamente
                    pelo aplicativo, escolhendo data/hora e forma de pagamento,
                    além disso o prestador do serviço conta com um painel
                    administrativo dentro do próprio aplicativo para fazer o
                    gerenciamento dos agendamentos
                  </p>
                </div>
              </div>

              <div className="project-container  ">
                <a>
                  <div className="item mais-ifmg"></div>
                </a>
                <div>
                  <h1 className="padding">+IFMG</h1>
                  <div className="tags padding">
                    <div className="tag">Flutter</div>
                    <div className="tag">Firebase</div>
                  </div>
                  <p className="project-text padding">
                  Desenvolvimento de aplicação móvel para a exibição de noticias da
                  instituição e acesso a programa de cursos online
                  </p>
                </div>
              </div>

              <div className="project-container ">
                <a>
                  <div className="item autohouse"></div>
                </a>
                <div>
                  <h1 className="padding">AutoHouse</h1>
                  <div className="tags padding">
                    <div className="tag">Flutter</div>
                    <div className="tag">Firebase</div>
                    <div className="tag">Arduino/ESP32</div>
                  </div>
                  <div className="project-text padding">
                    <p>
                      Aplicativo desenvolvido como plataforma de acionamento de
                      cargas remotas de um circutio integrado do qual faz o uso
                      de relés e outros dispositivos eletrônicos, sendo um
                      projeto de Pesquisa do IFMG
                    </p>
                  </div>
                </div>
              </div>

              <div className="project-container ">
                <a>
                  <div className="item cmemoria"></div>
                </a>
                <div>
                  <h1 className="padding">Centro de Memoria IFMG</h1>
                  <div className="tags padding">
                    <div className="tag">WordPress</div>
                  </div>
                  <p className="project-text padding">
                    Site desenvolvido para o IFMG como uma iniciativa para
                    distruibuição de conteúdos sobre a História da instituição,
                    servindo como um espaço de interação entre a comunidade
                    interna e externa da instituição
                  </p>
                  <div className="tags padding">
                    <a href="http://memoria.ifmg.edu.br/" target="blank"><div className="tag link">Acesso</div></a> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </body>
      <div className="footer">
        <div className="footer-text">
          <h1>Vamos nos conectar !</h1>
          <p>Deixe sua mensagem ou uma ideia sobre projeto </p>
        </div>
        <div className="footer-form">
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
      <footer className="sub-footer">
        <spam>Todos os direitos reservados - {new Date().getFullYear()}</spam>
      </footer>
    </div>
  );
}

export default App;
