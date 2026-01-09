<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Cultura, ética y responsabilidad en la gestión del talento'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p.mb-5 La gestión del talento humano adquiere una dimensión integral cuando se fundamenta en una cultura organizacional sólida, principios éticos y responsabilidad social. Una cultura basada en valores compartidos, normas claras y comportamientos esperados crea un entorno propicio para el compromiso, la cohesión y la sostenibilidad (Universidad Ecotec, 2023). En este marco, los colaboradores entienden la misión de la organización y alinean sus actitudes y desempeño al propósito colectivo.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/1.png")
            .col-lg-7
              p La ética en la gestión del talento implica evaluar y actuar con justicia, transparencia y respeto. En áreas como la salud, se ha demostrado que implementar valores éticos, desde la contratación hasta la evaluación, garantiza procedimientos justos y equilibrados, fortaleciendo la confianza y el bienestar en el trabajo. Estas prácticas promueven un sentido de pertenencia y criterios responsables en la toma de decisiones..
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/2.png")
            .col-lg-7
              p La responsabilidad social corporativa (RSE) fortalece esta administración humana desde un enfoque más extenso, subrayando la igualdad, la inclusión y el respeto al medio ambiente. Las investigaciones actuales indican que las organizaciones que incorporan RSE en sus estrategias de talento crean culturas empresariales más unificadas y atractivas para sus trabajadores. Además, favorecen su reputación y posicionamiento a largo plazo.
    
    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/3.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1 
        .bg-color-5.p-4.mb-3(data-aos="fade-left")
          p.mb-0 Como parte del proceso formativo, se espera que el estudiante comprenda cómo la cultura, la ética y la responsabilidad no son solo fundamentos conceptuales, sino elementos prácticos que deben integrarse, por ejemplo, en códigos de conducta, talleres de ética profesional o evaluaciones basadas en valores. Este enfoque promueve el desarrollo de habilidades blandas como la empatía, el juicio ético, la comunicación honesta y el liderazgo responsable, esenciales para construir organizaciones humanas y sostenibles.

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Cultura organizacional: conceptos, tipos e impacto en el desempeño 
    
    p.mb-5 La comprensión de la cultura organizacional es esencial para fortalecer el clima laboral, promover la cohesión de los equipos y mejorar el desempeño institucional.

    .bg-full-width.bg-color-2.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Cultura organizacional: conceptos, tipos e impacto en el desempeño 
            p.mb-4(data-aos="fade-right") En el PDF <b>Cultura organizacional</b>, se exploran las características, clasificaciones y efectos de la cultura en las dinámicas organizativas, junto con ejemplos prácticos de diagnóstico y fortalecimiento cultural. Este material brinda al estudiante herramientas para analizar entornos laborales desde una perspectiva crítica y desarrollar habilidades blandas clave como la comunicación, la empatía y el liderazgo cultural.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Cultura organizacional: conceptos, tipos e impacto en el desempeño.
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/4.png', alt='')

    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Ética en la gestión del capital humano: dilemas y principios 
    
    .bg-full-width.bg-color-8
      .px-4.px-md-5
        .row.mb-5
          .col-lg-3.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/5.svg", data-aos="zoom-in")
          .col-lg-9.order-lg-1
            p(data-aos="fade-left") La ética en la gestión del capital humano orienta las decisiones y acciones relacionadas con el talento, garantizando equidad, justicia y responsabilidad en cada etapa del ciclo laboral. Cuando los responsables de recursos humanos enfrentan dilemas, como escoger criterios de selección, evaluar desempeño o tomar decisiones disciplinarias, debe prevalecer el respeto a los principios éticos, ya que impactan directamente en la confianza, la cultura y el clima organizacional.

            h2(data-aos="fade-left") Principios éticos fundamentales
        
            .bg-color-1.p-4.mb-3(data-aos="fade-left")
              p.mb-0 Los principios como transparencia, justicia, respeto a la dignidad, confianza y confidencialidad forman la base de una gestión responsable del talento. Organizaciones que implementan códigos de ética en RR. HH. y mecanismos estructurados de un debido proceso, promueven culturas de integridad y fortalecen el capital humano.
            p Tres dilemas frecuentes son:

        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/6.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Conflictos de interés en selección o promoción
                p.mb-0 Por ejemplo, cuando un profesional evalúa a un familiar. Esto exige adoptar criterios objetivos y mecanismos de recusación para mantener la imparcialidad.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/7.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Uso de inteligencia artificial en selección
                p.mb-0 Sistemas algorítmicos pueden generar sesgos no intencionados por su dependencia de datos históricos sesgados. Garantizar equidad requiere transparencia en cómo funcionan estos sistemas.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/8.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Privacidad versus desempeño
                p.mb-0 Monitorear actividades laborales puede mejorar resultados, pero si se excede en vigilancia, se vulnera la confianza y el respeto al trabajador.
    
    h2(data-aos="fade-left") Habilidades blandas requeridas
    p.mb-5 La gestión ética demanda:

    .row.justify-content-center.mb-3
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-7.h-100
          .p-4
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema3/9.svg", style="max-width: 90px").mx-auto
              .col-lg
                h2 Pensamiento crítico
                p.mb-0 Para identificar riesgos morales.
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-7.h-100
          .p-4
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema3/10.svg", style="max-width: 90px").mx-auto
              .col-lg
                h2 Comunicación honesta
                p.mb-0 Para explicar decisiones y recibir <em>feedback</em>.
    
    .row.justify-content-center.mb-5
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-7.h-100
          .p-4
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema3/11.svg", style="max-width: 90px").mx-auto
              .col-lg
                h2 Empatía y juicio moral
                p.mb-0 Para equilibrar intereses individuales y organizacionales..
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-7.h-100
          .p-4
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema3/12.svg", style="max-width: 90px").mx-auto
              .col-lg
                h2 Colaboración transversal
                p.mb-0 Para diseñar y aplicar políticas éticas.

    h2(data-aos="fade-left").mb-5 Caso práctico: selección automatizada y dilema ético en la empresa LogixGroup

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/13.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") LogixGroup es una empresa nacional de servicios logísticos que decide modernizar su proceso de selección de personal utilizando un sistema de inteligencia artificial (IA) para filtrar hojas de vida de postulantes. Este software evalúa palabras claves, experiencias laborales y niveles de educación para determinar si un candidato es apto para avanzar a la entrevista.
  
        .bg-color-5.px-4.py-5.mb-3(data-aos="fade-left")
          p Luego de seis meses de uso, el equipo de recursos humanos nota un patrón preocupante: casi el 90 % de los seleccionados son hombres entre 25 y 35 años. Candidatas con igual o mayor preparación académica y experiencia no están siendo consideradas. 
          p.mb-0 Al revisar el algoritmo, descubren que fue entrenado con los datos históricos de la empresa, los cuales reflejan un sesgo de género no intencional, debido a que en el pasado hubo una mayoría de hombres contratados en cargos operativos.


    .row.align-items-center
      .col-lg-auto
        img(src="@/assets/curso/tema3/14.svg", style="max-width: 90px").mx-auto
      .col-lg
        h2(data-aos="fade-left") Dilema ético:
        p.mb-5 ¿Deben continuar usando el sistema con ese sesgo, sabiendo que mejora la eficiencia del proceso, o deben intervenir, arriesgando tiempos y costos?
        h2(data-aos="fade-left") Decisión tomada:
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8.p-4(data-aos="fade-left").mb-3.mb-lg-0
                p El equipo directivo, junto con el área de ética corporativa, deciden:
                div.ms-3
                  p.d-flex <b>1</b>.	Detener temporalmente el uso de la herramienta automatizada.
                  p.d-flex <b>2</b>.	Revisar y reconfigurar el algoritmo con datos más diversos y neutrales.t
                  p.d-flex <b>3</b>.	Implementar un doble filtro: la IA hará un preanálisis, pero siempre será revisado por un analista humano antes de rechazar o aprobar una hoja de vida.
                  p.d-flex <b>4</b>.	Capacitar al equipo en sesgos algorítmicos y éticos en RR. HH.

              .col-lg-4(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema3/15.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    h2(data-aos="fade-left") Resultado:
    p.mb-5 A los tres meses, LogixGroup logró mayor diversidad en sus contrataciones, fortaleció su reputación como empresa inclusiva y aumentó la satisfacción de los aspirantes. Además, los procesos se volvieron más justos sin perder eficiencia.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/16.png", data-aos="zoom-in")
      .col-lg-8
        h2(data-aos="fade-left") Lecciones:
    
        .bg-color-6.p-4.mb-3(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Las herramientas tecnológicas requieren supervisión ética.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Los datos pasados pueden reproducir inequidades si no se revisan críticamente.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 La equidad y la justicia deben estar por encima de la eficiencia cuando se trata del talento humano.
        p Las decisiones éticas también fortalecen la marca empleadora y la cultura organizacional.

    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Responsabilidad social empresarial y gestión del talento

    p.mb-5 La Responsabilidad Social Empresarial (RSE) se interpreta como una perspectiva integral de la empresa, que fusiona ética, acciones sociales y protección del medio ambiente con la administración del capital humano, con el objetivo de producir un efecto positivo sostenible en la comunidad y robustecer el compromiso interno.

    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/17.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="Integración de RSE en la gestión del talento")
            p La administración del talento se mejora al incorporar acciones de Responsabilidad Social Empresarial: ventajas laborales, responsabilidades, posibilidades de voluntariado y capacitación en sostenibilidad. Estas iniciativas no solo mejoran la ética institucional, sino que también promueven un compromiso genuino con los valores organizacionales.
    
          .div(titulo="Impacto en la satisfacción y retención")
            p Una investigación en compañías de comercio internacional demuestra que políticas inclusivas, como la igualdad de oportunidades y el bienestar en el trabajo, son apreciadas por los trabajadores y ayudan a disminuir la rotación y potenciar la imagen de la empresa. Además, la RSE fortalece la cultura organizacional y favorece ambientes de trabajo más justos.
          .div(titulo="Desarrollo de habilidades blandas")
            p La implementación de RSE permite que el talento desarrolle competencias como:
            ul.lista-ul--color.ms-3
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Empatía y colaboración</b>, al participar en proyectos comunitarios.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Liderazgo ético,</b> al gestionar iniciativas con impacto social.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Comunicación efectiva,</b> al interactuar con diferentes grupos de interés.
            p Estas habilidades son cruciales para forjar profesionales responsables, adaptativos y socialmente conscientes.
    
    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/18.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 La Responsabilidad Social Empresarial (RSE), se manifiesta como un componente estratégico en la gestión del talento humano, contribuyendo a la sostenibilidad organizacional, la ética corporativa y el desarrollo integral del trabajador. Al integrar acciones sociales, ambientales y éticas, se fortalece la cultura organizacional y se potencian habilidades blandas clave como empatía, liderazgo ético y trabajo colaborativo. 
    
    .titulo-figura.mb-4
      h5 Tabla 5.
      span Área de RSE aplicada, acción e impacto
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr
            th.bg-color-2.text-center Área de RSE aplicada
            th.bg-color-2.text-center Acción implementada
            th.bg-color-2.text-center Impacto en el talento
        tbody
          tr
            td Bienestar y salud laboral
            td Charlas de salud mental y pausas activas
            td Aumenta el bienestar y reduce el estrés laboral
          tr.bg-color-sintesis
            td Formación en sostenibilidad
            td Talleres sobre reciclaje y uso responsable de recursos
            td Desarrolla conciencia y trabajo en equipo
          tr
            td Voluntariado comunitario
            td Jornadas de limpieza de ríos con voluntarios de la empresa
            td Fomenta la empatía y sentido de pertenencia social

    h2(data-aos="fade-left") Matriz FODA: Gestión del Talento Humano y Responsabilidad Social Empresarial
    p.mb-5 La matriz FODA permite analizar las Fortalezas, Oportunidades, Debilidades y Amenazas en la gestión del talento con enfoque en la responsabilidad social empresarial. A continuación, se presenta una matriz con ejemplos prácticos que relacionan estos elementos con situaciones comunes en las organizaciones:

    .titulo-figura.mb-4
      h5 Tabla 6.
      span Ejemplo aplicado
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr
            th.bg-color-2.text-center Categoría
            th.bg-color-2.text-center Ejemplo aplicado
        tbody
          tr
            td Fortalezas
            td Políticas inclusivas en contratación, programas de bienestar integral, liderazgo ético y comunicación organizacional transparente
          tr.bg-color-sintesis
            td Oportunidades
            td Participación en redes de sostenibilidad, atracción de talento consciente, integración de ODS en políticas de RR. HH.
          tr
            td Debilidades
            td Falta de indicadores sociales claros, baja capacitación en ética para líderes, escasa participación de empleados en decisiones de RSE
          tr.bg-color-sintesis
            td Amenazas
            td Resistencia al cambio cultural, percepción de RSE como gasto, políticas gubernamentales restrictivas o ausencia de incentivos


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://doi.org/10.31948/esrii.v8i2.4602 " target="_blank" rel="noopener noreferrer") Fajardo Mojica, D. Y., Grijalba Montilla, A. J., Duque Cifuentes, J. S., & Chavez Martínez, J. L. (2024). Principios éticos y gestión responsable del talento humano en administración de salud. Excelsium Scientia Rev. Int. Investig., 8(2), 31–36. 



            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://revistas.ceipa.edu.co/index.php/perspectiva-empresarial/article/view/851 " target="_blank" rel="noopener noreferrer") Perspectiva Empresarial. (2023). Gestión empresarial del talento humano desde la política de responsabilidad social. Revista Perspectiva Empresarial.  

 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://es.wikipedia.org/wiki/Cultura_organizacional" target="_blank" rel="noopener noreferrer") Wikipedia. (2025). Cultura organizacional.  


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://revista.uisrael.edu.ec/index.php/re/article/view/718" target="_blank" rel="noopener noreferrer") Méndez Bravo, J. C., Bolaños Piedrahita, C. J., & Méndez Bravo, M. A. (2023). La cultura organizacional y su efecto en el desempeño empresarial. Revista Empresa e Investigação, 4(1).  


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://ve.scielo.org/scielo.php?pid=S2739-00392025000300172" target="_blank" rel="noopener noreferrer") Meza-Lizarraga, Y. S., Alva-Palacios-Gómez, L. E., & Pérez-Lizarraga, S. F. (2025). Cultura organizacional y desempeño laboral en trabajadores de empresas automotrices. Revista GEP, 7(1).  

 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://evalutime.com/es/articulos/articulo-casos-practicos-de-dilemas-eticos-en-rrhh-lecciones-aprendidas-y-su-impacto-en-la-cultura-organizacional-185859" target="_blank" rel="noopener noreferrer") Evalutime. (2025). Casos prácticos de dilemas éticos en RRHH.  

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://revistas.umariana.edu.co/index.php/ExcelsiumScientia/article/download/4602/4733" target="_blank" rel="noopener noreferrer") Revista Excelsium Scientia. (2024). Principios éticos y gestión responsable del talento humano en administración de salud.  


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://arxiv.org/abs/2008.00371 arxiv.org" target="_blank" rel="noopener noreferrer") Páez, A. & Ramírez-Bustamante, N. (2020). Análisis jurídico de la discriminación algorítmica en los procesos de selección laboral. arXiv.  


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.cemefi.org/centrodedocumentacion/1426.pdf" target="_blank" rel="noopener noreferrer") CEMEFI. (2021). Responsabilidad Social Empresarial: guía de principios y políticas. Centro Mexicano para la Filantropía.  

 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.researchgate.net/publication/373348985_RESPONSABILIDAD_SOCIAL_EMPRESARIAL_Y_SU_IMPACTO_EN_LAS_EMPRESAS" target="_blank" rel="noopener noreferrer") Montoya Chavarry, D. A., & Chilcon Sosa, A. S. (2023). Responsabilidad social empresarial y su impacto en las empresas. Revista Horizonte Empresarial, 10(1), 22–32.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.researchgate.net/publication/388759452_Impacto_de_la_RSE_y_Gestion_Sostenible_de_Recursos_Humanos_en_la_Sostenibilidad_Empresarial" target="_blank" rel="noopener noreferrer") Ramón-Ramón, D. I. (2024). Impacto de la RSE y gestión sostenible de recursos humanos en la sostenibilidad empresarial. Revista RNEEV, 19(2), 119–134. 


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=xIcpoxT0WQM  " target="_blank" rel="noopener noreferrer") EUDE Business School (2021, 12 de marzo). La responsabilidad empresarial (RSC), como una parte de sostenibilidad. [Vídeo] YouTube.         



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema3',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
