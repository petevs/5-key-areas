import * as React from 'react';
import {
    Body,
    Button,
    Container,
    Column,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Tailwind,
    Text,
  } from '@react-email/components';

  const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

export default function NotificationEmail({
    username = 'petevs',
    pageLink = 'http://localhost:3000/dashboard/new-entry',
    previewText = 'Time for a new entry',
  }) {

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <Section className="mt-[32px]">
              <Img
                src={`${baseUrl}/logo.png`}
                width="40"
                height="37"
                alt="Vercel"
                className="my-0 mx-auto"
              />
            </Section>


            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Time for a new entry on <br /><strong>5 Key Areas</strong>
            </Heading>

            <div className='px-[14px]'>
                <Text className="text-black text-[14px] leading-[24px]">
                    Hey {username},
                </Text>


                <Text className="text-black text-[14px] leading-[24px]">
                    Here is the reminder you set to add a new entry to your 5 Key Areas journal.
                </Text>

                <Section className="text-center mt-[32px] mb-[32px]">
                <Button
                    className="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center py-[12px] px-[20px]"
                    href={pageLink}
                >
                    Add a New Entry
                </Button>
                </Section>
                <Text className="text-black text-[14px] leading-[24px]">
                or copy and paste this URL into your browser:{' '}
                <Link
                    href={pageLink}
                    className="text-blue-600 no-underline"
                >
                    {pageLink}
                </Link>
                </Text>
                <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
                <Text className="text-[#666666] text-[12px] leading-[24px]">
                You are receiving this email because you set a reminder to add a new entry to your 5 Key Areas journal.
                </Text>
            </div>



          </Container>
        </Body>
      </Tailwind>
    </Html>
  );

}


