// Navigation Data
export const navigationItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
    children: [
      { title: "Who We Are", href: "/about/who-we-are" },
      { title: "Our Team", href: "/about/our-team" },
    ],
  },
  {
    title: "Services",
    href: "/services",
    children: [
      { title: "Tax Advisory Services", href: "/services/tax-advisory" },
      { title: "Accounting Services", href: "/services/accounting" },
      { title: "Business Development Solutions", href: "/services/business-development" },
      { title: "Tax Resolution Services", href: "/services/tax-resolution" },
      { title: "CFO Services", href: "/services/cfo-services" },
      { title: "White Glove Services", href: "/services/white-glove" },
    ],
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
];

// Services Data
export const services = [
  {
    id: "tax-advisory",
    title: "Tax Advisory Services",
    shortDescription: "Strategic tax planning to minimize liabilities and maximize savings.",
    description: "Our tax advisory services provide comprehensive strategies to optimize your tax position. We work closely with businesses and individuals to develop proactive tax planning that aligns with your financial goals.",
    icon: "calculator",
    benefits: [
      "Minimize tax liabilities legally",
      "Strategic year-round tax planning",
      "State and federal tax optimization",
      "International tax consulting",
      "Tax-efficient investment strategies",
    ],
    features: [
      "Comprehensive tax analysis",
      "Quarterly tax projections",
      "Tax law compliance monitoring",
      "Entity structure optimization",
      "Retirement planning strategies",
    ],
    process: [
      { step: 1, title: "Initial Consultation", description: "We assess your current tax situation and identify opportunities." },
      { step: 2, title: "Strategy Development", description: "Our experts create a customized tax optimization plan." },
      { step: 3, title: "Implementation", description: "We execute the strategy and handle all documentation." },
      { step: 4, title: "Ongoing Monitoring", description: "Regular reviews ensure continued optimization." },
    ],
    faqs: [
      { question: "How often should I review my tax strategy?", answer: "We recommend quarterly reviews to adapt to changing regulations and life events." },
      { question: "Can you help with multi-state taxation?", answer: "Yes, our team specializes in complex multi-state and international tax situations." },
      { question: "Do you work with both individuals and businesses?", answer: "Absolutely. We serve individuals, small businesses, and large corporations." },
    ],
  },
  {
    id: "accounting",
    title: "Accounting Services",
    shortDescription: "Accurate bookkeeping and financial reporting for informed decisions.",
    description: "Our accounting services ensure your financial records are accurate, timely, and compliant. From day-to-day bookkeeping to complex financial reporting, we provide the foundation for sound business decisions.",
    icon: "book-open",
    benefits: [
      "Real-time financial visibility",
      "Error-free bookkeeping",
      "Timely financial statements",
      "Audit-ready documentation",
      "Cost reduction insights",
    ],
    features: [
      "Full-service bookkeeping",
      "Monthly financial statements",
      "Accounts payable/receivable management",
      "Bank reconciliation",
      "Financial analysis and reporting",
    ],
    process: [
      { step: 1, title: "Assessment", description: "We evaluate your current accounting processes and systems." },
      { step: 2, title: "Setup", description: "Implement or optimize your accounting infrastructure." },
      { step: 3, title: "Execution", description: "Handle daily, weekly, and monthly accounting tasks." },
      { step: 4, title: "Reporting", description: "Deliver comprehensive financial reports and insights." },
    ],
    faqs: [
      { question: "What accounting software do you support?", answer: "We work with QuickBooks, Xero, Sage, and most major platforms." },
      { question: "Can you handle payroll as well?", answer: "Yes, payroll services are included in our comprehensive accounting packages." },
      { question: "How quickly can I access my financial data?", answer: "Our cloud-based solutions provide real-time access to your financial information." },
    ],
  },
  {
    id: "business-development",
    title: "Business Development Solutions",
    shortDescription: "Strategic growth planning to scale your business effectively.",
    description: "Transform your business with our development solutions. We help identify growth opportunities, optimize operations, and implement strategies that drive sustainable success.",
    icon: "trending-up",
    benefits: [
      "Identify new revenue streams",
      "Optimize operational efficiency",
      "Strategic partnership development",
      "Market expansion strategies",
      "Competitive advantage building",
    ],
    features: [
      "Business plan development",
      "Market analysis and research",
      "Operational consulting",
      "Growth strategy planning",
      "Performance benchmarking",
    ],
    process: [
      { step: 1, title: "Discovery", description: "Deep dive into your business model and market position." },
      { step: 2, title: "Analysis", description: "Identify opportunities and challenges through data analysis." },
      { step: 3, title: "Strategy", description: "Develop actionable growth and improvement plans." },
      { step: 4, title: "Execution Support", description: "Guide implementation and measure results." },
    ],
    faqs: [
      { question: "How long does a typical engagement last?", answer: "Projects range from 3-12 months depending on scope and objectives." },
      { question: "Do you help with funding and investment?", answer: "Yes, we assist with investor presentations and funding strategies." },
      { question: "Can you help with digital transformation?", answer: "We partner with technology experts to support digital initiatives." },
    ],
  },
  {
    id: "tax-resolution",
    title: "Tax Resolution Services",
    shortDescription: "Expert help resolving IRS issues and back taxes.",
    description: "Facing IRS problems? Our tax resolution specialists negotiate on your behalf to resolve tax debts, penalties, and compliance issues. We work to achieve the best possible outcome for your situation.",
    icon: "shield-check",
    benefits: [
      "IRS penalty abatement",
      "Installment agreement negotiation",
      "Offer in compromise assistance",
      "Wage garnishment release",
      "Tax lien and levy resolution",
    ],
    features: [
      "IRS representation",
      "State tax resolution",
      "Audit defense",
      "Back tax filing",
      "Innocent spouse relief",
    ],
    process: [
      { step: 1, title: "Case Review", description: "Analyze your tax history and IRS correspondence." },
      { step: 2, title: "Strategy Selection", description: "Determine the best resolution approach for your case." },
      { step: 3, title: "Negotiation", description: "Engage with the IRS on your behalf." },
      { step: 4, title: "Resolution", description: "Implement the agreed solution and ensure compliance." },
    ],
    faqs: [
      { question: "Can you really reduce what I owe the IRS?", answer: "In many cases, yes. Programs like Offer in Compromise can significantly reduce tax debt." },
      { question: "Will I have to go to court?", answer: "Most cases are resolved through administrative processes without court involvement." },
      { question: "How long does tax resolution take?", answer: "Resolution timelines vary from a few months to over a year depending on complexity." },
    ],
  },
  {
    id: "cfo-services",
    title: "CFO Services",
    shortDescription: "Executive-level financial leadership without the full-time cost.",
    description: "Access experienced CFO expertise on a fractional basis. Our CFO services provide strategic financial leadership, helping you make informed decisions and drive business growth.",
    icon: "briefcase",
    benefits: [
      "Strategic financial planning",
      "Cash flow optimization",
      "Financial risk management",
      "Investor and board relations",
      "M&A advisory support",
    ],
    features: [
      "Financial strategy development",
      "Budget and forecast management",
      "KPI tracking and analysis",
      "Financial modeling",
      "Capital structure optimization",
    ],
    process: [
      { step: 1, title: "Onboarding", description: "Understand your business, goals, and financial landscape." },
      { step: 2, title: "Assessment", description: "Evaluate current financial processes and opportunities." },
      { step: 3, title: "Implementation", description: "Execute improvements and strategic initiatives." },
      { step: 4, title: "Ongoing Support", description: "Provide continuous CFO-level guidance and support." },
    ],
    faqs: [
      { question: "How is fractional CFO different from a controller?", answer: "A CFO focuses on strategy and growth, while controllers manage accounting operations." },
      { question: "How much time will a fractional CFO dedicate?", answer: "Engagement levels are flexible, typically ranging from a few hours to several days per week." },
      { question: "At what stage do companies need CFO services?", answer: "Companies often benefit once revenue exceeds $1-2 million or during growth/transition phases." },
    ],
  },
  {
    id: "white-glove",
    title: "White Glove Services",
    shortDescription: "Premium, personalized financial services for high-net-worth clients.",
    description: "Our white glove service provides exclusive, hands-on financial management for discerning clients. Experience personalized attention and comprehensive wealth management tailored to your unique needs.",
    icon: "crown",
    benefits: [
      "Dedicated personal advisor",
      "24/7 priority support",
      "Comprehensive wealth management",
      "Exclusive investment opportunities",
      "Family office services",
    ],
    features: [
      "Estate and succession planning",
      "Trust and entity management",
      "Philanthropic advisory",
      "Lifestyle management support",
      "Concierge financial services",
    ],
    process: [
      { step: 1, title: "Introduction", description: "Personal meeting to understand your complete financial picture." },
      { step: 2, title: "Customization", description: "Design a bespoke service package for your needs." },
      { step: 3, title: "Execution", description: "Implement and manage all aspects of your financial life." },
      { step: 4, title: "Relationship", description: "Ongoing partnership with regular reviews and adjustments." },
    ],
    faqs: [
      { question: "What makes white glove service different?", answer: "You receive a dedicated team, priority access, and comprehensive coverage of all financial matters." },
      { question: "Is there a minimum asset requirement?", answer: "White glove services are typically available for clients with $5 million+ in assets." },
      { question: "Can you coordinate with my other advisors?", answer: "Absolutely. We work seamlessly with your attorneys, bankers, and other professionals." },
    ],
  },
];

