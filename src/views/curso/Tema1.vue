<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Fundamentos teóricos de la gestión del capital humano'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-5.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.order-2
          figure
            img(src='@/assets/curso/tema1/1.png', alt='')
        .col-lg.order-1.mb-3.mb-lg-0
          .p-4
            p.mb-0(data-aos="fade-up") La administración del capital intelectual se ha consolidado como una función estratégica en las organizaciones, dado que permite convertir el conocimiento y los activos intangibles en ventaja competitiva y desarrollo sostenible. Esta unidad profundiza en sus teorías y prácticas, incluyendo el papel de las habilidades blandas como facilitadoras de procesos colaborativos, clave para maximizar el valor del capital intelectual.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") El capital intelectual integra tres dimensiones: humano, estructural y relacional. La administración del saber, definida como la generación, recopilación, cambio y propagación del conocimiento, es el principal instrumento para su evolución. La administración del saber se refiere al conjunto de procesos que promueven el crecimiento del capital intelectual de la compañía.
    
        .bg-color-1.p-4.mb-5(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La evidencia empírica moderna respalda esta interrelación: por ejemplo, en universidades mexicanas, la gestión del conocimiento fortalece el capital intelectual, lo que mejora su desempeño institucional. Asimismo, en el ámbito empresarial, procesos adecuados de capital intelectual se asocian positivamente, con la productividad y la capacidad de innovación.
        p Esta unidad promoverá en el estudiante la capacidad para explicar los conceptos claves del capital intelectual, aplicar modelos teóricos en situaciones reales y reflexionar críticamente sobre diferentes abordajes de gestión. Además, se destacan las habilidades blandas, comunicación, trabajo en equipo, pensamiento crítico, como elementos esenciales para la implementación práctica y efectiva del capital intelectual.

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Teorías clásicas y contemporáneas de la administración del talento humano
    
    p.mb-5 La evolución de la administración del talento humano se explica inicialmente a partir de las teorías clásicas, como el cientificismo de Taylor, el enfoque estructural de Fayol y la dimensión humana propuesta por Mayo.

    .bg-full-width.bg-fondo-1
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/4.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="13.5%" y="36.5%" numero="+")
                h5 1. Taylor y la administración científica
                p Frederick W. Taylor impulsó un modelo de trabajo mecanicista con el objetivo de optimizar la eficiencia a través de la división sistemática de tareas, cronometraggio e incentivos por rendimiento. Aunque su enfoque es técnico, invita a reflexionar sobre la colaboración entre líder y operario, fomentando la empatía en supervisión y la comunicación clara.
    
              .bg-color-white.box-shadow.p-3(x="29%" y="21%" numero="+")
                h5 2. Fayol y la administración estructural
                p Henri Fayol planteó cinco funciones gerenciales (planificar, organizar, dirigir, coordinar y controlar) y 14 principios de administración, entre ellos 'espíritu de grupo'. Subraya la importancia del trabajo en equipo y el liderazgo colaborativo, incentivando al estudiante a desarrollar capacidad de coordinar grupos y promover la cohesión.
    
              .bg-color-white.box-shadow.p-3(x="58%" y="18%" numero="+")
                h5 3. Mayo y el enfoque de las relaciones humanas
                p Elton Mayo, a través de los estudios de Hawthorne, evidenció que elementos sociales como la moral y la pertenencia colectiva, aumentan la productividad. Reconocer estas dimensiones favorece habilidades de comunicación, escucha activa y comprensión emocional dentro del equipo.
    
              .bg-color-white.box-shadow.p-3(x="73%" y="35%" numero="+")
                h5 4. Teoría X y Teoría Y
                p Douglas McGregor propuso que la Teoría X asume que el trabajador es reacio al esfuerzo, mientras que la Teoría Y confía en la motivación intrínseca del colaborador. Promueve el liderazgo facilitador, donde el estudiante puede aplicar habilidades de delegación, fomento de autonomía y motivación positiva.
    
              .bg-color-white.box-shadow.p-3(x="86.5%" y="41%" numero="+")
                h5 5. Gestión por competencias y capital intelectual
                p En contextos más recientes, se abordó la administración del talento humano desde la perspectiva del capital intelectual y el dominio de competencias necesarias para el éxito organizacional. Estas teorías favorecen el pensamiento crítico para identificar las competencias relevantes y la capacidad de adaptarlas a diferentes situaciones, así como la comunicación para compartir conocimiento.
    
    .bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/5.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Se sugiere al estudiante aplicar estas teorías en análisis de casos reales: por ejemplo, diagnosticar si una organización opera bajo la Teoría X o Y, proponer estrategias de gestión por competencias para mejorar un proceso de reclutamiento o diseño de un plan de motivación basado en el enfoque humano de Mayo.
    
    .titulo-figura.mb-4
      h5 Tabla 1.
      span Síntesis: teorías clásicas y contemporáneas de la administración del talento humano
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr
            th.bg-color-2.text-center Teoría
            th.bg-color-2.text-center Enfoque principal
            th.bg-color-2.text-center Habilidades blandas a desarrollar
        tbody
          tr
            td Taylor (científica)
            td Eficiencia sistemática
            td Empatía, comunicación clara
          tr.bg-color-sintesis
            td Fayol (estructural)
            td Organización administrativa
            td Liderazgo, coordinación
          tr
            td Mayo (relaciones humanas)
            td Relaciones sociales
            td Escucha activa, cohesión
          tr.bg-color-sintesis
            td McGregor (X/Y)
            td Motivación intrínseca y extrínseca
            td Delegación, motivación
          tr
            td Capital intelectual
            td Conocimiento y habilidades
            td Pensamiento crítico y adaptación

    
    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Modelos de gestión por competencias
    
    p.mb-5 La gestión por competencias representa una herramienta clave para alinear el talento humano con los objetivos estratégicos de las organizaciones.

    .bg-full-width.bg-color-2.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Modelos de gestión por competencias 
            p.mb-4(data-aos="fade-right") En el PDF <b>Modelos de gestión por competencias</b>, se presentan conceptos fundamentales, enfoques estructurados y casos prácticos que permiten comprender su aplicación efectiva en contextos reales. Este recurso busca fortalecer en los estudiantes la capacidad de identificar, desarrollar e integrar competencias tanto técnicas como blandas, promoviendo así una gestión del talento más eficiente y sostenible.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Modelos de gestión por competencias .
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/6.png', alt='')
    
    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Evolución y tendencias en la gestión del capital humano
    
    p.mb-5 La gestión del capital humano ha pasado de ser una función operativa a convertirse en un aliado estratégico que potencia el rendimiento organizacional y su capacidad de adaptación. Su evolución refleja una transformación profunda que requiere competencias tanto técnicas como humanas.

    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/7.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="Evolución histórica")
            p Desde sus orígenes en la gestión del personal, donde se consideraban los empleados como recursos administrativos, ha evolucionado hacia una gestión centrada en el talento como herramienta de innovación. Al pasar de un enfoque mecánico a uno estratégico, se reconoció el valor de la creatividad, el conocimiento y la capacidad de aprendizaje continuo como componentes del capital humano.
    
          .div(titulo="Tendencias actuales")
            p Aprendizaje permanente (“lifelong learning”). La necesidad de adaptación a la automatización e IA ha impulsado el aprendizaje continuo como fundamento. Esto desarrolla pensamiento analítico, automotivación y resiliencia.
            p Trabajo sin fronteras. El trabajo ya no está limitado por horarios o ubicación. Se promueven equipos distribuidos, colaboración digital y propósito compartido. Fomenta la comunicación asertiva, trabajo en equipo virtual y gestión de la incertidumbre.
            p Centralidad de las habilidades blandas. La comunicación, el trabajo en equipo y el pensamiento crítico son esenciales para mejorar el clima organizacional y la productividad. Se desarrolla empatía, inteligencia social y emocional.

          .div(titulo="Impacto tecnológico")
            p La pandemia y la digitalización, aceleraron la adopción de tecnologías emergentes. Sin embargo, la verdadera ventaja competitiva radica en gestionar el talento con enfoque humano: líderes que combinan habilidades digitales con inteligencia emocional mantienen equipos comprometidos.
    
    h2(data-aos="fade-left").mb-5 Caso práctico: gestión del capital humano en INTECSOFT S.A.S.

    .bg-color-6.mb-5.brd-1
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-9.p-4(data-aos="fade-left").order-2
                p INTECSOFT S.A.S., una empresa del sector tecnológico con sede en Bogotá, enfrentó durante el año 2022 una baja en los índices de productividad y un incremento del 18 % en la rotación de su personal técnico. Tras llevar a cabo un diagnóstico interno, se identificó una desconexión entre los líderes de equipo y los colaboradores, en gran parte por la falta de habilidades blandas y espacios de retroalimentación efectiva.
                p.mb-0 La gerencia general, junto con el área de talento humano, decidió implementar un plan de fortalecimiento de capital humano centrado en tres pilares: formación en habilidades blandas, implementación del trabajo híbrido y una estrategia de aprendizaje continuo. Se realizaron talleres sobre liderazgo empático, comunicación asertiva y resolución de conflictos. Además, se promovió la autogestión del aprendizaje a través de plataformas digitales.

              .col-lg-3(data-aos="zoom-in").order-1.mb-3.mb-lg-0
                img.img-fluid(src='@/assets/curso/tema1/8.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/9.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Como resultado, al cierre del 2023, la empresa logró reducir su rotación al 9 %, mejorar en un 25 % la productividad por proyecto y evidenciar una mejora significativa en el clima laboral. El caso de INTECSOFT demuestra cómo una gestión estratégica y humana del talento impacta directamente en la sostenibilidad organizacional y la retención del conocimiento.
    
    .titulo-figura.mb-4
      h5 Tabla 2.
      span Evolución/Tendencia
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr
            th.bg-color-2.text-center Evolución / Tendencia
            th.bg-color-2.text-center Descripción breve
            th.bg-color-2.text-center Habilidades blandas desarrolladas
        tbody
          tr
            td Gestión del personal, talento estratégico
            td Transición de administración operativa a gestión de talento creativo e innovador
            td Adaptabilidad, pensamiento estratégico
          tr.bg-color-sintesis
            td Aprendizaje permanente
            td Cultura de formación continua ante cambios tecnológicos
            td Resiliencia, curiosidad, automotivación
          tr
            td Trabajo sin fronteras
            td Equipos virtuales, propósito compartido y flexibilidad laboral
            td Comunicación virtual, trabajo en equipo remoto, flexibilidad
          tr.bg-color-sintesis
            td Centralidad de habilidades blandas
            td Clave para clima laboral, productividad y retención
            td Empatía, escucha activa, pensamiento crítico


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://es.wikipedia.org/wiki/Capital_intelectual" target="_blank" rel="noopener noreferrer") Wikipedia. (2025). Capital intelectual.  

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="http://www.redalyc.org/articulo.oa?id=456063405007 " target="_blank" rel="noopener noreferrer") Ibarra-Cisneros, M. A., Vela-Reyna, J. B., & Ríos-Nequis, E. I. (2020). Capital intelectual, gestión del conocimiento y desempeño en universidades. Investigación Administrativa, 49(126).  


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.researchgate.net/publication/346846189_Gestion_del_Capital_Intelectual_en_las_Organizaciones" target="_blank" rel="noopener noreferrer") García González, J. (2020). Gestión del Capital Intelectual en las Organizaciones [Acceso abierto]. Contaduría y Administración, 62(1), 184-206.  


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://revistas.up.ac.pa/index.php/saberes_apudep/article/view/2992" target="_blank" rel="noopener noreferrer") Almengor, S. (2022). Desarrollo de habilidades blandas para el aumento de la productividad en el talento humano. Revista Saberes APUDEP, 5(2), 61–75. Disponible en 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.researchgate.net/publication/320293050_Gestion_por_Competencias_Laborales_en_el_Contexto_del_Proceso_de_Cambios_Politicos_y_Economicos_en_Cuba" target="_blank" rel="noopener noreferrer") Vizcaíno Solano, G., Martes Rodríguez, L., Fontalvo Cerpa, W., & Simancas Trujillo, R. (2016). Gestión del talento humano por competencias para el desarrollo de capacidades. Revista Innovar, 27(66).  


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.researchgate.net/publication/320293050_Gestion_por_Competencias_Laborales_en_el_Contexto_del_Proceso_de_Cambios_Politicos_y_Economicos_en_Cuba" target="_blank" rel="noopener noreferrer") Sánchez Rodríguez, A., Martínez Vivar, R., & Moreno Lázaro, J. (2017). Gestión por competencias laborales en el contexto de cambios económicos y políticos. Revista Innovar, 27(66).  


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://doi.org/10.56712/latam.v5i1.1653" target="_blank" rel="noopener noreferrer") Paiva de Báez, G. I. (2024). Evolución histórica de la gestión del talento humano, año 2023. LATAM Revista Latinoamericana de Ciencias Sociales y Humanidades, 5(1), 992–1006.  


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.deloitte.com/latam/es/services/consulting/research/tendencias-globales-de-capital-humano-2023.html " target="_blank" rel="noopener noreferrer") Deloitte. (2023). Tendencias globales de capital humano 2023.  



            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=AhvwPVBj7G8   " target="_blank" rel="noopener noreferrer") Universidad Continental (2021, 22 de agosto). Analítica predictiva para recursos humanos. [Vídeo] YouTube.        



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
