import { Card } from '@/components/ui/Card';

export default function StagesPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Menopause Stages</h1>
        
        <Card className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Pre-Menopause</h2>
          <p className="text-gray-700 mb-4">
            [Content placeholder: Detailed explanation of the pre-menopause stage, including typical age range, 
            characteristics, and what to expect.]
          </p>
          <p className="text-gray-700">
            [Content placeholder: Additional information about pre-menopause symptoms and management.]
          </p>
        </Card>

        <Card className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Perimenopause</h2>
          <p className="text-gray-700 mb-4">
            [Content placeholder: Detailed explanation of the perimenopause stage, including typical age range, 
            characteristics, hormonal changes, and what to expect.]
          </p>
          <p className="text-gray-700">
            [Content placeholder: Information about perimenopause symptoms, duration, and management strategies.]
          </p>
        </Card>

        <Card className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Menopause</h2>
          <p className="text-gray-700 mb-4">
            [Content placeholder: Detailed explanation of the menopause stage, including definition, 
            confirmation criteria, and what to expect.]
          </p>
          <p className="text-gray-700">
            [Content placeholder: Information about menopause symptoms, health considerations, and management options.]
          </p>
        </Card>

        <Card>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Post-Menopause</h2>
          <p className="text-gray-700 mb-4">
            [Content placeholder: Detailed explanation of the post-menopause stage, including definition, 
            long-term health considerations, and what to expect.]
          </p>
          <p className="text-gray-700">
            [Content placeholder: Information about post-menopause health management, bone health, cardiovascular health, 
            and ongoing care recommendations.]
          </p>
        </Card>
      </div>
    </div>
  );
}
