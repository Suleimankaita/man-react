import React, { useState } from 'react';
// import './FAQ.css'; // Import the CSS file for styling

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "How do I open an account with KS Bank?",
      answer: "You can open an account online by visiting our website or by visiting any of our branches. You will need to provide identification and proof of address."
    },
    {
      question: "What are the fees for maintaining a savings account?",
      answer: "KS Bank offers a variety of savings accounts with different fee structures. Some accounts have no monthly fees if you maintain a minimum balance."
    },
    {
      question: "How can I reset my online banking password?",
      answer: "You can reset your password by clicking on the 'Forgot Password' link on the login page and following the instructions."
    },
    {
      question: "What should I do if I lose my debit card?",
      answer: "If you lose your debit card, please contact us immediately at 1-800-KS-BANK to report it lost or stolen. We will deactivate the card and issue a new one."
    },
    {
      question: "How do I apply for a loan?",
      answer: "You can apply for a loan online through our website, or you can visit one of our branches to speak with a loan officer."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className="faq-icon">{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;