import { Card } from '@/components/ui/Card';

export default function FAQPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h1>
        
        <div className="space-y-6">
          <Card>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">What is menopause?</h2>
            <p className="text-gray-700">
              [Content placeholder: Answer explaining what menopause is, when it typically occurs, and how it's defined.]
            </p>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">At what age does menopause typically begin?</h2>
            <p className="text-gray-700">
              [Content placeholder: Answer about typical age ranges, early menopause, and factors that influence timing.]
            </p>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">How long do menopause symptoms last?</h2>
            <p className="text-gray-700">
              [Content placeholder: Answer about symptom duration, variability, and what to expect over time.]
            </p>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Is hormone replacement therapy safe?</h2>
            <p className="text-gray-700">
              [Content placeholder: Answer about HRT safety, benefits, risks, and who should consider it.]
            </p>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Can I still get pregnant during perimenopause?</h2>
            <p className="text-gray-700">
              [Content placeholder: Answer about fertility during perimenopause and contraception considerations.]
            </p>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">What can I do to manage hot flashes?</h2>
            <p className="text-gray-700">
              [Content placeholder: Answer about hot flash management strategies, lifestyle changes, and treatment options.]
            </p>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">How accurate is this assessment?</h2>
            <p className="text-gray-700">
              [Content placeholder: Answer about assessment accuracy, limitations, and the importance of professional medical evaluation.]
            </p>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Should I see a doctor based on my results?</h2>
            <p className="text-gray-700">
              [Content placeholder: Answer about when to seek medical advice and the importance of regular healthcare.]
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
