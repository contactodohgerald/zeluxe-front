import { Head } from '@/components/seo';
import { Footer } from '@/components/ui/footer';
import { Header } from '@/components/ui/header';

export const PrivacyRoute = () => {
  return (
    <>
      <Head description="Welcome to DNest Privacy Page" />
      <Header />
      <main>
        <div className="mb-12 mt-2 pb-12 pt-2">
          <div className="container mx-auto px-[15px]">
            <div className="p-6">
              <h1 className="mb-4 text-xl font-bold text-gray-900">
                Privacy Policy for DNest
              </h1>
              <p className="mb-4 text-sm text-gray-600">
                Welcome to DNest! This Privacy Policy explains how we collect,
                use, disclose, and safeguard your information when you use our
                hospitality, property, and rental management application. Your
                privacy is important to us, and we are committed to protecting
                it. By using DNest, you agree to the terms outlined in this
                Privacy Policy. If you do not agree, please discontinue use of
                the app immediately.
              </p>
              <h2 className="mb-2 text-lg font-semibold text-gray-800">
                1. Information We Collect
              </h2>
              <p className="mb-4 text-sm">
                We collect the following types of information:
              </p>
              <h3 className="mb-2 text-lg font-medium text-gray-700">
                1.1 Personal Information
              </h3>
              <ul className="mb-4 ml-6 list-disc">
                <li className="text-sm">Name</li>
                <li className="text-sm">Email address</li>
                <li className="text-sm">Phone number</li>
              </ul>

              <h3 className="mb-2 text-lg font-medium text-gray-700">
                1.2 Property and Rental Information
              </h3>
              <ul className="mb-4 ml-6 list-disc">
                <li className="text-sm">
                  Property details, including addresses, descriptions, and
                  rental rates.
                </li>
                <li className="text-sm">
                  Tenant and landlord contact information.
                </li>
              </ul>

              <h3 className="mb-2 text-lg font-medium text-gray-700">
                2. How We Use Your Information
              </h3>
              <p className="mb-4 text-sm">We use the collected data to:</p>
              <ul className="mb-4 ml-6 list-disc">
                <li className="text-sm">
                  Facilitate property rentals, bookings, and hospitality
                  management.
                </li>
                <li className="text-sm">
                  Verify user identities and prevent fraudulent activities.
                </li>
                <li className="text-sm">
                  Provide customer support and respond to inquiries.
                </li>
                <li className="text-sm">
                  Improve app performance, features, and security.
                </li>
                <li className="text-sm">
                  Send notifications, promotional offers, and service updates.
                </li>
              </ul>

              <h3 className="mb-2 text-lg font-medium text-gray-700">
                3. Sharing of Information
              </h3>
              <p className="mb-4 text-sm">
                We may share your information in the following circumstances:
              </p>
              <ul className="mb-4 ml-6 list-disc">
                <li className="text-sm">
                  <strong>With Service Providers:</strong> To assist with
                  payment processing, identity verification, or customer
                </li>
                <li className="text-sm">
                  <strong>With Business Partners:</strong> For promotional
                  offers or property management services.
                </li>
                <li className="text-sm">
                  <strong>For Legal Obligations:</strong> When required by law
                  or to protect our legal rights.
                </li>
                <li className="text-sm">
                  <strong>During Business Transactions:</strong> If DNest is
                  involved in a merger, sale, or acquisition.
                </li>
              </ul>
              <p className="mb-4 text-sm">
                We do not sell your personal information to third parties.
              </p>
              <h3 className="mb-2 text-lg font-medium text-gray-700">
                4. Data Retention
              </h3>
              <p className="mb-4 text-sm">
                We retain your data for as long as necessary to provide our
                services or comply with legal obligations. Once the data is no
                longer required, it is securely deleted.
              </p>
              <h3 className="mb-2 text-lg font-medium text-gray-700">
                5. Security Measures
              </h3>
              <p className="mb-4">
                We implement the following security measures to protect your
                information:
              </p>
              <ul className="mb-4 ml-6 list-disc">
                <li className="text-sm">
                  Encryption of sensitive data during transmission and storage.
                </li>
                <li className="text-sm">
                  Regular vulnerability assessments and audits.
                </li>
                <li className="text-sm">
                  Restricted access to personal information by authorized
                  personnel only.
                </li>
              </ul>
              <p className="mb-4">
                Despite our efforts, no method of data transmission or storage
                is completely secure. Users are encouraged to protect their
                account credentials.
              </p>
              <h2 className="mb-2 text-lg font-semibold text-gray-800">
                6. Cookies and Tracking Technologies
              </h2>
              <p className="mb-4 text-sm">
                We use cookies and similar technologies to:
              </p>
              <ul className="mb-4 ml-6 list-disc">
                <li className="text-sm">Personalize your app experience.</li>
                <li className="text-sm">Analyze app performance.</li>
              </ul>
              <p className="text-sm text-gray-500">
                You can manage cookie preferences through your device settings.
              </p>

              <h2 className="mb-2 text-lg font-semibold text-gray-800">
                7. Your Privacy Rights
              </h2>
              <p className="mb-4 text-sm">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="mb-4 ml-6 list-disc">
                <li className="text-sm">
                  <strong>Access:</strong> Request a copy of your personal data.
                </li>
                <li className="text-sm">
                  <strong>Correction:</strong> Request corrections to inaccurate
                  or incomplete data.
                </li>
                <li className="text-sm">
                  <strong>Deletion:</strong> Request deletion of your personal
                  data (see Section 9).
                </li>
                <li className="text-sm">
                  <strong>Objection:</strong> Object to the processing of your
                  data for certain purposes.
                </li>
                <li className="text-sm">
                  <strong>Data Portability:</strong> Request your data in a
                  portable format.
                </li>
              </ul>
              <p className="text-sm text-gray-500">
                To exercise your rights, contact us at{' '}
                <a href="mailto:support@dnest.com">support@dnest.com.</a>
              </p>

              <h2 className="mb-2 text-lg font-semibold text-gray-800">
                8. Data Deletion
              </h2>
              <p className="mb-4 text-sm">
                We respect your right to delete your data. You can request
                deletion of your account and associated <br /> information by:
              </p>
              <ul className="mb-4 ml-6 list-decimal">
                <li className="text-sm">
                  Navigating to the <strong>Settings</strong> section in the
                  DNest app.
                </li>
                <li className="text-sm">
                  Selecting <strong>"Delete Account"</strong> and following the
                  prompts.
                </li>
                <li className="text-sm">
                  Alternatively, contacting us at{' '}
                  <a href="mailto:support@dnest.com"></a> with your account
                  details.
                </li>
                <p className="mb-4 text-sm">Once the request is verified:</p>
                <li className="text-sm">
                  Your data will be permanently deleted within{' '}
                  <strong>30 days</strong>, except for data required by law.
                </li>
                <li className="text-sm">
                  Any shared information may remain with third parties, as
                  governed by their privacy policies.
                </li>
              </ul>
              <h2 className="mb-2 text-lg font-semibold text-gray-800">
                9. Changes to This Privacy Policy
              </h2>
              <p className="mb-4 text-sm">
                We may update this Privacy Policy from time to time. Changes
                will be notified via:
              </p>
              <ul className="mb-4 ml-6 list-disc">
                <li className="text-sm">In-app notifications.</li>
                <p className="mb-4 text-sm">
                  Continued use of the app after updates signifies acceptance of
                  the revised policy.
                </p>
              </ul>
              <h2 className="mb-2 text-lg font-semibold text-gray-800">
                10. Contact Us
              </h2>
              <p className="mb-4 text-sm">
                For questions or concerns about this Privacy Policy, please
                contact us at:
              </p>
              <ul className="mb-4 ml-6 list-disc">
                <li className="text-sm">
                  <strong>Email: </strong>
                  <a href="mailto:support@dnest.com">support@dnest.com</a>
                </li>
                <li className="text-sm">
                  <strong>Phone:</strong>{' '}
                  <a href="telephone:+2347031250097">+2347031250097</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
