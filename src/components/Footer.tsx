import React, { useState } from 'react';
import { Modal } from './Modal';

export function Footer() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    <>
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Spend Simple</h2>
              <p className="text-gray-400">Stay on top of your budget one text at a time.</p>
            </div>
            
            <nav>
              <ul className="flex flex-col md:flex-row gap-4 md:gap-8">
                <li>
                  <button 
                    onClick={() => setIsPrivacyOpen(true)} 
                    className="hover:text-white transition"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setIsTermsOpen(true)} 
                    className="hover:text-white transition"
                  >
                    Terms of Service
                  </button>
                </li>
                <li>
                  <a 
                    href="mailto:hello@spendsimple.co" 
                    className="hover:text-white transition"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>

      <Modal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
        title="Privacy Policy"
      >
        <div className="prose prose-blue max-w-none">
          <p className="text-gray-600 leading-relaxed">
            Spend Simple respects your privacy and is committed to protecting your personal information. 
            We collect basic contact details, financial data, and receipts only to provide and improve 
            our budgeting service.
          </p>
          
          <p className="text-gray-600 leading-relaxed mt-4">
            Your data is stored securely and used solely for tracking and organizing expenses, with no 
            unauthorized sharing or selling to third parties.
          </p>
          
          <p className="text-gray-600 leading-relaxed mt-4">
            You can access, update, or delete your data anytime by contacting our support team. 
            Spend Simple uses industry-standard encryption to protect your information during all 
            interactions.
          </p>
        </div>
      </Modal>

      <Modal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
        title="Terms of Service"
      >
        <div className="prose prose-blue max-w-none">
          <p className="text-gray-600 leading-relaxed">
            By using Spend Simple, you agree to these terms, which outline the responsible use of our 
            budgeting service. Users must provide accurate information and acknowledge that Spend Simple's 
            insights are for informational purposes and not a substitute for professional financial advice.
          </p>
          
          <p className="text-gray-600 leading-relaxed mt-4">
            We reserve the right to change or update services and terms at any time. Misuse or unauthorized 
            access may result in termination of your account.
          </p>
          
          <p className="text-gray-600 leading-relaxed mt-4">
            Spend Simple is not liable for financial outcomes based on the provided insights.
          </p>
        </div>
      </Modal>
    </>
  );
}