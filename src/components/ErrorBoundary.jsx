import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ error, errorInfo });
        console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ padding: '2rem', fontFamily: 'sans-serif', color: '#333' }}>
                    <h1 style={{ color: '#e53e3e' }}>Algo ha salido mal 😭</h1>
                    <p>La aplicación ha encontrado un error crítico.</p>
                    <details style={{ whiteSpace: 'pre-wrap', background: '#f8f9fa', padding: '1rem', borderRadius: '8px', border: '1px solid #ddd' }}>
                        <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>Ver detalles del error</summary>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo && this.state.errorInfo.componentStack}
                    </details>
                    <button
                        onClick={() => {
                            localStorage.clear();
                            window.location.reload();
                        }}
                        style={{ marginTop: '1rem', padding: '0.5rem 1rem', background: '#3182ce', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                    >
                        Borrar datos y recargar (Reset de Emergencia)
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
