import { Card } from '@/components/ui/Card';

export default function TreatmentPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Treatment Options</h1>
        
        <Card className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Hormone Replacement Therapy (HRT)</h2>
          <p className="text-gray-700 mb-4">
            [Content placeholder: Explanation of HRT, types, benefits, risks, and who might be a candidate.]
          </p>
          <p className="text-gray-700">
            [Content placeholder: Information about different forms of HRT, administration methods, and considerations.]
          </p>
        </Card>

        <Card className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Lifestyle Modifications</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span>[Content placeholder: Diet and nutrition recommendations]</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span>[Content placeholder: Exercise and physical activity recommendations]</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span>[Content placeholder: Stress management techniques]</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span>[Content placeholder: Sleep hygiene practices]</span>
            </li>
          </ul>
        </Card>

        <Card className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Alternative and Complementary Therapies</h2>
          <p className="text-gray-700 mb-4">
            [Content placeholder: Information about natural remedies, supplements, acupuncture, and other alternative approaches.]
          </p>
          <p className="text-gray-700">
            [Content placeholder: Discussion of evidence, safety considerations, and when to consult healthcare providers.]
          </p>
        </Card>

        <Card>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Working with Healthcare Providers</h2>
          <p className="text-gray-700 mb-4">
            [Content placeholder: Guidance on finding the right healthcare provider, preparing for appointments, 
            and advocating for your health needs.]
          </p>
          <p className="text-gray-700">
            [Content placeholder: Information about questions to ask, treatment goals, and ongoing care.]
          </p>
        </Card>
      </div>
    </div>
  );
}
