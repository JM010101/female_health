import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-pink-50 to-purple-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Understand Your Menopause Journey
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Take our quick assessment to identify your menopause stage and receive personalized guidance
            to help you navigate this important life transition.
          </p>
          <Link href="/quiz">
            <Button variant="primary" size="lg" className="text-lg px-8 py-4">
              Start Your Assessment
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Take the Quiz</h3>
              <p className="text-gray-600">
                Answer 8-12 simple questions about your symptoms, cycle, and overall health.
              </p>
            </Card>
            <Card className="text-center">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Get Your Results</h3>
              <p className="text-gray-600">
                Receive an assessment of your menopause stage with detailed explanations.
              </p>
            </Card>
            <Card className="text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Get Guidance</h3>
              <p className="text-gray-600">
                Access personalized recommendations and resources tailored to your stage.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Learn More About Your Menopause Stage?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Our assessment takes just a few minutes and provides valuable insights into your health journey.
          </p>
          <Link href="/quiz">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-4">
              Start Assessment Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Learn More
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            <Link href="/content/stages" className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <div className="text-2xl mb-2">🌺</div>
              <div className="font-medium text-gray-800">Menopause Stages</div>
            </Link>
            <Link href="/content/symptoms" className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <div className="text-2xl mb-2">📋</div>
              <div className="font-medium text-gray-800">Common Symptoms</div>
            </Link>
            <Link href="/content/treatment" className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <div className="text-2xl mb-2">💊</div>
              <div className="font-medium text-gray-800">Treatment Options</div>
            </Link>
            <Link href="/content/faq" className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <div className="text-2xl mb-2">❓</div>
              <div className="font-medium text-gray-800">FAQ</div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
