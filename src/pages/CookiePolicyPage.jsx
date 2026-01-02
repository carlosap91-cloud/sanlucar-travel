import React from 'react';
import { useData } from '../context/DataContext';

const CookiePolicyPage = () => {
    return (
        <div style={{ paddingTop: '120px', paddingBottom: '4rem', background: '#f9f9f9', minHeight: '100vh' }}>
            <div className="container" style={{ maxWidth: '850px', background: 'white', padding: '3rem', borderRadius: '15px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                <h1 style={{ marginBottom: '2rem', fontSize: '2.5rem' }}>Política de Cookies</h1>

                <p style={{ color: '#666', fontStyle: 'italic', marginBottom: '2rem' }}>Última actualización: Diciembre 2025</p>

                <div className="policy-content" style={{ lineHeight: '1.8' }}>
                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.4rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>¿Qué son las cookies?</h2>
                        <p>En inglés, el término "cookie" significa galleta, pero en el ámbito de la navegación web, una "cookie" es algo completamente distinto. Cuando accede a nuestro Sitio Web, en el navegador de su dispositivo se almacena una pequeña cantidad de texto que se denomina "cookie". Este texto contiene información variada sobre su navegación, hábitos, preferencias, personalizaciones de contenidos, etc.</p>
                        <p>Existen otras tecnologías que funcionan de manera similar y que también se usan para recopilar datos sobre tu actividad de navegación. Llamaremos "cookies" a todas estas tecnologías en su conjunto.</p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.4rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>¿Para qué se utilizan las cookies en esta web?</h2>
                        <p>Las cookies son una parte esencial de cómo funciona el Sitio Web. El objetivo principal de nuestras cookies es mejorar su experiencia en la navegación. Por ejemplo, para recordar sus preferencias (idioma, país, etc.) durante la navegación y en futuras visitas. La información recogida en las cookies nos permite además mejorar la web, adaptarla a sus intereses como usuario, acelerar las búsquedas que realice, etc.</p>
                        <p>En determinados casos, si hemos obtenido su previo consentimiento informado, podremos utilizar cookies para otros usos, como por ejemplo para obtener información que nos permita mostrarle publicidad basada en el análisis de sus hábitos de navegación.</p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.4rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>¿Para qué NO se utilizan las cookies en esta web?</h2>
                        <p>En las cookies que utilizamos no se almacena información sensible de identificación personal como su nombre, dirección, su contraseña, etc.</p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.4rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>¿Quién utiliza la información almacenada en las cookies?</h2>
                        <p>La información almacenada en las cookies de nuestro Sitio Web es utilizada exclusivamente por nosotros, a excepción de aquellas identificadas más adelante como "cookie de terceros", que son utilizadas y gestionadas por entidades externas que nos proporcionan servicios que mejoran la experiencia del usuario. Por ejemplo las estadísticas que se recogen sobre el número de visitas, el contenido que más gusta, etc., lo suele gestionar Google Analytics.</p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.4rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>¿Cómo puede evitar el uso de cookies en este Sitio Web?</h2>
                        <p>Si prefiere evitar el uso de las cookies, puede RECHAZAR su uso o puede CONFIGURAR las que quiere evitar y las que permite utilizar.</p>
                        <p>Si las ha aceptado, no volveremos a preguntarle a menos que borre las cookies en su dispositivo según se indica en el apartado siguiente. Si quiere revocar el consentimiento tendrá que eliminar las cookies y volver a configurarlas.</p>
                        <div style={{ background: '#f0f4f8', padding: '1.5rem', borderRadius: '10px', marginTop: '1rem' }}>
                            <h4 style={{ margin: '0 0 1rem 0' }}>Panel de Configuración de Cookies</h4>
                            <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>Desde aquí puede gestionar sus preferencias actuales:</p>
                            <button
                                onClick={() => {
                                    localStorage.removeItem('cookieConsent');
                                    window.location.reload();
                                }}
                                className="btn btn-secondary"
                                style={{ fontSize: '0.9rem' }}
                            >
                                🔄 Restablecer Mis Cookies
                            </button>
                        </div>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.4rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>Tipos de cookies que se utilizan</h2>

                        <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginTop: '1.5rem' }}>SEGÚN LA ENTIDAD QUE LO GESTIONA</h3>
                        <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Cookies propias:</strong> Son las que enviamos nosotros.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Cookies de terceros:</strong> Son las gestionadas por proveedores de servicios externos (ej. Google, Facebook).</li>
                        </ul>

                        <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginTop: '1.5rem' }}>SEGÚN SU FINALIDAD</h3>
                        <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Cookies técnicas:</strong> Necesarias para la navegación y el buen funcionamiento de la web.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Cookies de análisis:</strong> Permiten cuantificar usuarios y analizar el uso de la web.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Cookies de preferencias:</strong> Recuerdan su configuración (idioma, navegador, etc.).</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default CookiePolicyPage;