// Team Data
export const teamMembers = [
  {
    id: 1,
    name: "Michael Richardson",
    role: "Founder & CEO",
    bio: "With over 25 years of experience in financial services, Michael founded SMD Group to provide exceptional, client-focused advisory services.",
    image: "/team/michael.jpg",
    linkedin: "#",
    email: "michael@smdgroup.com",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Managing Partner, Tax Advisory",
    bio: "Sarah leads our tax advisory practice with expertise in corporate tax strategy and international taxation. Former Big Four partner.",
    image: "/team/sarah.jpg",
    linkedin: "#",
    email: "sarah@smdgroup.com",
  },
  {
    id: 3,
    name: "David Thompson",
    role: "Director of Accounting Services",
    bio: "David brings 15 years of accounting expertise, specializing in financial reporting and audit preparation for growing businesses.",
    image: "/team/david.jpg",
    linkedin: "#",
    email: "david@smdgroup.com",
  },
  {
    id: 4,
    name: "Jennifer Martinez",
    role: "Senior Tax Resolution Specialist",
    bio: "Jennifer is a former IRS revenue officer who now helps clients navigate complex tax issues and achieve favorable resolutions.",
    image: "/team/jennifer.jpg",
    linkedin: "#",
    email: "jennifer@smdgroup.com",
  },
  {
    id: 5,
    name: "Robert Kim",
    role: "CFO Services Practice Lead",
    bio: "Robert has served as CFO for multiple companies and now provides fractional CFO services to help businesses scale effectively.",
    image: "/team/robert.jpg",
    linkedin: "#",
    email: "robert@smdgroup.com",
  },
  {
    id: 6,
    name: "Amanda Foster",
    role: "Business Development Director",
    bio: "Amanda helps clients identify growth opportunities and develop strategies to achieve their business objectives.",
    image: "/team/amanda.jpg",
    linkedin: "#",
    email: "amanda@smdgroup.com",
  },
];

