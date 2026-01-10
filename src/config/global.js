export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Fundamentos de la administración del capital humano',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Fundamentos teóricos de la gestión del capital humano',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Teorías clásicas y contemporáneas de la administración del talento humano',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Modelos de gestión por competencias',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Evolución y tendencias en la gestión del capital humano',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'El capital humano como eje estratégico en las organizaciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Importancia del capital humano en la estrategia organizacional',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Procesos de adquisición, desarrollo y retención del talento',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Indicadores de gestión del capital humano y su impacto en la sostenibilidad',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Indicadores de gestión del capital humano y su impacto en la sostenibilidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Cultura organizacional: conceptos, tipos e impacto en el desempeño ',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'Ética en la gestión del capital humano: dilemas y principios',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Responsabilidad social empresarial y gestión del talento',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Liaudat, S. (2021). <em>Stevia: conocimiento, propiedad intelectual y acumulación de capital</em>. Prometeo Libros.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/189040',
    },
    {
      referencia:
        'Hidalgo Gallardo, A. & Hidalgo Gallardo, R. L. (2019). <em>Comercio, medio ambiente y capital intelectual verde, una acción trifásica para México: Caso Hidalgo</em>. Plaza y Valdés.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/129833',
    },
    {
      referencia:
        'Prieto Moreno, B. & Borrás Atiénzar, F. (2020). <em>Modelos para el análisis, medición y evaluación del capital intelectual en las universidades</em>. Editorial Universitaria.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/127967',
    },
    {
      referencia:
        'Pérez Rodríguez, M. D. (Coord.). (2019). <em>Prevención del blanqueo de capitales y de la financiación del terrorismo</em>. Editorial ICB.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/227240',
    },
    {
      referencia:
        'Serrano Junco, C. L. & Borda Fernández, O. A. (2020). <em>Gestión del conocimiento y administración sostenible en las empresas del sector de Curtiembre</em>. Corporación Universitaria Minuto de Dios.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/149768',
    },
    {
      referencia:
        'Belly, P. (2019). <em>Así se gestiona el conocimiento: experiencias, testimonios y casos prácticos de implementación en empresas iberoamericanas</em>. Pluma Digital Ediciones.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/121002',
    },
    {
      referencia:
        'García Lirios, C., Bermúdez Ruíz, G. & Correón Guillén, J. (2023). <em>Gobernanza corporativa: identidad, reputación e imagen en torno a la formación del capital intelectual</em>. Revista Colombiana de Ciencias Administrativas, 5(1).',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/234903',
    },
    {
      referencia:
        'Ortiz Isaza, L. & Perdomo González, L. (2020). <em>Factores destacados en la gestión del talento humano para conseguir los objetivos estratégicos de la empresa S&G Administración PH SAS</em>. Revista Colombiana de Ciencias Administrativas, 2(2), 59–77.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/187928',
    },
    {
      referencia:
        'Cubillos Calderón, C. H., Cáceres Mayorga, J. X. & Montealegre González, J. V. (2022). <em>Prácticas de talento humano en pequeñas organizaciones</em>. Sello Editorial Universidad del Tolima.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/228400',
    },
    {
      referencia:
        'Ariza Aguilera, D. A. (2019). <em>El talento humano como factor clave en el éxito de los proyectos</em>. Editorial Universidad EAN.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/250972',
    },
    {
      referencia:
        'García Rubiano, M., Montenegro Timón, J. D. & Babativa Novoa, A. (2024). <em>Horizontes laborales: exploración de estrategias innovadoras en la gestión de talento humano</em>. Universidad Católica de Colombia.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/279552',
    },
    {
      referencia:
        'Castillo, C. K. A., Córdova, T. N. J. & Jaramillo, Q. P. A. (2024). <em>Impacto de la responsabilidad laboral en la gestión del talento humano para incrementar la productividad</em>. Instituto Superior Tecnológico Sudamericano.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/279457',
    },
    {
      referencia:
        'Manzano Díaz, A. G. (2024). <em>Formación de competencias en la educación superior y el perfil profesional en el área de talento humano</em>. Revista Colombiana de Ciencias Administrativas, 6(1).',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/280129',
    },
    {
      referencia:
        'Rodríguez Jover, A. (2022). <em>Aplicaciones informáticas de administración de Recursos Humanos</em>. IC Editorial.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/226725',
    },
    {
      referencia:
        'Peña Lapeira, C. J. & Rey Romero, M. R. (2021). <em>Las competencias blandas en el emprendimiento</em>. Corporación Universitaria Minuto de Dios.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/231775',
    },
    {
      referencia:
        'De Arco Paternina, L. K., Santana Galindo, P. V. & Gómez, Y. V. (2022). <em>Habilidades blandas para el profesional del siglo XXI</em>. Corporación Universitaria Minuto de Dios.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/232097',
    },
    {
      referencia:
        'González Molina, M. G. & Calixto Sandoval, N. P. (2024). <em>Desarrolla tus habilidades y potencia tu vida</em>. Editorial Politécnico Grancolombiano.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/279920',
    },
    {
      referencia:
        'García González, J. (2020). <em>Gestión del capital intelectual en las organizaciones</em>. Contaduría y Administración, 62(1), 184–206.',
      link:
        'https://www.researchgate.net/publication/346846189_Gestion_del_Capital_Intelectual_en_las_Organizaciones',
    },
    {
      referencia:
        'Instituto Nacional de Administración Pública – INAP. (2021). <em>Modelo de gestión por competencias</em>.',
      link:
        'https://inap.gob.do/wp-content/uploads/2021/05/ModeloGestionCompetenciaFinal.pdf',
    },
    {
      referencia:
        'Ministerio TIC. (2019). <em>Plan estratégico de talento humano 2019–2022</em>.',
      link:
        'https://www.mintic.gov.co/portal/715/articles-135689_plan_estrategico_talento_humano_2022.pdf',
    },
    {
      referencia:
        'Redalyc. (2020). <em>El capital humano, otro activo de su empresa</em>.',
      link: 'https://www.redalyc.org/pdf/2654/265420471004.pdf',
    },
    {
      referencia:
        'Ciladio. (2023). <em>Talento humano: reclutamiento y selección de personal digital y presencial</em>.',
      link:
        'https://ciladi.org/wp-content/uploads/T.-H.-RECL.-Y-SELEC.-VIRTUAL-3-05-2023.pdf',
    },
    {
      referencia:
        'Candriam. (2024). <em>El capital humano en las pymes: Parte II</em>.',
      link:
        'https://www.candriam.com/siteassets/_assets/01-insights/2024/03/smid/2024_03_engagement_smid-ii_sp.pdf',
    },
    {
      referencia:
        'Vergara-Romero, A., Márquez Sánchez, F., Sorhegui-Ortega, R. & Olalla-Hernández, A. (2021). <em>Capital humano: actor central para la sostenibilidad organizacional</em>. Revista Venezolana de Gerencia, 26(93), 297–307.',
      link: 'https://www.redalyc.org/journal/290/29066223019/29066223019.pdf',
    },
    {
      referencia:
        'Universidad Ecotec. (2023). <em>La cultura organizacional como factor clave para la sostenibilidad empresarial</em>.',
      link:
        'https://ecotec.edu.ec/content/uploads/investigacion/libros/cultura-organizacional.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Asertividad',
      definicion:
        'Capacidad de expresar opiniones, deseos y necesidades de forma clara y respetuosa.',
    },
    {
      termino: 'Clima organizacional',
      definicion:
        'Ambiente interno de la empresa percibido por los empleados, influye en su desempeño y bienestar.',
    },
    {
      termino: 'Compromiso',
      definicion:
        'Nivel de involucramiento y sentido de pertenencia del trabajador con la organización.',
    },
    {
      termino: 'Comunicación organizacional',
      definicion:
        'Proceso mediante el cual fluye la información dentro de la empresa entre los diferentes niveles.',
    },
    {
      termino: 'Confidencialidad',
      definicion:
        'Principio ético que implica proteger la información sensible del talento humano.',
    },
    {
      termino: 'Cultura organizacional',
      definicion:
        'Conjunto de valores, creencias y normas compartidas que definen el comportamiento en una organización.',
    },
    {
      termino: 'Desempeño',
      definicion:
        'Grado en que una persona cumple con las responsabilidades y objetivos asignados en su cargo.',
    },
    {
      termino: 'Diversidad',
      definicion:
        'Reconocimiento y valoración de las diferencias individuales en el entorno laboral.',
    },
    {
      termino: 'Empatía',
      definicion:
        'Capacidad de comprender y compartir los sentimientos de otros, clave en la gestión humana.',
    },
    {
      termino: 'Equidad',
      definicion:
        'Tratamiento justo e imparcial en el acceso a oportunidades, compensaciones y desarrollo.',
    },
    {
      termino: 'Formación continua',
      definicion:
        'Proceso educativo permanente que busca mejorar las competencias del trabajador.',
    },
    {
      termino: 'Gestión del talento',
      definicion:
        'Conjunto de prácticas para atraer, desarrollar y retener a los empleados con alto potencial.',
    },
    {
      termino: 'Inclusión',
      definicion:
        'Práctica organizacional que garantiza participación equitativa sin discriminación.',
    },
    {
      termino: 'Liderazgo',
      definicion:
        'Capacidad de influir, motivar y guiar a un equipo hacia el logro de objetivos.',
    },
    {
      termino: 'Motivación',
      definicion:
        'Impulso interno que dirige el comportamiento hacia metas organizacionales.',
    },
    {
      termino: 'Responsabilidad social',
      definicion:
        'Compromiso de la organización con el bienestar social, ambiental y económico.',
    },
    {
      termino: 'Retención de talento',
      definicion:
        'Estrategias para mantener a los empleados clave dentro de la organización.',
    },
    {
      termino: 'Sostenibilidad',
      definicion:
        'Capacidad de la organización para operar sin comprometer recursos futuros.',
    },
    {
      termino: 'Valores corporativos',
      definicion:
        'Principios fundamentales que guían el comportamiento y la toma de decisiones en la empresa.',
    },
    {
      termino: 'Ética laboral',
      definicion:
        'Conjunto de principios morales que regulan el comportamiento en el trabajo.',
    },
  ],
}
