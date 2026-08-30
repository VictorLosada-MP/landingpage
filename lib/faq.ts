/**
 * Fuente única de las preguntas frecuentes.
 *
 * La usa tanto la sección visible (`components/landing/faq.tsx`) como el
 * structured data FAQPage. Google exige que el texto del schema coincida
 * literalmente con el visible en la página, así que no dupliques este
 * contenido en otro sitio: edítalo solo aquí.
 */
export const faqs = [
  {
    q: '¿Y si después no sé usarlo bien?',
    a: 'Ese es justo el objetivo del enfoque. No solo te entrego el sistema: te capacito en vivo, te dejo material de apoyo y una sesión de seguimiento para que aprendas a operarlo con confianza. La meta es que te quedes con la capacidad de usarlo, no con una caja negra.',
  },
  {
    q: '¿Esto realmente me ayuda a generar ventas de forma más constante?',
    a: 'Sí. El sistema y las herramientas están pensados para que puedas producir ventas y contenido de forma continua, sin depender de que aparezca el momento o la persona adecuada. Se construye sobre lo que ya te funciona para hacerlo más estable y repetible.',
  },
  {
    q: 'Ya me pasó que me entregaron algo y me dejaron solo.',
    a: 'Por eso el proceso no termina en la entrega. Construimos, te enseño a utilizarlo e incluimos seguimiento a los 15 días para resolver dudas reales una vez que ya lo estás usando. El propósito es dejarte independiente, no dependiente.',
  },
  {
    q: '¿Se adapta a mi tipo de negocio?',
    a: 'El sistema se construye a medida, partiendo de cómo funciona tu negocio hoy y de lo que ya te está generando ventas. No es una plantilla genérica: se diseña sobre tu operación concreta.',
  },
] as const
