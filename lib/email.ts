import { EmailData } from './types';

export function generateEmailTemplate(data: EmailData): string {
  const { stage, summary, recommendations } = data;
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Your Menopause Stage Assessment Results</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 30px;">
        <h1 style="color: #831843; margin: 0;">Your Assessment Results</h1>
      </div>
      
      <div style="background: #fff; padding: 25px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 20px;">
        <h2 style="color: #be185d; margin-top: 0;">Stage: ${stage}</h2>
        <p style="font-size: 16px;">${summary}</p>
      </div>
      
      <div style="background: #f9fafb; padding: 25px; border-radius: 8px; margin-bottom: 20px;">
        <h3 style="color: #831843; margin-top: 0;">Key Recommendations:</h3>
        <ul style="padding-left: 20px;">
          ${recommendations.map(rec => `<li style="margin-bottom: 10px;">${rec}</li>`).join('')}
        </ul>
      </div>
      
      <div style="text-align: center; color: #6b7280; font-size: 14px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
        <p>This assessment is for informational purposes only and is not a substitute for professional medical advice.</p>
        <p>Please consult with a healthcare provider for personalized guidance.</p>
      </div>
    </body>
    </html>
  `;
}

export function generatePlainTextEmail(data: EmailData): string {
  const { stage, summary, recommendations } = data;
  
  return `
Your Menopause Stage Assessment Results
========================================

Stage: ${stage}

${summary}

Key Recommendations:
${recommendations.map((rec, i) => `${i + 1}. ${rec}`).join('\n')}

---
This assessment is for informational purposes only and is not a substitute for professional medical advice.
Please consult with a healthcare provider for personalized guidance.
  `.trim();
}
