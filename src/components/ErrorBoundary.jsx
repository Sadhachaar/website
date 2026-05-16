import { Component } from 'react';
import { Link } from 'react-router-dom';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-ivory p-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-gold mb-4">Oops!</h1>
            <h2 className="text-3xl font-heading font-semibold text-charcoal mb-4">Something Went Wrong</h2>
            <p className="text-muted text-lg leading-relaxed mb-8">
              We're sorry, but something unexpected happened. Please try again.
            </p>
            <Link 
              to="/" 
              className="inline-block px-8 py-4 bg-gold text-charcoal font-medium rounded-xl hover:bg-gold-dark transition-all"
            >
              Go to Home
            </Link>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}