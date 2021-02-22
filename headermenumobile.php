<?php include('inc/header.php') ?>

<header class="uc-header">
  <div class="uc-top-bar">
    <div class="container">
      <div class="top-bar_mobile-logo d-block d-lg-none">
        <img src="https://kit-digital-uc-prod.s3.amazonaws.com/assets/logo-uc-comprimido.svg" alt="Logo UC" class="img-fluid">
      </div>
      <div class="top-bar_links justify-content-between d-none d-lg-flex">
        <ul class="top-bar_links">
          <li>
            <a href="http://uc.cl/" target="_blank" class="text-size--sm external">
              ir al sitio UC
            </a>
          </li>
        </ul>
        <ul class="top-bar_links">
          <li>
            <a href="http://bibliotecas.uc.cl/" target="_blank" class="text-size--sm external">
              Biblioteca
            </a>
          </li>
          <li>
            <a href="https://donaciones.uc.cl/" target="_blank" class="text-size--sm external">
              Donaciones
            </a>
          </li>
          <li>
            <a href="https://sso.uc.cl/cas/login" target="_blank" class="text-size--sm external">
              Mi Portal UC
            </a>
          </li>
          <li>
            <a href="https://correo.uc.cl" target="_blank" class="text-size--sm external">
              Correo
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <nav class="uc-navbar">
    <!-- Menú para versión Escritorio -->
    <div class="container d-none d-lg-block">
      <div class="row align-items-center">
        <div class="col-lg-3 col-xl-2">
          <img src="https://kit-digital-uc-prod.s3.amazonaws.com/assets/logo-uc-color.svg" alt="Logo de Facultad" class="img-fluid">
        </div>
        <div class="col-lg-8 col-xl-9">
          <div class="h2 text-font--serif text-color--blue mt-24">Nombre</div>
          <div class="text-color--gray p-size--lg">Bajada</div>
        </div>
      </div>
      <ul class="uc-navbar_nav">
        <li class="nav-item">
          <a href="#" class="uc-btn btn-inline">Item 1</a>
        </li>
        <li class="nav-item">
          <a href="#" class="uc-btn btn-inline">Item 2</a>
        </li>
        <li class="nav-item">
          <a href="#" class="uc-btn btn-inline">Item 3</a>
        </li>
        <li class="nav-item">
          <a href="#" class="uc-btn btn-inline">Item 4</a>
        </li>
        <li class="nav-item">
          <a href="#" class="uc-btn btn-inline">Item 5</a>
        </li>
        <li class="nav-item">
          <a href="#" class="uc-btn btn-inline">Item 6</a>
        </li>
      </ul>
    </div>
    <!-- Menú para versión Móvil -->
    <div class="uc-navbar_mobile navbar_mobile-slide d-block d-lg-none">
      <div class="uc-navbar_mobile-bar navbar-brand">
        <div class="uc-navbar_mobile-logo navbar-light">
          <div class="h2 text-font--serif text-color--blue">Título</div>
        </div>
        <a href="javascript:void(0);" class="uc-navbar_mobile-button">
          <span class="uc-icon"></span>
          Menú
        </a>
      </div>
      <div class="uc-navbar_mobile-content">
        <ul class="uc-navbar_mobile-list">
          <li class="list-item has-children">
            <a href="#">Item 1</a>
            <ul class="list-item children">
              <li class="list-item close">back</li>
              <li class="list-item">
                <a href="#">Item 1</a>
                <ul class="children">
                  <li class="list-item">Item child</li>
                  <li class="list-item">Item child</li>
                  <li class="list-item">Item child</li>
                </ul>
              </li>
              <li class="list-item">Item child</li>
              <li class="list-item">Item child</li>
              <li class="list-item">Item child</li>
            </ul>
          </li>
          <li class="list-item">
            <a href="#">Item 2</a>
          </li>
          <li class="list-item">
            <a href="#">Item 3</a>
          </li>
          <li class="list-item">
            <a href="#">Item 4</a>
          </li>
          <li class="list-item">
            <a href="#">Item 5</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>

<div id="uc-global-footer"></div>
<?php include('inc/footer.php') ?>
