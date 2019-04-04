<?php include 'inc/header.php' ?>
<div class="container">
    <div class="uc-tabs-container" data-tabpanel>
        <ul class="uc-tabs">
            <li class="uc-tab-item">
                <a href="javascript:void(0);" class="uc-tab-link" data-tabtarget="tab-01" data-tabactive>Tab 1</a>
            </li>
            <li class="uc-tab-item">
                <a href="javascript:void(0);" class="uc-tab-link" data-tabtarget="tab-02">Tab 2</a>
            </li>
            <li class="uc-tab-item">
                <a href="javascript:void(0);" class="uc-tab-link" data-tabtarget="tab-03">Tab 3</a>
            </li>
            <li class="uc-tab-item">
                <a href="javascript:void(0);" class="uc-tab-link" data-tabtarget="tab-04">Tab 4</a>
            </li>
        </ul>
        <div class="uc-tab-body">
            <div data-tab="tab-01">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur beatae consequatur cum dolorum eveniet in inventore, iusto magnam necessitatibus officia officiis provident, sint velit, vitae. In iste laboriosam vero.</p>
            </div>
            <div data-tab="tab-02">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur exercitationem harum id!</p>
            </div>
            <div data-tab="tab-03">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda autem blanditiis debitis dicta est et eum, excepturi ipsam iusto maiores, minima minus natus nulla numquam odit optio praesentium quas qui quis, quo recusandae rem repellat repellendus rerum? Earum, repudiandae!</p>
            </div>
            <div data-tab="tab-04">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est.</p>
            </div>
        </div>
    </div>
    <div class="my-60">
        <div class="dropdown-item">
            <button class="dropbtn uc-btn" data-dtarget="prueba">Dropdown</button>
            <div data-dropdown="prueba" class="uc-list-dropdown">
                <div class="white-triangle"></div>
                <div class="nav-item">
                    <a href="#" class="uc-btn">Construcción y vivienda</a>
                </div>
                <div class="nav-item">
                    <a href="#" class="uc-btn">Educación</a>
                </div>
                <div class="nav-item">
                    <a href="#" class="uc-btn">Fortalecimiento de organizaciones</a>
                </div>
                <div class="nav-item">
                    <a href="#" class="uc-btn">Pastoral</a>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6">
            <div class="my-60">
                <div class="uc-collapse uc-card">
                    <a href="#" class="uc-collapse-heading" data-target="collapseExample">
                        <h6>Título Colapsable</h6>
                        <span class="uc-btn inline-btn ml-auto">
                            Ver más
                            <i class="uc-icon rounded-background">keyboard_arrow_down</i>
                        </span>
                    </a>
                    <div class="uc-collapse-body" data-toggle="collapseExample">
                        <div class="card-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad aspernatur at consectetur eius eos fuga hic, maiores maxime modi mollitia obcaecati perspiciatis quam quas quis repellendus tenetur vitae voluptas?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6">
            <div class="my-60">
                <div data-accordion>
                    <div class="uc-collapse uc-card">
                        <a href="#" class="uc-collapse-heading" data-target="collapseExample01">
                            <h6>Título Acordeón</h6>
                            <span class="uc-btn inline-btn ml-auto">
                            Ver más
                            <i class="uc-icon rounded-background">keyboard_arrow_down</i>
                        </span>
                        </a>
                        <div class="uc-collapse-body" data-toggle="collapseExample01">
                            <div class="card-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad aspernatur at consectetur eius eos fuga hic, maiores maxime modi mollitia obcaecati perspiciatis quam quas quis repellendus tenetur vitae voluptas?</p>
                            </div>
                        </div>
                    </div>
                    <div class="uc-collapse uc-card">
                        <a href="#" class="uc-collapse-heading" data-target="collapseExample02">
                            <h6>Título Acordeón</h6>
                            <span class="uc-btn inline-btn ml-auto">
                            Ver más
                            <i class="uc-icon rounded-background">keyboard_arrow_down</i>
                        </span>
                        </a>
                        <div class="uc-collapse-body" data-toggle="collapseExample02">
                            <div class="card-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad aspernatur at consectetur eius eos fuga hic, maiores maxime modi mollitia obcaecati perspiciatis quam quas quis repellendus tenetur vitae voluptas?</p>
                            </div>
                        </div>
                    </div>
                    <div class="uc-collapse uc-card">
                        <a href="#" class="uc-collapse-heading" data-target="collapseExample03">
                            <h6>Título Acordeón</h6>
                            <span class="uc-btn inline-btn ml-auto">
                            Ver más
                            <i class="uc-icon rounded-background">keyboard_arrow_down</i>
                        </span>
                        </a>
                        <div class="uc-collapse-body" data-toggle="collapseExample03">
                            <div class="card-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad aspernatur at consectetur eius eos fuga hic, maiores maxime modi mollitia obcaecati perspiciatis quam quas quis repellendus tenetur vitae voluptas?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="my-60">
        Lorem ipsum dolor sit amet,
        <div class="uc-tooltip-content">
            hover para ver el tooltip
            <div class="uc-tooltip">
                <div class="tooltip-body">
                    <div class="white-triangle"></div>
                    <h4>Título</h4>
                    <div class="text-divider primary"></div>
                    <strong>Bajada</strong>
                </div>
            </div>
        </div>
        consectetur adipisicing elit. Commodi doloremque error facere fugiat minus nisi omnis quibusdam quo recusandae repellat? Esse iure magnam nemo, perferendis possimus sapiente sit voluptas voluptatum?
    </div>
    <div class="my-60">
        <button type="button" data-mtarget="prueba">Abrir modal</button>
        <div data-modal="prueba" class="modal">
            <!-- Modal content -->
            <div class="modal-content">
                <span class="close" data-mclosed>&times;</span>
                <p>Esto es un Modal</p>
            </div>
        </div>
    </div>
</div>
<?php include 'inc/footer.php' ?>