// Blog Data
export const blogPosts = [
  {
    id: 1,
    slug: "tax-planning-strategies-2024",
    title: "Essential Tax Planning Strategies for 2024",
    excerpt: "Discover the key tax planning strategies that can help you minimize your tax burden this year and beyond.",
    content: `
      <p>As we navigate through 2024, strategic tax planning has never been more important. With changing regulations and economic conditions, businesses and individuals alike need to stay ahead of their tax obligations.</p>
      
      <h2>Key Strategies to Consider</h2>
      
      <p>First, consider maximizing your retirement contributions. For 2024, the 401(k) contribution limit has increased, providing an excellent opportunity to reduce taxable income while building your retirement nest egg.</p>
      
      <p>Second, review your investment portfolio for tax-loss harvesting opportunities. This strategy involves selling investments at a loss to offset capital gains, potentially reducing your overall tax liability.</p>
      
      <h2>Business Tax Considerations</h2>
      
      <p>For business owners, the Section 199A deduction continues to provide significant benefits for pass-through entities. Ensure your business structure is optimized to take full advantage of this deduction.</p>
      
      <p>Additionally, consider accelerating business expenses and deferring income where appropriate. This timing strategy can be particularly effective for businesses with fluctuating income levels.</p>
      
      <h2>Planning for the Future</h2>
      
      <p>Estate planning should also be part of your overall tax strategy. With current estate tax exemptions at historic highs, now may be an ideal time to implement gifting strategies and trust structures.</p>
      
      <p>Contact our team to develop a personalized tax planning strategy that aligns with your financial goals.</p>
    `,
    category: "Tax Planning",
    author: "Sarah Chen",
    authorRole: "Managing Partner, Tax Advisory",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "/blog/tax-planning.jpg",
  },
  {
    id: 2,
    slug: "small-business-accounting-best-practices",
    title: "Small Business Accounting Best Practices",
    excerpt: "Learn the essential accounting practices every small business owner should implement for financial success.",
    content: `
      <p>Effective accounting is the backbone of any successful small business. Without accurate financial records, making informed decisions becomes nearly impossible.</p>
      
      <h2>Separate Business and Personal Finances</h2>
      
      <p>One of the most critical steps for any business owner is maintaining separate bank accounts and credit cards for business and personal use. This separation simplifies bookkeeping and protects personal assets.</p>
      
      <h2>Implement a Consistent Bookkeeping System</h2>
      
      <p>Whether you use cloud-based software like QuickBooks or Xero, or work with a professional bookkeeper, consistency is key. Establish a routine for recording transactions, reconciling accounts, and reviewing financial statements.</p>
      
      <h2>Monitor Cash Flow Regularly</h2>
      
      <p>Cash flow is the lifeblood of your business. Create cash flow projections and monitor actual performance against projections. This practice helps identify potential shortfalls before they become critical.</p>
      
      <h2>Keep Detailed Records</h2>
      
      <p>Maintain organized records of all financial transactions, receipts, and documents. Good record-keeping simplifies tax preparation and provides documentation in case of an audit.</p>
      
      <p>Our accounting team can help you implement these best practices and more. Contact us for a consultation.</p>
    `,
    category: "Accounting",
    author: "David Thompson",
    authorRole: "Director of Accounting Services",
    date: "2024-01-08",
    readTime: "4 min read",
    image: "/blog/accounting.jpg",
  },
  {
    id: 3,
    slug: "navigating-irs-audits",
    title: "Navigating IRS Audits: What You Need to Know",
    excerpt: "Understand your rights and responsibilities during an IRS audit, and learn how to prepare effectively.",
    content: `
      <p>Receiving an IRS audit notice can be stressful, but understanding the process can help you navigate it successfully. Most audits are routine and can be resolved without major issues when handled properly.</p>
      
      <h2>Types of IRS Audits</h2>
      
      <p>The IRS conducts three main types of audits: correspondence audits, office audits, and field audits. Correspondence audits are the most common and are conducted entirely by mail.</p>
      
      <h2>Your Rights During an Audit</h2>
      
      <p>As a taxpayer, you have important rights during an audit, including the right to professional representation, the right to know why the IRS is asking for information, and the right to appeal disagreements.</p>
      
      <h2>Preparing for Your Audit</h2>
      
      <p>Gather all relevant documentation before the audit begins. This includes tax returns, receipts, bank statements, and any other records that support the items being questioned.</p>
      
      <h2>Working with a Professional</h2>
      
      <p>Consider working with a tax professional who can represent you before the IRS. An experienced representative can help ensure your rights are protected and that you achieve the best possible outcome.</p>
      
      <p>If you are facing an IRS audit, contact our tax resolution team for expert assistance.</p>
    `,
    category: "Tax Resolution",
    author: "Jennifer Martinez",
    authorRole: "Senior Tax Resolution Specialist",
    date: "2024-01-02",
    readTime: "6 min read",
    image: "/blog/irs-audit.jpg",
  },
  {
    id: 4,
    slug: "fractional-cfo-benefits",
    title: "The Benefits of a Fractional CFO for Growing Companies",
    excerpt: "Discover how fractional CFO services can provide executive-level financial leadership at a fraction of the cost.",
    content: `
      <p>As companies grow, their financial needs become more complex. A fractional CFO can provide the strategic financial leadership needed to navigate this growth without the cost of a full-time executive.</p>
      
      <h2>What is a Fractional CFO?</h2>
      
      <p>A fractional CFO is an experienced financial executive who works with multiple companies on a part-time or project basis. They provide the same strategic guidance as a full-time CFO but at a more accessible price point.</p>
      
      <h2>Key Benefits</h2>
      
      <p>Cost efficiency is a primary advantage. Companies can access senior financial expertise without the salary, benefits, and overhead of a full-time executive position.</p>
      
      <p>Fractional CFOs also bring diverse experience from working with multiple companies and industries. This breadth of experience can provide valuable insights and best practices.</p>
      
      <h2>When to Consider a Fractional CFO</h2>
      
      <p>Companies typically benefit from fractional CFO services when preparing for funding rounds, navigating rapid growth, implementing new financial systems, or during transitions and turnarounds.</p>
      
      <p>Our CFO services team can help determine if fractional CFO support is right for your business.</p>
    `,
    category: "CFO Services",
    author: "Robert Kim",
    authorRole: "CFO Services Practice Lead",
    date: "2023-12-20",
    readTime: "5 min read",
    image: "/blog/cfo-services.jpg",
  },
  {
    id: 5,
    slug: "business-growth-strategies",
    title: "Strategic Business Growth: Beyond the Basics",
    excerpt: "Explore advanced strategies for sustainable business growth and market expansion.",
    content: `
      <p>Growing a business requires more than just increasing sales. Sustainable growth comes from strategic planning, operational excellence, and continuous adaptation to market conditions.</p>
      
      <h2>Diversification Strategies</h2>
      
      <p>Consider diversifying your revenue streams to reduce risk and create new growth opportunities. This might include new products, services, or entering adjacent markets.</p>
      
      <h2>Operational Excellence</h2>
      
      <p>Before scaling, ensure your operations can handle growth. Implement systems and processes that can scale with your business without proportional increases in cost or complexity.</p>
      
      <h2>Strategic Partnerships</h2>
      
      <p>Partnerships can accelerate growth by providing access to new markets, technologies, or capabilities. Look for partners whose strengths complement your own.</p>
      
      <h2>Data-Driven Decision Making</h2>
      
      <p>Use data to guide your growth strategy. Track key performance indicators, analyze market trends, and make decisions based on evidence rather than intuition alone.</p>
      
      <p>Our business development team can help you create and execute a growth strategy tailored to your goals.</p>
    `,
    category: "Business Development",
    author: "Amanda Foster",
    authorRole: "Business Development Director",
    date: "2023-12-15",
    readTime: "4 min read",
    image: "/blog/business-growth.jpg",
  },
  {
    id: 6,
    slug: "estate-planning-essentials",
    title: "Estate Planning Essentials for High-Net-Worth Individuals",
    excerpt: "Protect your legacy with comprehensive estate planning strategies designed for complex financial situations.",
    content: `
      <p>Estate planning is essential for preserving wealth and ensuring your assets are distributed according to your wishes. For high-net-worth individuals, the stakes and complexities are particularly high.</p>
      
      <h2>Beyond the Basic Will</h2>
      
      <p>While a will is foundational, comprehensive estate planning often requires additional tools such as trusts, family limited partnerships, and charitable giving vehicles.</p>
      
      <h2>Tax-Efficient Wealth Transfer</h2>
      
      <p>With current estate tax exemptions at historic levels, now is an opportune time to implement gifting strategies. Consider annual exclusion gifts, tuition and medical payments, and more sophisticated techniques like GRATs.</p>
      
      <h2>Business Succession Planning</h2>
      
      <p>If you own a business, succession planning is critical. This includes valuation considerations, buyout structures, and potentially using trusts to transfer business interests tax-efficiently.</p>
      
      <h2>Protecting Your Legacy</h2>
      
      <p>Beyond financial assets, consider your philanthropic goals and how you want to be remembered. Charitable trusts and private foundations can help you make a lasting impact.</p>
      
      <p>Our white glove services team specializes in comprehensive estate planning for high-net-worth clients.</p>
    `,
    category: "White Glove Services",
    author: "Michael Richardson",
    authorRole: "Founder & CEO",
    date: "2023-12-10",
    readTime: "6 min read",
    image: "/blog/estate-planning.jpg",
  },
];

