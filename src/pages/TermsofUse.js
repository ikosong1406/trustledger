import React, { useState, useEffect } from "react";
import { ThreeCircles } from "react-loader-spinner";
import "../styles/TermsofUse.css";
import Colors from "../components/Colors";

const TermsofUse = () => {
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
          <h1 className="termH11"> Terms of Use</h1>
          <div className="termDiv2">
            <div className="termDiv3">
              <h1>1.TERMS OF USE</h1>
              <h3>
                1.1 Acceptance of the these terms of use. By accessing, reading,
                and making use of this Website and the Services, you are deemed
                to have reviewed, understood and accepted, on your own behalf
                and on behalf of any person on whose behalf you may be acting,
                these Terms of Use and agreed with the Company to be bound
                hereunder. For the purposes of these Terms of Use, “person”
                means any natural person, corporation, partnership, joint
                venture or any other incorporated or unincorporated entity,
                whether acting as an individual, fiduciary, or in any other
                capacity.If you do not wish to be bound by these Terms of Use,
                you may not use this Website or any of the Services.
              </h3>
              <h3>
                1.2 Changes of terms of use and website. The Company reserves
                the right, exercisable at any time at its sole discretion, to
                add to or remove, modify or otherwise change any part of these
                Terms of Use. Changes will be effective immediately at such time
                as the Terms of Use are posted on this Website. You should check
                the Terms of Use for changes by checking the date this page was
                last updated. If any change to the Terms of Use is not
                acceptable to you, you must discontinue your use of this Website
                and the Services immediately. Your continued use of this Website
                or any of the Services after any changes to the Terms and
                Conditions will constitute your unqualified acceptance of the
                changes. The Company may terminate, change, suspend or
                discontinue any aspect of this Website or the Services at any
                time without notice. Without limiting the generality of the
                foregoing, the Company may change the availability of any
                features, institute new, or amend existing fees or charges for
                the use of the Website, the Services, or any features included
                in the Website or the Services, add, remove, modify or otherwise
                change any content on this Website, and impose limits on certain
                features or restrict access to parts or all of this Website. The
                Company reserves the right, but not the duty, to correct any
                errors or omissions in any portion of this Website at any time
                and without notice.
              </h3>
              <h3>
                1.3 Other agreements. These Terms of Use are in addition to and
                supplementary to any other agreements that you or any person you
                represent have or may enter into with the Company concerning
                your dealings with them, including any information, products or
                services provided by the Company. In the event of any
                inconsistency or conflict between the provisions of these Terms
                of Use and the provisions of any other agreement that you or any
                person you represent have with the Company, the provisions of
                these Terms of Use shall govern regarding your access to and use
                of the Website and the Services.
              </h3>
            </div>

            <div className="termDiv3">
              <h1>2.RISK WARNING</h1>
              <h3>
                2.1 Buying, selling and investing in cryptocurrencies can be
                risky. The risk of loss in trading or holding cryptocurrency can
                be substantial. You should therefore carefully consider whether
                trading or holding cryptocurrency is suitable for you in light
                of your financial condition. In considering whether to trade or
                hold cryptocurrency, you should be aware that the price or value
                of cryptocurrency can change rapidly, decrease, and potentially
                even fall to zero.
              </h3>
              <h3>
                2.2 The cryptocurrencies market information relating to the past
                performance of an investment is not necessarily a guide to its
                performance in the future. The value of investments or income
                from them may go down as well as up. Like stocks and shares as
                well, cryptocurrencies are valued from second to second, their
                bid and offer value fluctuates sometimes widely. The degrees of
                fluctuation of prices vary significantly and the value of higher
                volatility funds may change suddenly. The value of investments
                may rise or fall due to the volatility of world markets,
                interest rates and capital values or, for investments held in
                overseas markets, changes in the rate of exchange in the
                currency in which the investments are denominated. You may not
                necessarily get back the amount you invested.
              </h3>
              <h3>
                2.3 You know and understand cryptocurrency trading also has
                certain risks which can cause a complete loss to zero. As
                cryptocurrencies are no official currency and the legal status
                is still undefined, their legal nature is subject of change
                under different jurisdictions. Unlike official currencies, which
                are backed up by governments or other legal entities like the
                FED, ECB or others, cryptocurrencies are a private currency,
                generated by all the world. There is no central bank that could
                take corrective measures to protect the value of the
                cryptocurrencies at a possible crisis.
              </h3>
              <h3>
                2.4 You know and understand cryptocurrency trading could be
                affected by hackers, change of laws, official restrictions,
                frauds, technical issues, collapse of infrastructure and many
                other possible threats.
              </h3>
              <h3>
                2.5 All content provided through this website is only for your
                personal information and use, and is not intended to address
                your particular requirements or to be relied upon in making (or
                refraining from making) any specific investment or other
                decision. Such content shall not constitute any form of advice
                or recommendation by Bitvelar. Furthermore, there may be
                additional risks that Bitvelar have not foreseen or named in
                this Terms of Use.
              </h3>
              <h3>
                2.6 Bitvelar does not provide any investment advice in
                connection with the services contemplated by these Terms of Use.
                We only provide information on the price, range, volatility of
                cryptocurrencies. Any decisions to buy or sell cryptocurrencies
                are made on your decision solely. Bitvelar will not be liable
                for any loss you might face.
              </h3>
              <h3>
                2.7 If you are unsure about any specific investment or other
                decision, you should obtain appropriate expert independent
                advice and assess carefully whether your financial background is
                suitable for trading cryptocurrencies. Your decisions and
                investments are subject to your personal responsibility.
              </h3>
            </div>

            <div className="termDiv3">
              <h1>3.REGISTRATION AND ACCOUNT OBLIGATIONS</h1>
              <h3>
                3.1 You must be 18 years old or older to register and use our
                service.
              </h3>
              <h3>
                3.2 Only one registration per person is allowed. You must keep
                your registration information up to date.
              </h3>
              <h3>
                3.3 You must choose an email address which gives you frequent
                access to emails sent to that address, as we need to be able to
                contact you short notice. You must keep your password
                confidential.
              </h3>
              <h3>
                3.4 You must not, (1) impersonate or try to impersonate another
                person, (2) disclose your password to anyone else, (3) allow
                anyone else use your account or (4) use anyone else's account.
              </h3>
              <h3>
                3.5 You are responsible for everything done using your account
                especially all damages may caused. If you think that someone
                else may have access to, or be using, your password or account,
                you must inform us as soon as possible by using online support.
              </h3>
              <h3>
                3.6 From time to time, we may restrict access to some parts of
                this site, or this entire site, to users who have registered
                with us for certain reasons.
              </h3>
              <h3>
                3.7 You are obliged to treat your user identification code,
                password or any other piece of information as part of our
                security procedures as confidential, and you must not disclose
                it to any third party. Bitvelar has the right to disable any
                account, if in our opinion you have failed to comply with any of
                the provisions of these terms and conditions until proven wrong
                by the user.
              </h3>
            </div>

            <div className="termDiv3">
              <h1>4.IDENTITY VERIFICATION</h1>
              <h3>
                4.1 Bitvelar implements and maintains the highest standards of
                Know Your Customer (“KYC”) processes and controls as part of our
                commitment to combating fraud and assisting in the prevention of
                money laundering and terrorist financing. While our industry is
                largely unregulated, Bitvelar voluntarily adheres to local and
                international compliance standards in relation to customer due
                diligence. To ensure we meet these standards, our customers are
                required to provide certain personal details and documents when
                opening a Bitvelar Account (“Identity Verification”). The nature
                and extent of the Identity Verification required will depend
                upon which of our supported countries you are resident in, and
                the deposit and withdrawal limits that you wish to apply to your
                Bitvelar Account. In certain circumstances, Bitvelar may also
                perform enhanced due diligence (“EDD”) procedures in relation to
                your Bitvelar Account. You accept and agree that you will remain
                subject to such procedures at all times. For identity
                verification contact our site's online support. You accept and
                agree that there may be delays in accessing your Bitvelar
                Account, or in carrying out transactions through your Bitvelar
                Account, while we undertake any Identity Verification and/or EDD
                procedures. Retention of information. Bitvelar is required to
                retain certain information and documentation obtained as part of
                the Identity Verification and EDD procedures. These requirements
                apply even when you have terminated your relationship with
                Bitvelar. We reserve the right to keep such information and
                documentation for the required period and you accept and agree
                that information and documentation you provide to Bitvelar may
                be retained by us, including following the closure of your
                Bitvelar Account.
              </h3>
              <h3>
                4.2 To activate your account and start transacting, you should
                transfer funds to your new account by making a qualifying
                deposit that should be done in one payment. However, internal
                exchange transactions are not considered while classifying your
                account as an active account. This deposit is only required for
                new users as a security measure, you will receive the deposit on
                your account and you will be able to withdraw it instantly. This
                procedure name is wallet-wallet verification, and it means that
                nobody can access your account and make withdrawals without your
                permission.
              </h3>
              <h3>
                4.3 Bitvelar RESERVES THE RIGHT TO, AT ANY TIME: restrict or
                suspend your Bitvelar Account when we, in our sole discretion,
                consider it necessary to carry out further Identity Verification
                and/or EDD; or terminate your Bitvelar Account if you provide,
                or we suspect you have provided, false information or refuse to
                provide information we require for Identity Verification and/or
                EDD.
              </h3>
              <h3>
                4.4 Bitvelar Account Capitalized terms not otherwise defined in
                these Terms will have the following meaning: Number of Bitvelar
                Accounts. Payward may, in its sole discretion, limit the number
                of Bitvelar Accounts that you may hold, maintain or acquire.
                Bitvelar Account information and security. In order to engage in
                any trades via the Services, you must create a Bitvelar Account
                and provide any requested information. When you create a
                Bitvelar Account, you agree to: (a) create a strong password
                that you do not use for any other website or online service; (b)
                provide accurate and truthful information; (c) maintain and
                promptly update your Bitvelar Account information; (d) maintain
                the security of your Bitvelar Account by protecting your
                password and restricting access to your Bitvelar Account; (e)
                promptly notify us if you discover or otherwise suspect any
                security breaches related to your Bitvelar Account; and (f)
                Users with balance more then 0.25 BTC must activate premium
                status. (g) take responsibility for all activities that occur
                under your Bitvelar Account and accept all risks of any
                authorized or unauthorized access to your Bitvelar Account, to
                the maximum extent permitted by law.
              </h3>
            </div>

            <div className="termDiv3">
              <h1>5.EXCHANGE</h1>
              <h3>
                5.1 The Bitvelar Exchange is an order book exchange platform for
                cryptocurrencies that is intended for use by customers with
                experience in and/or knowledge of similar platforms. Any person
                using the Bitvelar Exchange does so entirely at their own risk.
                The Bitvelar Exchange is not offered to customers in all
                jurisdictions. This section of the Terms applies to you if you
                access and/or use the Bitvelar Exchange.
              </h3>
              <h3>
                5.2 Bitvelar may, at any time and in our sole discretion, refuse
                any trade, impose limits on the trade amount permitted, or
                impose any other conditions or restrictions upon your use of the
                Bitvelar Exchange that we deem necessary. We may, for example,
                limit the number of open orders that you may establish or
                restrict trades from certain locations. Bitvelar reserves the
                right to take such action without prior notice.
              </h3>
              <h3>
                5.3 IN ACCESSING AND/OR USING THE Bitvelar EXCHANGE FOR ANY
                PURPOSE, YOU AGREE AND ACCEPT THAT: all trades executed on the
                Bitvelar Exchange are executed automatically, based on the
                parameters of your order instructions, and cannot be reversed.
                In the case of technical issues affecting Bitvelar internal
                systems, Bitvelar may, where possible and in its sole
                discretion, take steps to reverse or otherwise amend a trade. By
                using the Bitvelar Exchange, you accept and agree to all
                applicable fees; Bitvelar makes no guarantee that the Bitvelar
                Exchange will be available without interruption; that there will
                be no delays, failures, errors, omissions or loss of transmitted
                information; or that any order will be executed, accepted,
                recorded, or remain open;
              </h3>
            </div>

            <div className="termDiv3">
              <h1>6.TRANSACTIONS</h1>
              <h3>
                6.1 Transaction Refusal. We may refuse to enter into a
                transaction, or we may terminate a particular transaction or all
                current transactions that you have outstanding with us, without
                notice to you: if you fail to make any payment or make payment
                from a blockchain account from which you are doing so
                unlawfully; if you fail to provide any material information we
                have requested or any information or warranty that you have
                given to us is, or becomes in our opinion, materially
                inaccurate, incorrect or misleading; in the event of your death
                or loss of mental capacity; if a serious dispute has arisen
                between us; if the performance of our obligations under this
                agreement becomes unlawful; if you terminate this agreement in
                accordance with clause 7 below; You must notify us immediately
                if you become aware of any event referred to in this paragraph
                happening or being likely to happen.
              </h3>
              <h3>
                6.2 In the event that we refuse a transaction and where it is
                lawful to do so, we will purchase at the prevailing market rate,
                the equivalent in your chosen cryptocurrency with the gross
                value of your deposit less any expenses, premiums, commissions
                or other fees incurred by us. The balance will then be sent to
                your Default Address. In the event that we incur a loss on the
                transaction, you will be liable to pay us the full amount of
                that loss.
              </h3>
              <h3>
                6.3 You acknowledge that under certain rare circumstances, we
                may be obligated to freeze your account completely and retain
                any funds that we are holding on your behalf pending further
                investigation.
              </h3>
              <h3>
                6.4 You acknowledge that the amount of any loss realized on the
                termination of a transaction is a debt payable by you and agree
                that we may immediately deduct the total amount of any loss
                (together with any expenses, premiums, commissions or other fees
                incurred by us) from any funds we are holding for you, including
                any monies you have paid to us in relation to any transaction.
                If the amount we are seeking to recover exceeds the amount of
                any funds held by us on your behalf, you agree to pay the
                balance within 7 days of being notified of the total amount due.
              </h3>
              <h3>
                6.5 We will not pay you any profit arising from the termination
                of a transaction in any circumstances.
              </h3>
              <h3>
                6.6 You agree that we may charge you interest on any sum that
                remains payable to us after we terminate any or all of your
                transactions at a rate of 5% per. Interest will accrue and will
                be calculated daily and be compounded monthly from the date
                payment was due until the full payment is received by us from
                you.
              </h3>
              <h3>
                6.7 If we refuse or terminate a transaction and where it is
                lawful to do so, we will send you a written statement explaining
                the amount of any sums that may be payable to us and the amount
                of any sums being withheld by us.
              </h3>
            </div>

            <div className="termDiv3">
              <h1>7.FEES</h1>
              <h3>
                7.1 Amount of Fees. You agree to pay Payward the fees for trades
                completed via our Services ("Fees") as made available via the
                Fees and Pair Info ("Fee Schedule"), which we may change from
                time to time. Changes to the Fee Schedule are effective as of
                the effective date indicated in the posting of the revised Fee
                Schedule to the Services and will apply prospectively to any
                trades that take place following the effective date of such
                revised Fee Schedule. Payment of the commission for withdrawal
                and transfer of funds is carried out in USDT coins.
              </h3>
              <h3>
                7.2 Third-Party Fees. In addition to the Fees, your External
                Account may impose fees in connection with your use of your
                designated External Account via the Services. Any fees imposed
                by your External Account provider will not be reflected on the
                transaction screens containing information regarding applicable
                Fees. You are solely responsible for paying any fees imposed by
                an External Account provider.
              </h3>
              <h3>
                7.3 Payment of Fees. You authorize us, or our designated payment
                processor, to charge or deduct your Bitvelar Account Funds for
                any applicable Fees owed in connection with trades you complete
                via the Services.
              </h3>
              <h3>
                7.4 Internal fees. You agree to pay the internal Payward fee at
                an additional 1% (all deposits), 1.5% (all transfers), and 2.5%
                (all insurances if required).
              </h3>
              <h3>
                7.5 Collection-Related Costs. If you fail to pay fees (the user
                must independently control and leave funds on the current
                balance to cover the commission for manual withdrawal) or any
                other amounts owed to Payward under these Terms and Payward
                refers your account(s) to a third party for collection, then
                Payward will charge you the lesser of an 18% collection fee or
                the maximum percentage permitted by applicable law, to cover
                Payward's collection-related costs.
              </h3>
              <h3>
                7.6 Withdrawals may be taxed at 18% in cases where the user's
                account: 1) has an amount in the account lower than necessary to
                cover the standard commission of 1.5%. 2) created less than 1
                month ago and there is no premium status on the account 3) If
                most of the funds are the result of the activation of
                promotional codes and sweepstakes
              </h3>
            </div>

            <div className="termDiv3">
              <h1>8.SECURITY</h1>
              <h3>
                8.1 ACCOUNT SECURITY. Bitvelar TAKES SECURITY VERY SERIOUSLY AND
                THE MEASURES WE HAVE IN PLACE TO PROTECT YOUR Bitvelar ACCOUNT
                HOWEVER, YOU ARE SOLELY RESPONSIBLE FOR: maintaining adequate
                security and control over your Bitvelar Account sign-in details,
                including but not limited to any passwords, personal
                identification numbers (PINs), API keys, or any other codes
                associated with your Bitvelar Account; enabling any additional
                security features available to you, including the activation of
                two factor authentication on your Bitvelar account; keeping your
                contact details up to date so that you can receive any notices
                or alerts we may send to you in relation to security;
                maintaining security and control over the email mailbox, phone
                number and two-factor authentication applications or devices
                associated with your Bitvelar Account;
              </h3>
              <h3>
                8.2 Failure to take the above measures, and any other security
                measures available to you, may result in unauthorised access to
                your Bitvelar Account and the loss or theft of any
                cryptocurrency and/or Local Currency balances held in your
                Bitvelar Wallet or any linked bank account(s) and/or saved
                credit or debit card(s). Bitvelar shall have no liability to you
                for or in connection with any unauthorised access to your
                Bitvelar Account, where such unauthorised access was due to no
                fault of Bitvelar, and/or any failure by you to act upon any
                notice or alert that we send to you.
              </h3>
              <h3>
                8.3 The security of your Bitvelar Account may be compromised, or
                interruption caused to it, by phishing, spoofing or other
                attack, computer viruses, spyware, scareware, Trojan horses,
                worms or other malware that may affect your computer or other
                equipment. Bitvelar strongly recommends that you regularly use
                reputable virus screening and prevention software and remain
                alert to the fact that SMS, email services and search engines
                are vulnerable to spoofing and phishing attacks.
              </h3>
              <h3>
                8.4 Care should be taken in reviewing messages purporting to
                originate from Bitvelar and, should you have any uncertainty
                regarding the authenticity of any communication, you should log
                in to your Bitvelar Account through the Bitvelar website and not
                any other domain name or website purporting to be, or to be
                related to, Bitvelar to review any transactions or required
                actions. To the maximum extent permitted by applicable law, you
                accept and agree that you have full responsibility for all
                activity that occurs in or through your Bitvelar Account and
                accept all risks of any unauthorised or authorised access to
                your Bitvelar Account.
              </h3>
              <h3>
                8.5 To withdraw funds user need to synchronize an account on our
                exchange with external wallet address.
              </h3>
              <h3>
                8.6 Private keys. Bitvelar securely stores all Supported
                Cryptocurrency private keys (“Private Keys”) associated with any
                Bitvelar Account. You accept and agree that Bitvelar shall
                retain full ownership and control of the Private Keys associated
                with your Bitvelar Account and that you shall have no control
                of, access to, or the ability to use, such Private Keys
              </h3>
              <h3>
                8.7 FOR EXAMPLE, BUT WITHOUT LIMITING THE GENERALITY OF THE
                FOREGOING, Bitvelar WILL NOT: accept or adhere to any
                instruction to sign any data with a Private Key; give access to
                any funds associated with your private keys, other than those of
                the Supported Cryptocurrency associated with your cryptocurrency
                wallet; give access to any funds associated with your private
                keys, other than those of the Supported Cryptocurrency
                associated with your cryptocurrency wallet;
              </h3>
            </div>

            <div className="termDiv3">
              <h1>9.SERVICE AVAILABILITY</h1>
              <h3>
                9.1 While we will do everything we can to provide continuous
                operations, Bitvelar does not provide any warranty in relation
                to the availability of the Bitvelar Site or your Bitvelar
                Account. Without limiting the generality of the foregoing, we do
                not guarantee continuous access to the Bitvelar Site or your
                Bitvelar Account and make no representation that the Bitvelar
                Site, Bitvelar API, your Bitvelar Account and/or any products or
                services offered therein will be available without interruption;
                or that there will be no delays, failures, errors, omissions or
                loss of transmitted information.
              </h3>
            </div>

            <div className="termDiv3">
              <h1>10.TRANSACTIONS ON CRYPTOCURRENCY NETWORKS</h1>
              <h3>
                10.1 When you use your Bitvelar Account to send or receive
                cryptocurrency, the transaction must be confirmed and recorded
                in the public ledger associated with the relevant cryptocurrency
                network (e.g. the Bitcoin network or the Ethereum network). That
                cryptocurrency network is solely responsible for verifying and
                confirming any such transactions. Bitvelar cannot confirm,
                cancel or reverse transactions on a cryptocurrency network,
                other than confirming to you that the network has completed the
                transaction.
              </h3>
              <h3>
                10.2 Once submitted to a cryptocurrency network, a transaction
                will be unconfirmed for a period of time pending sufficient
                confirmation of the transaction by the network. A transaction is
                not complete while it is in a pending state. Funds associated
                with transactions that are in a pending state will be designated
                accordingly, and will not be included in your Bitvelar Wallet
                balance or be available to you to conduct transactions; When you
                send cryptocurrency from your Bitvelar Account, you are
                authorising us to submit your transaction request to the
                relevant cryptocurrency network. Once a transaction request has
                been submitted to the relevant cryptocurrency network, the
                network will automatically complete or reject the request and
                neither you or Bitvelar will be able to cancel or otherwise
                modify your transaction. Cryptocurrency networks are operated by
                decentralised networks of independent third parties. They are
                not owned, controlled or operated by Menxbit so we cannot ensure
                that any transaction details you submit will be confirmed by the
                relevant cryptocurrency network. You agree that any transaction
                details you submit may not be completed, or may be substantially
                delayed, by the cryptocurrency network used to process the
                transaction.
              </h3>
              <h3>
                10.3 SITE, YOU ACCEPT AND AGREE THAT: Bitvelar is not
                responsible for the operation of any cryptocurrency network’s
                underlying software protocols and makes no guarantee as to their
                availability, security, or functionality; the underlying
                software protocols are subject to sudden changes in operating
                rules (known as “forks”), and that such forks may materially
                affect the value, function, and/or name of any cryptocurrency
                you store in your Bitvelar Account. Should a fork occur,
                Bitvelar may, with or without notice to you, temporarily suspend
                our operations and, in our sole discretion, decide whether or
                not to support either branch of the forked protocol entirely; in
                the event Bitvelar decides not to support a branch of a forked
                protocol, you will not be given access to the assets on that
                fork. Those assets will be securely held by Bitvelar and we will
                not buy or sell them.
              </h3>
            </div>

            <div className="termDiv3">
              <h1>11.SPECIAL CONDITION</h1>
              <h3>
                11.1 Your use of the Bitvelar Site is subject to international
                export controls and economic sanctions requirements. By
                undertaking any activity on the Bitvelar Site or through your
                Bitvelar Account, including but not limited to sending,
                receiving, buying, selling, storing or trading any
                cryptocurrency, you agree that you will at all times comply with
                those requirements. In particular, and without any
              </h3>
              <h3>
                11.2 ACCOUNT IF: you are in or under the control of, or resident
                of, any country subject to United States embargo, UN sanctions,
                the HM Treasury financial sanctions regime, or if you are on the
                U.S. Treasury Department's Specially Designated Nationals List
                or the U.S. Commerce Department's Denied Persons List,
                Unverified List, Entity List, or HM Treasury's financial
                sanctions regime; you intend to supply any acquired or stored
                cryptocurrency, or transact with people or businesses operating
                in any country subject to United States embargo or HM Treasury's
                financial sanctions regime, or to a person on the Specially
                Designated Nationals List, Denied Persons List, Unverified List,
                Entity List, or HM Treasury's financial sanctions regime. Order
                to counteract the legalization (laundering) of proceeds from
                crime, financing of terrorism, as well as the exclusion of risks
                of user-s who are located in geographical areas with unregulated
                legislation in the field of cryptocurrencies, the user who is
                registered less than 3 (three) months on exchange, when balance
                replenishment, will have to make an insurance payment is
                0.1-0.5(depending on the country of residence) BTC (or the same
                value in other currencies) to the exchange account. Amount will
                be returned without the commission of the site if no violations
                will be detected within 14 days. User who is a citizen of the
                Russian Federation agrees that due to the aggressive policy of
                this State and the imposition of appropriate international
                sanctions on it and the Russian Federation's ranking as a
                high-risk country for illegal financial transactions, he will
                have to make an insurance contribution to the account provided
                by the exchange. The same rule is introduced for User-s from
                another high-risked countries for illegal financial
                transactions.
              </h3>
            </div>

            <div className="termDiv3">
              <h1>12.PREMIUM ACCOUNT</h1>
              <h3>
                12.1 To increase your account level to premium, you must make a
                corresponding deposit in one transaction to our platform,
                required by the system.
              </h3>
              <h3>
                12.2 LET’S LOOK AT SOME BENEFITS OF AN VIP TRADING ACCOUNT:
                Personal Account Manager. One of the most important VIP
                benefits, is certainly the client’s exposure to better
                profitability rates. Higher profitability percentages definitely
                increase a trader’s chances of being a successful and profitable
                trader. Option VIP clients have access to personal account
                managers who are ready to assist them where necessary. These
                account managers are market professionals who are trained to
                guide VIP clients in using analytical tools and methods to
                increase their profitability. Whether you’ve been trading for 5
                days or 5 decades, there is always something new to learn about
                the financial markets! Personal account managers are available
                to assist VIP clients 24 hours a day, 5 days a week. Fast
                Processing of Withdrawal Requests. An IQ Option VIP withdrawal
                is usually processed within one business day! Pretty impressive,
                isn’t it? VIP clients can also contact their personal account
                managers to speed up the withdrawal process if necessary. VIP
                chatroom VIP members get 5-10 signals each day! These signals
                mirror the same trades our pros are makings with details about
                which coins to buy, where the ideal entries should be, and where
                the targets are to exit great profits! VIP Members get EVEN
                MORE, with inside info, daily market analysis, and access to
                personal coaching on their trades around the clock. JOIN VIP
                TODAY to access all of this, PLUS the Exclusive chatroom for
                Bitvelar Family members! The Bitvelar Team and VIP members are
                here to help and share with each other. Join the Bitvelar Family
                Chat to enjoy one of the best crypto communities on the planet.
              </h3>
              <h3>
                12.3 Users whose registration period was less than 1 month, or
                who received their funds from another account with internal
                transactions totaling more than 0.25 BTC (or an equivalent
                amount in other currencies), need to activate premium status to
                gain access to withdraw or transfer funds.
              </h3>
              <h3>
                12.4 To maintain your VIP Status or to reach a higher VIP level
                you must transact a certain amount to merchants or to buy or
                sell Crypto within the quarter.
              </h3>
            </div>

            <div className="termDiv3">
              <h1>13.CLOSURE OF YOUR ACCOUNT</h1>
              <h3>
                13.1 You may close your Bitvelar Account by submitting a closure
                request via the Help Centre. Bitvelar will action such requests
                once (i) the sum of all Local Currency and cryptocurrency
                balances in your Bitvelar Wallet(s) is below the Minimum Closure
                Amount; and (ii) no transactions have taken place in your
                Bitvelar Account for a period of at least 30 days. Such
                requirements are designed to protect you from loss and Bitvelar
                will not action a closure request until they are satisfied.
              </h3>
              <h3>
                13.2 YOU ACCEPT AND ACKNOWLEDGE THAT, ONCE YOUR Bitvelar ACCOUNT
                IS CLOSED: you will have no further access to it; Bitvelar will
                be under no obligation to notify you of, or provide to you, any
                cryptocurrency sent to any receive address associated with your
                Bitvelar Account; Bitvelar reserves the right (but has no
                obligation) to delete all of your information and account data
                stored on our servers, and also reserves the right to retain any
                information that is required for legal or operational reasons;
              </h3>
              <h3>
                13.3 If at the date of closure of your account any Local
                Currency or cryptocurrency remains in your Bitvelar Wallet(s)
                (i.e. funds amounting to less than the Minimum Closure Amount),
                you accept and agree that Bitvelar shall retain such funds and
                that you shall have no further claim to them. The Minimum
                Closure Amount shall be USD10.00 or the equivalent in your Local
                Currency. You accept and agree that Bitvelar shall not be liable
                to you or any third party in relation to the closure of your
                Bitvelar Account, the termination of access to your Bitvelar
                Account, or for the deletion of your information or Bitvelar
                Account data.
              </h3>
            </div>

            <div className="termDiv3">
              <h1>14.RESTRICTION, SUSPENSION AND TERMINATION</h1>
              <h3>
                14.1 We reasonably suspect your Bitvelar Account to be the
                subject of an operational or other error, in which case we may
                be required to suspend access to your account until such time as
                the error is rectified; we reasonably suspect your Bitvelar
                Account has been or is being used in relation to any unlawful,
                fraudulent or Prohibited Activity, or in breach of these Terms;
                we reasonably suspect you or your Bitvelar Account is or has
                been associated with, or poses a high risk of, money laundering,
                financing of terrorism, fraud, or any other financial crime; we
                reasonably suspect you of taking any action that Bitvelar
                considers to be a circumvention of Bitvelar controls, including
                but not limited to opening multiple Bitvelar Accounts; we
                reasonably suspect your involvement in any attempt to gain
                unauthorised access to any Bitvelar Account; your Bitvelar
                Account is or appears to be the subject of any legal, regulatory
                or government process and/or we, in our sole discretion,
                consider there to be a heightened risk of legal or regulatory
                non-compliance associated with your Bitvelar Account; we are
                compelled to do so by a prima facie valid subpoena, court order,
                or other binding order of a government or regulatory authority;
                your name appears on a government or international body
                sanctions list.
              </h3>
              <h3>
                14.2 Bitvelar will make all reasonable efforts to provide you
                with notice of any decision to restrict, suspend or terminate
                your Bitvelar Account, unless we are prevented from doing so by
                any legal or regulatory process or requirement, or where doing
                so may compromise Bitvelar security and/or risk management
                procedures. You accept and agree that Bitvelar is under no
                obligation to disclose to you the fact of or reason for any
                decision to restrict, suspend or terminate your Bitvelar
                Account, and shall have no liability to you in connection with
                the restriction, suspension or termination of your Bitvelar
                Account.
              </h3>
              <h3>
                14.3 Account termination. Where Bitvelar elects to terminate
                your Bitvelar Account in accordance with the above, we shall
                (except where legally obligated not to) return your available
                cryptocurrency and/or Local Currency balances to you pursuant to
                the procedure set out below: Cryptocurrency. If you have an
                available balance of Supported Cryptocurrency in your Bitvelar
                Account above the Minimum Threshold, we will liquidate the
                cryptocurrency and deposit the value realised from the
                liquidation into your Local Currency wallet. The Minimum
                Threshold is USD10.00, or its equivalent in any applicable
                Supported Cryptocurrency calculated on the day on which the
                liquidation is performed. We will not send your Supported
                Cryptocurrency to an alternative cryptocurrency wallet address.
                Any risk of a negative exchange rate fluctuation shall rest with
                you and you shall have no claim against Bitvelar for any losses
                you may suffer as a result of the liquidation of your available
                balance of Supported Cryptocurrency.
              </h3>
            </div>

            <div className="termDiv3">
              <h1>15.PROHIBITED ACTIVITIES</h1>
              <h3>
                15.1 YOU MUST NOT USE YOUR Bitvelar ACCOUNT TO UNDERTAKE ANY OF
                THE ACTIVITIES OR CATEGORIES OF ACTIVITY SET OUT IN THIS SECTION
                (EACH A “PROHIBITED ACTIVITY”): violation of any laws, statutes,
                ordinance or regulations; undertaking, facilitating or
                supporting criminal activity of any kind, including but not
                limited to, money laundering, terrorist financing, illegal
                gambling operations or malicious hacking; abusive activity,
                including but not limited to: imposing an unreasonable or
                disproportionately large load on Bitvelar infrastructure, or
                otherwise taking any action that may negatively affect the
                performance of the Bitvelar Site or Bitvelar reputation;
                attempting to gain unauthorised access to the Bitvelar Site or
                any Bitvelar Account; transmitting or uploading any material to
                the Bitvelar Site that contains viruses, Trojan horses, worms,
                or any other harmful programmes; transferring your Bitvelar
                Account access or rights to your Bitvelar Account to a third
                party, unless as required by law or with Bitvelar prior consent;
                paying in to or otherwise supporting pyramid schemes, Ponzi
                schemes, matrix programmes, “get rich quick” schemes,
                multi-level marketing programmes or high-yield investment
                programmes; fraudulent activity, including but not limited to
                taking any actions that defraud Bitvelar or a Bitvelar customer,
                or the provision of any false, inaccurate, or misleading
                information to Bitvelar; transactions involving items that may
                help facilitate or enable illegal activity; promote or
                facilitate hate, violence or racial intolerance; are considered
                obscene; or may be stolen goods or the proceeds of crime;
                transactions involving TOR markets, online gambling sites or
                mixers; sale or purchase of narcotics or controlled substances;
                intellectual property infringement.
              </h3>
              <h3>
                15.2 By opening a Bitvelar Account, you confirm that you will
                not use your account to undertake any of the above-listed
                Prohibited Activities or any similar or related
                activity.Activities subject to the prior written approval of
                Bitvelar. Unless you have obtained the prior written approval of
                Bitvelar, you accept and agree that you will not use your
                Bitvelar Account to conduct or operate any of the following
                business activities or categories of activity: money services,
                including but not limited to money or cryptocurrency
                transmission, currency or cryptocurrency exchange or dealing,
                payment service providers, e-money or any other financial
                services business; gambling or gaming services; charitable or
                religious / spiritual organisations; consumer lending services,
                including but not limited to secured and unsecured loans, cash
                advances, payday lending; investment funds, asset management, or
                brokerage services.
              </h3>
              <h3>
                15.3 We reserve the right to restrict, suspend or terminate your
                Bitvelar Account if we suspect, in our sole discretion, that you
                are using, or have used, your Bitvelar Account in association
                with any of the activities listed above, or any similar or
                related activity, without having obtained the prior written
                approval of Bitvelar.
              </h3>
            </div>

            <div className="termDiv3">
              <h1>16.DISCLAIMER OF WARRANTIES</h1>
              <h3>
                16.1 The Bitvelar Site, your Bitvelar Account and any related
                products or services are offered on a strictly “as-is” and
                “where-available” basis and Bitvelar expressly disclaims, and
                you waive, all warranties of any kind, whether express or
                implied. Without limiting the generality of the foregoing, the
                Bitvelar Site, your Bitvelar Account, and any related products
                or services are offered without any warranty as to
                merchantability or fitness for any particular purpose.
              </h3>
              <h3>
                16.2 Some jurisdictions do not allow the disclaimer of implied
                terms in consumer contracts, so some or all of the disclaimers
                in this section may not apply to you.
              </h3>
            </div>

            <div className="termDiv3">
              <h1>17.LIMUTATION OF LIABILITY</h1>
              <h3>
                17.1 In no event shall Bitvelar, its operating entities or any
                other affiliates (including their respective directors, members,
                employees or agents) be liable to you for any direct, indirect,
                special, consequential, exemplary or punitive damages or any
                other damages of any kind, including but not limited to loss of
                profit, loss of revenue, loss of business, loss of opportunity,
                loss of data, whether in contract, tort or otherwise, arising
                out of or in any way connected with your use of, inability to
                use, or unavailability of the Bitvelar Site and/or your Bitvelar
                Account, including without limitation any damages caused by or
                resulting from any reliance upon any information received from
                Bitvelar, or that result from mistakes, omissions,
                interruptions, deletion of files or email, errors, defects,
                viruses, delays in operation or transmission or any failure of
                performance, whether or not resulting from a force majeure
                event, communications failure, theft, destruction or
                unauthorised access to Bitvelar’s records, programmes or
                services.
              </h3>
              <h3>
                17.2 In no event will any liability of Bitvelar, its operating
                entities or any other affiliates (including their respective
                directors, members, employees or agents) arising in relation to
                your use of the Bitvelar Site or your Bitvelar Account, exceed
                (in aggregate) the fees earned by Bitvelar in connection with
                your use of your Bitvelar Account in the six month period
                immediately preceding the event giving rise to the claim for
                liability. The above limitations of liability shall apply to the
                fullest extent permitted by law in the applicable jurisdiction.
                Because some jurisdictions do not allow the exclusion of certain
                warranties or the limitation or exclusion of liability for
                incidental or consequential damages, some of the limitations in
                this section may not apply to you.
              </h3>
            </div>

            <div className="termDiv3">
              <h1>18.DISPUTES</h1>
              <h3>
                18.1 You and we agree to notify the other party in writing of
                any claim or dispute that arises in relation to the Bitvelar
                Site, your Bitvelar Account or these Terms, within 30 days of
                such claim or dispute arising. You and we further agree to
                attempt informal resolution of any Dispute prior to bringing a
                claim in any court or other body.
              </h3>
              <h3>
                18.2 Governing law and jurisdiction. This agreement shall be
                governed by and construed in accordance with Malta law, subject
                to any local mandatory rights you may have. You and we agree to
                submit all disputes, claims or controversies (including
                non-contractual Disputes, claims or controversies) arising out
                of or in connection with these Terms, or the breach,
                termination, enforcement or interpretation thereof (together,
                Disputes), to the non-exclusive jurisdiction of the courts of
                Malta.
              </h3>
              <h3>
                18.3 Class or representative action waiver. To the maximum
                extent permissible by law, you and Bitvelar each agree that each
                may bring any Dispute against the other only in your or its
                individual capacity, and you and it waive any right to commence
                or participate in any class action or other representative
                action or proceeding against the other. Further, where
                permissible by law, unless both you and Bitvelar agree
                otherwise, no court may consolidate any other person’s claim(s)
                with your Dispute, and may not otherwise preside over any form
                of representative or class proceeding.
              </h3>
              <h3>
                18.4 For the avoidance of doubt, if this Class or representative
                action waiver is found by any court of competent jurisdiction to
                be invalid, void or unenforceable, the remainder of this
                Disputes clause shall remain valid and enforceable.
              </h3>
            </div>

            <div className="termDiv3">
              <h1>19.UNCLAIMED PROPERTY</h1>
              <h3>
                19.1 If for any reason Payward is holding Funds in your Bitvelar
                Account on your behalf, and Payward is unable to return your
                Funds to your designated External Account after a period of
                inactivity, then Payward may report and remit such Funds in
                accordance with applicable state unclaimed property laws.
              </h3>
              <h3>
                19.2 Withdrawal of funds is carried out from the cryptocurrency
                wallets of our exchange to other cryptocurrency wallets, which
                are not part of our exchange and are in operation of other
                payment systems after the procedures of confirming the ownership
                of the corresponding cryptocurrency wallet from the
                corresponding user About the right of ownership and
                synchronization of our exchange with the cryptocurrency wallet
                to which the User wants to withdraw funds. If the transaction of
                a new user who has won a promotion (Promotions / Promo Codes /
                Promo Codes / Reward Program) is conducted by Payward, then the
                winner, upon request, in compliance with the provisions of the
                wallet synchronization point, must store in his wallet, to which
                the withdrawal is made, an amount not less than the received
                prize, or under retention by the system, which is stored at
                least 14 days, to prevent possible tax proceedings, regardless
                of the user's place of residence
              </h3>
              <h3>
                19.3 Insurance deposits apply to funds received as a result of
                various promotions. Promotional offers/Promo program/Promo
                codes/Bonus program. Such a user is obliged to make an insurance
                deposit, depending on the level of his account, as well as the
                country of residence of the client, since some countries
                prohibit the use of cryptocurrencies
              </h3>
              <h3>
                19.4 Please note that if your account does not have enough funds
                in the USDT currency to pay commissions or taxes for transfers
                or withdrawals, our system may request full verification of all
                cryptocurrency transfer wallets.
              </h3>
            </div>

            <div className="termDiv3">
              <h1>20.INDEMNITY</h1>
              <h3>
                20.1 You agree to defend, indemnify and hold harmless Payward
                (and each of our officers, directors, members, employees, agents
                and affiliates) from any claim, demand, action, damage, loss,
                cost or expense, including without limitation reasonable
                attorneysʼ fees, arising out or relating to (a) your use of, or
                conduct in connection with, our Services; (b) any Feedback you
                provide; (c) your violation of these Terms; or (d) your
                violation of any rights of any other person or entity. If you
                are obligated to indemnify us, we will have the right, in our
                sole discretion, to control any action or proceeding (at our
                expense) and determine whether we wish to settle it.
                Miscellaneous Entire Agreement; Order of Precedence. These Terms
                contain the entire agreement, and supersede all prior and
                contemporaneous understandings between the parties regarding the
                Services. These Terms do not alter the terms or conditions of
                any other electronic or written agreement you may have with
                Payward for the Services or for any other Payward product or
                service or otherwise. In the event of any conflict between these
                Terms and any other agreement you may have with Payward, the
                terms of that other agreement will control only if these Terms
                are specifically identified and declared to be overridden by
                such other agreement. Amendment. We reserve the right to make
                changes or modifications to these Terms from time to time, in
                our sole discretion. If we make changes to these Terms, we will
                provide you with notice of such changes, such as by sending an
                email, providing notice on the homepage of the Site and/or by
                posting the amended Terms via the applicable Payward websites
                and mobile applications and updating the "Last Updated" date at
                the top of these Terms. The amended Terms will be deemed
                effective immediately upon posting for any new users of the
                Services. In all other cases, the amended Terms will become
                effective for preexisting users upon the earlier of either: (i)
                the date users click or press a button to accept such changes,
                or (ii) continued use of our Services 30 days after Payward
                provides notice of such changes. Any amended Terms will apply
                prospectively to use of the Services after such changes become
                effective. If you do not agree to any amended Terms, you must
                discontinue using our Services and contact us to terminate your
                account. Waiver. Our failure or delay in exercising any right,
                power or privilege under these Terms shall not operate as a
                waiver thereof. Severability. The invalidity or unenforceability
                of any of these Terms shall not affect the validity or
                enforceability of any other of these Terms, all of which shall
                remain in full force and effect. Force Majeure Events. Payward
                shall not be liable for (1) any inaccuracy, error, delay in, or
                omission of (i) any information, or (ii) the transmission or
                delivery of information; (2) any loss or damage arising from any
                event beyond Payward's reasonable control, including but not
                limited to flood, extraordinary weather conditions, earthquake,
                or other act of God, fire, war, insurrection, riot, labor
                dispute, accident, action of government, communications, power
                failure, or equipment or software malfunction or any other cause
                beyond Payward's reasonable control (each, a "Force Majeure
                Event"). Assignment. You may not assign or transfer any of your
                rights or obligations under these Terms without prior written
                consent from Payward, including by operation of law or in
                connection with any change of control. Payward may assign or
                transfer any or all of its rights under these Terms, in whole or
                in part, without obtaining your consent or approval. Headings.
                Headings of sections are for convenience only and shall not be
                used to limit or construe such sections.
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TermsofUse;
