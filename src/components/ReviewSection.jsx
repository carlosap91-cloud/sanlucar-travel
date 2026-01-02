import React, { useState } from 'react';
import { useData } from '../context/DataContext';

const ReviewSection = ({ type, itemId, reviews }) => {
    const { addReview } = useData();
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(5);
    const [userName, setUserName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addReview(type, itemId, { user: userName || 'Anónimo', comment, rating: parseInt(rating) });
        setComment('');
        setUserName('');
        alert('¡Gracias por tu valoración!');
    };

    return (
        <div style={{ marginTop: '1.5rem', borderTop: '1px solid #eee', paddingTop: '1rem' }}>
            <h4 style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>Opiniones ({reviews.length})</h4>

            {/* List */}
            <div style={{ maxHeight: '150px', overflowY: 'auto', marginBottom: '1rem' }}>
                {reviews.length === 0 && <p style={{ color: '#999', fontSize: '0.8rem' }}>Sé el primero en opinar.</p>}
                {reviews.map((r, idx) => (
                    <div key={idx} style={{ marginBottom: '0.8rem', fontSize: '0.85rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <strong>{r.user}</strong>
                            <span style={{ color: '#f59e0b' }}>{'★'.repeat(r.rating)}</span>
                        </div>
                        <p style={{ margin: '0.2rem 0 0', color: '#555' }}>{r.comment}</p>
                    </div>
                ))}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '0.5rem' }}>
                <input
                    type="text"
                    placeholder="Tu nombre"
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                    required
                    style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ddd', fontSize: '0.8rem' }}
                />
                <select
                    value={rating}
                    onChange={e => setRating(e.target.value)}
                    style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ddd', fontSize: '0.8rem' }}
                >
                    <option value="5">★★★★★ (5)</option>
                    <option value="4">★★★★ (4)</option>
                    <option value="3">★★★ (3)</option>
                    <option value="2">★★ (2)</option>
                    <option value="1">★ (1)</option>
                </select>
                <textarea
                    placeholder="Escribe tu opinión..."
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                    required
                    rows="2"
                    style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ddd', fontSize: '0.8rem', fontFamily: 'inherit' }}
                />
                <button type="submit" className="btn btn-primary" style={{ padding: '0.5rem', fontSize: '0.8rem' }}>Enviar Opinión</button>
            </form>
        </div>
    );
};

export default ReviewSection;
