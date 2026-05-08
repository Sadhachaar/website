import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const questions = [
  {
    id: 1,
    question: "How would you rate your current work-life balance?",
    options: [
      { label: "Excellent", value: 10 },
      { label: "Good", value: 7 },
      { label: "Average", value: 5 },
      { label: "Poor", value: 2 }
    ]
  },
  {
    id: 2,
    question: "How often do you practice mindfulness or meditation?",
    options: [
      { label: "Daily", value: 10 },
      { label: "Weekly", value: 7 },
      { label: "Occasionally", value: 5 },
      { label: "Never", value: 2 }
    ]
  },
  {
    id: 3,
    question: "How would you describe your family relationships?",
    options: [
      { label: "Very Strong", value: 10 },
      { label: "Good", value: 7 },
      { label: "Needs Work", value: 5 },
      { label: "Struggling", value: 2 }
    ]
  },
  {
    id: 4,
    question: "Do you have clear life goals and purpose?",
    options: [
      { label: "Very Clear", value: 10 },
      { label: "Somewhat Clear", value: 7 },
      { label: "Vague", value: 5 },
      { label: "No Clarity", value: 2 }
    ]
  },
  {
    id: 5,
    question: "How often do you engage in physical exercise?",
    options: [
      { label: "Daily", value: 10 },
      { label: "3-4 times/week", value: 7 },
      { label: "Occasionally", value: 5 },
      { label: "Rarely", value: 2 }
    ]
  },
  {
    id: 6,
    question: "How would you rate your emotional resilience?",
    options: [
      { label: "Very Strong", value: 10 },
      { label: "Strong", value: 7 },
      { label: "Moderate", value: 5 },
      { label: "Low", value: 2 }
    ]
  },
  {
    id: 7,
    question: "Do you regularly contribute to your community?",
    options: [
      { label: "Frequently", value: 10 },
      { label: "Sometimes", value: 7 },
      { label: "Rarely", value: 5 },
      { label: "Never", value: 2 }
    ]
  },
  {
    id: 8,
    question: "How satisfied are you with your financial situation?",
    options: [
      { label: "Very Satisfied", value: 10 },
      { label: "Satisfied", value: 7 },
      { label: "Neutral", value: 5 },
      { label: "Dissatisfied", value: 2 }
    ]
  }
];

export default function LGCI() {
  const { t } = useTranslation();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (value) => {
    setAnswers({ ...answers, [currentQuestion]: value });
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const calculateScore = () => {
    const total = Object.values(answers).reduce((a, b) => a + b, 0);
    return Math.round((total / (questions.length * 10)) * 100);
  };

  const getInsight = (score) => {
    if (score >= 80) return "Excellent! You're operating at your highest potential. Keep up the great work and consider mentoring others.";
    if (score >= 60) return "Good progress! You have a strong foundation. Focus on areas that need more attention.";
    if (score >= 40) return "Room for improvement. Consider joining our program to strengthen your foundations.";
    return "Your operating system needs an upgrade. Start your transformation journey with Sadhachaar today!";
  };

  const getRatingColor = (score) => {
    if (score >= 80) return { bg: 'bg-green-500', text: 'text-green-600', label: 'Excellent' };
    if (score >= 60) return { bg: 'bg-blue-500', text: 'text-blue-600', label: 'Good' };
    if (score >= 40) return { bg: 'bg-amber-500', text: 'text-amber-600', label: 'Fair' };
    return { bg: 'bg-red-500', text: 'text-red-600', label: 'Needs Work' };
  };

  const score = showResult ? calculateScore() : 0;
  const rating = getRatingColor(score);

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Header */}
      <section className="py-20 bg-ivory relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-gold-muted/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs tracking-[0.25em] uppercase text-gold-dark mb-6">
              Assessment
            </span>
            <h1 className="text-5xl md:text-7xl font-heading font-semibold text-deepCharcoal mb-6 leading-tight">
              LGCI Calculator
            </h1>
            <p className="text-xl text-lightGray">
              Life Growth & Character Index
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-muted/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold-light/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-2xl mx-auto px-6 relative">
          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="relative bg-ivory rounded-2xl p-8 border border-gold-muted/20"
              >
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-lightGray mb-3">
                    <span>Question {currentQuestion + 1} of {questions.length}</span>
                    <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
                  </div>
                  <div className="h-2 bg-gold-muted/20 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gold rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>

                <h2 className="text-xl font-heading font-semibold text-deepCharcoal mb-8">
                  {questions[currentQuestion].question}
                </h2>

                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(option.value)}
                      className="w-full text-left px-5 py-4 rounded-xl border-2 border-gold-muted/20 hover:border-gold hover:bg-gold/5 transition-all group"
                    >
                      <span className="text-charcoal group-hover:text-gold-dark transition-colors">
                        {option.label}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Corner decorations */}
                <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-gold/20 rounded-tr-xl" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-gold/20 rounded-bl-xl" />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative bg-ivory rounded-2xl p-10 border border-gold-muted/20 text-center"
              >
                <div className="mb-8">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center mb-6 shadow-xl shadow-gold/20"
                  >
                    <span className="text-6xl font-heading font-bold text-white">{score}</span>
                  </motion.div>
                  <h2 className="text-3xl font-heading font-semibold text-deepCharcoal mb-3">
                    Your LGCI Score
                  </h2>
                  <p className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium ${rating.bg} text-white mb-4`}>
                    {rating.label}
                  </p>
                  <p className="text-lightGray max-w-md mx-auto leading-relaxed">
                    {getInsight(score)}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/pricing" className="btn-primary px-8 py-3">
                    Enroll in Program
                  </Link>
                  <button
                    onClick={() => {
                      setShowResult(false);
                      setCurrentQuestion(0);
                      setAnswers({});
                    }}
                    className="btn-secondary px-8 py-3"
                  >
                    Retake Assessment
                  </button>
                </div>

                {/* Corner decorations */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold/20 rounded-tr-2xl" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-gold/20 rounded-bl-2xl" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-24 bg-softWhite relative">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="inline-block text-xs tracking-[0.25em] uppercase text-gold-dark mb-6">
              About LGCI
            </span>
            <h2 className="text-3xl font-heading font-semibold text-deepCharcoal mb-6">
              What is LGCI?
            </h2>
            <p className="text-lightGray leading-relaxed mb-8">
              The Life Growth & Character Index (LGCI) is a comprehensive assessment tool that measures 
              your overall well-being across multiple dimensions including mental health, relationships, purpose, 
              physical health, emotional resilience, community contribution, and financial satisfaction.
            </p>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { label: 'Mental Clarity', desc: 'Mind & focus' },
                { label: 'Relationships', desc: 'Family & social' },
                { label: 'Purpose', desc: 'Goals & meaning' },
                { label: 'Wellness', desc: 'Health & resilience' }
              ].map((dim, index) => (
                <div key={index} className="bg-white rounded-xl p-4 border border-gold-muted/20">
                  <h4 className="font-medium text-charcoal text-sm mb-1">{dim.label}</h4>
                  <p className="text-xs text-lightGray">{dim.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}