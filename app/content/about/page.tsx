import { Card } from '@/components/ui/Card';

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">About This Project</h1>
        
        <Card className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            [Content placeholder: Describe the mission and purpose of this women's health assessment tool.]
          </p>
          <p className="text-gray-700">
            [Content placeholder: Explain how this tool helps women understand their menopause journey.]
          </p>
        </Card>

        <Card className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            [Content placeholder: Explain the assessment process and methodology.]
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>[Content placeholder: Step 1 description]</li>
            <li>[Content placeholder: Step 2 description]</li>
            <li>[Content placeholder: Step 3 description]</li>
          </ul>
        </Card>

        <Card>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Disclaimer</h2>
          <p className="text-gray-700">
            This assessment is for informational purposes only and is not a substitute for professional medical advice, 
            diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with 
            any questions you may have regarding a medical condition.
          </p>
        </Card>
      </div>
    </div>
  );
}
