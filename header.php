<?php include('inc/header.php') ?>
<div class="uc-top-bar">
    <div class="container">
        <div class="top-bar_mobile-logo d-block d-lg-none">
            <img src="logo-uc-mobile.svg" alt="Logo UC" class="img-fluid">
        </div>
        <div class="top-bar_links-container d-none d-lg-flex">
            <ul class="top-bar_links">
                <li>
                    <a href="#" class="uc-link external" data-dtarget="test">
                        Ir al sitio UC
                    </a>
                    <div data-dropdown="test" class="uc-dropdown_list">
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
            </ul>
            <ul class="top-bar_links">
                <li>
                    <a href="#" class="uc-link external">
                        Biblioteca
                    </a>
                </li>
                <li>
                    <a href="#" class="uc-link external">
                        Correo
                    </a>
                </li>
                <li>
                    <a href="#" class="uc-link external">
                        Mi Portal UC
                    </a>
                </li>
                <li>
                    <a href="#" class="uc-link external">
                        Correo
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>
<div class="uc-navbar">
    <div class="container">
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
                <ul class="uc-navbar_nav d-none d-lg-flex">
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
    <div class="uc-navbar_mobile-button d-flex d-lg-none">
        <i class="uc-icon">menu</i>
    </div>
</div>

<div class="container my-60">
    <h1>header</h1>
</div>


<?php include('inc/footer.php') ?>