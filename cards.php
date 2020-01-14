<?php include 'inc/header.php' ?>

<div class="container">
  <h1 class="mt-28">Cards UC</h1>
  <hr class="uc-hr my-60">
  <h3 class="mb-28">cards vacías</h3>
  <div class="row mb-36">
    <div class="col-lg-3">
      <div class="uc-card" style="width: 100%; height: 160px;"></div>
    </div>
    <div class="col-lg-3">
      <div class="uc-card card-radius--md" style="width: 100%; height: 160px;"></div>
    </div>
    <div class="col-lg-3">
      <div class="uc-card card-bg--blue" style="width: 100%; height: 160px;"></div>
    </div>
    <div class="col-lg-3">
      <div class="uc-card card-radius--md card-bg--blue" style="width: 100%; height: 160px;"></div>
    </div>
  </div>
  <h3 class="mb-28">cards con imágenes</h3>
  <div class="row mb-36">
    <div class="col-lg-4">
      <div class="uc-card card-bg--image" style="background-image:url('/img/bg-card.png');width: 100%;"></div>
    </div>
    <div class="col-lg-4">
      <div class="uc-card card-bg--image card-gradient--bottom-blue" style="background-image:url('/img/bg-card.png');width: 100%;"></div>
    </div>
    <div class="col-lg-12 mt-32">
      <div class="uc-card card-bg--image card-gradient--top-black" style="background-image:url('/img/bg-card.png');width: 100%;"></div>
    </div>
  </div>
  <h3 class="mb-28">cards con texto</h3>
  <div class="row mb-32">
    <div class="col-lg-4">
      <div class="uc-card">
        <div class="uc-card_body">
          <p class="gray">18 Marzo 2018</p>
          <h3>Sol Serrano: la primera mujer galardonada con el Premio Nacional de Historia.</h3>
        </div>
      </div>
    </div>
    <div class="col-lg-5">
      <div class="uc-card">
        <div class="uc-card_body--xl">
          <p class="gray">18 Marzo 2018</p>
          <h3>Sol Serrano: la primera mujer galardonada con el Premio Nacional de Historia.</h3>
        </div>
      </div>
    </div>
    <div class="col-lg-3">
      <div class="uc-card card-border--bottom text-center">
        <div class="uc-card_body">
          <h1>101</h1>
          <p class="no-margin">discos vendidos</p>
        </div>
      </div>
      <div class="uc-card card-border--bottom text-center mt-32 card-hoverable">
        <div class="uc-card_body">
          <h1>1.220</h1>
          <p class="no-margin">Publicaciones</p>
        </div>
        <div class="uc-card card-hovered card-radius--none">
          <div class="uc-card_body--sm">
            <p class="no-margin color-white text-left">
              Proyectos ingresados en la plataforma de visibilización académica VIVO
            </p>
            <div class="text-right">
              <a href="#" class="uc-link external color-white">
                Ir al Sitio
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <h3 class="mb-28">cards anidadas / cards horizontales</h3>
  <div class="row mb-32">
    <div class="col-lg-4">
      <div class="uc-card card-bg--image card-gradient--bottom-blue card-type--link" style="background-image:url('/img/bg-card.png');width: 100%;">
        <a href="http://google.cl" class="uc-card_link"></a>
        <a href="#" class="uc-tag tag-fixed">Carrera de Pregrado</a>
        <div class="uc-card_body">
          <div class="uc-card card-bg--white mt-auto">
            <div class="uc-card_body">
              <h3>Sol Serrano: la primera mujer galardonada con el Premio Nacional de Historia.</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="uc-card card-type--horizontal mb-32">
        <a href="http://google.cl" class="uc-card_link"></a>
        <img src="http://via.placeholder.com/200x160" class="img-fluid" alt="">
        <div class="uc-card_body">
          <a href="#" class="uc-tag">
            Texto
          </a>
          <h4 class="mt-16">Lorem ipsum dolor sit amet</h4>
          <div class="text-right mt-auto">
            <a href="#" class="uc-btn btn-inline">
              Ver más
              <i class="uc-icon">keyboard_arrow_right</i>
            </a>
          </div>
        </div>
      </div>
      <div class="uc-card card-type--horizontal">
        <a href="http://google.cl" class="uc-card_link"></a>
        <img src="http://via.placeholder.com/200x160" class="img-fluid" alt="">
        <div class="uc-card_body">
          <a href="#" class="uc-tag">
            Texto
          </a>
          <h4 class="mt-16">Lorem ipsum dolor sit amet</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus asperiores consequuntur eaque esse eveniet iste iusto laborum maxime minus molestiae neque optio perspiciatis quae quibusdam.</p>
        </div>
      </div>
    </div>
  </div>
  <h3 class="mb-28">cards de evento</h3>
  <div class="row mb-32">
    <div class="col-lg-3">
      <div class="uc-card card-type--event card-height--same">
        <div class="uc-card card-type--date">
          <div class="day">7</div>
          <div class="month">Nov</div>
        </div>
        <div class="uc-card_body">
          <a href="#" class="uc-tag my-20">Teatro</a>
          <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, minus.</h4>
          <div class="uc-card_event--content">
            <div class="date">1 de Diciembre</div>
            <div class="time">15:00 a 20:30 hrs.</div>
            <div class="venue"><a href="#" class="uc-link">Teatro UC</a></div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-3">
      <div class="uc-card card-type--event card-height--same">
        <div class="uc-card card-type--date">
          <div class="day">7</div>
          <div class="month">Nov</div>
        </div>
        <div class="uc-card_body">
          <a href="#" class="uc-tag my-20">Teatro</a>
          <h4>Lorem ipsum dolor sit amet. Dolore, minus.</h4>
          <div class="uc-card_event--content">
            <div class="date">1 de Diciembre</div>
            <div class="time">15:00 a 20:30 hrs.</div>
            <div class="venue"><a href="#" class="uc-link">Teatro UC</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row mb-32">
    <div class="col-md-4">
      <div class="uc-card card-height--same">
        <img src="http://via.placeholder.com/300x190" class="img-fluid" alt="">
        <a href="#" class="uc-tag tag-fixed">Carrera de Pregrado</a>
        <div class="uc-card_body">
          <p class="small gray condensed">18 Marzo 2018</p>
          <h4>Lorem ipsum dolor sit amet</h4>
          <div class="uc-text-divider divider-primary my-12"></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta pellentesque finibus. In porttitor est augue, at aliquet massa tristique in. Donec viverra enim eget lacus consectetur, eu scelerisque metus congue.</p>
          <div class="text-right mt-auto">
            <a href="#" class="uc-btn btn-inline">
              Ver más
              <i class="uc-icon">keyboard_arrow_right</i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="uc-card card-height--same">
        <img src="http://via.placeholder.com/300x190" class="img-fluid" alt="">
        <a href="#" class="uc-tag tag-fixed">Carrera de Pregrado</a>
        <div class="uc-card_body">
          <p class="small gray condensed">18 Marzo 2018</p>
          <h4>Lorem ipsum dolor sit amet</h4>
          <div class="uc-text-divider divider-primary my-12"></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta pellentesque finibus. In porttitor est augue, at aliquet massa tristique in. Donec viverra enim eget lacus consectetur, eu scelerisque metus congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta pellentesque finibus. Nullam porta pellentesque finibus. </p>
          <a href="#" class="uc-btn btn-primary mt-auto">
            Más información
            <i class="uc-icon icon-shape--rounded">arrow_forward</i>
          </a>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="uc-card card-height--same">
        <img src="http://via.placeholder.com/300x190" class="img-fluid" alt="">
        <div class="uc-card_body">
          <p class="small gray condensed">18 Marzo 2018</p>
          <h4>Lorem ipsum dolor sit amet</h4>
          <div class="uc-text-divider divider-primary my-12"></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta pellentesque finibus. In porttitor est augue, at aliquet massa tristique in. Donec viverra enim eget lacus consectetur, eu scelerisque metus congue. </p>
          <div class="text-right mt-auto">
            <a href="#" class="uc-btn btn-inline">
              Ver más
              <i class="uc-icon">keyboard_arrow_right</i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <h3 class="mb-28">card anidada visible en hover</h3>
  <div class="row mb-36">
    <div class="col-md-4">
      <div class="uc-card card-hoverable card-bg--image card-gradient--bottom-blue" style="background-image:url('/img/bg-card.png');width: 100%; height: 400px;">
        <div class="uc-card_body--lg">
          <div class="mt-auto">
            <h4 class="color-white">Innovación</h4>
            <div class="uc-text-divider divider-primary mt-12"></div>
          </div>
        </div>
        <div class="uc-card card-hovered">
          <div class="uc-card_body--lg">
            <h4 class="color-white">Innovación</h4>
            <div class="uc-text-divider divider-primary my-12"></div>
            <p class="color-white">Impulsamos iniciativas multidisciplinarias de innovación a través de proyectos y programas de emprendimiento de alto impacto.</p>
            <a href="#" class="uc-btn btn-primary mt-auto">
              Más información
              <i class="uc-icon icon-shape--rounded">arrow_forward</i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row my-36">
    <div class="col-lg-4">
      <div class="uc-card">
        <div class="uc-card_header">
          comunidad UC
        </div>
        <div class="uc-card_body">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque consequatur cumque debitis dicta distinctio iusto labore, libero minus necessitatibus nihil nisi perspiciatis placeat recusandae suscipit temporibus voluptas. Autem, rerum?</p>
        </div>
        <div class="uc-card_footer text-right">
          <p class="text-color--gray no-margin">Fuente:</p>
        </div>
      </div>
    </div>
  </div>
  <div class="uc-card card-type--horizontal card-border--top mb-60">
    <img src="https://via.placeholder.com/330x320" alt="Imagen">
    <div class="uc-card_body--xl">
      <a href="#" class="uc-tag">Tag UC</a>
      <div class="h3 my-16">
        <div class="uc-icon mr-12">notifications_active</div>
        Título de la contingencia
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci alias autem est eum illum ipsum laudantium maxime minus nobis odio officiis omnis perferendis quos reprehenderit similique, suscipit vel voluptate.</p>
      <div class="mt-auto">
        <a href="#" class="uc-btn btn-inline">
          Ver más<i class="uc-icon icon-shape--rounded">arrow_forward</i>
        </a>
      </div>
    </div>
  </div>
</div>

<?php include 'inc/footer.php' ?>
