import { Head } from '@/components/seo';
import { Footer } from '@/components/ui/footer';
import { Header } from '@/components/ui/header';

export const PrivacyRoute = () => {
  return (
    <>
      <Head description="Welcome to Zeluxe Listings About Page" />
      <Header />
      <main>
        <div className="my-12 py-12">
          <div className="container mx-auto px-[15px]">
            <div className="p-6">
              <h1 className="mb-4 text-3xl font-bold text-gray-900">
                Privacy Policy
              </h1>
              <p className="mb-4 text-sm text-gray-600">
                Effective Date: <strong>17-12-2024</strong> | Last Updated:{' '}
                <strong>17-12-2024</strong>
              </p>

              <p className="mb-6">
                At Dnest Listings and Rentals, we are committed to protecting
                your privacy and ensuring that your personal information is
                handled securely and responsibly. This Privacy Policy outlines
                how we collect, use, disclose, and protect your information when
                you use our website, mobile application, and services
                (collectively, the "Platform"). By accessing or using our
                Platform, you agree to the terms of this Privacy Policy.
              </p>

              <h2 className="mb-2 text-2xl font-semibold text-gray-800">
                1. Information We Collect
              </h2>
              <p className="mb-4">
                We collect the following types of information when you interact
                with our Platform:
              </p>

              <h3 className="mb-2 text-xl font-medium text-gray-700">
                a. Personal Information
              </h3>
              <ul className="mb-4 ml-6 list-disc">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Billing and mailing address</li>
                <li>Payment information (e.g., credit card or bank details)</li>
              </ul>

              <h3 className="mb-2 text-xl font-medium text-gray-700">
                b. Account Information
              </h3>
              <p className="mb-4">
                When you create an account or list a property, we may collect:
              </p>
              <ul className="mb-4 ml-6 list-disc">
                <li>Username</li>
                <li>Profile picture</li>
                <li>Property details (e.g., address, description, pricing)</li>
              </ul>

              <h3 className="mb-2 text-xl font-medium text-gray-700">
                c. Usage Data
              </h3>
              <p className="mb-4">
                Information about how you use the Platform, including:
              </p>
              <ul className="mb-4 ml-6 list-disc">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>
                  Device information (e.g., operating system, mobile device ID)
                </li>
                <li>Pages viewed and actions taken on the Platform</li>
                <li>Cookies and similar technologies</li>
              </ul>

              <h3 className="mb-2 text-xl font-medium text-gray-700">
                d. Location Data
              </h3>
              <p className="mb-4">
                With your consent, we may collect location data to provide
                localized services, such as nearby property listings.
              </p>

              <h2 className="mb-2 text-2xl font-semibold text-gray-800">
                2. How We Use Your Information
              </h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="mb-4 ml-6 list-decimal">
                <li>
                  Facilitate property listings, bookings, and rental agreements.
                </li>
                <li>
                  Analyze user behavior to enhance functionality and user
                  experience.
                </li>
                <li>
                  Send notifications, updates, and customer support
                  communications.
                </li>
                <li>
                  Handle payments securely for bookings or other transactions.
                </li>
                <li>Verify user identities and detect fraudulent activity.</li>
                <li>
                  Share offers, promotions, and other marketing content (with
                  your consent).
                </li>
              </ul>

              <h2 className="mb-2 text-2xl font-semibold text-gray-800">
                3. How We Share Your Information
              </h2>
              <p className="mb-4">
                We do not sell your personal information. However, we may share
                your information with:
              </p>
              <h3 className="mb-2 text-xl font-medium text-gray-700">
                a. Service Providers
              </h3>
              <p className="mb-4">
                Third-party vendors who help us operate the Platform, such as
                payment processors, cloud service providers, and analytics
                tools.
              </p>
              <h3 className="mb-2 text-xl font-medium text-gray-700">
                b. Business Partners
              </h3>
              <p className="mb-4">
                Partners who collaborate with us to offer services, such as
                property managers or rental agencies.
              </p>

              <h2 className="mb-2 text-2xl font-semibold text-gray-800">
                10. Contact Us
              </h2>
              <p className="mb-4">
                If you have any questions or concerns about this Privacy Policy,
                please contact us at:
              </p>
              <ul className="mb-4 ml-6 list-none">
                <li>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:support@dnest.com" className="text-blue-500">
                    support@dnest.com
                  </a>
                </li>
                <li>
                  <strong>Phone:</strong> +1 (800) 123-4567
                </li>
                <li>
                  <strong>Mailing Address:</strong> Dnest Listings and Rentals,
                  Address Line 1, City, State, ZIP Code
                </li>
              </ul>

              <p className="text-sm text-gray-500">
                Your trust is important to us, and we are committed to
                safeguarding your privacy while providing exceptional service.
                Thank you for choosing Dnest Listings and Rentals!
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
