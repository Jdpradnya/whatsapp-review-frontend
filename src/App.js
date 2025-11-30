import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

function App() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/api/reviews`);
      setReviews(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch reviews');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  if (loading) {
    return <div className="App"><div className="loading">Loading reviews...</div></div>;
  }

  if (error) {
    return <div className="App"><div className="error">{error}</div></div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>📱 WhatsApp Product Reviews</h1>
        <p>Total Reviews: {reviews.length}</p>
      </header>

      <main className="reviews-container">
        {reviews.length === 0 ? (
          <div className="no-reviews">No reviews yet. Start collecting via WhatsApp!</div>
        ) : (
          <div className="reviews-grid">
            {reviews.map((review) => (
              <div key={review.id} className="review-card">
                <div className="review-header">
                  <h3>{review.product_name}</h3>
                  <span className="review-date">{formatDate(review.created_at)}</span>
                </div>
                <div className="review-body">
                  <p className="review-text">"{review.product_review}"</p>
                </div>
                <div className="review-footer">
                  <span className="reviewer-name">— {review.user_name}</span>
                  <span className="contact-number">{review.contact_number}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <button className="refresh-btn" onClick={fetchReviews}>
        🔄 Refresh Reviews
      </button>
    </div>
  );
}

export default App;
