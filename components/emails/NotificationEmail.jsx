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
    username,
    pageLink = 'http://localhost:3000/dashboard/new-entry',
    previewText = 'Time for a new entry',
    frequency = 'weekly',
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
                src={`${baseUrl}/emaillogo.png`}
                width="200"
                height="37"
                alt="Vercel"
                className="my-0 mx-auto"
              />
            </Section>


            {/* <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Time for a new entry on <br /><strong>5 Key Areas</strong>
            </Heading> */}

            <div className='px-[14px]'>
                <Text className="text-black text-[14px] leading-[24px]">
                    {username ? `Hey ${username},` : 'Hey there,'}
                </Text>


                <Text className="text-black text-[14px] leading-[24px]">
                    Here's your {frequency} reminder to add a new entry to your 5 Key Areas dashboard.
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
                    Instead of waiting for the end of the year to reflect, the idea is to do it a little more regularly.
                </Text>

                <Text className="text-black text-[14px] leading-[24px]">
                    Just a quick reflection on the 5 areas of life that matter:
                    <ul className='text-[14px] ml-[14px]'>
                        <li>- <strong>Health</strong>: your body & brain</li>
                        <li>- <strong>Work</strong>: the stuff you do</li>
                        <li>- <strong>Play</strong>: without this u sad</li>
                        <li>- <strong>Relationships</strong>: without this u lonely</li>
                        <li>- <strong>Self-Respect</strong>: without this, u don't like u</li>
                    </ul>
                </Text>

                <Text className="text-black text-[14px] leading-[24px]">
                    It takes only a minute or two to reflect and recalibrate: <br />
                    <Link
                        className="text-blue-600 no-underline"
                        href={pageLink}
                    >
                      https://5keyareas.com/dashboard/new-entry
                    </Link>
                </Text>

                <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
                <Text className="text-[#666666] text-[12px] leading-[24px]">
                You are receiving this email because you set a reminder to add a new entry to your 5 Key Areas journal. You are currently setup for {frequency} reminders.
                Manage your reminders here:
                <Link
                    className="text-blue-600 no-underline ml-[5px]"
                    href={`${baseUrl}/settings/notifications`}
                >
                    https://5keyareas.com/settings/notifications
                </Link>
                </Text>
            </div>



          </Container>
        </Body>
      </Tailwind>
    </Html>
  );

}


