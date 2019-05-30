## Definiciones técnicas

A continuación se describe la metodología para definir nombres y estilos en el sistema de diseño UC.

La matodología se basa en las definiciones de arquitectura de Front-end de [SMACSS]([http://smacss.com/](http://smacss.com/))  y la metodología de nombres de clases [BEM](http://getbem.com/naming/).

###Nomenclatura de clases definida

Para nombrar componentes:

```scss
.uc-{componente}
```

Para nombrar modificadores únicos:

```scss
.{componente}-{modificador}
```

Para nombrar modificadores con diferentes valores:

```scss
.{componente}-{modificador}--{valor}
```

Para nombrar hijos de componentes:

```scss
.uc-{componente}_{hijo}
```

Para nombrar hijos de componentes con variantes:

```scss
.uc-{componente}_{hijo}--{tipo}
```



###Principios para la creación de componentes

1. Cada componente debe contener el prefijo `uc-` en el nombre de su clase principal.
2. El nombre del componente es lo que va después del `uc-`, por ejemplo, en `.uc-card` el nombre del componente es Card.
3. El componente puede tener modificadores que se agregan al mismo nivel que el nombre del componente, y cada modificador se escribe como `.{componente}-{modificador}`. Si el modificador tiene más de un valor, se debe extender como `.{componente}-{modificador}—{valor}`, donde `{modificador}` es el nombre de la propiedad. Ej: `.card-type--horizontal`
4.  Cuando un componente tiene elementos que son hijos directos y relacionados al funcionamiento del componente, se deben nombrar bajo la definición `.uc-{componente}_{hijo}`.  Si el componente tiene varios hijos con variantes de la misma jerarquía (hermanos), se deben nombrar usando la siguiente regla: `.uc-{componente}_{hijo}--{tipo}`