import { Card } from '@/components/ui/Card';

export default function SymptomsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Common Symptoms</h1>
        
        <Card className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Physical Symptoms</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span>[Content placeholder: Hot flashes and night sweats - description and management]</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span>[Content placeholder: Sleep disturbances - description and management]</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span>[Content placeholder: Vaginal dryness - description and management]</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span>[Content placeholder: Weight changes - description and management]</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span>[Content placeholder: Other physical symptoms - description and management]</span>
            </li>
          </ul>
        </Card>

        <Card className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Emotional and Mental Symptoms</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span>[Content placeholder: Mood changes - description and management]</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span>[Content placeholder: Anxiety and depression - description and management]</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span>[Content placeholder: Memory and concentration issues - description and management]</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span>[Content placeholder: Irritability - description and management]</span>
            </li>
          </ul>
        </Card>

        <Card>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">When to Seek Medical Advice</h2>
          <p className="text-gray-700 mb-4">
            [Content placeholder: Guidance on when symptoms warrant medical attention and what to discuss with healthcare providers.]
          </p>
          <p className="text-gray-700">
            [Content placeholder: Information about severe symptoms, red flags, and emergency situations.]
          </p>
        </Card>
      </div>
    </div>
  );
}
