import { Card } from '@/components/ui/Card';

export default function ResourcesPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Resources</h1>
        
        <Card className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Helpful Websites</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span>[Content placeholder: Link and description of reputable health organization website]</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span>[Content placeholder: Link and description of women's health resource]</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span>[Content placeholder: Link and description of menopause-specific resource]</span>
            </li>
          </ul>
        </Card>

        <Card className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Books and Publications</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span>[Content placeholder: Book title, author, and brief description]</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span>[Content placeholder: Book title, author, and brief description]</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span>[Content placeholder: Book title, author, and brief description]</span>
            </li>
          </ul>
        </Card>

        <Card className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Support Groups and Communities</h2>
          <p className="text-gray-700 mb-4">
            [Content placeholder: Information about local and online support groups, forums, and communities for women going through menopause.]
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span>[Content placeholder: Support group or community resource]</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span>[Content placeholder: Support group or community resource]</span>
            </li>
          </ul>
        </Card>

        <Card>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Professional Organizations</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span>[Content placeholder: Professional medical organization and description]</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span>[Content placeholder: Professional medical organization and description]</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">•</span>
              <span>[Content placeholder: Professional medical organization and description]</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
