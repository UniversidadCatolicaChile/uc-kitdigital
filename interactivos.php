<?php include 'inc/header.php' ?>
<div class="container">
    <h2 class="mb-24">Tabs</h2>
    <h4>Tab horizontal</h4>
    <div class="uc-tabpanel" data-tabpanel>
        <select name="tabSelect" id="tabSelect"  data-tabselect>
          <option value="tab-01" data-tabtarget="tab-01">Tab 1</option>
          <option value="tab-02" data-tabtarget="tab-02">Tab 2</option>
          <option value="tab-03" data-tabtarget="tab-03">Tab 3</option>
          <option value="tab-04" data-tabtarget="tab-04">Tab 4</option>
        </select>
        <ul class="uc-tabs">
            <li class="uc-tabs_item">
                <a href="javascript:void(0);" class="uc-tabs_item-link" data-tabtarget="tab-01" data-tabactive>Tab 1</a>
            </li>
            <li class="uc-tabs_item">
                <a href="javascript:void(0);" class="uc-tabs_item-link" data-tabtarget="tab-02">Tab 2</a>
            </li>
            <li class="uc-tabs_item">
                <a href="javascript:void(0);" class="uc-tabs_item-link" data-tabtarget="tab-03">Tab 3</a>
            </li>
            <li class="uc-tabs_item">
                <a href="javascript:void(0);" class="uc-tabs_item-link" data-tabtarget="tab-04">Tab 4</a>
            </li>
        </ul>
        <div class="uc-tab-body">
            <div data-tab="tab-01">
                <p>1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur beatae consequatur cum dolorum eveniet in inventore, iusto magnam necessitatibus officia officiis provident, sint velit, vitae. In iste laboriosam vero.</p>
            </div>
            <div data-tab="tab-02">
                <p>2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur exercitationem harum id!</p>
            </div>
            <div data-tab="tab-03">
                <p>3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda autem blanditiis debitis dicta est et eum, excepturi ipsam iusto maiores, minima minus natus nulla numquam odit optio praesentium quas qui quis, quo recusandae rem repellat repellendus rerum? Earum, repudiandae!</p>
            </div>
            <div data-tab="tab-04">
                <p>4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est.</p>
            </div>
        </div>
    </div>
    <h4 class="mt-32">Tab vertical</h4>
    <div class="my-32">
        <div class="uc-tabpanel" data-tabpanel>
            <div class="row">
                <div class="col-lg-4">
                    <ul class="uc-vertical-tabs">
                        <li class="uc-vertical-tabs_item">
                            <a href="javascript:void(0);" class="uc-vertical-tabs_item-link" data-tabtarget="tab-10" data-tabactive>Tab 01</a>
                        </li>
                        <li class="uc-vertical-tabs_item">
                            <a href="javascript:void(0);" class="uc-vertical-tabs_item-link" data-tabtarget="tab-11">Tab 02</a>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-8">
                    <div class="uc-tab-body">
                        <div data-tab="tab-10">
                            <table class="uc-table table-wide">
                                <tbody>
                                    <tr>
                                        <td>2014</td>
                                        <td>Edgar Wolff Grobler</td>
                                    </tr>
                                    <tr>
                                        <td>2014</td>
                                        <td>Edgar Wolff Grobler</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div data-tab="tab-11">
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <hr class="uc-hr">
    <div class="my-60">
        <div class="uc-dropdown">
            <a href="#" class="uc-btn btn-inline dropbtn" data-dtarget="prueba">Ítem del menú</a>
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
        </div>
    </div>
    <div class="my-60">
        <div class="uc-dropdown">
            <a href="#" class="uc-btn btn-inline dropbtn" data-dtarget="prueba01">Ítem del menú</a>
            <div data-dropdown="prueba01" class="uc-dropdown_list">
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
        </div>
    </div>
    <div class="row">
        <div class="col-md-6">
            <div class="my-60">
                <div class="uc-collapse uc-card">
                    <a href="#" class="uc-collapse_heading" data-collapse="collapseExample">
                        <h4>Título Colapsable</h4>
                        <span class="uc-btn btn-inline ml-auto">
                            Ver más
                            <i class="uc-icon icon-shape--rounded">keyboard_arrow_down</i>
                        </span>
                    </a>
                    <div class="uc-collapse_body" data-toggle="collapseExample">
                        <div class="uc-card_body">
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
                <div class="uc-accordion" data-accordion>
                    <div class="uc-collapse uc-card">
                        <a href="#" class="uc-collapse_heading" data-collapse="collapseExample01">
                            <h4>Título primer acordeón</h4>
                            <span class="uc-btn btn-inline ml-auto">
                            Ver más
                            <i class="uc-icon icon-shape--rounded">keyboard_arrow_down</i>
                        </span>
                        </a>
                        <div class="uc-collapse_body" data-toggle="collapseExample01">
                            <div class="uc-card_body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad aspernatur at consectetur eius eos fuga hic, maiores maxime modi mollitia obcaecati perspiciatis quam quas quis repellendus tenetur vitae voluptas?</p>
                            </div>
                        </div>
                    </div>
                    <div class="uc-collapse uc-card">
                        <a href="#" class="uc-collapse_heading" data-collapse="collapseExample02">
                            <h4>Título segundo acordeón</h4>
                            <span class="uc-btn btn-inline ml-auto">
                            Ver más
                            <i class="uc-icon icon-shape--rounded">keyboard_arrow_down</i>
                        </span>
                        </a>
                        <div class="uc-collapse_body" data-toggle="collapseExample02">
                            <div class="uc-card_body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad aspernatur at consectetur eius eos fuga hic, maiores maxime modi mollitia obcaecati perspiciatis quam quas quis repellendus tenetur vitae voluptas?</p>
                            </div>
                        </div>
                    </div>
                    <div class="uc-collapse uc-card">
                        <a href="#" class="uc-collapse_heading" data-collapse="collapseExample03">
                            <h4>Título tercer acordeón</h4>
                            <span class="uc-btn btn-inline ml-auto">
                            Ver más
                            <i class="uc-icon icon-shape--rounded">keyboard_arrow_down</i>
                        </span>
                        </a>
                        <div class="uc-collapse_body" data-toggle="collapseExample03">
                            <div class="uc-card_body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad aspernatur at consectetur eius eos fuga hic, maiores maxime modi mollitia obcaecati perspiciatis quam quas quis repellendus tenetur vitae voluptas?</p>
                            </div>
                        </div>
                    </div>
                    <div class="uc-collapse uc-card">
                        <a href="#" class="uc-collapse_heading" data-collapse="collapseExample04">
                            <h4>Título cuarto acordeón</h4>
                            <span class="uc-btn btn-inline ml-auto">
                            Ver más
                            <i class="uc-icon icon-shape--rounded">keyboard_arrow_down</i>
                        </span>
                        </a>
                        <div class="uc-collapse_body" data-toggle="collapseExample04">
                            <div class="uc-card_body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad aspernatur at consectetur eius eos fuga hic, maiores maxime modi mollitia obcaecati perspiciatis quam quas quis repellendus tenetur vitae voluptas?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="my-60">
        Lorem ipsum dolor sit amet, <span class="uc-tooltip" data-tippy-content="<h4>Tooltip</h4>">hover para ver el tooltip</span>consectetur adipisicing elit. Commodi doloremque error facere fugiat minus nisi omnis quibusdam quo recusandae repellat? Esse iure magnam nemo, perferendis possimus sapiente sit voluptas voluptatum?
    </div>
    <div class="my-60">
        <button type="button" class="uc-btn cta" data-mtarget="modalExample">Abrir modal</button>
        <div data-modal="modalExample" class="uc-modal">
            <div class="uc-modal_content uc-message yellow-warning mb-32">
                <a href="javascript:void(0)" class="close-button" data-mclosed><i class="uc-icon">close</i></a>
                <div class="uc-message-body">
                    <i class="uc-icon warning-icon">warning</i>
                    <h2 class="mb-24">Evacuación Fuga de Gas</h2>
                    <p class="no-margin">Ante el aviso de una posible bomba, y como medida de precaución, se solicita a la comunidad UC de Campus San Joaquín , evacuar el campus a la brevedad. Todos deben dirigirse a la salida más cercana y seguir las instrucciones del personal de seguridad. Carabineros ya está en el lugar evaluando la situación.</p>
                    <hr class="uc-hr my-32">
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <p class="no-margin">Emergencias uc</p>
                            <a href="#" class="uc-btn btn-inline"><i class="uc-icon">phone</i> (56)22354 5000</a>
                        </div>
                        <div class="col-md-6 text-right">
                            <a href="#" class="uc-btn btn-inline">
                                Más información
                                <i class="uc-icon icon-shape--rounded">arrow_forward</i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<?php include 'inc/footer.php' ?>
