import React, { useState, useEffect } from "react";
import { ThreeCircles } from "react-loader-spinner";
import Colors from "../components/Colors";

const Privacypolicy = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
      {isLoading ? (
        <div className="spinner-container">
          <ThreeCircles
            height="80"
            width="80"
            color={Colors.violet}
            ariaLabel="bars-loading"
            visible={true}
          />
        </div>
      ) : (
        <div className="termDiv1">
          <h1 className="termH11"> Privacy Policy</h1>
          <div className="termDiv2">
            <div className="termDiv3">
              <h1>General</h1>
              <h3>
                Bitvelar Financial Company and its affiliates are committed to
                protecting and respecting your privacy. This Privacy Policy
                (together with our Terms of Use) governs our collection,
                processing and use of your Personal Information. We define
                'Personal Information' as information which identifies you
                personally, e.g. your name, address, e-mail address, trades etc.
              </h3>
            </div>
            <div className="termDiv3">
              <h1>Who are we</h1>
              <h3>
                Bitvelar fully regulated and licensed AML/CTF compliant AUSTRAC
                registered Dual Gateway Exchange Platform. Buy, sell, send,
                receive and trade cryptocurrencies.
              </h3>
            </div>
            <div className="termDiv3">
              <h1>
                The types of Personal Information which we collect may include:
              </h1>
              <h3>
                We will process your Personal Information only for the
                purpose(s) of providing to you the service(s) that you ask us to
                provide you and to satisfy the legal obligations stemming from
                regulatory obligations that arise from providing you the
                service(s)
              </h3>
            </div>
            <div className="termDiv3">
              <h1>IP Addresses</h1>
              <h3>
                We may collect information about your computer, including where
                available your IP address, operating system and browser type,
                for system administration and to report aggregate information to
                our advertisers. This is statistical data about our users'
                browsing actions and patterns and will not be used to identify
                any individual unless that same individual.
              </h3>
            </div>
            <div className="termDiv3">
              <h1>Cookies</h1>
              <h3>
                We use a browser feature known as a 'cookie', which assigns a
                unique identification to your computer. Cookies are typically
                stored on your computer's hard drive. Information collected from
                cookies is used by us to evaluate the effectiveness of our Site,
                analyze trends, and administer the Platform. The information
                collected from cookies allows us to determine such things as
                which parts of our Site are most visited and difficulties our
                visitors may experience in accessing our Site. With this
                knowledge, we can improve the quality of your experience on the
                Platform by recognizing and delivering more of the most desired
                features and information, as well as by resolving access
                difficulties. We also use cookies and/or a technology known as
                web bugs or clear gifs, which are typically stored in emails to
                help us confirm your receipt of, and response to, our emails and
                to provide you with a more personalized experience when using
                our Site. We use third party service provider(s), to assist us
                in better understanding the use of our Site. Our service
                provider(s) will place cookies on the hard drive of your
                computer and will receive information that we select that will
                educate us on such things as how visitors navigate around our
                site, what products are browsed, and general Transaction
                information. Our service provider(s) analyses this information
                and provides us with aggregate reports. The information and
                analysis provided by our service provider(s) will be used to
                assist us in better understanding our visitors' interests in our
                Site and how to better serve those interests. The information
                collected by our service provider(s) may be linked to and
                combined with information that we collect about you while you
                are using the Platform. Our service provider(s) is/are
                contractually restricted from using information they receive
                from our Site other than to assist us. By using our Site you are
                agreeing that we may use cookies for the purposes set out above.
                The company will keep records of all transfers of Personal
                Information to third parties and this information, where
                possible, can be provided to you.
              </h3>
            </div>
            <div className="termDiv3">
              <h1>Disclosure of Personal Information</h1>
              <h3>
                We use the Personal Information for the purposes indicated at
                the time you provide us with such information, and/or otherwise
                for the purposes set out in this Privacy Policy and/or as
                otherwise permitted by law. We may make available the Personal
                Information that you provide to us to our affiliates, agents,
                representatives, trusted service providers and contractors for
                these limited purposes upon your express consent or for and
                during the provision of the service that you would have
                requested. We may also share Users’ Personal Information with
                financial institutions, insurance companies or other companies
                in the case of a merger, divestiture, or other corporate
                re-organisation and notify you of such sharing of your
                information to be able to exercise any of your rights where
                applicable. We may also share Users' Personal Information with
                law enforcement or regulatory agencies, as may be required by
                law. We may not be able to inform you of such sharing of data
                due to legal restrictions. Any third party which receives or has
                access to Personal Information shall be required by us to
                protect such Personal Information and to use it only to carry
                out the services they are performing for you or for Bitvelar,
                unless otherwise required or permitted by law. Such a third
                party, except for regulatory authorities, would be contractually
                bound to adhere to the same security and confidentiality
                policies as Bitvelar and assume the same responsibilities as
                Bitvelar. The legitimate exercise of any of your rights with
                Bitvelar will also be notified to be applied by any such third
                parties having been given access to your Personal Information.
                We will ensure that any such third party is aware of our
                obligations under this Privacy Policy and we will enter into
                contracts with such third parties by which they are bound by
                terms no less protective of any Personal Information disclosed
                to them than the obligations we undertake to you under this
                Privacy Policy or which are imposed on us under applicable data
                protection laws.
              </h3>
            </div>
            <div className="termDiv3">
              <h1>Your rights</h1>
              <h3>
                You have the right to access your Personal Information and to
                require the correction, updating and blocking of inaccurate
                and/or incorrect data by sending an email to us at e-mail
                mentioned on the website (out e-mail), you can do these actions
                in your account profile page yourself (if applicable). Upon your
                written request at our e-mail, we will inform you of the
                Personal Information relating to you that we hold and the use
                and general disclosure of your Personal Information. We will
                also give you a copy of the Personal Information we have
                retained. There may be a minimal charge for providing you
                additional copies of your Personal Information to cover
                administrative costs. You may also request the deletion or
                destruction of both the Account and Personal Information by
                sending an email to our e-mail. Menxbit will action your request
                immediately, except, where this is not consistent with its legal
                and regulatory obligations.You may also ask us to transfer your
                Personal Information to another controller of your choice. To
                ensure the confidentiality, integrity and availability of your
                information to yourself, we may request you to confirm your
                identity by providing identification documentation and/or other
                methods prior to assisting you in exercising any of your rights.
                іf you refuse to prove your identity, we may decline to take
                actions in respect of your data, save restricting processing,
                until we can ensure that such actions are the true wish of the
                data subject. In the carrying out of our services we may use
                automated processing and profiling to reduce the risks of fraud,
                money laundering and abuse of our services. Through this
                automated processing, we carry out an analysis of your
                identification, transactional and behavioral patterns. We may
                not able to provide you with some or all our services if you do
                not wish this automated processing to be carried out. If you
                feel that this processing might be detrimental to you, we can
                provide you with further information about this automated
                processing by contacting us on our e-mail
              </h3>
            </div>
            <div className="termDiv3">
              <h1>Security</h1>
              <h3>
                We have implemented technical and organizational security
                measures to ensure the confidentiality of your Personal
                Information and to protect your Personal Information from loss,
                misuse, alteration or destruction. Only authorized personnel of
                dger have access to your Personal Information, and these
                personnel are required to treat the information as confidential.
                Where you have consented to, or we are obliged to pass on
                Personal Information to third parties to provide you with a
                requested service or in the carrying out of a regulatory or
                legal obligation, we will request that the same levels of
                technical and organizational security measure be applied through
                contractual arrangements, where possible. Technical and
                organizational security measures in place will, from time to
                time, be reviewed in line with legal and technical developments.
                іn the event of a personal data breach or the failure of the
                measures of protection of such information we will immediately
                notify you without undue delay.
              </h3>
            </div>
            <div className="termDiv3">
              <h1>Links</h1>
              <h3>
                Here may be links from our Site to other sites and resources
                provided by third parties. This Privacy Policy applies only to
                our Site. Accessing those third-party sites or sources requires
                you to leave our Site. We do not control those third party sites
                or any of the content contained therein and you agree that we
                are in no way responsible or liable for any of those third party
                sites, including, without limitation, their content, policies,
                failures, promotions, products, services or actions and/or any
                damages, losses, failures or problems caused by, related to or
                arising from those sites. We encourage you to review all
                policies, rules, terms and regulations, including the privacy
                policies, of each site that you visit
              </h3>
            </div>
            <div className="termDiv3">
              <h1>Retention of Personal Information</h1>
              <h3>
                Your information is held within our servers. Access to this
                information is provided to employees of Bitvelar whose office
                may be inside and/or outside of the European Union all our
                employees adhere to the principles of data security and
                processes as those within the European Union. We will hold your
                Personal Information only for as long as it is necessary for the
                purposes described in this Privacy Policy and our own legal and
                regulatory requirements. іn accordance with record keeping
                activities for Anti-Money Laundering, Tax and Company legal
                obligations, we will retain Accounts and Personal Information
                for, at least, a period of ten years after a user closes his
                account with us. Data stored for regulatory purposes only will
                be protected from unnecessary processing and will be held only
                for the purpose of being able to provide information or access
                to relevant authorities.
              </h3>
            </div>
            <div className="termDiv3">
              <h1>Disposal of Personal Information</h1>
              <h3>
                Once we do not have any obligation to providing you with a
                service you requested, nor an obligation to hold Personal
                Information for regulatory or legal purpose, we will anonymize
                or dispose of your Personal Information in line with acceptable
                industry and security standards so that this cannot be
                subsequently retrieved and associated to you. Where we cannot
                directly remove such records, such as in archived backups, we
                will retain a log of which Personal Information should be
                removed if ever the backup data is restored.
              </h3>
            </div>
            <div className="termDiv3">
              <h1>Marketing</h1>
              <h3>
                We will ask you for your consent on registration or
                post-registration, by providing you the ability to check
                marketing preferences check boxes located within your account
                profile page to allow us to contact you or use your Personal
                Information for marketing purposes. You have the right to
                retract the consent for us to process your Personal Information
                for marketing purposes. You can exercise your right to prevent
                such processing by unchecking marketing preferences check boxes
                on your account profile or by contacting us at any time on our
                e-mail.
              </h3>
            </div>
            <div className="termDiv3">
              <h1>Our Data Protection Officer</h1>
              <h3>
                Our Data Protection Officer is the person in charge of ensuring
                our company adheres to this privacy policy. This person is also
                the main contact for our Data Protection Supervisory Authority.
                The Data Protection Officer may be contacted on separate e-mail
                dpo@ Bitvelar.
              </h3>
            </div>
            <div className="termDiv3">
              <h1>Data Protection Supervisory Authority</h1>
              <h3>
                You may contact an appropriate Data Protection Supervisory
                Authority if you wish to discuss with them any instance where
                you feel we may not be adhering to the terms within this Privacy
                Policy or to raise a complaint.
              </h3>
            </div>
            <div className="termDiv3">
              <h1>Changes</h1>
              <h3>
                Our Site policies, content, information, promotions,
                disclosures, disclaimers and features may be revised, modified,
                updated, and/or supplemented at any time and without prior
                notice at the sole and absolute discretion of Bitvelar. If we
                change this Privacy Policy, will take steps to notify all users
                by a notice on our Site and will post the amended Privacy Policy
                on the Site. If we consider that your rights may be affected by
                any such changes, we will request you to confirm your
                consideration and acceptance prior to continue our relationship
                with you.
              </h3>
            </div>
            <div className="termDiv3">
              <h1>Contact Us</h1>
              <h3>
                If you have any questions, comments, or concerns not
                specifically regarding our Privacy Policy and/or practices as it
                or they relate to the Platform, please contact us at our email
                address.
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Privacypolicy;
