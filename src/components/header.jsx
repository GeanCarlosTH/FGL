import Link from "next/link";

export default function Header() {
  return (
    <div>
      <link rel="stylesheet" href="../style/Header.module.css" />
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {/* imagem da navbar */}
            <img
              src="https://th.bing.com/th/id/R.4cb49c8fac30268c13301a43dddb7ba7?rik=mC10caX5TNFBUg&pid=ImgRaw&r=0"
              alt=""
              width="30"
              height="24"
            />
          </a>
          <a className="navbar-brand" href="#">
            FGL Distribuidora
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Digite o que procura"
                aria-label="Search"
                style={{ width: "100%" }}
              />
              <button className="btn btn-outline-success" type="submit">
                Pesquisar
              </button>
            </form>
          </div>
        </div>
      </nav>

      <Link href="/product-details">
        <h1>Header</h1>
      </Link>
    </div>
  );
}
