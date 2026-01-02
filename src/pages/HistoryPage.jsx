import React from 'react';

const HistoryPage = () => {
    return (
        <div style={{ paddingTop: '2rem', minHeight: '100vh', background: 'var(--color-bg-alt)' }}>
            <div className="container" style={{ paddingBottom: '4rem' }}>
                <div className="text-center" style={{ marginBottom: '4rem' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>
                        Historia <span style={{ color: 'var(--color-secondary)' }}>Viva</span>
                    </h1>
                    <p style={{ color: 'var(--color-text-light)', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
                        Desde la primera vuelta al mundo hasta los Duques de Montpensier. Sanlúcar es leyenda en cada rincón.

                    </p>
                </div>

                <div className="glass" style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    padding: '3rem',
                    borderRadius: '30px',
                    background: 'white',
                    boxShadow: 'var(--shadow)',
                    textAlign: 'left' // Changed to left for better readability
                }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
                        Sanlúcar de Barrameda: Donde el Mundo se hizo uno
                    </h2>

                    <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
                        Sanlúcar no es solo un destino; es el umbral donde el Guadalquivir abraza al Océano y donde la historia de la humanidad cambió de rumbo para siempre.
                    </p>

                    <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
                        Caminar por sus calles es recorrer la leyenda viva. Fuimos el puerto de partida y regreso de la <strong>Primera Vuelta al Mundo de Magallanes y Elcano</strong>, el lugar donde los horizontes se ensancharon y el mapa dejó de tener fin. Ese espíritu aventurero aún respira en el Barrio Alto, custodiado por fortalezas que han visto pasar siglos de comercio y gloria.
                    </p>

                    <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
                        Pero Sanlúcar es también la elegancia de la Corte de los Montpensier, el refinamiento de una aristocracia que convirtió nuestras playas en el primer destino turístico de España, legándonos palacios y jardines que parecen detenidos en el tiempo. Somos el contraste perfecto entre la sal de la marisma y el aroma a Manzanilla de nuestras bodegas catedralicias.
                    </p>

                    <p style={{ marginBottom: '2rem', lineHeight: '1.6' }}>
                        Orgullosa de su pasado y vibrante en su presente, Sanlúcar te invita a descubrir que cada rincón es un monumento, cada puesta de sol es un poema y cada paso es, en realidad, un viaje a través de la historia universal.
                    </p>

                    <div style={{
                        borderLeft: '4px solid var(--color-secondary)',
                        paddingLeft: '1.5rem',
                        fontStyle: 'italic',
                        color: 'var(--color-text-light)',
                        fontSize: '1.1rem'
                    }}>
                        "Sanlúcar de Barrameda: Puerta de América, Espejo del Océano y Corazón de la Historia."
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HistoryPage;
