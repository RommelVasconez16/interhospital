"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PoliticasProveedores(){
  const router = useRouter();

    return (
    <section className="pt-20 pb-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto space-y-16">

        <button
          onClick={() => router.push("/pacientes/privacidad-datos")}
          className="mb-10 inline-flex items-center gap-2 bg-[#0061A6]/10 
                     text-[#0061A6] px-5 py-2 rounded-full font-medium
                     hover:bg-[#0061A6]/20 transition cursor-pointer"
        >
          <ArrowLeft size={18} />
          Volver
        </button>

        {/* TITULO PRINCIPAL */}
        <h3 className="text-3xl md:text-4xl font-bold text-[#0061A6] text-center">
          Aviso de Privacidad y Protección de Datos Personales para Proveedores
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
                INTERHOSPITAL S.A. (en adelante, “INTERHOSPITAL”) es el responsable del tratamiento de los datos personales conforme lo establecido en este Aviso de Privacidad para proveedores (en adelante, «Aviso»).
            </p>

            <p>
                Mediante un lenguaje claro y sencillo le explicamos qué datos personales tratamos, al igual que cómo y por qué los recopilamos, almacenamos y compartimos. También, le informamos sobre los derechos que usted tiene como titular, los compromisos de privacidad que INTERHOSPITAL asume frente a usted en su calidad de proveedor y las consecuencias de la entrega de sus datos personales. Es preciso indicar que, si existe negativa por parte de usted para la entrega de ciertos datos personales INTERHOSPITAL se puede ver imposibilitado de mantener la relación contractual.
            </p>

            <p>
                Las condiciones que regulan la relación que usted mantiene con INTERHOSPITAL, se notifican oportunamente y se encuentran en nuestros formularios, solicitudes, contratos, y otros documentos que suscriban los proveedores. A continuación, los datos de contacto de INTERHOSPITAL:
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
                <strong>Datos de proveedores generales:</strong>
                <p>Son los datos personales que el paciente ha facilitado al hacer uso de nuestros servicios por ende, éstos van a depender de los distintos servicios ofrecidos por INTERHOSPITAL. Estos datos incluyen:</p>
                <p className="ml-4 mt-2">Datos de identificación:</p>
                <ul className="list-disc ml-8 space-y-1">
                  <li>Nombres completos</li>
                  <li>Nacionalidad</li>
                  <li>Número de identificación</li>
                  <li>Dirección</li>
                  <li>Copia de cédula de identidad y plantilla de servicios básicos</li>
                  <li>Correo electrónico</li>
                </ul>

                <p className="ml-4 mt-4">Datos adicionales:</p>
                <ul className="list-disc ml-8 space-y-1">
                  <li>Datos de persona de contacto.</li>
                  <li>Referencias comerciales</li>
                  <li>Relación con personal de Interhospital</li>
                  <li>Fotografías o vídeos de seguridad y vigilancia en nuestras instalaciones</li>
                </ul>

                <p className="ml-4 mt-4">Datos financieros:</p>
                <ul className="list-disc ml-8 space-y-1">
                  <li>Banco, número y tipo de cuenta bancaria.</li>
                </ul>

                <p className="ml-4 mt-4">Datos del personal del proveedor: Son los datos personales que el proveedor encarga a INTERHOSPITAL respecto de su personal para permitir el acceso a las instalaciones de INTERHOSPITAL para la realización o prestación del servicio. Estos datos incluyen: nombres completos, número de teléfono, número de identificación, dirección de domicilio.</p>

                <p className="ml-4 mt-4">Datos Proveedores Médicos Especialistas y Residentes: Son datos personales adicionales a los arriba enumerados que usted nos ha facilitado o que nosotros recopilamos para que usted pueda ser proveedor de INTERHOSPITAL. </p>
                <ul className="list-disc ml-8 space-y-1">
                  <li>Títulos universitarios, especialidad o postgrado.</li>
                  <li>Certificados y credenciales</li>
                  <li>Documento ACESS</li>
                  <li>Trayectoria académica y laboral (datos del empleador)</li>
                  <li>Idioma</li>
                  <li>Estatura</li>
                  <li>Etnia</li>
                  <li>Referencias laborales (nombres completos, cargo, lugar de trabajo)</li>
                  <li>Referencias personales</li>
                  <li>Examen psicotécnico</li>
                  <li>Datos de preferencias, gustos y personalidad.</li>
                  <li>Datos biométricos y de imágenes:</li>
                  <li>Verificación de huella dactilar</li>
                  <li>Fotografías o videos</li>
                  <li>Datos judiciales y penales:</li>
                  <li>Antecedentes penales y judiciales</li>
                </ul>
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
            <li>Para participar, evaluar, licitar, seleccionar y auditar a prospectos proveedores y proveedores, y gestionar cualquier asunto referente a la calidad de proveedor y relacionado con el cumplimiento del contrato de provisión.</li>
            <li>Categorías de datos personales: Datos del proveedor.</li>
            <li>Bases de legalidad: Cumplimiento de obligaciones precontractuales y contractuales, Cumplimiento de obligaciones legales e Interés legítimo.</li>
            <li>Para cumplir obligaciones legales y requerimientos de las autoridades competentes.</li>
            <li>Categorías de datos personales: Datos del proveedor.</li>
            <li>Bases de legalidad: Cumplimiento de obligaciones legales e Interés legítimo.</li>
            <li>Para iniciar o ejercitar pretensiones jurídicas u oponerse a ellas.</li>
            <li>Categorías de datos personales: Datos del proveedor.</li>
            <li>Bases de legalidad: Cumplimiento de obligaciones precontractuales y contractuales, Interés legítimo y Cumplimiento de obligaciones legales.</li>
            <li>Para procesar todo lo relacionado con su pago y transacciones como, por ejemplo, facturación, emisiones de comprobantes, retenciones, notas de venta, entre otros.</li>
            <li>Categorías de datos personales: Datos del proveedor.</li>
            <li>Bases de legalidad: Cumplimiento de obligaciones contractuales y Cumplimiento de obligaciones legales.</li>
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
            <li>Proveedores de servicios: Utilizamos empresas proveedoras de servicios que colaboran con nosotros, y mantenemos contratos cuyo objeto es gestionar la infraestructura técnica, gestión de pagos, servicio de alojamiento de información, protección y seguridad de la información. Todas estas empresas pueden necesitar acceder a ciertos datos personales a fin de prestarnos sus servicios o cumplir con los contratos antes mencionados, los cuales nos permiten ampliar y mejorar los productos y servicios que ofrecemos. Vale mencionarse que mantenemos acuerdos con todos estos proveedores para el buen uso de esta información y la divulgación no autorizada.</li>
            <li>Autoridades competentes (por ejemplo: Autoridad de Protección de Datos Personales, Fiscalía, Policía Nacional, SRI, UAFE, entre otras): Compartiremos sus datos personales cuando consideremos de buena fe que ello resulta necesario para cumplir una obligación legal prevista en la legislación aplicable o para responder a un procedimiento legal válido. Asimismo, compartiremos sus datos personales cuando consideremos de buena fe que ello resulta necesario para nuestros intereses legítimos o los de un tercero en relación con la seguridad nacional, la aplicación de la ley, en el marco de procesos legales, la protección de la seguridad de una persona o la prevención de accidentes mortales o daños personales inminentes, siempre que consideremos que dichos intereses legítimos no quedan invalidados por intereses o derechos y libertades fundamentales de usted que requieran proteger sus datos personales.</li>
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
            <li>Si existe un problema no resuelto conservaremos los datos personales necesarios hasta la resolución del problema</li>
            <li>Cuando necesitemos conservar datos personales a efectos de nuestras obligaciones contracuales, legales, fiscales, de auditoría y contabilidad, conservaremos los datos personales necesarios durante el tiempo exigido por la legislación aplicable</li>
            <li>Mientras dure la relación con el responsable del tratamiento y mientras no prescriban las acciones legales derivadas de la finalidad del tratamiento</li>
            <li>Cuando sea necesario para nuestros intereses empresariales legítimos, como la prevención de fraudes o la preservación de la seguridad.</li>
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
    )
}