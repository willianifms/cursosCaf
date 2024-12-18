import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";

function Login() {
  return (
    <div className="container">
      <main className="min-vh-100 row justify-content-center align-items-center py-3">
        {/* Seção da Imagem */}
        <section className="col-lg-6 col-md-6 col-sm-12 text-center mb-4 mb-md-0">
          <img
            src="./cafcardLogin.jpg"
            alt="Imagem não encontrada"
            className="img-fluid imagemLogin"
          />
        </section>

        {/* Seção do Formulário */}
        <section className="p-6 col-lg-6 col-md-6 col-sm-12 form">
          <form className="p-5 border rounded shadow">
            <h1 className="text-center mb-4">LOGIN</h1>

            {/* Campo de Email */}
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                required
              />
            </div>

            {/* Campo de Senha */}
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                required
              />
            </div>

            {/* Botão de Login */}
            <div className="d-grid">
              <button type="submit" className="btn">
                LOGIN
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}

export default Login;
