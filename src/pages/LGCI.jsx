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

  const score = showResult ? calculateScore() : 0;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-softWhite section-padding pb-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-deepBlue mb-4">
              LGCI Calculator
            </h1>
            <p className="text-lightGray text-lg">
              Life Growth & Character Index
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calculator */}
      <section className="section-padding bg-white">
        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="card"
              >
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-lightGray mb-2">
                    <span>Question {currentQuestion + 1} of {questions.length}</span>
                    <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-saffron"
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    />
                  </div>
                </div>

                <h2 className="text-xl font-heading font-semibold text-deepBlue mb-6">
                  {questions[currentQuestion].question}
                </h2>

                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(option.value)}
                      className="w-full text-left px-5 py-4 rounded-xl border-2 border-gray-100 hover:border-saffron hover:bg-saffron/5 transition-all"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="card text-center"
              >
                <div className="mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-saffron to-gold flex items-center justify-center mb-4">
                    <span className="text-5xl font-heading font-bold text-white">{score}</span>
                  </div>
                  <h2 className="text-2xl font-heading font-semibold text-deepBlue mb-2">
                    Your LGCI Score
                  </h2>
                  <p className="text-lightGray max-w-md mx-auto">
                    {getInsight(score)}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/pricing" className="btn-primary">
                    Enroll in Program
                  </Link>
                  <button
                    onClick={() => {
                      setShowResult(false);
                      setCurrentQuestion(0);
                      setAnswers({});
                    }}
                    className="btn-secondary"
                  >
                    Retake Assessment
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}