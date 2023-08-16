import Head from "next/head";
import React from "react";
import RootLayout from "@/UI/RootLayout/RootLayout";
import Image from "next/image";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";

function CareerDetails() {
  return (
    <div>
      <Head>
        <title>Career Details</title>
      </Head>

      <RootLayout>
        <div className="bg-greyish w-[94.5rem] overflow-hidden flex flex-col py-[4rem] px-[7.75rem] box-border items-center justify-center text-[3.25rem]   lg:flex-col md:flex-col sm:flex-col">
          <div className="self-stretch flex flex-col items-start justify-center gap-[1rem] z-[0]   lg:flex-col md:flex-col sm:flex-col">
            <div className="relative tracking-[-0.01em] leading-[3.75rem] font-semibold">
              Build Your Solid Career
            </div>
            <div className="relative text-[1.13rem] tracking-[-0.1px] leading-[1.63rem] inline-block w-[65.51rem] lg:self-stretch  lg:flex-1 md:self-stretch md:w-auto sm:self-stretch sm:w-auto">
              In this step, we'll ask you which type of stays you have and if
              guests will book the entire place or just a room. Then let us know
              the location and how many guests can stay.
            </div>
          </div>
        </div>
        <div className="bg-system-background-light-primary w-[94.5rem] flex flex-row py-[4rem] px-[7.5rem] box-border items-start justify-center text-purple-600   md:flex-col sm:flex-col">
          <div className="flex flex-row items-start justify-start gap-[2rem]   md:flex-row sm:flex-col">
            <div className="flex flex-row items-start justify-start   lg:flex-col md:flex-col sm:flex-col">
              <div className="flex flex-col items-center justify-start gap-[2rem]">
                <Image
                  className="relative rounded-2xl w-[59.5rem] h-[29.56rem] object-cover lg:self-stretch  md:self-stretch md:w-auto sm:self-stretch sm:w-auto"
                  height={1000}
                  alt="cover"
                  width={1000}
                  src="/Images/rectangle-2475@2x.png"
                />
                <div className="flex flex-col items-start justify-start gap-[1rem]   md:flex-col sm:flex-col">
                  <div className="flex flex-col items-start justify-start gap-[1rem] text-[1rem] text-gray-50   md:w-auto sm:flex-col">
                    <div className="w-[59.5rem] flex flex-row items-center justify-start text-[0.88rem] text-purple-600">
                      <div className="w-[50rem] flex flex-col items-start justify-center gap-[0.5rem]">
                        <div className="relative tracking-[-0.1px] leading-[1.25rem] font-semibold hidden">
                          1% OF THE INDUSTRY
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-center text-[2rem] text-gray-700">
                          <b className="self-stretch relative tracking-[-0.02em] leading-[2.5rem]">
                            Job Description
                          </b>
                        </div>
                      </div>
                    </div>
                    <div className="relative tracking-[-0.02em] leading-[2.5rem] font-semibold">
                      <p className="m-0">Post : Travel Guide</p>
                      <p className="m-0">Time : Full Time / Part Time</p>
                      <p className="m-0">Salary : Negotiable</p>
                      <p className="m-0">No. Of Vacancy : 8</p>
                    </div>
                    <div className="relative tracking-[-0.1px] leading-[1.5rem] inline-block w-[59.5rem]">
                      <p className="m-0">
                        Reprehenderit hic bibendum repellendus, repellat auctor!
                        Integer temporibus, facilisis iaculis alias senectus,
                        non quam molestiae incidunt cubilia, fuga? Quasi natoque
                        dicta a fuga dapibus dolore molestie sociis erat,
                        convallis quibusdam possimus semper nonummy mattis,
                        quasi.
                      </p>
                      <p className="m-0">
                        Autem nec quaerat cubilia magnam eu mauris hic hac nisi
                        eos nobis officiis corrupti consequuntur molestie urna
                        volutpat! Quos diamlorem convallis vestibulum doloremque
                        iste facilisi.
                      </p>
                      <p className="m-0">
                        Autem nec quaerat cubilia magnam eu mauris hic hac nisi
                        eos nobis officiis corrupti consequuntur molestie urna
                        volutpat! Quos diamlorem convallis vestibulum doloremque
                        iste facilisi vallis vestibulum dol.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[1rem]   md:flex-col sm:flex-col">
                    <div className="w-[59.5rem] flex flex-row items-center justify-start">
                      <div className="w-[50rem] flex flex-col items-start justify-center gap-[0.5rem]">
                        <div className="relative tracking-[-0.1px] leading-[1.25rem] font-semibold hidden">
                          1% OF THE INDUSTRY
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-center text-[1.38rem] text-gray-700">
                          <div className="self-stretch relative tracking-[-0.02em] leading-[2.5rem] font-semibold">
                            Get to Know our Team
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative text-[1rem] tracking-[-0.1px] leading-[1.5rem] text-gray-50 inline-block w-[59.5rem]">
                      Total is a travel booking platforms with accommodations at
                      its core. As such our Key Account team is a key to our
                      success, we work hard to ensure their success. The Key
                      Accounts team invests in long-term relationships that
                      spans borders and cultures and results in incredible value
                      for Agoda, our partners, and our customers. We serve as
                      consultants, offering strategic advice on how best to
                      excel on Agoda’s commercial platform. We are direct
                      contributors to what makes Agoda a market leader; we
                      understand accommodation needs and offer innovative
                      solutions. From Bangkok to New York and beyond, the Agoda
                      team has footprints in over 50 locations around the world.
                      With the help of industry-leading technology, we work and
                      collaborate globally to bring together the best ideas from
                      diverse perspectives. The Key Accounts team invests in
                      long-term relationships that spans borders and cultures
                      and results in incredible value for Agoda, our partners,
                      and our customers.
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[1rem]   md:flex-col sm:flex-col">
                    <div className="w-[59.5rem] flex flex-row items-center justify-start">
                      <div className="w-[50rem] flex flex-col items-start justify-center gap-[0.5rem]">
                        <div className="relative tracking-[-0.1px] leading-[1.25rem] font-semibold hidden">
                          1% OF THE INDUSTRY
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-center text-[1.38rem] text-gray-700">
                          <div className="self-stretch relative tracking-[-0.02em] leading-[2.5rem] font-semibold">
                            The Opportunity
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative text-[1rem] tracking-[-0.1px] leading-[1.5rem] text-gray-50 inline-block w-[59.5rem]">{`This focus area for the Key Accounts organization intends to ensure that the client-facing roles are prepared and confident to engage at any point of interaction. Our team drives content strategy (including content development and L&D requirements for Key Accounts, programmatic interventions and training with the sole objective of affecting pipeline momentum, deal conversions and improving overall growth-generation process.`}</div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[1rem]   lg:flex-col md:flex-col sm:flex-col">
                    <div className="w-[59.5rem] flex flex-row items-center justify-start">
                      <div className="w-[50rem] flex flex-col items-start justify-center gap-[0.5rem]">
                        <div className="relative tracking-[-0.1px] leading-[1.25rem] font-semibold hidden">
                          1% OF THE INDUSTRY
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-center text-[1.38rem] text-gray-700">
                          <div className="self-stretch relative tracking-[-0.02em] leading-[2.5rem] font-semibold">
                            In this role, you’ll get to
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative text-[inherit] tracking-[-0.1px] leading-[1.5rem] font-inherit text-gray-50 inline-block w-[59.5rem]">
                      <ul className="m-0 pl-[1.31rem]">
                        <li className="mb-[false]">
                          Business Development Team Coaching
                        </li>
                        <li className="mb-[false]">
                          Analyze strenghts and training needs of individual
                          contributors, and develop and implement business
                          development training programs to enhance Partner
                          Solutions team performance
                        </li>
                        <li className="mb-[false]">
                          Own onboarding programs and learning content for Key
                          Account Partner Solutions Team
                        </li>
                        <li className="mb-[false]">
                          Colaborate with GTM managers to develop necessary
                          tools, resources, and training to effectively consult
                          partners, including sales collateral, presentations,
                          demos, and training materials.
                        </li>
                        <li className="mb-[false]">
                          Performance Tracking and Optimization: Monitoring and
                          analyzing the performance of the GTM strategy,
                          measuring key performance indicators (KPIs), and
                          making data-driven recommendations to optimize the GTM
                          approach and achieve business objectives.
                        </li>
                        <li className="mb-[false]">
                          Launch Execution: Coordinating and executing product
                          launches, including marketing campaigns, events, and
                          promotions to generate awareness, demand, and
                          participation.
                        </li>
                        <li className="mb-[false]">
                          Standardization of Best Practices
                        </li>
                        <li className="mb-[false]">
                          Standardize, socialize and implement Agoda’s
                          growth-generation process and practices
                        </li>
                        <li className="mb-[false]">
                          Cross-pollinate best practices from top performers
                          across the Partner Services through industry-standard
                          delivery formats
                        </li>
                        <li className="mb-[false]">Continuous Enablement</li>
                        <li className="mb-[false]">
                          Design pilots, programs and collaborate with regional
                          teams for targeted training and interventions
                        </li>
                        <li>{`Design & monitor metrics around various interventions from the team and leverage them for continuous evolution of the knowledge requirements`}</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[1rem]   lg:flex-col md:flex-col sm:flex-col">
                    <div className="w-[59.5rem] flex flex-row items-center justify-start">
                      <div className="w-[50rem] flex flex-col items-start justify-center gap-[0.5rem]">
                        <div className="relative tracking-[-0.1px] leading-[1.25rem] font-semibold hidden">
                          1% OF THE INDUSTRY
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-center text-[1.38rem] text-gray-700">
                          <div className="self-stretch relative tracking-[-0.02em] leading-[2.5rem] font-semibold">
                            What you’ll Need to Succeed
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative text-[inherit] tracking-[-0.1px] leading-[1.5rem] font-inherit text-gray-50 inline-block w-[59.5rem]">
                      <ul className="m-0 pl-[1.31rem]">
                        <li className="mb-[false]">
                          6+ years of proven experience in impacting
                          enablement/effectiveness/productivity of client-facing
                          roles
                        </li>
                        <li className="mb-[false]">
                          Understand and implement the best practices for
                          effective learning and development outcomes
                        </li>
                        <li className="mb-[false]">
                          Familiarity with e-learning platform, tools,
                          train-the-trainer programs
                        </li>
                        <li className="mb-[false]">
                          Knowledge of account management and business
                          development activities
                        </li>
                        <li className="mb-[false]">
                          Tech-oriented experiment and pilot enablement
                          solutions
                        </li>
                        <li className="mb-[false]">
                          Proficient in data analysis and pursuing fact-based
                          decisions
                        </li>
                        <li className="mb-[false]">
                          Proven experience in project management and effective
                          presentations
                        </li>
                        <li className="mb-[false]">
                          Excellent cross-functional collaboration and
                          communication
                        </li>
                        <li className="mb-[false]">
                          Professional certification (e.g., CPLP, CPTD, APTD),
                          and video editing is a plus
                        </li>
                        <li className="mb-[false]">
                          Experience with Workplace Learning and Bridge tools is
                          an advantage
                        </li>
                        <li className="mb-[false]">
                          Knowledge of online travel industry / e-commerce
                          business is an advantage
                        </li>
                        <li>
                          Direct team management experience for 3+ years is an
                          advantage
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[1rem]   lg:flex-col md:flex-col sm:flex-col">
                    <div className="w-[59.5rem] flex flex-row items-center justify-start">
                      <div className="w-[50rem] flex flex-col items-start justify-center gap-[0.5rem]">
                        <div className="relative tracking-[-0.1px] leading-[1.25rem] font-semibold hidden">
                          1% OF THE INDUSTRY
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-center text-[1.38rem] text-gray-700">
                          <div className="self-stretch relative tracking-[-0.02em] leading-[2.5rem] font-semibold">
                            Equal Opportunity Employer
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="relative text-[1rem] tracking-[-0.1px] leading-[1.5rem] text-gray-50 inline-block w-[59.5rem]">
                      <p className="m-0">
                        At total, we pride ourselves on being a company
                        represented by people of all different backgrounds and
                        orientations. We prioritize attracting diverse talent
                        and cultivating an inclusive environment that encourages
                        collaboration and innovation. Employment at Agoda is
                        based solely on a person’s merit and qualifications. We
                        are committed to providing equal employment opportunity
                        regardless of sex, age, race, color, national origin,
                        religion, marital status, pregnancy, sexual orientation,
                        gender identity, disability, citizenship, veteran or
                        military status, and other legally protected
                        characteristics.
                      </p>
                      <p className="m-0">
                        We will keep your application on file so that we can
                        consider you for future vacancies and you can always ask
                        to have your details removed from the file. For more
                        details please read our Privacy Policy.
                      </p>
                      <p className="m-0">
                        To all recruitment agencies: Agoda does not accept third
                        party resumes. Please do not send resumes to our jobs
                        alias, Agoda employees or any other organization
                        location. Agoda is not responsible for any fees related
                        to unsolicited resumes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start justify-start gap-[2rem] text-[0.75rem] text-purple-900">
              <div className="flex flex-col items-center justify-start">
                <Image
                  className="relative rounded-t-lg rounded-b-none w-[18.5rem] h-[17.81rem] object-cover"
                  alt=""
                  width={500}
                  height={500}
                  src="/Images/rectangle-24751@2x.png"
                />
                <div className="rounded-t-none rounded-b-lg bg-system-background-light-primary flex flex-col p-[1rem] items-start justify-start gap-[2rem] border-[1px] border-solid border-card">
                  <div className="flex flex-col items-start justify-start gap-[1rem]">
                    <div className="flex flex-col items-start justify-start gap-[0.5rem]">
                      <div className="relative tracking-[-0.01em] leading-[1.25rem] text-purple">
                        Full Time
                      </div>
                      <div className="relative text-[1.5rem] tracking-[-0.01em] leading-[2.13rem] font-semibold text-label-color-light-primary">
                        Supervisor
                      </div>
                    </div>
                    <div className="relative text-[0.88rem] tracking-[-0.1px] leading-[1.25rem] text-neutral-950 inline-block w-[16.5rem]">
                      But happy to move in with more than that, I’m super easy
                      going and tidy.
                    </div>
                  </div>
                  <div className="rounded-3xl bg-purple shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.75rem] px-[1.13rem] items-center justify-center gap-[0.38rem] text-center text-[0.94rem] text-white">
                    <img
                      className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder81111121111.svg"
                    />
                    <div className="relative leading-[1.38rem] font-semibold">
                      Apply Now
                    </div>
                    <img
                      className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder91111211.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start">
                <Image
                  className="relative rounded-t-lg rounded-b-none w-[18.5rem] h-[17.81rem] object-cover"
                  alt=""
                  width={500}
                  height={500}
                  src="/Images/rectangle-24752@2x.png"
                />
                <div className="rounded-t-none rounded-b-lg bg-system-background-light-primary flex flex-col p-[1rem] items-start justify-start gap-[2rem] border-[1px] border-solid border-card">
                  <div className="flex flex-col items-start justify-start gap-[1rem]">
                    <div className="flex flex-col items-start justify-start gap-[0.5rem]">
                      <div className="relative tracking-[-0.01em] leading-[1.25rem] text-purple">
                        Part Time
                      </div>
                      <div className="relative text-[1.5rem] tracking-[-0.01em] leading-[2.13rem] font-semibold text-label-color-light-primary">
                        Receptionist
                      </div>
                    </div>
                    <div className="relative text-[0.88rem] tracking-[-0.1px] leading-[1.25rem] text-neutral-950 inline-block w-[16.5rem]">
                      But happy to move in with more than that, I’m super easy
                      going and tidy.
                    </div>
                  </div>
                  <div className="rounded-3xl bg-purple shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.75rem] px-[1.13rem] items-center justify-center gap-[0.38rem] text-center text-[0.94rem] text-white">
                    <img
                      className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder32111.svg"
                    />
                    <div className="relative leading-[1.38rem] font-semibold">
                      Apply Now
                    </div>
                    <img
                      className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder4131.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start">
                <Image
                  className="relative rounded-t-lg rounded-b-none w-[18.5rem] h-[17.81rem] object-cover"
                  alt=""
                  width={500}
                  height={500}
                  src="/Images/rectangle-24753@2x.png"
                />
                <div className="rounded-t-none rounded-b-lg bg-system-background-light-primary flex flex-col p-[1rem] items-start justify-start gap-[2rem] border-[1px] border-solid border-card">
                  <div className="flex flex-col items-start justify-start gap-[1rem]">
                    <div className="flex flex-col items-start justify-start gap-[0.5rem]">
                      <div className="relative tracking-[-0.01em] leading-[1.25rem] text-purple">
                        Full Time / Part Time
                      </div>
                      <div className="relative text-[1.5rem] tracking-[-0.01em] leading-[2.13rem] font-semibold text-label-color-light-primary">
                        Tech Operator
                      </div>
                    </div>
                    <div className="relative text-[0.88rem] tracking-[-0.1px] leading-[1.25rem] text-neutral-950 inline-block w-[16.5rem]">
                      But happy to move in with more than that, I’m super easy
                      going and tidy.
                    </div>
                  </div>
                  <div className="rounded-3xl bg-purple shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.75rem] px-[1.13rem] items-center justify-center gap-[0.38rem] text-center text-[0.94rem] text-white">
                    <img
                      className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder811111211111.svg"
                    />
                    <div className="relative leading-[1.38rem] font-semibold">
                      Apply Now
                    </div>
                    <img
                      className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder1011111121112.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-greyish w-[94.5rem] flex flex-col py-[4rem] px-[5rem] box-border items-center justify-start text-purple-600   md:flex-col sm:flex-col">
          <div className="flex flex-col items-center justify-start gap-[4rem]   md:flex-col sm:flex-col">
            <div className="flex flex-row items-center justify-start   lg:flex-col md:flex-col sm:flex-col">
              <div className=" flex flex-col items-start justify-center gap-[0.5rem]">
                <div className="self-stretch flex flex-col items-start justify-center gap-[1rem] text-[2rem] text-gray-700">
                  <b className="self-stretch relative tracking-[-0.02em] leading-[2.5rem]">
                    Apply And Join Our Team
                  </b>
                  <div className="relative text-[1rem] tracking-[-0.1px] leading-[1.5rem] text-gray-50 inline-block w-[78rem]">
                    Real adventure and travels encompass engaging in thrilling
                    and immersive experiences that take you beyond the ordinary
                    and allow you to explore new places, cultures, and
                    activities. Here are a few suggestions to embrace real
                    adventure and travels:
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[2rem] text-[0.94rem] text-gray-25   md:flex-col sm:flex-col">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputText placeholder="First Name" className="w-[39.4rem]" />
                <InputText placeholder="Last Name" />
                <InputText placeholder="Email Address" />
                <InputText placeholder="Phone Number" />
                <InputText placeholder="Your Position" />
                <InputText placeholder="Salary Range" />
              </div>

              <InputTextarea
                rows={12}
                placeholder="Your Message Here"
                className="resize-none w-full"
              />

              <div className="rounded-3xl bg-purple shadow-[0px_1px_2px_rgba(16,_24,_40,_0.04)] overflow-hidden flex flex-row py-[0.75rem] px-[1.13rem] items-center justify-center gap-[0.38rem] text-center text-white">
                <img
                  className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/placeholder1211111.svg"
                />
                <div className="relative leading-[1.38rem] font-semibold">
                  Send Application
                </div>
                <img
                  className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/placeholder1211111.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </RootLayout>
    </div>
  );
}

export default CareerDetails;
