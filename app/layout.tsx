import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Menopause Stage Assessment | Women\'s Health Quiz',
  description: 'Take our assessment to identify your menopause stage and get personalized guidance.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <a href="/" className="text-2xl font-bold text-primary-600">
                  Women's Health
                </a>
              </div>
              <div className="hidden md:flex space-x-8">
                <a href="/" className="text-gray-700 hover:text-primary-600 transition-colors">
                  Home
                </a>
                <a href="/content/about" className="text-gray-700 hover:text-primary-600 transition-colors">
                  About
                </a>
                <a href="/content/stages" className="text-gray-700 hover:text-primary-600 transition-colors">
                  Stages
                </a>
                <a href="/content/symptoms" className="text-gray-700 hover:text-primary-600 transition-colors">
                  Symptoms
                </a>
                <a href="/content/treatment" className="text-gray-700 hover:text-primary-600 transition-colors">
                  Treatment
                </a>
                <a href="/content/faq" className="text-gray-700 hover:text-primary-600 transition-colors">
                  FAQ
                </a>
                <a href="/content/resources" className="text-gray-700 hover:text-primary-600 transition-colors">
                  Resources
                </a>
                <a href="/content/contact" className="text-gray-700 hover:text-primary-600 transition-colors">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="bg-white border-t border-gray-200 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center text-gray-600 text-sm">
              <p>© {new Date().getFullYear()} Women's Health Assessment. All rights reserved.</p>
              <p className="mt-2">
                This assessment is for informational purposes only and is not a substitute for professional medical advice.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
