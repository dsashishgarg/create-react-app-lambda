import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { ReactComponent as ChevronDownIcon } from "feather-icons/dist/icons/chevron-down.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-7.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-8.svg";

const Subheading = tw(SubheadingBase)`mb-4 text-center`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const Column = tw.div`flex flex-col items-center`;
const HeaderContent = tw.div``;

const FAQSContainer = tw.dl`mt-12 max-w-4xl relative`;
const FAQ = tw.div`cursor-pointer select-none mt-5 px-8 sm:px-10 py-5 sm:py-4 rounded-lg text-gray-800 hover:text-gray-900 bg-gray-200 hover:bg-gray-300 transition duration-300`;
const Question = tw.dt`flex justify-between items-center`;
const QuestionText = tw.span`text-lg lg:text-xl font-semibold`;
const QuestionToggleIcon = motion(styled.span`
  ${tw`ml-2 transition duration-300`}
  svg {
    ${tw`w-6 h-6`}
  }
`);
const Answer = motion(tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed`);

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-56 w-56 opacity-15 transform translate-x-2/3 -translate-y-12 text-teal-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-64 w-64 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;



export default ({
  subheading = "FAQS",
  heading = "You have Questions ?",
  description = "And we have got answers to all of them.",
  faqs = [
    {
      question: "What Is Eway Bazaar Amazon Store?",
      answer:
        "Eway Bazaar Amazon Store is a unique offering of Amazon Easy Store Franchise Which Can Enable Growing Business Opportunities To Everyone And Provide Various Services To The Customers."
    },
    {
      question: "How is Eway Bazaar different from others?",
      answer:
        "Eway Bazaar Is An Official Partner With Amazon Easy Store. Apart from Amazon Easy, Eway Bazaar Store Also Offers Multiple Services Like Online Mobile Recharge, Money Transfer, Online Bus, Flight Ticket Booking, Pan Card Service, 24/7 Customer Support, etc."
    },
    {
      question: "How To Apply With Amazon Easy Store?",
      answer:
        "Eway Bazaar offers Amazon Easy Store Franchise At the Lowest Investment, Anyone Can Apply by visiting our official website, or contacting us on Facebook, Instagram, and WhatsApp."
    },
    {
      question: "Is Eway Bazaar Store Profitable?",
      answer:
        "Eway Bazaar Store offers many services like online mobile recharge, money transfer, hotel booking, bus flight ticket booking, etc which will give the highest commission on the purchase of each product by customers with Eway Bazaar Store Portal and Eway Bazaar store also provide branding materials and Digital Marketing service."
    },
    {
      question: "How Much Does It Cost To Open Amazon Easy Store?",
      answer:
        "Eway Bazaar Offer Amazon Easy Store Franchise at a minimum cost of investment, In Low Investment We Offer Multiple Services like Digital Marketing, 24/7 Customer Support, Shop Branding Etc."
    },
    {
      question: "How much I can earn from the Eway Bazaar Store?",
      answer:
        "Eway Bazaar Store Store has the highest commission structure in both Amazon Easy and other online services. Earning potential is 40-50,000 per month."
    },
    {
      question: "Are there any renewal charges for Amazon Easy Store?",
      answer:
        "No, with Eway Bazaar Store you need to invest only once and it will be valid for a lifetime."
    }

  ]
}) => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleQuestion = questionIndex => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    else setActiveQuestionIndex(questionIndex);
  };

  return (
    <Container>
      <ContentWithPaddingXl>
        <Column>
          <HeaderContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
          </HeaderContent>
          <FAQSContainer>
            {faqs.map((faq, index) => (
              <FAQ
                key={index}
                onClick={() => {
                  toggleQuestion(index);
                }}
                className="group"
              >
                <Question>
                  <QuestionText>{faq.question}</QuestionText>
                  <QuestionToggleIcon
                    variants={{
                      collapsed: { rotate: 0 },
                      open: { rotate: -180 }
                    }}
                    initial="collapsed"
                    animate={activeQuestionIndex === index ? "open" : "collapsed"}
                    transition={{ duration: 0.02, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <ChevronDownIcon />
                  </QuestionToggleIcon>
                </Question>
                <Answer
                  variants={{
                    open: { opacity: 1, height: "auto", marginTop: "16px" },
                    collapsed: { opacity: 0, height: 0, marginTop: "0px" }
                  }}
                  initial="collapsed"
                  animate={activeQuestionIndex === index ? "open" : "collapsed"}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  {faq.answer}
                </Answer>
              </FAQ>
            ))}
          </FAQSContainer>
        </Column>
      </ContentWithPaddingXl>
      <DecoratorBlob1/>
      <DecoratorBlob2 />
    </Container>
  );
};
