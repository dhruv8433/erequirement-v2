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
          title={"Terms and Conditions"}
          breadcrumbs={[
            { title: "Home", link: `/` },
            { title: "Terms and Conditions", link: `/${locale}/terms` },
          ]}
          activeIndex={1}
        />

        <MyCardBox className="p-4 rounded-2xl my-4">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 primary-text">
              1. Introduction
            </h2>
            <p className=" mb-6">
              Welcome to eRequirement! These terms and conditions outline the
              rules and regulations for the use of our website. By accessing or
              using our services, you agree to be bound by the terms outlined
              below. Please read them carefully.
            </p>
            <p className="">
              By accessing this website, we assume you accept these terms and
              conditions in full. Do not continue to use eRequirement's website
              if you do not accept all the terms and conditions stated on this
              page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 primary-text">
              2. License
            </h2>
            <p className="">
              Unless otherwise stated, eRequirement and/or its licensors own the
              intellectual property rights for all material on eRequirement. You
              may access this for personal use only, subject to restrictions
              outlined in these terms.
            </p>
            <ul className="list-disc pl-6 mt-4">
              <li>Republishing material from eRequirement</li>
              <li>Selling or renting material from eRequirement</li>
              <li>
                Reproducing or duplicating content for commercial purposes
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 primary-text">
              3. User Responsibilities
            </h2>
            <p className="">
              You must not use this website in a way that causes, or may cause,
              damage to the website or impairment of its availability or
              accessibility. You are responsible for ensuring the security of
              your login credentials and for any activities that occur under
              your account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 primary-text">
              4. Governing Law
            </h2>
            <p className="">
              These terms and conditions are governed by and construed in
              accordance with the laws of the country. You agree to submit to
              the exclusive jurisdiction of the courts in the event of any
              dispute.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 primary-text">
              5. Termination of Use
            </h2>
            <p className="">
              eRequirement reserves the right to terminate or suspend your
              access to the site if you are found to be in breach of these terms
              and conditions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 primary-text">
              6. Amendments to the Terms
            </h2>
            <p className="">
              eRequirement reserves the right to revise these terms at any time
              without prior notice. Your continued use of the website following
              the posting of any changes will be considered as acceptance of
              such changes.
            </p>
          </section>
        </MyCardBox>
      </div>
    </div>
  );
};

export default page;
