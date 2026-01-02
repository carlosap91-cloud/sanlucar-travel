import React from 'react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicyPage = () => {
    const navigate = useNavigate();

    return (
        <div style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--color-bg-alt)' }}>
            <div className="container section-padding">


                <div style={{ background: 'white', padding: '3rem', borderRadius: '24px', boxShadow: 'var(--shadow)', maxWidth: '900px', margin: '0 auto' }}>
                    <h1 style={{ marginBottom: '2rem', color: 'var(--color-text)' }}>Política de Privacidad</h1>

                    <div style={{ color: '#555', lineHeight: '1.8' }}>
                        <p><strong>Sanlúcar Travel</strong> te informa sobre su Política de Privacidad respecto del tratamiento y protección de los datos de carácter personal de los usuarios y clientes que puedan ser recabados por la navegación o contratación de servicios a través del sitio web.</p>

                        <p>En este sentido, el Titular garantiza el cumplimiento de la normativa vigente en materia de protección de datos personales, reflejada en la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y de Garantía de Derechos Digitales (LOPD GDD). Cumple también con el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo (RGPD).</p>

                        <h3 style={{ marginTop: '2rem', color: 'var(--color-primary)' }}>Identidad del responsable</h3>
                        <ul>
                            <li><strong>Titular:</strong> Sanlúcar Travel</li>
                            <li><strong>Domicilio:</strong> Sanlúcar de Barrameda, Cádiz</li>
                            <li><strong>Sitio Web:</strong> www.sanlucartravel.com</li>
                        </ul>

                        <h3 style={{ marginTop: '2rem', color: 'var(--color-primary)' }}>Principios aplicados en el tratamiento de datos</h3>
                        <p>En el tratamiento de tus datos personales, aplicaremos los siguientes principios que se ajustan a las exigencias del nuevo reglamento europeo de protección de datos:</p>
                        <ul>
                            <li><strong>Principio de licitud, lealtad y transparencia:</strong> Siempre requeriremos el consentimiento para el tratamiento de tus datos personales para uno o varios fines específicos sobre los que te informaremos previamente con absoluta transparencia.</li>
                            <li><strong>Principio de minimización de datos:</strong> Solo solicitaremos los datos estrictamente necesarios para el fin o los fines que los requieren.</li>
                            <li><strong>Principio de limitación del plazo de conservación:</strong> Los datos se mantendrán durante el tiempo estrictamente necesario para el fin o los fines del tratamiento.</li>
                            <li><strong>Principio de integridad y confidencialidad:</strong> Tus datos serán tratados de tal manera que su seguridad, confidencialidad e integridad esté garantizada.</li>
                        </ul>

                        <h3 style={{ marginTop: '2rem', color: 'var(--color-primary)' }}>Obtención de datos personales</h3>
                        <p>Para navegar por nuestro sitio web no es necesario que facilites ningún dato personal. Los casos en los que sí proporcionas tus datos personales son los siguientes:</p>
                        <ul>
                            <li>Al realizar una solicitud de reserva a través de nuestros formularios.</li>
                            <li>Al contactar a través de los formularios de contacto o enviar un correo electrónico.</li>
                        </ul>

                        <h3 style={{ marginTop: '2rem', color: 'var(--color-primary)' }}>Tus derechos</h3>
                        <p>El Titular te informa que sobre tus datos personales tienes derecho a:</p>
                        <ul>
                            <li>Solicitar el acceso a los datos almacenados.</li>
                            <li>Solicitar una rectificación o la cancelación.</li>
                            <li>Solicitar la limitación de su tratamiento.</li>
                            <li>Oponerte al tratamiento.</li>
                            <li>Solicitar la portabilidad de tus datos.</li>
                        </ul>
                        <p>Para ejercitar tus derechos de acceso, rectificación, cancelación, portabilidad y oposición tienes que enviar un correo electrónico a <strong>hola@sanlucartravel.com</strong> junto con la prueba válida en derecho como una fotocopia del D.N.I. o equivalente.</p>

                        <h3 style={{ marginTop: '2rem', color: 'var(--color-primary)' }}>Finalidad del tratamiento de datos personales</h3>
                        <p>Cuando te conectas al sitio web para mandar un correo al Titular, o utilizas un formulario de reserva, estás facilitando información de carácter personal de la que el responsable es Sanlúcar Travel. Esta información puede incluir datos de carácter personal como pueden ser tu nombre y apellidos, dirección física, dirección de correo electrónico, número de teléfono, y otra información.</p>
                        <p>Los datos personales y la finalidad del tratamiento por parte del Titular es diferente según el sistema de captura de información:</p>
                        <ul>
                            <li><strong>Formularios de reserva:</strong> Solicitamos los siguientes datos personales: Nombre y apellidos, dirección de correo electrónico, número de teléfono y detalles de la reserva con la finalidad de gestionar tu solicitud con los proveedores de servicios (restaurantes, hoteles, etc.).</li>
                        </ul>

                        <h3 style={{ marginTop: '2rem', color: 'var(--color-primary)' }}>Seguridad de los datos personales</h3>
                        <p>Para proteger tus datos personales, tomamos todas las precauciones razonables y seguimos las mejores prácticas de la industria para evitar su pérdida, mal uso, acceso indebido, divulgación, alteración o destrucción de los mismos.</p>

                        <h3 style={{ marginTop: '2rem', color: 'var(--color-primary)' }}>Exactitud y veracidad de los datos personales</h3>
                        <p>Te comprometes a que los datos facilitados sean correctos, completos, exactos y vigentes, así como a mantenerlos debidamente actualizados. Como Usuario del sitio Web eres el único responsable de la veracidad y corrección de los datos que remitas al sitio exonerando a el Titular de cualquier responsabilidad al respecto.</p>

                        <h3 style={{ marginTop: '2rem', color: 'var(--color-primary)' }}>Aceptación y consentimiento</h3>
                        <p>Como Usuario del sitio Web declaras haber sido informado de las condiciones sobre protección de datos de carácter personal, aceptas y consientes el tratamiento de los mismos por parte de el Titular en la forma y para las finalidades indicadas en esta Política de Privacidad.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
