"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PoliticasPacientes() {
  const router = useRouter();

  return (
    <section className="pt-20 pb-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto space-y-16">
        <button
          onClick={() => router.push("/pages/pacientes/privacidad-datos")}
          className="mb-10 inline-flex items-center gap-2 bg-[#0061A6]/10 
                     text-[#0061A6] px-5 py-2 rounded-full font-medium
                     hover:bg-[#0061A6]/20 transition cursor-pointer"
        >
          <ArrowLeft size={18} />
          Volver
        </button>

        {/* TITULO PRINCIPAL */}
        <h3 className="text-3xl md:text-4xl font-bold text-[#0061A6] text-center">
          Aviso de Privacidad y Protección de Datos Personales para Pacientes
        </h3>

        {/* INDICE */}
        <div className="bg-white p-8 rounded-3xl shadow-md border-l-4 border-[#008D36] text-justify">
          <h3 className="text-2xl font-bold text-[#008D36] mb-4">INDICE</h3>

          <ul className="list-decimal list-inside space-y-2 text-gray-700">
            <li><a href="#section1" className="hover:text-[#0061A6]">¿Quién es el responsable del tratamiento de sus datos personales?</a></li>
            <li><a href="#section2" className="hover:text-[#0061A6]">¿Cómo ejercer sus derechos? ¿Cómo lo contactamos?</a></li>
            <li><a href="#section3" className="hover:text-[#0061A6]">¿Qué tipos y categorías de datos personales tratamos?</a></li>
            <li><a href="#section4" className="hover:text-[#0061A6]">¿Con qué finalidad y base legal tratamos sus datos personales?</a></li>
            <li><a href="#section5" className="hover:text-[#0061A6]">¿Con quién compartimos sus datos personales?</a></li>
            <li><a href="#section6" className="hover:text-[#0061A6]">¿Cómo y cuanto tiempo conservamos sus datos personales?</a></li>
            <li><a href="#section7" className="hover:text-[#0061A6]">¿Se puede modificar este Aviso?</a></li>
          </ul>

        </div>

        {/* ================= SECCIÓN 1 ================= */}
        <div id="section1" className="space-y-6 text-justify">
          <h3 className="text-2xl font-bold text-[#0061A6]">
            1.- ¿Quién es el responsable del tratamiento de sus datos personales?
          </h3>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
                INTERHOSPITAL S.A. (en adelante, “INTERHOSPITAL”) es el responsable del tratamiento de los datos personales conforme lo establecido en este Aviso de Privacidad para pacientes (en adelante, «Aviso»). Valoramos su privacidad por lo que, queremos que usted viva la mejor experiencia para disfrutar de los servicios que ofrecemos.
            </p>

            <p>
                Mediante un lenguaje claro y sencillo le explicamos qué datos personales tratamos, al igual que cómo y por qué los recopilamos, almacenamos y compartimos. También, le informamos sobre los derechos que usted tiene como titular, los compromisos de privacidad que INTERHOSPITAL asume frente a usted en su calidad de paciente y las consecuencias de la entrega de sus datos personales. Es preciso indicar que, si existe negativa por parte de usted para la entrega de ciertos datos personales INTERHOSPITAL se puede ver imposibilitado de brindarle algunos servicios.
            </p>

            <p>
                Las condiciones que regulan la relación que usted mantiene con INTERHOSPITAL, se notifican oportunamente y se encuentran en nuestros formularios, solicitudes, contratos, y otros documentos que suscriban los pacientes. A continuación, los datos de contacto de INTERHOSPITAL:
            </p>

            <ul className="list-disc list-inside space-y-1">
              <li><strong>Dirección:</strong> AV. DEL BOMBERO s/n VIA A LA COSTA</li>
              <li><strong>Número de Teléfono:</strong> (04) 3750 000</li>
              <li><strong>Correo electrónico:</strong> datospersonales@interhospital.com.ec</li>
            </ul>
          </div>
        </div>

        {/* ================= SECCIÓN 2 ================= */}
        <div id="section2" className="space-y-6 text-justify">
          <h3 className="text-2xl font-bold text-[#0061A6]">
            2.- ¿Cómo ejercer sus derechos? ¿Cómo lo contactamos?
          </h3>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              La Ley Orgánica de Protección de Datos Personales (en adelante, “LOPDP”) otorga derechos a los titulares. INTERHOSPITAL ofrece los canales para que se puedan ejercer tales derechos. Sin perjuicio de lo dispuesto en la LOPDP, los derechos que le asisten son:
            </p>

            <ul className="list-disc list-inside space-y-3">
              <li><strong>Derecho a la información:</strong> ser informado sobre sus datos personales que disponemos, cómo y para qué los tratamos, el tiempo que los conservaremos, entre otros asuntos regulados por la ley.</li>
              <li><strong>Derecho de acceso:</strong> conocer y a obtener, gratuitamente, de INTERHOSPITAL acceso a todos sus datos personales.</li>
              <li><strong>Derecho de rectificación y actualización:</strong> rectificación y actualización de cualquiera de sus datos personales si estos estuvieran incompletos o fueran inexactos. Recuerde que INTERHOSPITAL recopila los datos personales directamente de usted, por lo que, si proporciona datos inexactos o erróneos no es responsabilidad de INTERHOSPITAL la exactitud o actualización de dichos datos. Lo antes mencionado tiene una particularidad, al momento de tratarse de datos de salud existen obligaciones legales que prohíben alterar dicha información. Desde luego se analizará caso por caso y dependerá del tipo de dato personal a ser rectificado o actualizado.</li>
              <li><strong>Derecho de eliminación:</strong> usted puede solicitar la supresión de sus datos personales en las situaciones previstas por la ley. Lo antes mencionado tiene una particularidad, al momento de tratarse de datos de salud existen obligaciones legales que prohíben eliminar dicha información. Desde luego se analizará caso por caso y dependerá del tipo de dato personal a ser eliminado.</li>
              <li><strong>Derecho a la oposición:</strong> oponerse o negarse al tratamiento de sus datos personales con fines de mercadeo o en los demás casos detallados en la ley.</li>
              <li><strong>Derecho a la portabilidad de los datos:</strong> usted tiene derecho a solicitar sus datos personales en un formato compatible o a transferirlos a otros responsables.</li>
              <li><strong>Derecho a la suspensión del tratamiento</strong> Lo antes mencionado tiene una particularidad, al momento de tratarse de datos de salud existen obligaciones legales que prohíben alterar dicha información. Desde luego se analizará caso por caso y dependerá del tipo de tratamiento a ser suspendido.</li>
              <li><strong>Derecho a no ser objeto de decisiones basadas en valoraciones automatizadas</strong> sin perjuicio de lo dispuesto en la ley, usted tiene derecho a no ser objeto de decisiones basadas en valoraciones automatizadas que atenten contra sus derechos.</li>
            </ul>

            <p>
              Para ejercer estos derechos o revocar su consentimiento, lo cual puede hacer en cualquier momento, puede tomar contacto con INTERHOSPITAL utilizando el Formulario de Datos Personales en el siguiente sitio web https://interhospital.com.ec, el mismo que deberá ser descargado, completado y enviado adjunto mediante correo electrónico a [datos personales@interhospital.com.ec]. En caso de ser necesario, lo contactaremos para validar su identidad. Procuraremos tomar contacto con usted de la forma menos invasiva posible, en función de la necesidad. Los medios de contacto que mayoritariamente se utilizarán son mensajes y e-mail, únicamente se lo contactará mediante llamada telefónica o cualquier otro medio, no descrito anteriormente, cuando sea indispensable. Es necesario seguir con este proceso de validación para garantizar la seguridad de la información; por ello, en caso de no poder completarse la validación se le enviará una respuesta para comunicarle que el trámite queda suspendido hasta que se complete la validación. Validada la identidad, se gestionará su solicitud y se dará una respuesta conforme los plazos legales.
            </p>
            <p>
                Respecto de las solicitudes que usted realice ante la Autoridad de Protección de Datos Personales será necesario que usted siga los procesos determinados por dicha autoridad.
            </p>
          </div>
        </div>

        {/* ================= SECCIÓN 3 ================= */}
        <div id="section3" className="space-y-6  text-justify">
          <h3 className="text-2xl font-bold text-[#0061A6]">
            3.- ¿Qué tipos y categorías de datos personales tratamos?
          </h3>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              A continuación, una descripción de los datos personales que son tratados por INTERHOSPITAL y, estos datos son los que almacenaremos en nuestra base de datos.
            </p>

            <ul className="list-disc list-inside space-y-4">
              <li>
                <strong>Datos de pacientes:</strong>
                <p>Son los datos personales que el paciente ha facilitado al hacer uso de nuestros servicios por ende, éstos van a depender de los distintos servicios ofrecidos por INTERHOSPITAL. Estos datos incluyen:</p>
                <p className="ml-4 mt-2">Datos de identificación:</p>
                <ul className="list-disc ml-8 space-y-1">
                  <li>Nombres completos</li>
                  <li>Número de identificación</li>
                  <li>Correo electrónico</li>
                  <li>Número de teléfono y/o celular</li>
                  <li>Dirección</li>
                  <li>Fecha de nacimiento</li>
                  <li>Nacionalidad</li>
                  <li>Edad</li>
                  <li>Sexo</li>
                  <li>Estado civil</li>
                </ul>

                <p className="ml-4 mt-4">Datos adicionales:</p>
                <ul className="list-disc ml-8 space-y-1">
                  <li>Datos de cobertura de salud.</li>
                  <li>Imágenes de órdenes, recetas o pedidos médicos.</li>
                  <li>Fotografías o videos de seguridad y vigilancia en nuestras instalaciones.</li>
                  <li>Datos de persona de contacto del paciente (nombres completos y parentesco).</li>
                  <li>Datos del médico tratante o remitente (nombres completos).</li>
                  <li>Videos de grabación de procedimientos (en ciertos casos).</li>
                </ul>

                <p className="ml-4 mt-4">Datos financieros:</p>
                <ul className="list-disc ml-8 space-y-1">
                  <li>Tipo de tarjeta de crédito o débito, fecha de vencimiento y ciertos dígitos del número de su tarjeta.</li>
                  <li>Banco, número y tipo de cuenta bancaria.</li>
                </ul>

                <p className="ml-4 mt-4">Datos de salud:</p>
                <ul className="list-disc ml-8 space-y-1">
                  <li>Diagnóstico.</li>
                  <li>Historia clínica.</li>
                  <li>Antecedentes familiares y personales.</li>
                  <li>Hábitos (sustancias, actividad).</li>
                  <li>Peso</li>
                  <li>Estatura</li>
                  <li>Presión arterial</li>
                  <li>Sintomatologías</li>
                  <li>Medicación</li>
                  <li>Resultados de laboratorio (sangre, orina, etc).</li>
                  <li>Resultados de imágenes (ecografías etc).</li>
                  <li>Procedimientos médicos.</li>
                  <li>Vacunas o pruebas.</li>
                  <li>Discapacidad</li>
                  <li>Tipo de sangre.</li>
                  <li>Informes de biopsias o citologías.</li>
                  <li>Datos de monitorización (presión arterial, frecuencia cardíaca, etc).</li>
                  <li>Preferencias y necesidades de atención médica.</li>
                </ul>

                <p className="ml-4 mt-4"><strong>Datos de Uso: </strong>
                    Información acerca de interacciones en el sitio web como, por ejemplo, contenido, búsquedas, historial de navegación, e información de métodos de pago. También se recogen ciertos datos técnicos, entre ellos: información de URL; identificadores online, incluyendo datos de cookies y direcciones IP; identificador de publicidad; información sobre los tipos de dispositivos que utiliza el titular, como los identificadores de dispositivo único, el tipo de conexión a la red, el rendimiento de la red, el dispositivo y el proveedor, el tipo de navegador, idioma, las características de los dispositivos de su red wifi disponibles para conectarse al sitios web, la ubicación no exacta que puede deducirse o inferirse de ciertos datos técnicos necesarios para ofrecer las funciones específicas de la plataforma tecnológica de INTERHOSPITAL (en caso de acceder al sitio web de INTERHOSPITAL)                
                </p>
                <p className="ml-4 mt-4"><strong>Datos de menores de edad: </strong>
                    En el caso de pacientes menores de edad INTERHOSPITAL recopila sus datos personales siempre que exista una base de legalidad que lo permita y siempre y cuando exista la autorización por parte del representante legal o la persona autorizada.                </p>
                <p className="ml-4 mt-4"><strong>Datos recopilados de fuentes de terceros: </strong>
                    En ciertos casos INTERHOSPITAL presta sus servicios por pedido de terceros, por ende, recopila sus datos con el propósito de identificarlo, contactarlo y prestarle los servicios de asistencia de salud, pruebas médicas, diagnósticos clínicos, toma de imágenes y cualquier otra actividad relacionada con el servicio de salud.                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* ================= SECCIÓN 4 ================= */}
        <div id="section4" className="space-y-6  text-justify">
          <h3 className="text-2xl font-bold text-[#0061A6]">
            4.- ¿Con qué finalidad y base legal tratamos sus datos personales?
          </h3>
          <p>
            A continuación, los fines para los que tratamos sus datos personales, las bases legales correspondientes que invocamos para poder tratarlos lícitamente y las categorías de datos personales involucradas:
          </p>

          <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed">
            <li>Para la prestación de servicios médicos en todas sus ramas y especializaciones a través de hospitales, clínicas o centros de salud a través de la atención al paciente ya sea para la realización de exámenes, procedimientos, intervenciones o cualquier otro requerimiento necesario.</li>
            <li>Categorías de datos personales: Datos de identificación del paciente, Datos de salud del paciente y Datos adicionales del paciente.</li>
            <li>Bases de legalidad: Cumplimiento de obligaciones precontractuales y contractuales, Cumplimiento de obligaciones legales, Intereses vitales, Consentimiento.</li>
            <li>Para la gestión, desarrollo y mantenimiento de la relación contractual entre INTERHOSPITAL y el paciente lo cual a manera de ejemplo abarca: asistencia de salud, pruebas médicas, diagnósticos clínicos, toma de imágenes y cualquier otra actividad relacionada con el servicio de asistencia médica.</li>
            <li>Categorías de datos personales: Datos de identificación del paciente, Datos de salud del paciente y Datos adicionales del paciente.</li>
            <li>Bases de legalidad: Cumplimiento de obligaciones precontractuales y contractuales, Cumplimiento de obligaciones legales, Intereses vitales, Consentimiento.</li>
            <li>Para la mejora continua de la calidad y modelo del servicio a través del análisis de datos del paciente para así optimizar recursos, detectar y subsanar deficiencias y en general buscar cualquier ámbito de mejora en la entrega del servicio. Cabe recalcar que, ninguna de estas acciones por parte de INTERHOSPITAL excede las expectativas del paciente, ni involucra prácticas invasivas, agresivas y de hostigamiento respecto de su privacidad. Siempre se realizan estas acciones a través de medios idóneos. Esto se realiza a través de big data, inteligencia artificial o aprendizaje automático entre otras herramientas.</li>
            <li>Categorías de datos personales: Datos de identificación del paciente, Datos de salud del paciente y Datos adicionales del paciente.</li>
            <li>Bases de legalidad: Cumplimiento de obligaciones precontractuales y contractuales, Interés legítimo, Consentimiento.</li>
            <li>Para la investigación médica de conformidad con la normativa vigente y aplicable en cuyo caso el tratamiento se realiza con datos codificados y/o seudonimizados y siempre se informa al paciente en qué consiste el proyecto de investigación clínica.</li>
            <li>Categorías de datos personales: Datos de salud del paciente.</li>
            <li>Bases de legalidad: Consentimiento, Cumplimiento de obligaciones legales, e Intereses vitales.</li>
            <li>Para contactarlo en caso de ser necesario en función de exámenes, procedimientos, intervenciones o cualquier otro requerimiento necesario.</li>
            <li>Categorías de datos personales: Datos de identificación del paciente y Datos de salud del paciente.</li>
            <li>Bases de legalidad: Cumplimiento de obligaciones precontractuales y contractuales, Interés legítimo y Consentimiento.</li>
            <li>Para cumplir obligaciones contractuales con terceros, por ejemplo aquellas derivadas de convenios, pólizas de seguro médico, alianzas estratégicas, derivación de pacientes, entre otras.</li>
            <li>Categorías de datos personales: Datos de identificación del paciente, Datos de salud del paciente y Datos financieros del paciente.</li>
            <li>Bases de legalidad: Cumplimiento de obligaciones precontractuales y contractuales y Consentimiento.</li>
            <li>Para procesar todo lo relacionado con su pago, transacciones y gestión de cobranza directa o por medio de terceros.</li>
            <li>Categorías de datos personales: Datos de identificación del paciente y Datos financieros del paciente.</li>
            <li>Bases de legalidad: Cumplimiento de obligaciones contractuales y Cumplimiento de obligaciones legales.</li>
            <li>Transferencia, a título gratuito u oneroso, de datos a médicos tratantes, laboratorios internacionales o nacionales, compañías de seguros, compañías de medicina pre-pagada, clientes corporativos, aliados estratégicos, terceros autorizados, representantes legales del paciente, otras casas de salud o centros médicos, Ministerio de Salud Pública, entidades de seguridad social, proveedores de prótesis, válvulas o cualquier otro insumo médico, proveedor del servicio administración hospitalaria, entre otras.</li>
            <li>Categorías de datos personales: Datos de identificación del paciente, Datos de salud del paciente, Datos financieros del paciente y Datos adicionales del paciente.</li>
            <li>Bases de legalidad: Cumplimiento de obligaciones precontractuales y contractuales, Cumplimiento de obligaciones legales y Consentimiento.</li>
            <li>Para atender atender, validar, gestionar y hacer seguimiento con usted sobre reclamos, solicitudes, ejercicios de derechos de la LOPD, sugerencias, comentarios, devoluciones, accidentes, quejas. En cuyo caso será necesario contactarlo por llamada, correo electrónico, whatsApp, redes sociales o sms.</li>
            <li>Categorías de datos personales: Datos de identificación del paciente, Datos de salud del paciente, Datos financieros del paciente y Datos adicionales del paciente.</li>
            <li>Bases de legalidad: Cumplimiento de obligaciones precontractuales y contractuales, Cumplimiento de obligaciones legales, Interés legítimo y Consentimiento.</li>
            <li>Para prestar, personalizar, comprender, resolver, diagnosticar, evaluar y desarrollar las funciones del sitio web de Interhospital a través del cual el paciente puede acceder a servicios varios como por ejemplo, cotizaciones, turnos, resultados, facturas, entre otros.</li>
            <li>Categorías de datos personales: Datos de identificación del paciente, Datos de salud del paciente, Datos financieros del paciente y Datos adicionales del paciente.</li>
            <li>Bases de legalidad: Cumplimiento de obligaciones contractuales, Interés legítimo y Consentimiento.</li>
            <li>Para detectar fraudes, pagos fraudulentos o usos fraudulentos, delictivos o contravencionales.</li>
            <li>Categorías de datos personales: Datos de identificación del paciente, Datos de salud del paciente, Datos financieros del paciente y Datos adicionales del paciente.</li>
            <li>Bases de legalidad: Cumplimiento de obligaciones legales e Interés legítimo.</li>
            <li>Para cumplir obligaciones legales y requerimientos de las autoridades competentes.</li>
            <li>Categorías de datos personales: Datos de identificación del paciente, Datos de salud del paciente, Datos financieros del paciente y Datos adicionales del paciente.</li>
            <li>Bases de legalidad: Cumplimiento de obligaciones legales e Interés legítimo.</li>
            <li>Para iniciar o ejercitar pretensiones jurídicas u oponerse a ellas.</li>
            <li>Categorías de datos personales: Datos de identificación del paciente, Datos de salud del paciente, Datos financieros del paciente y Datos adicionales del paciente.</li>
            <li>Bases de legalidad: Cumplimiento de obligaciones precontractuales y contractuales, Interés legítimo y Cumplimiento de obligaciones legales.</li>
            <li>Para fines internos de planificación, información y estimaciones del negocio.</li>
            <li>Categorías de datos personales: Datos de identificación del paciente, Datos de salud del paciente, Datos financieros del paciente y Datos adicionales del paciente.</li>
            <li>Bases de legalidad: Cumplimiento de obligaciones precontractuales y contractuales e Interés legítimo.</li>
          </ul>
          <p>
            Si necesita más información acerca de la finalidad del tratamiento realizado por INTERHOSPITAL, no dude en tomar contacto con nosotros de conformidad con la Sección 2.
          </p>
        </div>

        {/* ================= SECCIÓN 5 ================= */}
        <div id="section5" className="space-y-6 text-justify">
          <h3 className="text-2xl font-bold text-[#0061A6]">
            5.- ¿Con quién compartimos sus datos personales?
          </h3>

          <p>
            INTERHOSPITAL transfiere sus datos personales en estricto cumplimiento de la normativa en materia de protección de datos personales. Los datos personales necesarios únicamente se compartirán conforme lo dispuesto a continuación:
          </p>

          <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed">
            <li>Terceros autorizados: Dependiendo del caso y en función del tipo de paciente se comparten datos con la persona acompañante, representantes legales, médico tratante o remitente, Red Pública Integral de Salud, compañías de seguros, compañía de medicina pre-pagada, centros médicos (en caso de que exista convenios de manejo de pacientes).</li>
            <li>Proveedores de servicios: Utilizamos empresas proveedoras de servicios que colaboran con nosotros, y nos prestan servicios como link de pagos, facturación electrónica, exámenes de laboratorio a nivel nacional o internacional dependiendo del tipo de prueba, proveedores de prótesis, válvulas o cualquier otro insumo médico, proveedor del servicio de administración hospitalaria, servicios de digitalización y administración de documentación, servicios de alojamiento de información, gestión de la infraestructura técnica, protección y seguridad de nuestros sistemas y servicios. Todas estas empresas pueden necesitar acceder a ciertos datos personales a fin de prestarnos sus servicios o cumplir con los contratos antes mencionados. Vale mencionarse que mantenemos acuerdos con todos estos proveedores para el buen uso de esta información y la divulgación no autorizada.</li>
            <li>Autoridades competentes y agencias de protección de datos (por ejemplo: Autoridad de Protección de Datos Personales, Ministerio de Salud, IESS, UAFE): Compartiremos sus datos personales cuando consideremos de buena fe que ello resulta necesario para cumplir una obligación legal prevista en la legislación aplicable o para responder a un procedimiento legal válido. Asimismo, compartiremos sus datos personales cuando consideremos de buena fe que ello resulta necesario para nuestros intereses legítimos o los de un tercero en relación con la seguridad nacional, la aplicación de la ley, en el marco de procesos legales, la protección de la seguridad de una persona o la prevención de accidentes mortales o daños personales inminentes, siempre que consideremos que dichos intereses legítimos no quedan invalidados por intereses o derechos y libertades fundamentales de usted que requieran proteger sus datos personales.</li>
          </ul>

          <p>
            Todas las transferencias de Datos Personales a un tercer país o a una organización internacional estarán sujetas a las garantías pertinentes según lo descrito en el artículo 56 y siguientes de la LOPDP.
          </p>

          <p>
            Cabe precisar que, en el sitio web de INTERHOSPITAL podemos exhibir anuncios o contenidos que vinculen a sitios web de terceros. No nos responsabilizamos por las prácticas en materia de privacidad ni por los contenidos de terceros. Cuando haga clic en un link o en un anuncio de un tercero, tenga en cuenta que está saliendo del sitio web de INTERHOSPITAL y que los datos personales que facilite no estarán cubiertos por este Aviso.
          </p>
        </div>

        {/* ================= SECCIÓN 6 ================= */}
        <div id="section6" className="space-y-6 text-justify">
          <h3 className="text-2xl font-bold text-[#0061A6]">
            6.- ¿Cómo y cuánto tiempo conservamos sus datos personales?
          </h3>

          <p className="text-gray-700 leading-relaxed">
            Conservaremos sus datos personales únicamente durante el tiempo necesario para prestarle los servicios que INTERHOSPITAL ofrece, para cumplir con las finalidades contractuales legítimas y esenciales y para cumplir nuestras obligaciones legales. Conservaremos algunos de sus datos personales mientras usted siga utilizando los servicios de INTERHOSPITAL.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Adoptamos medidas técnicas y organizativas adecuadas para contribuir a proteger la seguridad de sus datos personales; sin embargo, tenga en cuenta que ningún sistema es completamente seguro. Con el fin de prevenir la vulneración de sus derechos de protección de sus datos personales, hemos adoptado varias medidas, como, por ejemplo: seudonimización; capacitación; confidencialidad; cifrado; acceso; y, conservación.
          </p>

          <p className="text-gray-700 leading-relaxed">
            En esta línea, usando los medios de contacto detallados en la Sección 2, adoptaremos las medidas antes detalladas, a menos que estemos legalmente facultados u obligados a mantener ciertos datos personales, en particular en situaciones como las siguientes:
          </p>

          <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed">
            <li>Hasta que tenga lugar la atención de su solicitud</li>
            <li>Cuando necesitemos conservar datos personales a efectos de nuestras obligaciones legales, fiscales, de auditoría y contabilidad durante el tiempo exigido por la legislación aplicable;</li>
            <li>Mientras dure la relación con el responsable del tratamiento y mientras no prescriban las acciones legales derivadas de la finalidad del tratamiento;</li>
            <li>Mientras exista un problema no resuelto y hasta la resolución del problema</li>
            <li>Cuando sea necesario para nuestros intereses empresariales legítimos, como la prevención de fraudes o la preservación de la seguridad de nuestros pacientes.</li>
          </ul>
        </div>

        {/* ================= SECCIÓN 7 ================= */}
        <div id= "section7" className="space-y-6 text-justify">
          <h3 className="text-2xl font-bold text-[#0061A6]">
            7.- ¿Se puede modificar este Aviso?
          </h3>

          <p className="text-gray-700 leading-relaxed">
            Cuando introduzcamos cambios significativos en este Aviso debido al desarrollo de servicios nuevos o complementarios, le enviaremos una notificación destacada de forma adecuada a las circunstancias. Por lo tanto, por favor, asegúrese de leer detenidamente tales notificaciones.
          </p>
        </div>

      </div>
    </section>
  );
}
