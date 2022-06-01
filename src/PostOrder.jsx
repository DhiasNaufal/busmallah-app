<>
  <title> Busmallah | Insya'allah Sampai Tujuan </title>
  <link rel="icon" type="image/x-icon" href="assets/aditydcp/img/favicon.ico" />
  <link rel="stylesheet" href="assets/aditydcp/css/main.css" />
  <link rel="stylesheet" href="assets/icofont/icofont.min.css" />
  <section id="menu">
    <nav className="navbar fixed-top transparent-bg align-items-center">
      <div className="menu-content-top">
        <div className="menu-logo">
          <div className="navbar-brand">
            <span className="navbar-logo">
              <a href="index.html">
                <img
                  className="navbar-logo-img"
                  src="assets/aditydcp/img/busmallah-logo.png"
                  alt="Busmallah"
                />
              </a>
            </span>
            <span className="navbar-caption-wrap">
              <a className="brand-name" href="index.html">
                <span id="brand"> Busmallah </span>
                <span className="doa" id="tagline">
                  {" "}
                  Insya'allah sampai tujuan~{" "}
                </span>
              </a>
            </span>
          </div>
        </div>
        <div className="menu-content">
          <div className="navbar-btn">
            <a className="btn btn-primary">
              <span>
                Beli Tiket Sekarang{" "}
                <i className="icofont-rounded-right icon-white" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  </section>
  <section id="hero-post">
    <div className="hero-overlay" />
    <div className="container">
      <h1 className="section-title">Udah tau mau ngapain aja di sana?</h1>
      <h3 className="section-subtitle">
        Cari tahu lebih banyak soal apa aja yang ada di kota tujuanmu!
      </h3>
      <div className="row justify-content-center align-center">
        <div className="media-container-column col-lg-12 col-md-10 col-sm-12 align-center">
          <div className="row">
            <div className="relative col-lg-3 col-md-12">
              <button
                type="button"
                onclick="openInNewTab('https://hotello-app.herokuapp.com/')"
                className="btn form-control input btn-primary"
                target="_blank"
              >
                Cari Hotel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="navigate-next" onclick="goToFood()">
      <span className="navigate-text">
        Rekomendasi Tempat Makan
        <br />
        di Lokasi Tujuan
      </span>
      <i className="icofont-rounded-down icon" />
    </div>
  </section>
  <section id="food">
    <div className="container">
      <h1 className="section-title">Rekomendasi Kuliner</h1>
      <div className="container food-card">
        <div className="image" id="foodRec-image" />
        <div className="details">
          <h2 className="card-title" id="foodRec-name">
            {" "}
            Pogo Restaurant{" "}
          </h2>
          <div className="metadata-wrapper">
            <span className="metadata-small flex">
              <div>
                <i className="icofont-ui-rate-blank" />
              </div>
              <div className="pdl-1rm">
                <span id="foodRec-rating">5</span>
              </div>
            </span>
            <span className="metadata-small flex">
              <div>
                <i className="icofont-phone" />
              </div>
              <div className="pdl-1rm">
                <span id="foodRec-phone">+62 22 7310799</span>
              </div>
            </span>
            <span className="metadata-small flex">
              <div>
                <i className="icofont-dollar" />
              </div>
              <div className="pdl-1rm">
                <span id="foodRec-price"> $65,000 - $250,000 </span>
              </div>
            </span>
          </div>
          <span className="metadata-big flex">
            <div>
              <i className="icofont-ui-email" />
            </div>
            <div className="pdl-1rm">
              <span id="foodRec-email"> info@thepapandayan.com </span>
            </div>
          </span>
          <span className="metadata-big flex">
            <div>
              <i className="icofont-location-pin" />
            </div>
            <div className="pdl-1rm">
              <span id="foodRec-address">
                Jl. Gatot Subroto No.83 The Papandayan Hotel, Bandung 40262
                Indonesia
              </span>
            </div>
          </span>
          <span>
            <p id="foodRec-description">
              Pago Restaurant is a new dining experience concept serving
              authentic Indonesian, Asian and Western specialties. Open for
              breakfast, lunch, and dinner, this restaurant offers extensive
              buffet and a la carte options.
            </p>
          </span>
        </div>
      </div>
    </div>
    <div className="container gb align-center">
      <span>
        This recommendation is powered by
        <br />
        <b>Easy Yummy</b>
      </span>
    </div>
  </section>
</>
