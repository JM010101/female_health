import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export default function ContactPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Contact Us</h1>
        
        <Card className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-gray-700 mb-6">
            [Content placeholder: Contact information and how to reach out. Include email, phone, or other contact methods.]
          </p>
          
          <div className="space-y-4">
            <div>
              <p className="font-medium text-gray-800 mb-2">Email:</p>
              <p className="text-gray-700">[Content placeholder: contact@example.com]</p>
            </div>
            <div>
              <p className="font-medium text-gray-800 mb-2">Phone:</p>
              <p className="text-gray-700">[Content placeholder: Phone number]</p>
            </div>
            <div>
              <p className="font-medium text-gray-800 mb-2">Address:</p>
              <p className="text-gray-700">[Content placeholder: Physical address if applicable]</p>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send Us a Message</h2>
          <form className="space-y-4">
            <Input
              type="text"
              label="Name"
              placeholder="Your name"
              required
            />
            <Input
              type="email"
              label="Email"
              placeholder="your.email@example.com"
              required
            />
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                rows={6}
                placeholder="Your message..."
                required
              />
            </div>
            <Button type="submit" variant="primary">
              Send Message
            </Button>
          </form>
          <p className="mt-4 text-sm text-gray-600">
            Note: This is a placeholder form. In a production environment, this would be connected to a backend service.
          </p>
        </Card>
      </div>
    </div>
  );
}