// Company Values
export const companyValues = [
  {
    title: "Integrity",
    description: "We uphold the highest ethical standards in all our interactions, building trust through transparency and honesty.",
  },
  {
    title: "Excellence",
    description: "We strive for excellence in everything we do, continuously improving our skills and services to deliver outstanding results.",
  },
  {
    title: "Client Focus",
    description: "Your success is our success. We put our clients first, tailoring our approach to meet your unique needs and goals.",
  },
  {
    title: "Innovation",
    description: "We embrace change and leverage the latest technologies and strategies to provide cutting-edge solutions.",
  },
];

// Stats
export const companyStats = [
  { value: "25+", label: "Years of Experience" },
  { value: "500+", label: "Clients Served" },
  { value: "$2B+", label: "Assets Managed" },
  { value: "98%", label: "Client Satisfaction" },
];

// Contact Info
export const contactInfo = {
  address: "123 Financial District, Suite 400, New York, NY 10004",
  phone: "(555) 123-4567",
  email: "info@smdgroup.com",
  hours: "Monday - Friday: 9:00 AM - 6:00 PM EST",
};

// Social Links
export const socialLinks = [
  { name: "LinkedIn", href: "#", icon: "linkedin" },
  { name: "Twitter", href: "#", icon: "twitter" },
  { name: "Facebook", href: "#", icon: "facebook" },
];
