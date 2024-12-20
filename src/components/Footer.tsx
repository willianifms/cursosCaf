import React from "react";
import { FaEnvelope, FaPhone} from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container">
        <div className="row">
          {/* Coluna 1 */}
          <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
            <h5>Sobre Nós</h5>
            <p>
              CAF CARD - Gestora de Frotas Saiba mais em nosso site oficial:
              cafcard.com.br
            </p>
          </div>

          {/* Coluna 2 */}
          <div className="col-md-4 text-center mb-3 mb-md-0">
            <h5>Links Úteis</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://cafcard.com.br/"
                  className="text-white text-decoration-none"
                >
                  Site Oficial
                </a>
              </li>
              
              <li>
                <a
                  href="https://wa.me/6739100444"
                  className="text-white text-decoration-none"
                >
                  Suporte
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3 */}
          <div className="col-md-4 text-center text-md-end">
            <h5>Contato</h5>
            <p>
            <FaEnvelope size={15} color="white" />
              contratos@cafcard.com.br
            </p>
            <p>
            <FaPhone size={15} color="white" /> +55 (67) 3910-0444
            </p>
            
          </div>
        </div>
        <div className="text-center mt-3">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Painel de Vídeos. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
