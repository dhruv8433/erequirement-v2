"use client";

import { MyCardBox } from "@/app/custom/MyBox";
import MyBreadcrumb from "@/app/custom/MyBreadcrumb";
import { useLocale } from "next-intl";
import React from "react";

const page = () => {
  const locale = useLocale();
  return (
    <div className="min-h-screen">
      <div className=" mx-auto">
        <MyBreadcrumb
          title={"Privacy Policy"}
          breadcrumbs={[
            { title: "Home", link: `/` },
            { title: "Privacy Policy", link: `/${locale}/privacy` },
          ]}
          activeIndex={1}
        />

        <MyCardBox className="p-4 rounded-2xl my-4">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 primary-text">
              1. Introduction
            </h2>
            <p className="mb-6">
              Welcome to eRequirement's Privacy Policy page. Your privacy is
              critically important to us. This privacy policy document outlines
              the types of personal information we collect and how we use it.
            </p>
            <p>
              By using our website, you consent to the collection and use of
              information in accordance with this policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 primary-text">
              2. Information We Collect
            </h2>
            <p className="mb-6">
              We collect personal data when you register on our site, subscribe
              to a newsletter, or fill out a form. The information we collect
              includes your name, email address, and any other details provided
              voluntarily.
            </p>
            <p>
              Additionally, we collect non-personal data, such as browser type,
              IP address, and pages viewed on our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 primary-text">
              3. How We Use Your Information
            </h2>
            <p className="mb-6">eRequirement uses your personal data to:</p>
            <ul className="list-disc pl-6">
              <li>Provide and improve our services</li>
              <li>Personalize user experience</li>
              <li>Send periodic emails related to services</li>
              <li>Process transactions securely</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 primary-text">
              4. Cookies and Tracking Technologies
            </h2>
            <p className="">
              eRequirement may use cookies to enhance user experience, track
              website traffic, and customize website content. Users may opt to
              set their browser to refuse cookies, but some parts of the site
              may not function properly as a result.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 primary-text">
              5. Data Protection and Security
            </h2>
            <p className="mb-6">
              We implement a variety of security measures to maintain the safety
              of your personal information. However, no method of transmission
              over the internet is 100% secure, and we cannot guarantee its
              absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 primary-text">
              6. Sharing Your Information
            </h2>
            <p className="">
              eRequirement does not sell, trade, or rent users' personal
              identification information to others. We may share information
              with trusted third parties who assist us in operating our website,
              conducting our business, or serving our users, as long as those
              parties agree to keep this information confidential.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 primary-text">
              7. Changes to This Privacy Policy
            </h2>
            <p className="">
              eRequirement reserves the right to update this privacy policy at
              any time. If we make material changes, we will notify you by
              posting the updated policy on this page. We encourage you to
              periodically review this page for the latest information.
            </p>
          </section>

        </MyCardBox>
      </div>
    </div>
  );
};

export default page;
