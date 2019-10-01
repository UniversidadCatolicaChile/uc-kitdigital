<?php include('inc/header.php') ?>
<div class="uc-top-bar d-none d-xl-flex">
  <div class="container">
    <div class="top-bar_links justify-content-between">
      <ul class="top-bar_links">
        <li></li>
      </ul>
      <ul class="top-bar_links">
        <li class="uc-dropdown">
          <a href="#" target="_self" data-dtarget="6" class="uc-link dropbtn">
            Información para<i class="uc-icon color-white">arrow_drop_down</i>
          </a>
          <div data-dropdown="6" class="uc-dropdown_list dropbtn">
            <div class="white-triangle"></div>
            <div class="uc-dropdown_list-item"><a href="/informacion-para/futuros-estudiantes/" class="uc-btn">Futuros estudiantes</a></div>
            <div class="uc-dropdown_list-item"><a href="/informacion-para/estudiantes/" class="uc-btn">Estudiantes</a></div>
            <div class="uc-dropdown_list-item"><a href="/informacion-para/academicos/" class="uc-btn">Académicos</a></div>
            <div class="uc-dropdown_list-item"><a href="/informacion-para/personal/" class="uc-btn">Personal</a></div>
            <div class="uc-dropdown_list-item"><a href="/informacion-para/alumni/" class="uc-btn">Alumni</a></div>
            <div class="uc-dropdown_list-item"><a href="/informacion-para/padres-y-familia/" class="uc-btn">Padres y familia</a></div>
            <div class="uc-dropdown_list-item"><a href="/informacion-para/vecinos/" class="uc-btn">Vecinos</a></div>
          </div>
        </li>
        <li>
          <a href="http://bibliotecas.uc.cl/" target="_blank" data-dtarget="3" class="uc-link dropbtn external">
            Biblioteca
          </a>
        </li>
        <li>
          <a href="https://donaciones.uc.cl/" target="_blank" data-dtarget="2" class="uc-link dropbtn external">
            Donaciones
          </a>
        </li>
        <li>
          <a href="https://sso.uc.cl/cas/login" target="_blank" data-dtarget="4" class="uc-link dropbtn external">
            Mi Portal UC
          </a>
        </li>
        <li>
          <a href="https://correo.uc.cl" target="_blank" data-dtarget="5" class="uc-link dropbtn external">
            Correo
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>
<div class="uc-navbar">
  <div class="container d-none d-lg-flex">
    <div class="row no-gutters">
      <div class="col-lg-2">
        <div class="uc-navbar-brand d-none d-lg-flex">
          <a href="#">
            <img src="http://via.placeholder.com/175x100" class="img-fluid" alt="">
          </a>
        </div>
      </div>
      <div class="col-lg-9">
        <div class="uc-navbar_title">
          <h1>Nombre de Facultad</h1>
        </div>
        <ul class="uc-navbar_nav">
          <li class="nav-item"><a href="#" class="uc-link">Inicio</a></li>
          <li class="nav-item uc-dropdown">
            <a href="#" class="dropbtn uc-link" data-dtarget="prueba">Ítem desplegable <i class="uc-icon">arrow_drop_down</i></a>
            <div data-dropdown="prueba" class="uc-dropdown_list">
              <div class="white-triangle"></div>
              <div class="uc-dropdown_list-item">
                <a href="#" class="uc-btn">Construcción y vivienda</a>
              </div>
              <div class="uc-dropdown_list-item">
                <a href="#" class="uc-btn">Educación</a>
              </div>
              <div class="uc-dropdown_list-item">
                <a href="#" class="uc-btn">Fortalecimiento de organizaciones</a>
              </div>
              <div class="uc-dropdown_list-item">
                <a href="#" class="uc-btn">Pastoral</a>
              </div>
            </div>
          </li>
          <li class="nav-item active"><a href="#" class="uc-link">Ítem activo</a></li>
          <li class="nav-item"><a href="#" class="uc-link">Texto</a></li>
          <li class="nav-item ml-auto">
            <div class="uc-form-group no-margin">
              <input id="ucsearch" type="text" class="uc-input-style w-icon search" placeholder="Buscar por">
              <span class="w-icon search"></span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="uc-navbar_mobile d-block d-lg-none">
    <div class="uc-navbar_mobile-bar">
      <div class="uc-navbar_mobile-logo">
        <img src="logo-uc-mobile.svg" alt="Logo UC" class="img-fluid">
      </div>
      <a href="javascript:void(0);" class="uc-navbar_mobile-button" data-collapse="collapseMobileNav">
        <span class="uc-icon"></span>
      </a>
    </div>
    <div class="uc-navbar_mobile-content" data-toggle="collapseMobileNav" data-open="false" style="height: 0;">
      <div class="uc-navbar_mobile-list">
        <a href="#" class="list-item">Inicio</a>
        <a href="#" class="list-item">Programas de estudio</a>
        <a href="#" class="list-item">Investigación</a>
        <a href="#" class="list-item">Facultades</a>
      </div>
    </div>
  </div>
</div>
<?php include('inc/footer.php') ?>
