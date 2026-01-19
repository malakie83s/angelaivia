import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
// Using minimal lucide imports - icons defined inline to reduce bundle size
const Clock = ({ size = 24, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const Linkedin = ({ size = 24, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    company: '',
    context: '',
    customSubject: '',
    referral: '',
    referralDetail: '',
    honeypot: '', // Hidden field to catch bots
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Honeypot check - if filled, it's likely a bot
    if (formData.honeypot) {
      console.warn('Honeypot triggered - potential bot submission blocked');
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      // Initialize EmailJS
      emailjs.init('EcXRz11eoDct_gE16');

      // Try to get reCAPTCHA token, but don't fail if it's not available
      let recaptchaToken = 'not-available';
      try {
        if (typeof window !== 'undefined' && (window as any).grecaptcha) {
          recaptchaToken = await new Promise<string>((resolve, reject) => {
            (window as any).grecaptcha.ready(() => {
              (window as any).grecaptcha
                .execute('6LesgUUsAAAAAJ-HTr3vSpTx7mUKbCVPMXb_m70O', { action: 'submit' })
                .then((token: string) => resolve(token))
                .catch(() => resolve('recaptcha-failed'));
            });
          });
          console.log('reCAPTCHA token obtained');
        }
      } catch (recaptchaError) {
        console.warn('reCAPTCHA not available, proceeding without it:', recaptchaError);
      }

      const templateParams = {
        from_name: formData.fullName,
        from_email: formData.email,
        subject: formData.subject === 'Other' ? formData.customSubject : formData.subject,
        company: formData.company || 'Not provided',
        message: formData.context,
        referral: formData.referral,
        referral_detail: formData.referralDetail || 'Not provided',
        to_email: 'contact@angelaivia.com',
        recaptcha_token: recaptchaToken,
      };

      const response = await emailjs.send(
        'service_6ahgbdf',
        'template_uaaj5if',
        templateParams
      );

      console.log('Email sent successfully:', response);
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        company: '',
        context: '',
        customSubject: '',
        referral: '',
        referralDetail: '',
        honeypot: '',
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 lg:py-32 text-white" style={{ backgroundColor: '#223246' }}>
      <div className="container mx-auto px-8 lg:px-16">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-h2 lg:text-[2.5rem] font-headline font-semibold text-white mb-6 tracking-tight">
            Let's Work Together
          </h2>
          <p className="text-body text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Ready to transform your data into actionable insights? Get in touch with our team today.
          </p>
        </motion.div>

        {/* Single bordered container */}
        <motion.div
          className="max-w-6xl mx-auto rounded-2xl border-2 border-gray-300 p-4 lg:p-6"
          style={{ backgroundColor: '#F9FAFB' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Left Side - Request Discovery Call */}
            <div>
              <h3 className="text-h2 font-headline font-semibold mb-6 text-gray-900">
                Request a Discovery Call
              </h3>
              <p className="text-body font-normal leading-relaxed mb-8 text-gray-700">
                Whether a one-time assessment or a longer partnership is needed, collaboration starts by understanding goals, constraints, and timelines.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-gray-700">
                  <Clock size={24} className="text-tertiary flex-shrink-0" />
                  <span className="text-body font-normal">Typical Intro: 30 minutes</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-tertiary flex-shrink-0"
                  >
                    <path 
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" 
                      fill="currentColor"
                    />
                  </svg>
                  <span className="text-body font-normal">Location: Remote</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Linkedin size={24} className="text-tertiary flex-shrink-0" />
                  <a
                    href="https://www.linkedin.com/company/angelaivia/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body font-normal hover:text-tertiary transition-colors"
                  >
                    Company LinkedIn page
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div>
              <h3 className="text-h2 font-headline font-semibold text-gray-900 mb-8">
                LET'S TALK
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field - hidden from users, catches bots */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-small font-semibold" style={{ color: '#000000' }}>
                      Full name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="Your name"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className="bg-white text-gray-900 border-gray-300 focus:border-tertiary h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-small font-semibold" style={{ color: '#000000' }}>
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-white text-gray-900 border-gray-300 focus:border-tertiary h-12"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-small font-semibold" style={{ color: '#000000' }}>
                      Subject <span className="text-red-500">*</span>
                    </Label>
                    {formData.subject === 'Other' ? (
                      <Input
                        id="customSubject"
                        name="customSubject"
                        type="text"
                        placeholder="Enter your subject"
                        required
                        value={formData.customSubject}
                        onChange={handleChange}
                        className="bg-white text-gray-900 border-gray-300 focus:border-tertiary h-12"
                      />
                    ) : (
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full h-12 px-3 rounded-md border border-gray-300 bg-white text-gray-900 focus:border-tertiary focus:outline-none focus:ring-1 focus:ring-tertiary text-small"
                      >
                        <option value="" disabled>Select a topic</option>
                        <option value="Data Architecture">Data Architecture</option>
                        <option value="ETL / Data Engineering">ETL / Data Engineering</option>
                        <option value="BI / Dashboards">BI / Dashboards</option>
                        <option value="Performance Optimization">Performance Optimization</option>
                        <option value="AI Enablement">AI Enablement</option>
                        <option value="Strategy & Operating Model">Strategy & Operating Model</option>
                        <option value="Other">Other</option>
                      </select>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-small font-semibold" style={{ color: '#000000' }}>
                      Company <span className="text-gray-400 text-xs">(optional)</span>
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Company or team name"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-white text-gray-900 border-gray-300 focus:border-tertiary h-12"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="referral" className="text-small font-semibold" style={{ color: '#000000' }}>
                      How did you hear about us? <span className="text-red-500">*</span>
                    </Label>
                    <select
                      id="referral"
                      name="referral"
                      required
                      value={formData.referral}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          referral: e.target.value,
                          referralDetail: '' // Reset detail when main selection changes
                        });
                      }}
                      className="w-full h-12 px-3 rounded-md border border-gray-300 bg-white text-gray-900 focus:border-tertiary focus:outline-none focus:ring-1 focus:ring-tertiary text-small"
                    >
                      <option value="" disabled>Select an option</option>
                      <option value="Search Engine">Search Engine</option>
                      <option value="Social Media">Social Media</option>
                      <option value="Relteck">Relteck</option>
                      <option value="From a Friend">From a Friend</option>
                      <option value="Blog / Article">Blog / Article</option>
                      <option value="Event / Conference">Event / Conference</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Dynamic Referral Detail Field */}
                  {formData.referral === 'Search Engine' && (
                    <div className="space-y-2">
                      <Label htmlFor="referralDetail" className="text-small font-semibold" style={{ color: '#000000' }}>
                        Which Search Engine? <span className="text-red-500">*</span>
                      </Label>
                      <select
                        id="referralDetail"
                        name="referralDetail"
                        required
                        value={formData.referralDetail}
                        onChange={handleChange}
                        className="w-full h-12 px-3 rounded-md border border-gray-300 bg-white text-gray-900 focus:border-tertiary focus:outline-none focus:ring-1 focus:ring-tertiary text-small"
                      >
                        <option value="" disabled>Select Search Engine</option>
                        <option value="Google">Google</option>
                        <option value="Bing">Bing</option>
                        <option value="Yahoo">Yahoo</option>
                        <option value="DuckDuckGo">DuckDuckGo</option>
                        <option value="Baidu">Baidu</option>
                        <option value="Yandex">Yandex</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  )}

                  {formData.referral === 'Social Media' && (
                    <div className="space-y-2">
                      <Label htmlFor="referralDetail" className="text-small font-semibold" style={{ color: '#000000' }}>
                        Which Platform? <span className="text-red-500">*</span>
                      </Label>
                      <select
                        id="referralDetail"
                        name="referralDetail"
                        required
                        value={formData.referralDetail}
                        onChange={handleChange}
                        className="w-full h-12 px-3 rounded-md border border-gray-300 bg-white text-gray-900 focus:border-tertiary focus:outline-none focus:ring-1 focus:ring-tertiary text-small"
                      >
                        <option value="" disabled>Select Platform</option>
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="Twitter / X">Twitter / X</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Instagram">Instagram</option>
                        <option value="YouTube">YouTube</option>
                        <option value="TikTok">TikTok</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  )}

                  {(formData.referral === 'Other' || formData.referral === 'From a Friend') && (
                    <div className="space-y-2">
                      <Label htmlFor="referralDetail" className="text-small font-semibold" style={{ color: '#000000' }}>
                        {formData.referral === 'From a Friend' ? "Friend's Name" : "Please Specify"} <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="referralDetail"
                        name="referralDetail"
                        type="text"
                        placeholder={formData.referral === 'From a Friend' ? "Enter your friend's name" : "Please tell us how you found us"}
                        required
                        value={formData.referralDetail}
                        onChange={handleChange}
                        className="bg-white text-gray-900 border-gray-300 focus:border-tertiary h-12"
                      />
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="context" className="text-small font-semibold" style={{ color: '#000000' }}>
                    Context & goals <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="context"
                    name="context"
                    placeholder="Share current challenges, key stakeholders, and what success would look like."
                    required
                    value={formData.context}
                    onChange={handleChange}
                    rows={6}
                    className="bg-white text-gray-900 border-gray-300 focus:border-tertiary resize-none"
                  />
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-small">
                    ✓ Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-small">
                    ✗ Oops! Something went wrong. Please try again or email us directly at contact@angelaivia.com
                  </div>
                )}

                <div className="space-y-3">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full text-white hover:opacity-90 font-semibold h-12 rounded-full bg-gradient-to-r from-[#3B4A7D] via-[#4A5FA8] to-[#5B6FD8] hover:from-[#2F3C66] hover:via-[#3D4F8F] hover:to-[#4A5FC2] transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                  </Button>
                  <p className="text-xs text-gray-500 text-center">
                    This site is protected by reCAPTCHA and the Google{' '}
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-tertiary hover:underline">
                      Privacy Policy
                    </a>{' '}
                    and{' '}
                    <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-tertiary hover:underline">
                      Terms of Service
                    </a>{' '}
                    apply.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
