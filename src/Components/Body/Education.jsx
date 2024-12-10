import React from 'react';
import Bubble from './ReusableComponents/BubbleComponents.jsx';
import './body.css';

export default class Education extends React.Component {
  render() {
    return (
      <div className='education'>
        <div className='educationContainer'>
          <div className='appSection eduApp'>
            <h2>RESUME</h2>
            <div className='appSection eduApp experience'>
              <h3>EXPERIENCE</h3>
              <h4>Middle Mile</h4>
              <strong>Technical Co-Founder</strong> <span>(January 2024 - November 2024)</span>
              <ul>
                <li>Built and deployed production-ready MVP single-handedly, enabling immediate market entry and successful order fulfillment operations</li>
                <li>Architected and implemented full-stack serverless infrastructure using AWS (Lambda, Aurora Serverless, API Gateway, Cognito) to support distributed fulfillment operations</li>
                <li>Built end-to-end Shopify integration with robust error handling and logging, enabling automated order processing and fulfillment routing</li>
                <li>Developed React Native mobile app for fulfillers and React admin panel for operations management</li>
                <li>Engineered comprehensive data pipeline using Kinesis Firehose for analytics and operational insights</li>
              </ul>
              <hr />
              <br />
              <h4>ServCommerce</h4>
              <strong>Lead Engineer</strong> <span>(May 2023 - October 2023)</span>
              <ul>
                <li>Developed most features and infrastructure for Alpha product on server and client (both web and mobile). Integrations include: Twilio, Stripe, OpenAI</li>
                <li>Supported 34 customers on our Alpha application to use in service of their business</li>
              </ul>
              <hr />
              <br />

              <h4>Betterment</h4>
              <strong>Mobile Engineer III</strong> <span>(August 2022 - February 2023)</span>
              <ul>
                <li>Worked across teams to change processes to unblock feature development</li>
                <li>Swiftly developed major portions of our 401k onboarding and contribution ahead of deadline</li>
                <li>Unblocked team by building APIs when API team was backlogged</li>
              </ul>
              <hr />
              <br />

              <h4>Grove Collaborative</h4>
              <strong>iOS Engineer / Senior Software Engineer</strong> <span>(March 2020 - July 2022)</span>
              <ul>
                <li>Built full-stack quiz experience for product recommendations taken by 89K customers</li>
                <li>Constructed a cohesive download encouragement experience between mobile web and mobile app that led to 155K app downloads over 2 quarters</li>
              </ul>
              <strong>Software Engineer II / Acquisition Pod Lead</strong> <span>(January 2019 - March 2020)</span>
              <ul>
                <li>Hit all OKRs  owned by the acquisition team (3 full-stack engineers) since becoming pod lead</li>
                <li>Increased first-purchase conversion rate by 10%</li>
                <li>Increased in-site exploration by 8%</li>
                <li>Achieved high velocity experimentation through strong partnerships with Product, Design, and Marketing and increased new user acquisition rates (ran 10 experiments in Q3 of 2019)</li>
                <li>Instituted new team-wide processes like team retrospectives and planning poker that made sprint planning more effective</li>
              </ul>
              <strong>Software Engineer I</strong> <span>(January 2018 - January 2019)</span>
              <ul>
                <li>Built an end-to-end content management system for the Merchandising and Marketing teams to curate marketing and presale pages without additional engineering resources (pages used by over 100,000 customers per year)</li>
                <li>Implemented the site’s first product filtering system that dynamically handled filtering 500+ items across 50+ attributes</li>
              </ul>
              <strong>Associate Software Engineer</strong> <span>(March 2017 - January 2018)</span>
              <ul>
                <li>Extended payment system to include PayPal, which increased user acquisition rate by 2%</li>
                <li>Revamped new user onboarding flow, which increased onboarding retention by 10%</li>
              </ul>
            </div>
            <h3>EDUCATION</h3>
            <h4>Hack Reactor</h4>
            <p>Advanced Software Engineering Immersive Program<br/>
            Class of 2016</p>
            <h4>Union College</h4>
            <p>B.S. Computer Science, Economics<br/>
            Class of 2015</p>
          </div>
          <div className='appSection eduApp'>
            <h3>SKILLS</h3>
            <Bubble text='VUE' />
            <Bubble className='largeBubble' text='BACKBONE' />
            <Bubble className='largeBubble' text='JAVASCRIPT' />
            <Bubble text='HTML5' />
            <Bubble text='CSS3' />
            <Bubble className='mediumBubble' text='PYTHON' />
            <Bubble className='mediumBubble' text='DJANGO' />
            <Bubble text='REACT' />
            <Bubble text='NodeJS' />
            <Bubble text='GIT' />
            <Bubble className='mediumBubble' text='JQUERY' />
          </div>
          <div className='appSection eduApp'>
            <h3>LEADERSHIP</h3>
            <h4>Union College Entrepreneurship Organization</h4>
            <p>President (Fall '14, Spring '15)</p>
            <p>Vice President (Fall '13, Spring '14)</p>
          </div>
          <div className='appSection eduApp'>
            <h3>RELEVANT COURSEWORK</h3>
            <h4>Data Visualizations</h4>
            <p>Scraped web data using Python UrlLib2 and Beautiful Soup</p>
            <h4>Data Structures</h4>
            <p>Organized data in most effective and relavent ways</p>
            <h4>Algorithms</h4>
            <p>Analyzed and designed algorithms</p>
          </div>
        </div>
      </div>
    );
  }
}