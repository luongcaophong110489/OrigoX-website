import React, { useState, useEffect, useRef } from 'react';

// --- ICONS (Giả lập thư viện icon) ---
// --- NEW, REFINED ICONS ---
const IconMA = (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M14 6L12 4L10 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 4V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 13H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 17L10 19L12 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 17L16 19L18 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 19V20H16V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
const IconCapital = (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M3 17L8 12L13 17L18 12L21 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 12V20H21V12H15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 7V20H9V7H3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
const IconResearch = (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M10 14L4 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="14" cy="10" r="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 6V10H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
const Briefcase = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
);

const Users = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);
const ArrowRight = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);
const ArrowLeft = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
);
const Download = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
);
const CheckCircle = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
);
const Linkedin = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);
const TrendingUp = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
);
const TrendingDown = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></svg>
);
const Minus = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="5" x2="19" y1="12" y2="12"/></svg>
);
const Mail = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);
const LayoutDashboard = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
);
const Archive = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/></svg>
);
const ThumbsUp = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M7 10v12"/><path d="M15.5 10 18 4h-2.5a2 2 0 0 0-2-2H8.5a2 2 0 0 0-2 2v10H4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13.4a2 2 0 0 0 1.9-1.4l2.7-7.9a2 2 0 0 0-1.9-2.6H15.5Z"/></svg>
);
const ThumbsDown = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M17 14V2"/><path d="M8.5 14 6 20h2.5a2 2 0 0 0 2-2h4.5a2 2 0 0 0 2-2V4h3.5a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H10.6a2 2 0 0 0-1.9 1.4l-2.7 7.9a2 2 0 0 0 1.9 2.6H8.5Z"/></svg>
);
const Scale = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m16 16 3-8 3 8c-2 1-4 1-6 0Z"/><path d="m2 16 3-8 3 8c-2 1-4 1-6 0Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h18"/></svg>
);
const X = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);
const PlayCircle = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
);
const Video = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>
);
const BookOpen = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
);
const Phone = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);
const Globe = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
);
const ChevronDown = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m6 9 6 6 6-6"/></svg>
);
const Building = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="4" y="4" width="16" height="16" rx="2"/>
        <path d="M9 9h6v6H9z"/>
        <path d="M9 1v3"/>
        <path d="M15 1v3"/>
    </svg>
);
const Server = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
);
const DollarSign = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="12" y1="2" x2="12" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
);
const Activity = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
);
const BarChart2 = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
);
const Search = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
);
const MessageSquare = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
);
// The 'Send' icon was unused and has been removed.


// --- HELPER FUNCTION ---
const parseFinancialString = (str) => {
    if (typeof str !== 'string' || str === null) return NaN;
    const cleaned = str.replace(/[^0-9.,-]/g, '').replace(',', '.');
    return parseFloat(cleaned);
};

// --- i18n TRANSLATION OBJECT ---
const translations = {
    en: {
        moduleTitle: "Investment Banking - Starconsulting",
        navResearchHub: "Research Hub",
        navMA: "M&A Advisory",
        navCapital: "Capital Markets",
        navAbout: "About Us",
        navContact: "Contact",
        navMarkets: "Markets",
        marketSubNav: {
            fx: "FX",
            rates: "Rates",
            fixedIncome: "Fixed Income",
            commodities: "Commodities",
            equities: "Equities",
            etfs: "ETFs",
            digitalAssets: "Digital Assets",
        },
        specializedAdvisoryTitle: "Specialized Advisory Services",
        specializedAdvisorySubtitle: "Applying our in-depth analysis to the most complex transactions, creating superior value.",
        partnersTitle: "Our Partners & Valued Clients",
        partnersSubtitle: "We are proud to partner with and create value for leading domestic and international organizations.",
        accessCenter: "Access Center",
        researchHubTitle: "Research Center",
        researchHubSubtitle: "The gateway to the world of analysis, data, and proprietary intellectual products of Starconsulting.",
        marketSnapshotTitle: "Market Snapshot",
        featuredThisMonth: "Featured This Month",
        warRoomTeaserText: "We are analyzing the scenarios and potential impacts. Follow our thought process in the War Room.",
        warRoomTeaserLink: "Follow the Analysis",
        latestNews: "Latest News",
        readMoreAndArchive: "Read More & View Full Archive",
        thematicReport: "Thematic Report",
        toolboxTitle: "Research Console",
        aboutTitle: "Vision, Methodology & People",
        aboutSubtitle: "Our success is built on a foundation of experience, integrity, and a clear vision for the future of financial research.",
        methodologyTitle: "Our Foundational Methodology",
        assetCoverageTitle: "Asset Coverage",
        geographicCoverageTitle: "Geographic Coverage",
        expertsTitle: "Meet Our Strategic Experts",
        contactTitle: "Connect With Us",
        contactSubtitle: "Let's discuss how our strategic insights can create value for your organization.",
        comingSoon: "Coming Soon",
        searchPlaceholder: "Search analysis, news...",
        searchResultsTitle: "Search Results",
        resultsFor: "Results for",
        noResultsFound: "No Results Found",
        researchNav: [
            {
                category: "MARKETS",
                items: [
                    { id: 'dashboard', title: 'Macro Dashboard' },
                    { id: 'industryAnalysis', title: 'Industry Analysis' },
                    { id: 'companyAnalysis', title: 'Company Analysis' },
                ]
            },
            {
                category: "INTELLECTUAL PRODUCTS",
                items: [
                    { id: 'warRoom', title: 'War Room' },
                    { id: 'thematicReports', title: 'Thematic Reports' },
                    { id: 'dialogues', title: 'Expert Dialogues' },
                ]
            },
            {
                category: "ARCHIVES",
                items: [
                     { id: 'researchArchive', title: 'Full Archive' },
                ]
            }
        ],
        services: {
            ma: {
                title: "Mergers & Acquisitions (M&A) Advisory",
                description: "Guiding businesses through strategic transactions, from partner sourcing, due diligence, valuation to negotiation and closing to maximize value.",
                details: "Our M&A advisory service provides comprehensive support throughout the entire transaction lifecycle. We leverage our deep industry knowledge and extensive network to identify strategic opportunities, conduct thorough due diligence, and structure deals that maximize value for our clients. Whether you are buying, selling, or merging, our team is committed to achieving your strategic objectives with precision and confidentiality.",
                scopeOfWorkTitle: "Comprehensive Support",
                scopeOfWork: [
                    "Strategic target identification and screening",
                    "Valuation analysis and financial modeling",
                    "Comprehensive due diligence (financial, commercial, operational)",
                    "Deal structuring and negotiation support",
                    "Post-merger integration planning and execution"
                ],
                processTitle: "Our M&A Advisory Process",
                processSteps: [
                    { stage: "Stage 1", title: "Strategy & Preparation", description: "Defining objectives, valuation expectations, and preparing marketing materials." },
                    { stage: "Stage 2", title: "Market Approach", description: "Identifying and confidentially approaching a curated list of potential strategic partners." },
                    { stage: "Stage 3", title: "Due Diligence & Negotiation", description: "Managing data rooms, facilitating expert sessions, and leading negotiations on key terms." },
                    { stage: "Stage 4", title: "Closing & Integration", description: "Finalizing legal documentation and planning for a smooth post-transaction integration." }
                ],
                benefitsTitle: "Strategic Benefits of M&A",
                benefits: [
                    "Expand market share, increase business value",
                    "Leverage resources and competitive advantages",
                    "Access new technologies, customers, and markets"
                ],
            },
            capital: {
                title: "Capital Markets Advisory (Debt/Equity)",
                description: "Assisting in effective capital raising through debt and equity channels to finance growth projects and scale operations.",
                details: "We assist companies in raising capital through public and private markets. Our expertise spans across equity offerings (IPOs, follow-ons) and debt financing (bonds, private credit). We work closely with our clients to determine the optimal capital structure, prepare for the transaction, and connect with the right investors to fuel growth and strategic initiatives.",
                scopeOfWorkTitle: "Scope of Work",
                scopeOfWork: [
                    "Capital structure advisory",
                    "Preparation of offering materials (prospectus, information memorandum)",
                    "Investor roadshow management and marketing",
                    "Transaction pricing and allocation strategy",
                    "Regulatory compliance and documentation"
                ],
                processTitle: "The Capital Raising Journey",
                processSteps: [
                    { stage: "Stage 1", title: "Analysis & Planning", description: "Assessing capital needs, market conditions, and optimal structuring." },
                    { stage: "Stage 2", title: "Preparation", description: "Developing offering materials, financial models, and conducting due diligence." },
                    { stage: "Stage 3", title: "Marketing", description: "Executing investor roadshows and building a strong book of demand." },
                    { stage: "Stage 4", title: "Pricing & Allocation", description: "Determining the final terms and allocating to suitable investors." },
                    { stage: "Stage 5", title: "Closing & Aftermarket Support", description: "Finalizing documentation and providing post-transaction support." }
                ],
                instrumentsTitle: "Capital Instruments",
                instruments: [
                    { type: "Equity", description: "Issuing shares to investors (e.g., IPOs, Private Placements) in exchange for ownership, providing long-term capital without repayment obligations." },
                    { type: "Debt", description: "Borrowing funds through instruments like bonds or loans, which must be repaid with interest over time, without diluting ownership." }
                ]
            }
        }
    },
    vi: {
        moduleTitle: "Investment Banking - Starconsulting",
        navResearchHub: "Trung tâm Research",
        navMA: "Tư vấn M&A",
        navCapital: "Tư vấn Thị trường Vốn",
        navAbout: "Về Chúng Tôi",
        navContact: "Liên hệ",
        navMarkets: "Thị trường",
        marketSubNav: {
            fx: "Ngoại hối (FX)",
            rates: "Lãi suất",
            fixedIncome: "Thu nhập cố định",
            commodities: "Hàng hóa",
            equities: "Cổ phiếu",
            etfs: "ETFs",
            digitalAssets: "Tài sản số",
        },
        specializedAdvisoryTitle: "Nghiệp vụ Tư vấn Chuyên biệt",
        specializedAdvisorySubtitle: "Ứng dụng các phân tích chuyên sâu của chúng tôi vào các giao dịch phức tạp nhất, tạo ra giá trị vượt trội.",
        partnersTitle: "Đối tác & Khách hàng Tiêu biểu",
        partnersSubtitle: "Chúng tôi tự hào được đồng hành và tạo ra giá trị cho các tổ chức hàng đầu trong và ngoài nước.",
        accessCenter: "Truy cập Trung tâm",
        researchHubTitle: "Trung tâm Research",
        researchHubSubtitle: "Cổng vào thế giới phân tích, dữ liệu và các sản phẩm trí tuệ độc quyền của Starconsulting.",
        marketSnapshotTitle: "Tổng quan Thị trường",
        featuredThisMonth: "Tiêu điểm tháng này",
        warRoomTeaserText: "Chúng tôi đang phân tích các kịch bản và những tác động tiềm tàng. Theo dõi quá trình tư duy của chúng tôi tại Phòng họp Chiến lược.",
        warRoomTeaserLink: "Theo dõi Phân tích",
        latestNews: "Bản tin mới nhất",
        readMoreAndArchive: "Đọc thêm & Xem toàn bộ Lưu trữ",
        thematicReport: "Báo cáo Chuyên đề",
        toolboxTitle: "Bảng điều khiển Nghiên cứu",
        aboutTitle: "Tầm nhìn, Phương pháp luận & Con người",
        aboutSubtitle: "Thành công của chúng tôi được xây dựng trên nền tảng kinh nghiệm, sự chính trực và một tầm nhìn rõ ràng cho tương lai của ngành nghiên cứu tài chính.",
        methodologyTitle: "Phương pháp luận Nền tảng của Chúng tôi",
        assetCoverageTitle: "Phạm vi Tài sản",
        geographicCoverageTitle: "Phạm vi Địa lý",
        expertsTitle: "Gặp gỡ Chuyên gia Chiến lược",
        contactTitle: "Kết nối với Chúng tôi",
        contactSubtitle: "Hãy cùng thảo luận về cách những phân tích chiến lược của chúng tôi có thể tạo ra giá trị cho tổ chức của bạn.",
        comingSoon: "Sắp ra mắt",
        searchPlaceholder: "Tìm kiếm phân tích, tin tức...",
        searchResultsTitle: "Kết quả Tìm kiếm",
        resultsFor: "Kết quả cho",
        noResultsFound: "Không tìm thấy kết quả",
        researchNav: [
            {
                category: "THỊ TRƯỜNG",
                items: [
                    { id: 'dashboard', title: 'Bảng điều khiển Vĩ mô' },
                    { id: 'industryAnalysis', title: 'Phân tích Ngành' },
                    { id: 'companyAnalysis', title: 'Phân tích Doanh nghiệp' },
                ]
            },
            {
                category: "SẢN PHẨM TRÍ TUỆ",
                items: [
                    { id: 'warRoom', title: 'Phòng họp Chiến lược' },
                    { id: 'thematicReports', title: 'Báo cáo Chuyên đề' },
                    { id: 'dialogues', title: 'Đối thoại Chuyên gia' },
                ]
            },
            {
                category: "LƯU TRỮ",
                items: [
                     { id: 'researchArchive', title: 'Toàn bộ Lưu trữ' },
                ]
            }
        ],
         services: {
            ma: {
                title: "Tư vấn Mua bán & Sáp nhập (M&A)",
                description: "Đồng hành cùng doanh nghiệp trong các thương vụ chiến lược, từ việc tìm kiếm đối tác, thẩm định, định giá đến đàm phán và hoàn tất giao dịch để tối đa hóa giá trị.",
                details: "Dịch vụ tư vấn M&A của chúng tôi cung cấp hỗ trợ toàn diện trong suốt vòng đời giao dịch. Chúng tôi tận dụng kiến thức ngành sâu rộng và mạng lưới quan hệ sâu rộng để xác định các cơ hội chiến lược, thực hiện thẩm định chi tiết và cấu trúc các thương vụ nhằm tối đa hóa giá trị cho khách hàng. Dù bạn đang mua, bán hay sáp nhập, đội ngũ của chúng tôi cam kết đạt được các mục tiêu chiến lược của bạn một cách chính xác và bảo mật.",
                scopeOfWorkTitle: "Hỗ trợ Toàn diện",
                scopeOfWork: [
                    "Xác định và sàng lọc mục tiêu chiến lược",
                    "Phân tích định giá và lập mô hình tài chính",
                    "Thẩm định toàn diện (tài chính, thương mại, vận hành)",
                    "Hỗ trợ cấu trúc và đàm phán thương vụ",
                    "Lập kế hoạch và thực thi hội nhập sau sáp nhập"
                ],
                processTitle: "Quy trình Tư vấn M&A của chúng tôi",
                processSteps: [
                    { stage: "Giai đoạn 1", title: "Chiến lược & Chuẩn bị", description: "Xác định mục tiêu, kỳ vọng về định giá và chuẩn bị các tài liệu giới thiệu." },
                    { stage: "Giai đoạn 2", title: "Tiếp cận Thị trường", description: "Sàng lọc và tiếp cận một cách bảo mật danh sách các đối tác chiến lược tiềm năng." },
                    { stage: "Giai đoạn 3", title: "Thẩm định & Đàm phán", description: "Quản lý phòng dữ liệu, điều phối các buổi làm việc chuyên sâu và dẫn dắt đàm phán các điều khoản chính." },
                    { stage: "Giai đoạn 4", title: "Hoàn tất & Hội nhập", description: "Hoàn thiện các thủ tục pháp lý và lập kế hoạch để đảm bảo quá trình hội nhập sau giao dịch diễn ra thuận lợi." }
                ],
                benefitsTitle: "Lợi ích Chiến lược khi thực hiện M&A",
                benefits: [
                    "Mở rộng thị phần, gia tăng giá trị doanh nghiệp",
                    "Tận dụng nguồn lực và lợi thế cạnh tranh",
                    "Tiếp cận công nghệ, khách hàng và thị trường mới"
                ],
            },
            capital: {
                title: "Tư vấn Thị trường Vốn (Debt/Equity)",
                description: "Hỗ trợ huy động vốn hiệu quả qua các kênh vay (Debt) và vốn cổ phần (Equity) để tài trợ cho các dự án tăng trưởng và mở rộng quy mô.",
                details: "Chúng tôi hỗ trợ các công ty huy động vốn thông qua thị trường vốn công và tư. Chuyên môn của chúng tôi bao gồm các đợt chào bán cổ phần (IPO, chào bán thêm) và tài trợ nợ (trái phiếu, tín dụng tư nhân). Chúng tôi hợp tác chặt chẽ với khách hàng để xác định cấu trúc vốn tối ưu, chuẩn bị cho giao dịch và kết nối với các nhà đầu tư phù hợp để thúc đẩy tăng trưởng và các sáng kiến chiến lược.",
                scopeOfWorkTitle: "Phạm vi Công việc",
                scopeOfWork: [
                    "Tư vấn cấu trúc vốn",
                    "Chuẩn bị tài liệu chào bán (bản cáo bạch, bản ghi nhớ thông tin)",
                    "Quản lý roadshow và tiếp thị nhà đầu tư",
                    "Chiến lược định giá và phân bổ giao dịch",
                    "Tuân thủ quy định và hồ sơ pháp lý"
                ],
                processTitle: "Hành trình Huy động Vốn",
                processSteps: [
                    { stage: "Giai đoạn 1", title: "Phân tích & Lập kế hoạch", description: "Đánh giá nhu cầu vốn, điều kiện thị trường và cấu trúc tối ưu." },
                    { stage: "Giai đoạn 2", title: "Chuẩn bị", description: "Xây dựng tài liệu chào bán, mô hình tài chính và thực hiện thẩm định." },
                    { stage: "Giai đoạn 3", title: "Tiếp thị", description: "Thực hiện roadshow giới thiệu tới nhà đầu tư và xây dựng sổ lệnh." },
                    { stage: "Giai đoạn 4", title: "Định giá & Phân bổ", description: "Chốt các điều khoản cuối cùng và phân bổ cho các nhà đầu tư phù hợp." },
                    { stage: "Giai đoạn 5", title: "Hoàn tất & Hỗ trợ", description: "Hoàn thiện hồ sơ pháp lý và cung cấp hỗ trợ sau giao dịch." }
                ],
                instrumentsTitle: "Các Công cụ Vốn",
                instruments: [
                    { type: "Vốn Cổ phần (Equity)", description: "Phát hành cổ phiếu cho nhà đầu tư (ví dụ: IPO, Chào bán riêng lẻ) để đổi lấy quyền sở hữu, cung cấp vốn dài hạn mà không có nghĩa vụ trả nợ." },
                    { type: "Vốn Vay (Debt)", description: "Vay vốn thông qua các công cụ như trái phiếu hoặc các khoản vay, phải được hoàn trả kèm lãi suất theo thời gian mà không làm pha loãng quyền sở hữu." }
                ]
            }
        }
    },
    // --- Other languages (fr, zh, ja) need to be updated with the new fields too ---
    fr: {
        moduleTitle: "Banque d'Investissement - Starconsulting",
        navResearchHub: "Centre de Recherche",
        navMA: "Conseil M&A",
        navCapital: "Marchés des Capitaux",
        navAbout: "À propos de nous",
        navContact: "Contact",
        navMarkets: "Marchés",
        marketSubNav: {
            fx: "FX",
            rates: "Taux",
            fixedIncome: "Revenu Fixe",
            commodities: "Matières Premières",
            equities: "Actions",
            etfs: "ETFs",
            digitalAssets: "Actifs Numériques",
        },
        specializedAdvisoryTitle: "Specialized Advisory Services",
        specializedAdvisorySubtitle: "Applying our in-depth analysis to the most complex transactions, creating superior value.",
        partnersTitle: "Nos Partenaires & Clients Privilégiés",
        partnersSubtitle: "Nous sommes fiers de collaborer avec et de créer de la valeur pour des organisations nationales et internationales de premier plan.",
        accessCenter: "Accéder au Centre",
        researchHubTitle: "Centre de Recherche",
        researchHubSubtitle: "La passerelle vers le monde de l'analyse, des données et des produits intellectuels exclusifs de Starconsulting.",
        marketSnapshotTitle: "Aperçu du Marché",
        featuredThisMonth: "À la une ce mois-ci",
        warRoomTeaserText: "Nous analysons les scénarios et les impacts potentiels. Suivez notre processus de réflexion dans la Salle de Stratégie.",
        warRoomTeaserLink: "Suivre l'Analyse",
        latestNews: "Dernières Nouvelles",
        readMoreAndArchive: "Lire la suite & Voir les Archives",
        thematicReport: "Rapport Thématique",
        toolboxTitle: "Console de Recherche",
        aboutTitle: "Vision, Méthodologie & Personnes",
        aboutSubtitle: "Notre succès repose sur l'expérience, l'intégrité et une vision claire pour l'avenir de la recherche financière.",
        methodologyTitle: "Notre Méthodologie Fondamentale",
        assetCoverageTitle: "Asset Coverage",
        geographicCoverageTitle: "Geographic Coverage",
        expertsTitle: "Rencontrez nos Experts Stratégiques",
        contactTitle: "Connectez-vous avec nous",
        contactSubtitle: "Discutons de la manière dont nos connaissances stratégiques peuvent créer de la valeur pour votre organisation.",
        comingSoon: "Bientôt disponible",
        searchPlaceholder: "Rechercher des analyses, des actualités...",
        searchResultsTitle: "Résultats de recherche",
        resultsFor: "Résultats pour",
        noResultsFound: "Aucun résultat trouvé",
        researchNav: [
            {
                category: "MARCHÉS",
                items: [
                    { id: 'dashboard', title: 'Tableau de bord Macro' },
                    { id: 'industryAnalysis', title: 'Analyse Sectorielle' },
                    { id: 'companyAnalysis', title: 'Analyse d\'Entreprise' },
                ]
            },
            {
                category: "PRODUITS INTELLECTUELS",
                items: [
                    { id: 'warRoom', title: 'Salle de Stratégie' },
                    { id: 'thematicReports', title: 'Rapports Thématiques' },
                    { id: 'dialogues', title: 'Dialogues d\'Experts' },
                ]
            },
            {
                category: "ARCHIVES",
                items: [
                     { id: 'researchArchive', title: 'Archives Complètes' },
                ]
            }
        ],
        services: {
            ma: {
                title: "Conseil en Fusions & Acquisitions (M&A)",
                description: "Accompagner les entreprises dans les transactions stratégiques, de la recherche de partenaires, la due diligence, l'évaluation à la négociation et la clôture pour maximiser la valeur.",
                details: "Our M&A advisory service provides comprehensive support throughout the entire transaction lifecycle. We leverage our deep industry knowledge and extensive network to identify strategic opportunities, conduct thorough due diligence, and structure deals that maximize value for our clients. Whether you are buying, selling, or merging, our team is committed to achieving your strategic objectives with precision and confidentiality.",
                scopeOfWorkTitle: "Comprehensive Support",
                scopeOfWork: [
                    "Strategic target identification and screening",
                    "Valuation analysis and financial modeling",
                    "Comprehensive due diligence (financial, commercial, operational)",
                    "Deal structuring and negotiation support",
                    "Post-merger integration planning and execution"
                ],
                 processTitle: "Our M&A Advisory Process",
                processSteps: [
                    { stage: "Stage 1", title: "Strategy & Preparation", description: "Defining objectives, valuation expectations, and preparing marketing materials." },
                    { stage: "Stage 2", title: "Market Approach", description: "Identifying and confidentially approaching a curated list of potential strategic partners." },
                    { stage: "Stage 3", title: "Due Diligence & Negotiation", description: "Managing data rooms, facilitating expert sessions, and leading negotiations on key terms." },
                    { stage: "Stage 4", title: "Closing & Integration", description: "Finalizing legal documentation and planning for a smooth post-transaction integration." }
                ],
                benefitsTitle: "Strategic Benefits of M&A",
                benefits: [
                    "Expand market share, increase business value",
                    "Leverage resources and competitive advantages",
                    "Access new technologies, customers, and markets"
                ],
            },
            capital: {
                title: "Conseil en Marchés de Capitaux (Dette/Fonds propres)",
                description: "Aide à la levée de capitaux efficace via les canaux de dette et de fonds propres pour financer les projets de croissance et l'expansion des opérations.",
                details: "We assist companies in raising capital through public and private markets. Our expertise spans across equity offerings (IPOs, follow-ons) and debt financing (bonds, private credit). We work closely with our clients to determine the optimal capital structure, prepare for the transaction, and connect with the right investors to fuel growth and strategic initiatives.",
                scopeOfWorkTitle: "Scope of Work",
                scopeOfWork: [
                    "Capital structure advisory",
                    "Preparation of offering materials (prospectus, information memorandum)",
                    "Investor roadshow management and marketing",
                    "Transaction pricing and allocation strategy",
                    "Regulatory compliance and documentation"
                ],
                processTitle: "The Capital Raising Journey",
                processSteps: [
                    { stage: "Stage 1", title: "Analysis & Planning", description: "Assessing capital needs, market conditions, and optimal structuring." },
                    { stage: "Stage 2", title: "Preparation", description: "Developing offering materials, financial models, and conducting due diligence." },
                    { stage: "Stage 3", title: "Marketing", description: "Executing investor roadshows and building a strong book of demand." },
                    { stage: "Stage 4", title: "Pricing & Allocation", description: "Determining the final terms and allocating to suitable investors." },
                    { stage: "Stage 5", title: "Closing & Aftermarket Support", description: "Finalizing documentation and providing post-transaction support." }
                ],
                instrumentsTitle: "Capital Instruments",
                instruments: [
                    { type: "Equity", description: "Issuing shares to investors (e.g., IPOs, Private Placements) in exchange for ownership, providing long-term capital without repayment obligations." },
                    { type: "Debt", description: "Borrowing funds through instruments like bonds or loans, which must be repaid with interest over time, without diluting ownership." }
                ]
            }
        }
    },
    zh: {
        moduleTitle: "投资银行 - Starconsulting",
        navResearchHub: "研究中心",
        navMA: "并购咨询",
        navCapital: "资本市场",
        navAbout: "关于我们",
        navContact: "联系我们",
        navMarkets: "市场",
        marketSubNav: {
            fx: "外汇",
            rates: "利率",
            fixedIncome: "固定收益",
            commodities: "商品",
            equities: "股票",
            etfs: "ETFs",
            digitalAssets: "数字资产",
        },
        specializedAdvisoryTitle: "Specialized Advisory Services",
        specializedAdvisorySubtitle: "Applying our in-depth analysis to the most complex transactions, creating superior value.",
        partnersTitle: "我们的合作伙伴与重要客户",
        partnersSubtitle: "我们很自豪能与国内外领先组织合作并为其创造价值。",
        accessCenter: "访问中心",
        researchHubTitle: "研究中心",
        researchHubSubtitle: "通往Starconsulting分析、数据和专有知识产品世界的大门。",
        marketSnapshotTitle: "市场快照",
        featuredThisMonth: "本月焦点",
        warRoomTeaserText: "我们正在分析各种情景和潜在影响。在战略会议室关注我们的思维过程。",
        warRoomTeaserLink: "关注分析",
        latestNews: "最新消息",
        readMoreAndArchive: "阅读更多并查看全部存档",
        thematicReport: "专题报告",
        toolboxTitle: "研究控制台",
        aboutTitle: "愿景、方法论与团队",
        aboutSubtitle: "我们的成功建立在经验、诚信和对金融研究未来的清晰愿景之上。",
        methodologyTitle: "我们的基础方法论",
        assetCoverageTitle: "Asset Coverage",
        geographicCoverageTitle: "Geographic Coverage",
        expertsTitle: "认识我们的战略专家",
        contactTitle: "联系我们",
        contactSubtitle: "让我们讨论我们的战略见解如何为您的组织创造价值。",
        comingSoon: "即将推出",
        searchPlaceholder: "搜索分析、新闻...",
        searchResultsTitle: "搜索结果",
        resultsFor: "结果对于",
        noResultsFound: "未找到结果",
        researchNav: [
            {
                category: "市场",
                items: [
                    { id: 'dashboard', title: '宏观仪表板' },
                    { id: 'industryAnalysis', title: '行业分析' },
                    { id: 'companyAnalysis', title: '公司分析' },
                ]
            },
            {
                category: "知识产品",
                items: [
                    { id: 'warRoom', title: '战略会议室' },
                    { id: 'thematicReports', title: '专题报告' },
                    { id: 'dialogues', title: '专家对话' },
                ]
            },
            {
                category: "档案",
                items: [
                     { id: 'researchArchive', title: '全部存档' },
                ]
            }
        ],
        services: {
            ma: {
                title: "并购咨询 (M&A)",
                description: "在战略交易中为企业保驾护航，从寻找合作伙伴、尽职调查、估值到谈判和交割，实现价值最大化。",
                details: "Our M&A advisory service provides comprehensive support throughout the entire transaction lifecycle. We leverage our deep industry knowledge and extensive network to identify strategic opportunities, conduct thorough due diligence, and structure deals that maximize value for our clients. Whether you are buying, selling, or merging, our team is committed to achieving your strategic objectives with precision and confidentiality.",
                scopeOfWorkTitle: "Comprehensive Support",
                scopeOfWork: [
                    "Strategic target identification and screening",
                    "Valuation analysis and financial modeling",
                    "Comprehensive due diligence (financial, commercial, operational)",
                    "Deal structuring and negotiation support",
                    "Post-merger integration planning and execution"
                ],
                 processTitle: "Our M&A Advisory Process",
                processSteps: [
                    { stage: "Stage 1", title: "Strategy & Preparation", description: "Defining objectives, valuation expectations, and preparing marketing materials." },
                    { stage: "Stage 2", title: "Market Approach", description: "Identifying and confidentially approaching a curated list of potential strategic partners." },
                    { stage: "Stage 3", title: "Due Diligence & Negotiation", description: "Managing data rooms, facilitating expert sessions, and leading negotiations on key terms." },
                    { stage: "Stage 4", title: "Closing & Integration", description: "Finalizing legal documentation and planning for a smooth post-transaction integration." }
                ],
                benefitsTitle: "Strategic Benefits of M&A",
                benefits: [
                    "Expand market share, increase business value",
                    "Leverage resources and competitive advantages",
                    "Access new technologies, customers, and markets"
                ],
            },
            capital: {
                title: "资本市场咨询 (债务/股权)",
                description: "通过债务和股权渠道协助有效融资，为增长项目和业务扩张提供资金。",
                details: "We assist companies in raising capital through public and private markets. Our expertise spans across equity offerings (IPOs, follow-ons) and debt financing (bonds, private credit). We work closely with our clients to determine the optimal capital structure, prepare for the transaction, and connect with the right investors to fuel growth and strategic initiatives.",
                 scopeOfWorkTitle: "Scope of Work",
                scopeOfWork: [
                    "Capital structure advisory",
                    "Preparation of offering materials (prospectus, information memorandum)",
                    "Investor roadshow management and marketing",
                    "Transaction pricing and allocation strategy",
                    "Regulatory compliance and documentation"
                ],
                processTitle: "The Capital Raising Journey",
                processSteps: [
                    { stage: "Stage 1", title: "Analysis & Planning", description: "Assessing capital needs, market conditions, and optimal structuring." },
                    { stage: "Stage 2", title: "Preparation", description: "Developing offering materials, financial models, and conducting due diligence." },
                    { stage: "Stage 3", title: "Marketing", description: "Executing investor roadshows and building a strong book of demand." },
                    { stage: "Stage 4", title: "Pricing & Allocation", description: "Determining the final terms and allocating to suitable investors." },
                    { stage: "Stage 5", title: "Closing & Aftermarket Support", description: "Finalizing documentation and providing post-transaction support." }
                ],
                instrumentsTitle: "Capital Instruments",
                instruments: [
                    { type: "Equity", description: "Issuing shares to investors (e.g., IPOs, Private Placements) in exchange for ownership, providing long-term capital without repayment obligations." },
                    { type: "Debt", description: "Borrowing funds through instruments like bonds or loans, which must be repaid with interest over time, without diluting ownership." }
                ]
            }
        }
    },
    ja: {
        moduleTitle: "インベストメント・バンキング - Starconsulting",
        navResearchHub: "リサーチセンター",
        navMA: "M&Aアドバイザリー",
        navCapital: "資本市場",
        navAbout: "当社について",
        navContact: "お問い合わせ",
        navMarkets: "市場",
        marketSubNav: {
            fx: "為替",
            rates: "金利",
            fixedIncome: "債券",
            commodities: "商品",
            equities: "株式",
            etfs: "ETF",
            digitalAssets: "デジタル資産",
        },
        specializedAdvisoryTitle: "Specialized Advisory Services",
        specializedAdvisorySubtitle: "Applying our in-depth analysis to the most complex transactions, creating superior value.",
        partnersTitle: "パートナーと主要顧客",
        partnersSubtitle: "国内外の主要な組織と提携し、価値を創造できることを誇りに思います。",
        accessCenter: "センターにアクセス",
        researchHubTitle: "リサーチセンター",
        researchHubSubtitle: "Starconsultingの分析、データ、独自の知的製品の世界へのゲートウェイ。",
        marketSnapshotTitle: "マーケットスナップショット",
        featuredThisMonth: "今月の特集",
        warRoomTeaserText: "シナリオと潜在的な影響を分析しています。ウォー・ルームで私たちの思考プロセスをフォローしてください。",
        warRoomTeaserLink: "分析をフォロー",
        latestNews: "最新ニュース",
        readMoreAndArchive: "続きを読む＆全アーカイブを見る",
        thematicReport: "テーマ別レポート",
        toolboxTitle: "リサーチコンソール",
        aboutTitle: "ビジョン、方法論、人材",
        aboutSubtitle: "私たちの成功は、経験、誠実さ、そして金融研究の未来に対する明確なビジョンに基づいて築かれています。",
        methodologyTitle: "私たちの基本的方法論",
        assetCoverageTitle: "Asset Coverage",
        geographicCoverageTitle: "Geographic Coverage",
        expertsTitle: "戦略エキスパート紹介",
        contactTitle: "お問い合わせ",
        contactSubtitle: "当社の戦略的洞察が貴組織にどのように価値を創造できるかについて話し合いましょう。",
        comingSoon: "近日公開",
        searchPlaceholder: "分析、ニュースを検索...",
        searchResultsTitle: "検索結果",
        resultsFor: "の検索結果",
        noResultsFound: "結果が見つかりません",
        researchNav: [
            {
                category: "市場",
                items: [
                    { id: 'dashboard', title: 'マクロダッシュボード' },
                    { id: 'industryAnalysis', title: '業界分析' },
                    { id: 'companyAnalysis', title: '企業分析' },
                ]
            },
            {
                category: "知的製品",
                items: [
                    { id: 'warRoom', title: '戦略室' },
                    { id: 'thematicReports', title: 'テーマ別レポート' },
                    { id: 'dialogues', title: '専門家対談' },
                ]
            },
            {
                category: "アーカイブ",
                items: [
                     { id: 'researchArchive', title: '全アーカイブ' },
                ]
            }
        ],
        services: {
            ma: {
                title: "M&Aアドバイザリー",
                description: "パートナーの選定、デューデリジェンス、評価から交渉、クロージングまで、戦略的取引を通じて企業を導き、価値を最大化します。",
                details: "Our M&A advisory service provides comprehensive support throughout the entire transaction lifecycle. We leverage our deep industry knowledge and extensive network to identify strategic opportunities, conduct thorough due diligence, and structure deals that maximize value for our clients. Whether you are buying, selling, or merging, our team is committed to achieving your strategic objectives with precision and confidentiality.",
                 scopeOfWorkTitle: "Comprehensive Support",
                scopeOfWork: [
                    "Strategic target identification and screening",
                    "Valuation analysis and financial modeling",
                    "Comprehensive due diligence (financial, commercial, operational)",
                    "Deal structuring and negotiation support",
                    "Post-merger integration planning and execution"
                ],
                 processTitle: "Our M&A Advisory Process",
                processSteps: [
                    { stage: "Stage 1", title: "Strategy & Preparation", description: "Defining objectives, valuation expectations, and preparing marketing materials." },
                    { stage: "Stage 2", title: "Market Approach", description: "Identifying and confidentially approaching a curated list of potential strategic partners." },
                    { stage: "Stage 3", title: "Due Diligence & Negotiation", description: "Managing data rooms, facilitating expert sessions, and leading negotiations on key terms." },
                    { stage: "Stage 4", title: "Closing & Integration", description: "Finalizing legal documentation and planning for a smooth post-transaction integration." }
                ],
                benefitsTitle: "Strategic Benefits of M&A",
                benefits: [
                    "Expand market share, increase business value",
                    "Leverage resources and competitive advantages",
                    "Access new technologies, customers, and markets"
                ],
            },
            capital: {
                title: "資本市場アドバイザリー（負債/株式）",
                description: "負債および株式チャネルを通じた効果的な資金調達を支援し、成長プロジェクトや事業拡大の資金を調達します。",
                details: "We assist companies in raising capital through public and private markets. Our expertise spans across equity offerings (IPOs, follow-ons) and debt financing (bonds, private credit). We work closely with our clients to determine the optimal capital structure, prepare for the transaction, and connect with the right investors to fuel growth and strategic initiatives.",
                 scopeOfWorkTitle: "Scope of Work",
                scopeOfWork: [
                    "Capital structure advisory",
                    "Preparation of offering materials (prospectus, information memorandum)",
                    "Investor roadshow management and marketing",
                    "Transaction pricing and allocation strategy",
                    "Regulatory compliance and documentation"
                ],
                processTitle: "The Capital Raising Journey",
                processSteps: [
                    { stage: "Stage 1", title: "Analysis & Planning", description: "Assessing capital needs, market conditions, and optimal structuring." },
                    { stage: "Stage 2", title: "Preparation", description: "Developing offering materials, financial models, and conducting due diligence." },
                    { stage: "Stage 3", title: "Marketing", description: "Executing investor roadshows and building a strong book of demand." },
                    { stage: "Stage 4", title: "Pricing & Allocation", description: "Determining the final terms and allocating to suitable investors." },
                    { stage: "Stage 5", title: "Closing & Aftermarket Support", description: "Finalizing documentation and providing post-transaction support." }
                ],
                instrumentsTitle: "Capital Instruments",
                instruments: [
                    { type: "Equity", description: "Issuing shares to investors (e.g., IPOs, Private Placements) in exchange for ownership, providing long-term capital without repayment obligations." },
                    { type: "Debt", description: "Borrowing funds through instruments like bonds or loans, which must be repaid with interest over time, without diluting ownership." }
                ]
            }
        }
    }
};


// --- DATABASE DỮ LIỆU DỊCH VỤ ---
const servicesData = {
    'ma': {
        icon: IconMA,
        saleKitUrl: "/downloads/starconsulting-ma-salekit.pdf"
    },
    'capital': {
        icon: IconCapital,
        saleKitUrl: "/downloads/starconsulting-capital-salekit.pdf"
    },
};

// --- MOCK NEWS DATABASE ---
const allMockNewsData = [
    { id: 1, category: "Kinh tế vĩ mô", date: "29 tháng 8, 2025", title: "Phân tích tác động của chính sách tiền tệ mới đến thị trường bất động sản", author: "TS. Nguyễn An", excerpt: "Ngân hàng Nhà nước vừa công bố các điều chỉnh mới trong chính sách tiền tệ, dự kiến sẽ có những ảnh hưởng đa chiều...", imageUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop", content: "Nội dung chi tiết bài viết 1... Ngân hàng Nhà nước vừa công bố các điều chỉnh mới trong chính sách tiền tệ, dự kiến sẽ có những ảnh hưởng đa chiều đến thị trường bất động sản. Các chuyên gia nhận định rằng việc thắt chặt tín dụng có thể làm giảm nguồn cung vốn cho các dự án mới, từ đó làm chậm lại tốc độ tăng trưởng của thị trường trong ngắn hạn. Tuy nhiên, về dài hạn, chính sách này được kỳ vọng sẽ giúp thị trường phát triển bền vững hơn, giảm thiểu rủi ro bong bóng và bảo vệ người mua nhà. Starconsulting sẽ tiếp tục theo dõi và cung cấp các phân tích chuyên sâu về vấn đề này trong các báo cáo sắp tới." },
    { id: 2, category: "Thị trường Quốc tế", date: "28 tháng 8, 2025", title: "Căng thẳng thương mại Mỹ-Trung: Cơ hội và thách thức cho chuỗi cung ứng Việt Nam", author: "Chuyên gia Lê Minh", excerpt: "Những diễn biến mới trong quan hệ thương mại Mỹ-Trung đang tạo ra một làn sóng dịch chuyển chuỗi cung ứng...", imageUrl: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=2070&auto=format&fit=crop", content: "Nội dung chi tiết bài viết 2... Những diễn biến mới trong quan hệ thương mại Mỹ-Trung đang tạo ra một làn sóng dịch chuyển chuỗi cung ứng toàn cầu, và Việt Nam đang đứng trước cả cơ hội và thách thức lớn. Về cơ hội, Việt Nam có thể trở thành một trung tâm sản xuất mới, thu hút dòng vốn FDI từ các tập đoàn đa quốc gia muốn đa dạng hóa rủi ro. Tuy nhiên, thách thức cũng không nhỏ, bao gồm áp lực về hạ tầng, nguồn nhân lực chất lượng cao và nguy cơ bị cuốn vào các biện pháp phòng vệ thương mại. Doanh nghiệp Việt Nam cần có chiến lược rõ ràng để tận dụng cơ hội và đối phó với thách thức này." },
    { id: 3, category: "Tài chính Doanh nghiệp", date: "27 tháng 8, 2025", title: "Xu hướng phát hành trái phiếu xanh tại các doanh nghiệp năng lượng tái tạo", author: "ThS. Trần Bích Hạnh", excerpt: "Trái phiếu xanh đang trở thành một kênh huy động vốn hấp dẫn cho các dự án phát triển bền vững...", imageUrl: "https://images.unsplash.com/photo-1622969637422-55e1a3c02613?q=80&w=1964&auto=format&fit=crop", content: "Nội dung chi tiết bài viết 3... Trái phiếu xanh đang trở thành một kênh huy động vốn hấp dẫn cho các dự án phát triển bền vững, đặc biệt trong lĩnh vực năng lượng tái tạo. Với cam kết mạnh mẽ của chính phủ về Net-zero, nhu cầu vốn cho các dự án điện gió, điện mặt trời là rất lớn. Việc phát hành thành công trái phiếu xanh không chỉ giúp doanh nghiệp huy động được nguồn vốn dài hạn với chi phí hợp lý mà còn nâng cao uy tín và hình ảnh thương hiệu trên trường quốc tế. Báo cáo của chúng tôi sẽ phân tích chi tiết về quy trình, điều kiện và lợi ích của việc phát hành loại hình trái phiếu này." },
    { id: 4, category: "Kinh tế vĩ mô", date: "25 tháng 8, 2025", title: "Dự báo lạm phát cuối năm và các kịch bản cho doanh nghiệp sản xuất", author: "TS. Nguyễn An", excerpt: "Với các biến số từ giá năng lượng và chuỗi cung ứng toàn cầu, lạm phát cuối năm 2025 được dự báo sẽ có nhiều kịch bản...", imageUrl: "https://images.unsplash.com/photo-1559526324-c1f275fbfa32?q=80&w=2070&auto=format&fit=crop", content: "Nội dung chi tiết bài viết 4... Với các biến số từ giá năng lượng và chuỗi cung ứng toàn cầu, lạm phát cuối năm 2025 được dự báo sẽ có nhiều kịch bản. Trong kịch bản cơ sở, chúng tôi dự báo lạm phát sẽ được kiểm soát dưới mức 4%. Tuy nhiên, doanh nghiệp sản xuất cần chuẩn bị cho cả kịch bản xấu hơn, khi giá nguyên vật liệu đầu vào tiếp tục tăng. Các biện pháp quản trị rủi ro như ký kết hợp đồng dài hạn với nhà cung cấp, tối ưu hóa quy trình sản xuất và quản lý hàng tồn kho hiệu quả sẽ là chì khóa để vượt qua giai đoạn khó khăn này." },
    { id: 5, category: "Thị trường Quốc tế", date: "22 tháng 8, 2025", title: "Tác động của việc FED duy trì lãi suất đến tỷ giá USD/VND", author: "Chuyên gia Lê Minh", excerpt: "Quyết định mới nhất của Cục Dự trữ Liên bang Mỹ (FED) về việc giữ nguyên lãi suất sẽ có những tác động nhất định...", imageUrl: "https://images.unsplash.com/photo-1621932789315-ca422c70a1fe?q=80&w=2070&auto=format&fit=crop", content: "Nội dung chi tiết bài viết 5... Quyết định mới nhất của Cục Dự trữ Liên bang Mỹ (FED) về việc giữ nguyên lãi suất sẽ có những tác động nhất định đến tỷ giá USD/VND. Mặc dù áp lực lên tỷ giá có thể tạm thời giảm bớt, nhưng xu hướng tăng của đồng USD trên thị trường quốc tế vẫn còn. Điều này đòi hỏi Ngân hàng Nhà nước Việt Nam phải có những chính sách điều hành linh hoạt để ổn định thị trường ngoại hối. Các doanh nghiệp xuất nhập khẩu cần theo dõi chặt chẽ diễn biến tỷ giá và sử dụng các công cụ phái sinh để phòng ngừa rủi ro." },
];

// --- MOCK EXPERTS DATABASE ---
const expertsData = [
    {
        id: 1,
        name: "Chuyên gia A",
        title: "[Chức danh]",
        imageUrl: "https://placehold.co/400x500/e2e8f0/4a5568?text=Profile",
        bio: "[Mô tả kinh nghiệm và chuyên môn của chuyên gia. Nêu bật các thành tựu, các thương vụ nổi bật đã tham gia, và vai trò tại Starconsulting.]",
        philosophy: "[Trích dẫn hoặc triết lý làm việc thể hiện quan điểm và phương pháp tiếp cận của chuyên gia.]",
        linkedinUrl: "#",
        team: "leadership"
    },
    {
        id: 2,
        name: "Chuyên gia B",
        title: "[Chức danh]",
        imageUrl: "https://placehold.co/400x500/e2e8f0/4a5568?text=Profile",
        bio: "[Mô tả kinh nghiệm và chuyên môn của chuyên gia. Nêu bật các thành tựu, các thương vụ nổi bật đã tham gia, và vai trò tại Starconsulting.]",
        philosophy: "[Trích dẫn hoặc triết lý làm việc thể hiện quan điểm và phương pháp tiếp cận của chuyên gia.]",
        linkedinUrl: "#",
        team: "leadership"
    },
    {
        id: 3,
        name: "Chuyên gia C",
        title: "[Chức danh]",
        imageUrl: "https://placehold.co/400x500/e2e8f0/4a5568?text=Profile",
        bio: "[Mô tả kinh nghiệm và chuyên môn của chuyên gia. Nêu bật các thành tựu, các thương vụ nổi bật đã tham gia, và vai trò tại Starconsulting.]",
        philosophy: "[Trích dẫn hoặc triết lý làm việc thể hiện quan điểm và phương pháp tiếp cận của chuyên gia.]",
        linkedinUrl: "#",
        team: "analysis"
    },
    {
        id: 4,
        name: "Chuyên gia D",
        title: "[Chức danh]",
        imageUrl: "https://placehold.co/400x500/e2e8f0/4a5568?text=Profile",
        bio: "[Mô tả kinh nghiệm và chuyên môn của chuyên gia. Nêu bật các thành tựu, các thương vụ nổi bật đã tham gia, và vai trò tại Starconsulting.]",
        philosophy: "[Trích dẫn hoặc triết lý làm việc thể hiện quan điểm và phương pháp tiếp cận của chuyên gia.]",
        linkedinUrl: "#",
        team: "analysis"
    }
];

// --- MOCK MACRO DATA ---
const mockVietnamMacroData = {
    gdp: { value: "6.5%", previous: "6.2%", trend: "up", comment: "Tăng trưởng được thúc đẩy bởi sự phục hồi mạnh mẽ của ngành sản xuất và xuất khẩu.", history: [{label: "Q1", value: 6.1}, {label: "Q2", value: 6.2}, {label: "Q3", value: 6.4}, {label: "Q4", value: 6.5}] },
    inflation: { value: "3.2%", previous: "3.5%", trend: "down", comment: "Lạm phát đang có dấu hiệu hạ nhiệt, tuy nhiên giá năng lượng vẫn là một yếu tố cần theo dõi.", history: [{label: "T5", value: 3.8}, {label: "T6", value: 3.6}, {label: "T7", value: 3.5}, {label: "T8", value: 3.2}] },
    fdi: { value: "15.8 tỷ USD", previous: "14.9 tỷ USD", trend: "up", comment: "Dòng vốn FDI giải ngân tiếp tục tăng, khẳng định niềm tin của nhà đầu tư nước ngoài.", history: [{label: "Q1", value: 12.5}, {label: "Q2", value: 13.7}, {label: "Q3", value: 14.9}, {label: "Q4", value: 15.8}] },
    trade: { value: "+8.4 tỷ USD", previous: "+7.9 tỷ USD", trend: "up", comment: "Thặng dư thương mại duy trì ở mức cao nhờ sự tăng trưởng của các mặt hàng xuất khẩu chủ lực.", history: [{label: "T5", value: 6.5}, {label: "T6", value: 7.1}, {label: "T7", value: 7.9}, {label: "T8", value: 8.4}] },
    exchangeRate: { value: "25,450", previous: "25,445", trend: "up", comment: "Tỷ giá VND/USD chịu áp lực tăng nhẹ do các yếu tố từ thị trường toàn cầu.", history: [{label: "T5", value: 25410}, {label: "T6", value: 25425}, {label: "T7", value: 25445}, {label: "T8", value: 25450}] },
    policyRate: { value: "4.5%", previous: "4.5%", trend: "stable", comment: "Lãi suất điều hành được giữ ổn định để hỗ trợ tăng trưởng kinh tế.", history: [{label: "Q1", value: 4.5}, {label: "Q2", value: 4.5}, {label: "Q3", value: 4.5}, {label: "Q4", value: 4.5}] }
};

const mockInternationalMacroData = {
    usFedRate: { value: "5.50%", previous: "5.50%", trend: "stable", comment: "FED giữ nguyên lãi suất trong kỳ họp gần nhất, phát tín hiệu thận trọng về lạm phát.", history: [{label: "Mar", value: 5.5}, {label: "May", value: 5.5}, {label: "Jun", value: 5.5}, {label: "Aug", value: 5.5}] },
    euInflation: { value: "2.4%", previous: "2.6%", trend: "down", comment: "Lạm phát khu vực Eurozone tiếp tục xu hướng giảm, ECB có thể sớm xem xét nới lỏng chính sách.", history: [{label: "May", value: 2.9}, {label: "Jun", value: 2.7}, {label: "Jul", value: 2.6}, {label: "Aug", value: 2.4}] },
    chinaGdp: { value: "4.8%", previous: "5.2%", trend: "down", comment: "Tăng trưởng kinh tế Trung Quốc chậm lại do các vấn đề trong lĩnh vực bất động sản.", history: [{label: "Q1", value: 5.3}, {label: "Q2", value: 5.2}, {label: "Q3", value: 5.0}, {label: "Q4", value: 4.8}] }
};

// --- MOCK WAR ROOM DATA ---
const mockWarRoomData = {
    topic: "Liệu lạm phát tại Việt Nam có thực sự được kiểm soát trong 6 tháng tới?",
    period: "Tháng 9, 2025",
    bullCase: {
        title: "Kịch bản Lạc quan (Bull Case)",
        points: [
            "Chính sách tiền tệ thắt chặt của NHNN đã bắt đầu phát huy tác dụng, làm giảm tốc độ tăng trưởng cung tiền.",
            "Giá năng lượng và hàng hóa thế giới có xu hướng hạ nhiệt, giảm áp lực lạm phát nhập khẩu.",
            "Chuỗi cung ứng toàn cầu đang dần ổn định trở lại sau các đợt gián đoạn."
        ]
    },
    bearCase: {
        title: "Kịch bản Thận trọng (Bear Case)",
        points: [
            "Rủi ro tỷ giá vẫn còn hiện hữu, có thể làm tăng chi phí nhập khẩu nguyên vật liệu.",
            "Cầu tiêu dùng nội địa có thể phục hồi nhanh hơn dự kiến, gây áp lực lên mặt bằng giá.",
            "Các yếu tố địa chính trị bất thường trên thế giới có thể đẩy giá năng lượng tăng trở lại."
        ]
    },
    verdict: {
        title: "Nhận định của Starconsulting",
        author: "Ông Lê Minh, Trưởng phòng Phân tích Vĩ mô",
        conclusion: "Chúng tôi cho rằng lạm phát sẽ tiếp tục xu hướng giảm và được kiểm soát dưới mức mục tiêu 4% của chính phủ trong 6 tháng tới. Kịch bản lạc quan đang có trọng số cao hơn. Tuy nhiên, các doanh nghiệp vẫn cần theo dõi chặt chẽ biến động tỷ giá và xây dựng các kịch bản phòng ngừa rủi ro cho chi phí đầu vào."
    }
};

// --- MOCK THEMATIC REPORTS DATABASE ---
const thematicReportsData = [
    {
        id: 1,
        title: "Tương lai Ngành Xe điện Việt Nam: Cơ hội và Thách thức đến 2030",
        date: "Quý 3, 2025",
        excerpt: "Báo cáo chuyên sâu phân tích toàn cảnh thị trường xe điện tại Việt Nam, từ hạ tầng, chính sách, các đối thủ cạnh tranh cho đến hành vi người tiêu dùng. Chúng tôi đưa ra những dự báo và khuyến nghị chiến lược cho các nhà đầu tư và doanh nghiệp muốn tham gia vào lĩnh vực đầy tiềm năng này.",
        coverUrl: "https://images.unsplash.com/photo-1617886322207-6f504e7472c5?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Chuyển đổi số trong Ngành Bán lẻ: Phân tích Chuỗi cung ứng và Logistics",
        date: "Quý 2, 2025",
        excerpt: "Đại dịch đã thúc đẩy quá trình chuyển đổi số trong ngành bán lẻ với tốc độ chưa từng có. Báo cáo này đi sâu vào việc phân tích các mô hình chuỗi cung ứng và logistics mới, đánh giá hiệu quả và các cơ hội đầu tư vào các công ty công nghệ hỗ trợ (logistics tech).",
        coverUrl: "https://images.unsplash.com/photo-1586528116311-06924112d969?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Năng lượng Tái tạo: Lộ trình Huy động Vốn cho các Dự án Điện gió và Điện mặt trời",
        date: "Quý 1, 2025",
        excerpt: "Với cam kết của chính phủ về Net-zero, năng lượng tái tạo đang là lĩnh vực thu hút sự quan tâm đặc biệt. Báo cáo cung cấp một lộ trình chi tiết về các kênh huy động vốn, từ tín dụng xanh, trái phiếu doanh nghiệp cho đến các quỹ đầu tư quốc tế chuyên biệt.",
        coverUrl: "https://images.unsplash.com/photo-1624971822034-b919dea91a18?q=80&w=1974&auto=format&fit=crop"
    }
];

// --- MOCK DIALOGUES DATABASE ---
const dialoguesData = [
    {
        id: 1,
        title: "Đối thoại #1: Tác động của chính sách tiền tệ mới lên thị trường bất động sản",
        speakers: "Ông Lê Minh & Bà Trần Bích Hạnh",
        date: "30 tháng 8, 2025",
        excerpt: "Liệu việc siết chặt tín dụng có làm hạ nhiệt thị trường BĐS một cách bền vững? Các chuyên gia của chúng tôi tranh luận về các kịch bản và cơ hội đầu tư trong bối cảnh mới.",
        youtubeVideoId: "dQw4w9WgXcQ" // Placeholder video ID
    },
    {
        id: 2,
        title: "Đối thoại #2: M&A ngành bán lẻ - Tìm kiếm 'viên ngọc' trong thời kỳ hậu Covid",
        speakers: "Ông Nguyễn An & Bà Trần Bích Hạnh",
        date: "15 tháng 8, 2025",
        excerpt: "Thói quen tiêu dùng đã thay đổi mãi mãi. Vậy đâu là những mô hình kinh doanh bán lẻ tiềm năng cho các thương vụ M&A? Cùng lắng nghe phân tích từ các chuyên gia.",
        youtubeVideoId: "dQw4w9WgXcQ"
    },
    {
        id: 3,
        title: "Đối thoại #3: Trái phiếu xanh - Kênh huy động vốn chiến lược cho tương lai",
        speakers: "Bà Trần Bích Hạnh & Ông Lê Minh",
        date: "1 tháng 8, 2025",
        excerpt: "Khám phá các lợi ích, quy trình và tiềm năng của trái phiếu xanh tại thị trường Việt Nam. Một kênh huy động vốn không chỉ vì lợi nhuận, mà còn vì sự phát triển bền vững.",
        youtubeVideoId: "dQw4w9WgXcQ"
    }
];

// --- MOCK MARKET TICKER DATA ---
const marketTickerData = [
    { name: 'VN-INDEX', value: '1,288.50', change: '-0.32%', trend: 'down' },
    { name: 'S&P 500', value: '5,481.50', change: '-0.32%', trend: 'down' },
    { name: 'NASDAQ', value: '17,700.39', change: '+0.03%', trend: 'up' },
    { name: 'BIST 100', value: '10,347.18', change: '-0.31%', trend: 'down' },
    { name: 'US 10 YR', value: '4.23', change: '+0.70%', trend: 'up' },
    { name: 'CRUDE OIL', value: '81.37', change: '-0.54%', trend: 'down' },
    { name: 'FTSE 100', value: '8,250.90', change: '+0.25%', trend: 'up' },
];


// --- COMPONENTS ---

// --- MODULE NAVIGATION (NEW & IMPROVED) ---
const ModuleNav = ({ onNavigate, currentPage, t }) => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const marketsSubNav = [
        { id: 'marketFx', label: t.marketSubNav.fx },
        { id: 'marketRates', label: t.marketSubNav.rates },
        { id: 'marketFixedIncome', label: t.marketSubNav.fixedIncome },
        { id: 'marketCommodities', label: t.marketSubNav.commodities },
        { id: 'marketEquities', label: t.marketSubNav.equities },
        { id: 'marketEtfs', label: t.marketSubNav.etfs },
        { id: 'marketDigitalAssets', label: t.marketSubNav.digitalAssets },
    ];
    
    const navItems = [
        { id: 'researchHub', label: t.navResearchHub },
        { id: 'markets', label: t.navMarkets, dropdown: true, subItems: marketsSubNav },
        { id: 'serviceDetail', params: { serviceId: 'ma' }, label: t.navMA },
        { id: 'serviceDetail', params: { serviceId: 'capital' }, label: t.navCapital },
        { id: 'about', label: t.navAbout },
        { id: 'contact', label: t.navContact },
    ];
    
    const researchSubPages = ['warRoom', 'dashboard', 'thematicReports', 'dialogues', 'researchArchive', 'newsDetail', 'industryAnalysis', 'companyAnalysis', 'searchResults'];
    const marketSubPages = marketsSubNav.map(item => item.id);

    return (
        <div className="bg-gray-700 text-white">
            <div className="container mx-auto px-6 flex items-center justify-between">
                <div className="flex items-center">
                    {navItems.map(item => {
                        const isServiceActive = currentPage.page === 'serviceDetail' && currentPage.params.serviceId === item.params?.serviceId;
                        const isResearchActive = (currentPage.page === 'researchHub' || researchSubPages.includes(currentPage.page)) && item.id === 'researchHub';
                        const isAboutActive = currentPage.page === 'about' && item.id === 'about';
                        const isContactActive = currentPage.page === 'contact' && item.id === 'contact';
                        const isMarketActive = marketSubPages.includes(currentPage.page) && item.id === 'markets';

                        const isActive = isServiceActive || isResearchActive || isAboutActive || isContactActive || isMarketActive;
                        
                        if (item.dropdown) {
                            return (
                                <div 
                                    key={item.id} 
                                    className="relative"
                                    onMouseEnter={() => setOpenDropdown(item.id)}
                                    onMouseLeave={() => setOpenDropdown(null)}
                                >
                                    <button
                                        className={`py-3 px-4 text-sm font-semibold flex items-center transition-colors duration-200 ${
                                            isActive
                                                ? 'bg-gray-900 text-white'
                                                : 'text-gray-300 hover:bg-gray-600 hover:text-white'
                                        }`}
                                    >
                                        {item.label.toUpperCase()}
                                        <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${openDropdown === item.id ? 'rotate-180' : ''}`} />
                                    </button>
                                    {openDropdown === item.id && (
                                        <div className="absolute top-full left-0 bg-white text-black rounded-b-md shadow-lg py-2 w-56 z-50">
                                            {item.subItems.map(subItem => (
                                                <button 
                                                    key={subItem.id}
                                                    onClick={() => {
                                                        onNavigate(subItem.id, subItem.params);
                                                        setOpenDropdown(null);
                                                    }}
                                                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                                                >
                                                    {subItem.label}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )
                        }


                        return (
                            <button
                                key={item.id + (item.params?.serviceId || '')}
                                onClick={() => onNavigate(item.id, item.params)}
                                className={`py-3 px-4 text-sm font-semibold transition-colors duration-200 ${
                                    isActive
                                        ? 'bg-gray-900 text-white'
                                        : 'text-gray-300 hover:bg-gray-600 hover:text-white'
                                }`}
                            >
                                {item.label.toUpperCase()}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};


// --- MARKET TICKER COMPONENT (REFINED) ---
const MarketTicker = () => {
    return (
        <div className="bg-black text-white text-xs py-1 border-b border-t border-gray-700 overflow-hidden relative">
            <div className="animate-ticker whitespace-nowrap">
                 <div className="inline-block">
                    {marketTickerData.concat(marketTickerData).map((item, index) => (
                        <div key={index} className="inline-flex items-center mx-4">
                            <span className="text-gray-400 mr-2">{item.name}</span>
                            <span className="font-semibold mr-2">{item.value}</span>
                            <span className={item.trend === 'up' ? 'text-green-500' : 'text-red-500'}>
                                {item.trend === 'up' ? '▲' : '▼'} {item.change}
                            </span>
                        </div>
                    ))}
                 </div>
            </div>
        </div>
    );
};


// --- MODULE FOOTER ---
const ModuleFooter = () => (
    <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-6 py-12">
             <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1">
                    <h3 className="text-2xl font-bold">Starconsulting</h3>
                    <p className="text-blue-300 font-semibold">Investment Banking Division</p>
                    <p className="text-gray-400 text-xs mt-2">CÔNG TY TNHH TƯ VẤN QUẢN TRỊ VÀ PHÁT TRIỂN NGUỒN NHÂN LỰC NGÔI SAO</p>
                </div>
                <div className="text-gray-300 text-sm md:col-span-1">
                     <h4 className="font-semibold text-white mb-3">Liên hệ</h4>
                     <p className="flex items-center mb-2"><Mail className="w-4 h-4 mr-2 flex-shrink-0"/> info@starconsulting.com.vn</p>
                     <p className="flex items-center"><Phone className="w-4 h-4 mr-2 flex-shrink-0"/> (+84) 0913075495</p>
                </div>
                 <div className="text-gray-300 text-sm md:col-span-1">
                     <h4 className="font-semibold text-white mb-3">Trụ sở</h4>
                     <p>Tầng 2, 29 Phố Lộc, Phường Xuân Đỉnh, Quận Bắc Từ Liêm, Thành phố Hà Nội</p>
                </div>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-500 text-xs">
                <p>Bản quyền © {new Date().getFullYear()} CÔNG TY TNHH TƯ VẤN QUẢN TRỊ VÀ PHÁT TRIỂN NGUỒN NHÂN LỰC NGÔI SAO. Bảo lưu mọi quyền.</p>
                <p className="mt-1">Website: <a href="https://www.starconsulting.com.vn" target="_blank" rel="noopener noreferrer" className="hover:underline">www.starconsulting.com.vn</a></p>
            </div>
        </div>
    </footer>
);


// --- PAGE: M&A SERVICE DETAIL PAGE ---
const MAServiceDetailPage = ({ service, onNavigate, t }) => {
    const serviceT = translations[t.lang].services.ma;
    const Icon = service.icon;

    return (
        <div className="bg-gray-50">
            <div className="container mx-auto px-6 py-16">
                 <button onClick={() => onNavigate('researchHub')} className="flex items-center text-gray-600 hover:text-gray-900 mb-8 text-sm">
                    <ArrowLeft className="w-4 h-4 mr-2" /> {t.navResearchHub}
                </button>
                
                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-sm">
                        {/* Header with Image */}
                        <div className="grid lg:grid-cols-5 gap-8 items-center mb-12">
                            <div className="lg:col-span-3">
                                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                   <Icon className="w-8 h-8 text-blue-600"/>
                                </div>
                                <h1 className="text-4xl font-extrabold text-gray-900">{serviceT.title}</h1>
                                <p className="text-lg text-gray-600 mt-4">{serviceT.details}</p>
                            </div>
                            <div className="lg:col-span-2">
                                <img 
                                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop" 
                                    alt="M&A Strategy Meeting"
                                    className="rounded-lg shadow-lg w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Strategic Benefits Section */}
                        <div className="mt-16">
                             <h2 className="text-3xl font-bold text-gray-900 mb-6">{serviceT.benefitsTitle}</h2>
                             <ul className="space-y-4">
                                {serviceT.benefits.map((benefit, i) => (
                                    <li key={i} className="flex items-start p-4 bg-gray-50 rounded-md border-l-4 border-blue-500">
                                        <CheckCircle className="w-6 h-6 text-blue-500 mr-4 mt-1 flex-shrink-0"/>
                                        <span className="text-gray-700">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Process Section */}
                        <div className="mt-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{serviceT.processTitle}</h2>
                            <div className="relative">
                                {/* The connecting line */}
                                <div className="absolute left-1/2 -ml-px w-0.5 h-full bg-blue-200 hidden md:block"></div>
                                <div className="space-y-12">
                                    {serviceT.processSteps.map((step, index) => (
                                        <div key={index} className="md:grid md:grid-cols-2 md:gap-8 items-center relative">
                                            <div className={`text-center md:text-right ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                                                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto md:mr-0 md:ml-auto mb-4">{index + 1}</div>
                                                <h3 className="font-bold text-xl text-gray-800">{step.title}</h3>
                                                <p className="text-gray-600">{step.stage}</p>
                                            </div>
                                            <div className={`mt-4 md:mt-0 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                                                <p className="text-gray-700 bg-gray-100 p-4 rounded-lg border">{step.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                        {/* Scope of Work */}
                        <div className="mt-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">{serviceT.scopeOfWorkTitle}</h2>
                            <ul className="space-y-4">
                                {serviceT.scopeOfWork && serviceT.scopeOfWork.map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    
                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-lg shadow-sm border sticky top-28">
                            <div className="flex items-center mb-4">
                               <Briefcase className="w-6 h-6 mr-3 text-blue-600"/>
                               <h3 className="text-xl font-bold">Tài liệu Dịch vụ</h3>
                            </div>
                            <p className="text-gray-600 mb-5">Tải về bản giới thiệu chi tiết, bao gồm quy trình làm việc của chúng tôi.</p>
                            <a href={service.saleKitUrl} download className="w-full bg-green-600 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center hover:bg-green-700 transition">
                                <Download className="w-5 h-5 mr-2" /> Tải về Sale-kit (.pdf)
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


// --- PAGE: CAPITAL MARKETS SERVICE DETAIL PAGE (NEW) ---
const CapitalMarketsServiceDetailPage = ({ service, onNavigate, t }) => {
    const serviceT = translations[t.lang].services.capital;
    const Icon = service.icon;

    return (
        <div className="bg-gray-50">
            <div className="container mx-auto px-6 py-16">
                 <button onClick={() => onNavigate('researchHub')} className="flex items-center text-gray-600 hover:text-gray-900 mb-8 text-sm">
                    <ArrowLeft className="w-4 h-4 mr-2" /> {t.navResearchHub}
                </button>
                
                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-sm">
                        {/* Header */}
                        <div className="mb-12">
                            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                               <Icon className="w-8 h-8 text-blue-600"/>
                            </div>
                            <h1 className="text-4xl font-extrabold text-gray-900">{serviceT.title}</h1>
                            <p className="text-lg text-gray-600 mt-4">{serviceT.details}</p>
                        </div>
                        
                        {/* Instruments Section */}
                         <div className="mt-16">
                             <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{serviceT.instrumentsTitle}</h2>
                             <div className="grid md:grid-cols-2 gap-8">
                                 <div className="border border-gray-200 rounded-lg p-6">
                                     <h3 className="text-xl font-bold text-gray-800 mb-3">{serviceT.instruments[0].type}</h3>
                                     <p className="text-gray-600">{serviceT.instruments[0].description}</p>
                                 </div>
                                 <div className="border border-gray-200 rounded-lg p-6">
                                     <h3 className="text-xl font-bold text-gray-800 mb-3">{serviceT.instruments[1].type}</h3>
                                     <p className="text-gray-600">{serviceT.instruments[1].description}</p>
                                 </div>
                             </div>
                         </div>

                        {/* Process Section */}
                        <div className="mt-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{serviceT.processTitle}</h2>
                             <div className="flex flex-col md:flex-row md:space-x-4">
                                {serviceT.processSteps.map((step, index) => (
                                    <div key={index} className="flex-1 flex flex-col items-center text-center p-4">
                                         <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">{index + 1}</div>
                                         <h3 className="font-bold text-lg text-gray-800">{step.title}</h3>
                                         <p className="text-sm text-gray-600 mt-2">{step.description}</p>
                                        {index < serviceT.processSteps.length - 1 && <div className="w-full h-px bg-blue-200 mt-6 md:hidden"></div>}
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        {/* Scope of Work */}
                        <div className="mt-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">{serviceT.scopeOfWorkTitle}</h2>
                            <ul className="space-y-4">
                                {serviceT.scopeOfWork && serviceT.scopeOfWork.map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    
                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-lg shadow-sm border sticky top-28">
                            <div className="flex items-center mb-4">
                               <Briefcase className="w-6 h-6 mr-3 text-blue-600"/>
                               <h3 className="text-xl font-bold">Tài liệu Dịch vụ</h3>
                            </div>
                            <p className="text-gray-600 mb-5">Tải về bản giới thiệu chi tiết về nghiệp vụ huy động vốn của chúng tôi.</p>
                            <a href={service.saleKitUrl} download className="w-full bg-green-600 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center hover:bg-green-700 transition">
                                <Download className="w-5 h-5 mr-2" /> Tải về Sale-kit (.pdf)
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- NEW COMPONENT: HEADLINE SLIDER ---
const HeadlineSlider = ({ news, t, onNavigate }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);
    const timeoutRef = useRef(null);

    const navigate = React.useCallback((direction) => {
        if (isFading) return;
        setIsFading(true);
        timeoutRef.current = setTimeout(() => {
            if (direction === 'next') {
                setCurrentIndex((prev) => (prev + 1) % news.length);
            } else {
                setCurrentIndex((prev) => (prev - 1 + news.length) % news.length);
            }
            setIsFading(false);
        }, 300); // Duration matches CSS transition
    }, [isFading, news.length]);
    
    useEffect(() => {
        const timer = setInterval(() => navigate('next'), 5000);
        return () => {
            clearInterval(timer);
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [navigate]);

    if (!news || news.length === 0) {
        return null;
    }

    const currentNews = news[currentIndex];

    return (
        <div className="bg-gray-800 text-white">
            <div className="container mx-auto flex items-center justify-between py-3 px-6">
                 <div className="flex items-center flex-grow min-w-0">
                    <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-sm mr-4 flex-shrink-0">TIÊU ĐIỂM</span>
                    <button 
                        onClick={() => onNavigate('newsDetail', { newsId: currentNews.id })}
                        className={`transition-opacity duration-300 w-full text-left truncate ${isFading ? 'opacity-0' : 'opacity-100'}`}
                    >
                        <p className="truncate text-sm hover:underline">
                             <span className="font-semibold text-gray-300 mr-2">{currentNews.category}:</span>
                             {currentNews.title}
                         </p>
                    </button>
                </div>
                <div className="flex items-center ml-4 flex-shrink-0">
                    <button onClick={() => navigate('prev')} className="p-1 text-gray-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                    </button>
                    <button onClick={() => navigate('next')} className="p-1 text-gray-400 hover:text-white transition-colors">
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};


// --- PAGE: RESEARCH HUB / HOME PAGE (BLOOMBERG-INSPIRED) ---
const ResearchHubPage = ({ onNavigate, t }) => {

    const researchNavData = [
        {
            category: t.researchNav[0].category, // THỊ TRƯỜE;NG
            items: [
                { id: 'dashboard', title: t.researchNav[0].items[0].title, icon: <LayoutDashboard />, active: true },
                { id: 'industryAnalysis', title: t.researchNav[0].items[1].title, icon: <Briefcase />, active: false },
                { id: 'companyAnalysis', title: t.researchNav[0].items[2].title, icon: <Building />, active: false },
            ]
        },
        {
            category: t.researchNav[1].category, // SẢN PHẨM TRÍ TUỆ
            items: [
                { id: 'warRoom', title: t.researchNav[1].items[0].title, icon: <Scale />, active: true },
                { id: 'thematicReports', title: t.researchNav[1].items[1].title, icon: <BookOpen />, active: true },
                { id: 'dialogues', title: t.researchNav[1].items[2].title, icon: <Video />, active: true },
            ]
        },
        {
            category: t.researchNav[2].category, // LƯU TRỮ
            items: [
                 { id: 'researchArchive', title: t.researchNav[2].items[0].title, icon: <Archive />, active: true },
            ]
        }
    ];

    const MarketSnapshot = () => {
        const keyIndicators = [
            { title: "VN GDP", data: mockVietnamMacroData.gdp },
            { title: "VN CPI", data: mockVietnamMacroData.inflation },
            { title: "US FED Rate", data: mockInternationalMacroData.usFedRate },
            { title: "EU CPI", data: mockInternationalMacroData.euInflation },
        ];
        return (
            <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3 border-b pb-2">{t.marketSnapshotTitle}</h3>
                <div className="space-y-3">
                    {keyIndicators.map(item => (
                        <div key={item.title} className="flex justify-between items-center text-sm">
                            <span className="font-semibold text-gray-600">{item.title}</span>
                            <div className="flex items-center">
                                <span className="font-bold text-gray-800 mr-2">{item.data.value}</span>
                                {item.data.trend === 'up' && <TrendingUp className="w-4 h-4 text-green-600" />}
                                {item.data.trend === 'down' && <TrendingDown className="w-4 h-4 text-red-600" />}
                                {item.data.trend === 'stable' && <Minus className="w-4 h-4 text-gray-500" />}
                            </div>
                        </div>
                    ))}
                </div>
                 <button onClick={() => onNavigate('dashboard')} className="w-full mt-4 text-sm font-semibold text-blue-600 hover:underline">
                    Xem Bảng điều khiển chi tiết <ArrowRight className="w-3 h-3 inline-block ml-1"/>
                 </button>
            </div>
        );
    };

    const FeaturedStory = () => (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 relative overflow-hidden group">
            <div className="relative z-10">
                <p className="text-sm font-semibold text-blue-700 uppercase tracking-wider mb-2">{t.featuredThisMonth}</p>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-3 group-hover:text-blue-800 transition">"{mockWarRoomData.topic}"</h2>
                <p className="text-gray-700 mb-4">{t.warRoomTeaserText}</p>
                <button onClick={() => onNavigate('warRoom')} className="font-semibold text-blue-600 hover:underline flex items-center">
                    {t.warRoomTeaserLink} <ArrowRight className="w-4 h-4 ml-2" />
                </button>
            </div>
            <Scale className="absolute -right-8 -bottom-8 w-40 h-40 text-blue-200/50 opacity-50 group-hover:scale-110 transition-transform duration-500 ease-out"/>
        </div>
    );
    
    const NewsFeed = () => (
        <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-3">{t.latestNews}</h2>
            <div className="space-y-6">
                {allMockNewsData.slice(0, 4).map(news => (
                    <button key={news.id} onClick={() => onNavigate('newsDetail', { newsId: news.id })} className="w-full text-left grid grid-cols-4 gap-4 items-start group">
                        <div className="col-span-1 rounded-md overflow-hidden aspect-w-1 aspect-h-1 bg-gray-200">
                           <img src={news.imageUrl} alt={news.title} className="object-cover w-full h-full"/>
                        </div>
                        <div className="col-span-3">
                             <p className="text-xs font-semibold text-blue-600">{news.category.toUpperCase()}</p>
                             <h3 className="font-bold text-lg text-gray-800 group-hover:text-blue-700 transition leading-tight mt-1">{news.title}</h3>
                             <p className="text-sm text-gray-500 mt-1">{news.author} &bull; {news.date}</p>
                        </div>
                    </button>
                ))}
            </div>
            <button onClick={() => onNavigate('researchArchive')} className="w-full mt-6 text-sm font-semibold text-center text-blue-600 bg-gray-100 hover:bg-gray-200 p-3 rounded-md transition">
                {t.readMoreAndArchive}
            </button>
        </div>
    );
    
     const ResearchMethodologySection = () => (
        <div className="bg-white border border-gray-200 rounded-lg p-8 mt-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Nền tảng Phương pháp luận của chúng tôi</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center"><Scale className="w-6 h-6 mr-3 text-blue-600"/> Phương pháp nghiên cứu</h3>
                    <ul className="space-y-2 text-gray-600 list-disc list-inside">
                        <li>Kết hợp phân tích cơ bản, kỹ thuật và định lượng</li>
                        <li>Nghiên cứu vĩ mô toàn cầu và các xu hướng mới nổi</li>
                        <li>Phân tích độc quyền với chỉ số kinh tế riêng</li>
                        <li>Theo dõi chặt chẽ chính sách ngân hàng trung ương</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center"><Briefcase className="w-6 h-6 mr-3 text-blue-600"/> Phạm vi Toàn diện</h3>
                     <ul className="space-y-2 text-gray-600 list-disc list-inside">
                        <li>Đa dạng loại tài sản: FX, Lãi suất, Cổ phiếu, Hàng hóa...</li>
                        <li>Phạm vi địa lý toàn cầu: Hoa Kỳ, EU, Nhật Bản, Trung Quốc</li>
                        <li>Tập trung chuyên sâu vào thị trường Việt Nam</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center"><CheckCircle className="w-6 h-6 mr-3 text-green-600"/> Cam kết Độc lập</h3>
                    <ul className="space-y-2 text-gray-600 list-disc list-inside">
                        <li>Nghiên cứu 100% độc lập, không xung đột lợi ích</li>
                        <li>Minh bạch, sẵn sàng tranh luận và bảo vệ quan điểm</li>
                        <li>Khuyến nghị đầu tư rõ ràng, cụ thể và dễ hành động</li>
                    </ul>
                </div>
            </div>
        </div>
    );

    return (
        <div>
            {/* Hero Section can be added here if needed for the homepage */}
            <div className="bg-gray-50">
                <div className="container mx-auto px-6 py-16">
                    <div className="text-center mb-12">
                         <IconResearch className="w-16 h-16 text-blue-600 mb-4 mx-auto" />
                         <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{t.researchHubTitle}</h1>
                         <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t.researchHubSubtitle}</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Main Content Feed */}
                        <div className="lg:col-span-2 space-y-8">
                            <FeaturedStory />
                            <NewsFeed />
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1 space-y-8">
                            <div className="sticky top-28 space-y-8">
                                <MarketSnapshot />
                                <div className="bg-white p-4 rounded-lg border border-gray-200">
                                    <h3 className="text-lg font-bold text-gray-900 mb-3 border-b pb-2">{t.toolboxTitle}</h3>
                                    <div className="space-y-4">
                                        {researchNavData.map(category => (
                                            <div key={category.category}>
                                                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 px-3">{category.category}</h4>
                                                <ul className="space-y-1">
                                                    {category.items.map(item => (
                                                        <li key={item.id}>
                                                            <button 
                                                                onClick={() => item.active && onNavigate(item.id)} 
                                                                className={`w-full flex items-center p-3 rounded-md text-left ${
                                                                    item.active 
                                                                        ? 'text-gray-700 hover:bg-gray-100 transition-colors' 
                                                                        : 'text-gray-400 opacity-60 cursor-not-allowed'
                                                                }`}
                                                                disabled={!item.active}
                                                            >
                                                                <span className={`mr-3 ${item.active ? 'text-blue-600' : 'text-gray-400'}`}>
                                                                    {React.cloneElement(item.icon, { className: 'w-5 h-5' })}
                                                                </span>
                                                                <span className="font-semibold text-sm">{item.title}</span>
                                                                {!item.active && <span className="ml-auto text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">{translations[t.lang].comingSoon || 'Coming Soon'}</span>}
                                                            </button>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                                    <img src={thematicReportsData[0].coverUrl} alt={thematicReportsData[0].title} className="w-full h-32 object-cover"/>
                                    <div className="p-4">
                                         <p className="text-xs font-semibold text-purple-700 uppercase">{t.thematicReport}</p>
                                        <h4 className="font-bold text-gray-800 mt-1">{thematicReportsData[0].title}</h4>
                                         <button onClick={() => onNavigate('thematicReports')} className="text-sm font-semibold text-blue-600 hover:underline mt-2">
                                            Xem báo cáo <ArrowRight className="w-3 h-3 inline-block ml-1"/>
                                         </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <ResearchMethodologySection />

                </div>
            </div>
        </div>
    );
};

// --- PAGE: RESEARCH ARCHIVE PAGE ---
const ResearchArchivePage = ({ onNavigate, title, subtitle }) => {
    return (
        <div className="bg-white">
            <div className="container mx-auto px-6 py-16">
                <button onClick={() => onNavigate('researchHub')} className="flex items-center text-gray-600 hover:text-gray-900 mb-8 text-sm">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Quay lại Trung tâm Research
                </button>
                <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{title}</h1>
                <p className="text-gray-600 mb-12">{subtitle}</p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allMockNewsData.map((news) => (
                        <button key={news.id} onClick={() => onNavigate('newsDetail', { newsId: news.id })} className="w-full text-left bg-white rounded-lg overflow-hidden border hover:shadow-xl transition-shadow duration-300">
                            <img src={news.imageUrl} alt={news.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <p className="text-sm font-semibold text-blue-600 mb-2">{news.category}</p>
                                <h3 className="text-lg font-bold mb-3 h-14">{news.title}</h3>
                                <p className="text-gray-600 text-sm mb-4">{news.excerpt}</p>
                                <div className="text-xs text-gray-500">
                                    <span>{news.author}</span> &bull; <span>{news.date}</span>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

// --- PAGE: ABOUT US (REPLACES EXPERTS PAGE) ---
const AboutPage = ({ onNavigate, t }) => {
    const leadership = expertsData.filter(e => e.team === 'leadership');
    const analysisTeam = expertsData.filter(e => e.team === 'analysis');

    const ExpertCard = ({ expert }) => (
        <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
                <img 
                    src={expert.imageUrl} 
                    alt={`Chân dung ${expert.name}`}
                    className="rounded-lg shadow-lg w-full h-auto object-cover bg-gray-200 aspect-[4/5]"
                    onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400x500/e2e8f0/4a5568?text=Profile'; }}
                />
            </div>
            <div className="md:col-span-2">
                <h3 className="text-3xl font-bold text-gray-900">{expert.name}</h3>
                <p className="text-blue-600 font-semibold text-lg mb-4">{expert.title}</p>
                <p className="text-gray-700 leading-relaxed mb-6">{expert.bio}</p>
                <blockquote className="border-l-4 border-blue-600 pl-6 italic text-gray-700 mb-6">
                    <p>"{expert.philosophy}"</p>
                </blockquote>
                <a href={expert.linkedinUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-gray-600 hover:text-blue-700 transition-colors">
                    <Linkedin className="w-5 h-5 mr-2" /> Xem hồ sơ trên LinkedIn
                </a>
            </div>
        </div>
    );
    
    // --- METHODOLOGY & ROADMAP DATA (from user prompt) ---
    const methodologyData = {
        "Phương pháp nghiên cứu 360 độ": "Kết hợp phân tích cơ bản (cách thị trường nên vận hành) với nghiên cứu kỹ thuật (cách thị trường đang vận hành) và các phương pháp định lượng.",
        "Dịch vụ nghiên cứu vĩ mô toàn cầu": "Cung cấp phân tích chủ đề rộng với tầm nhìn dài hạn nhằm xác định các xu hướng mới nổi và tác động của chúng đến các quốc gia và thị trường.",
        "Dịch vụ nghiên cứu chiến lược toàn cầu": "Chuyển hóa các phân tích kinh tế thành những hàm ý thị trường có thể triển khai cho phân bổ tài sản, định vị đầu tư, và quản lý rủi ro.",
        "Sản phẩm cơ hội theo chủ đề": "Đưa ra các ý tưởng đầu tư thuyết phục, được thiết kế dành riêng cho các nhà quản lý quỹ và nhà giao dịch.",
        "Phân tích độc quyền": "Phát triển các chỉ báo kinh tế độc quyền và phân tích dòng vốn toàn diện để hỗ trợ quá trình ra quyết định chiến lược.",
        "Cách tiếp cận đa trường phái": "Khai thác những ý tưởng hay nhất từ các trường phái kinh tế vĩ mô, áp dụng các khung phân tích khác nhau tùy theo hoàn cảnh.",
        "Ngân hàng trung ương": "Cung cấp phân tích chuyên sâu về các quyết định chính sách tiền tệ, thông điệp từ ngân hàng trung ương và dòng thanh khoản toàn cầu.",
    };
    
    const assetCoverageData = [
        { icon: <DollarSign/>, name: 'Ngoại hối (FX)', description: 'Các cặp tiền tệ chủ chốt và thị trường mới nổi.' },
        { icon: <TrendingUp/>, name: 'Lãi suất', description: 'Lợi suất trái phiếu chính phủ và doanh nghiệp ở tất cả các thị trường lớn.' },
        { icon: <Server/>, name: 'Thu nhập cố định', description: 'Trái phiếu chính phủ, trái phiếu doanh nghiệp và các công cụ tín dụng.' },
        { icon: <Globe/>, name: 'Hàng hóa', description: 'Dầu, vàng, bạc, đồng và các hàng hóa có ý nghĩa vĩ mô khác.' },
        { icon: <BarChart2/>, name: 'Thị trường cổ phiếu', description: 'Các chỉ số chứng khoán toàn cầu tại tất cả các khu vực được bao phủ.' },
        { icon: <Briefcase/>, name: 'Quỹ hoán đổi danh mục (ETFs)', description: 'ETFs theo ngành, quốc gia và chủ đề.' },
        { icon: <Activity/>, name: 'Tài sản số', description: 'Phân tích Bitcoin.' }
    ];
    
    const geographicCoverageData = {
        regions: ["Hoa Kỳ", "Liên minh Châu Âu", "Nhật Bản", "Trung Quốc"],
        focus: "Việt Nam – Cơ hội tại thị trường mới nổi và các chủ đề về hội nhập khu vực."
    };

    return (
        <div className="bg-white">
            <div className="container mx-auto px-6 py-16">
                <div className="text-center mb-16">
                    <Users className="w-16 h-16 text-blue-600 mb-4 mx-auto" />
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{t.aboutTitle}</h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t.aboutSubtitle}</p>
                </div>
                
                {/* Methodology Section */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">{t.methodologyTitle}</h2>
                     <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {Object.entries(methodologyData).map(([title, description]) => (
                            <div key={title} className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
                                <h3 className="font-bold text-lg text-gray-800">{title}</h3>
                                <p className="text-gray-600 mt-2">{description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Asset Coverage Section */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">{t.assetCoverageTitle}</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {assetCoverageData.map(asset => (
                            <div key={asset.name} className="bg-gray-50 p-6 rounded-lg text-center flex flex-col items-center border border-gray-200">
                                <div className="text-blue-600 mb-3">{React.cloneElement(asset.icon, {className: "w-8 h-8"})}</div>
                                <h3 className="font-bold text-lg text-gray-800">{asset.name}</h3>
                                <p className="text-sm text-gray-600 mt-2 flex-grow">{asset.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Geographic Coverage Section */}
                 <div className="mb-20">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">{t.geographicCoverageTitle}</h2>
                    <div className="grid lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
                        <img src="https://images.unsplash.com/photo-1562211488-a95e26a45a85?q=80&w=1932&auto=format&fit=crop" alt="World Map" className="rounded-lg shadow-md w-full h-full object-cover"/>
                        <div>
                            <ul className="space-y-3">
                                {geographicCoverageData.regions.map(region => (
                                     <li key={region} className="flex items-start p-4 bg-gray-50 rounded-md">
                                        <Globe className="w-5 h-5 text-blue-500 mr-4 mt-1 flex-shrink-0"/>
                                        <span className="text-gray-700 font-semibold">{region}</span>
                                    </li>
                                ))}
                                 <li className="flex items-start p-4 bg-blue-50 rounded-md border-l-4 border-blue-500">
                                    <TrendingUp className="w-5 h-5 text-blue-500 mr-4 mt-1 flex-shrink-0"/>
                                    <span className="text-gray-700 font-semibold">{geographicCoverageData.focus}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="space-y-20">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-10 border-b-2 border-blue-600 pb-4 inline-block">Ban Lãnh đạo</h2>
                        <div className="space-y-16">
                           {leadership.map((expert) => <ExpertCard key={expert.id} expert={expert} />)}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-10 border-b-2 border-blue-600 pb-4 inline-block">Đội ngũ Phân tích & Nghiên cứu</h2>
                         <div className="space-y-16">
                           {analysisTeam.map((expert) => <ExpertCard key={expert.id} expert={expert} />)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- PAGE: MACRO DASHBOARD PAGE ---
const MacroDashboardPage = ({ onNavigate }) => {
    // A simple component to render a mini line chart with SVG
    const MiniLineChart = ({ data, trend }) => {
        const chartHeight = 60;
        const chartWidth = 120;
        const strokeColor = trend === 'up' ? '#10B981' : trend === 'down' ? '#EF4444' : '#6B7280';
        const gradientId = `gradient-${Math.random()}`;
        const gradientColor = trend === 'up' ? '#34D399' : trend === 'down' ? '#F87171' : '#9CA3AF';

        const values = data.map(d => d.value);
        const min = Math.min(...values);
        const max = Math.max(...values);
        
        const points = data.map((point, i) => {
            const x = (i / (data.length - 1)) * chartWidth;
            const y = chartHeight - ((point.value - min) / (max - min === 0 ? 1 : max - min)) * chartHeight;
            return `${x},${y}`;
        }).join(' ');

        const areaPoints = `${points} ${chartWidth},${chartHeight} 0,${chartHeight}`;

        return (
             <svg width={chartWidth} height={chartHeight} viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="mt-2">
                <defs>
                    <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={gradientColor} stopOpacity={0.4}/>
                        <stop offset="100%" stopColor={gradientColor} stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <polyline
                    fill="none"
                    stroke={strokeColor}
                    strokeWidth="2"
                    points={points}
                />
                <polygon
                    fill={`url(#${gradientId})`}
                    points={areaPoints}
                />
            </svg>
        );
    };

    const IndicatorCard = ({ title, data }) => {
        const currentValue = parseFinancialString(data.value);
        const previousValue = parseFinancialString(data.previous);

        let percentageChangeText = '--';
        if (!isNaN(currentValue) && !isNaN(previousValue) && previousValue !== 0) {
            const change = ((currentValue - previousValue) / previousValue) * 100;
            percentageChangeText = `${change.toFixed(1)}%`;
        }

        return (
            <div className="bg-white p-6 rounded-lg border border-gray-200 flex flex-col hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-gray-500 font-semibold">{title}</h3>
                        <p className="text-3xl font-bold text-gray-900 mt-1">{data.value}</p>
                    </div>
                    <div className={`flex items-center space-x-1 p-1 rounded ${data.trend === 'up' ? 'bg-green-100 text-green-700' : data.trend === 'down' ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-700'}`}>
                        {data.trend === 'up' && <TrendingUp className="w-5 h-5" />}
                        {data.trend === 'down' && <TrendingDown className="w-5 h-5" />}
                        {data.trend === 'stable' && <Minus className="w-5 h-5" />}
                        <span className="text-sm font-semibold">{percentageChangeText}</span>
                    </div>
                </div>
                 <div className="flex-grow flex items-end">
                    {data.history && <MiniLineChart data={data.history} trend={data.trend} />}
                </div>
                <p className="text-sm text-gray-600 mt-4 pt-4 border-t">{data.comment}</p>
            </div>
        );
    };

    return (
        <div className="bg-gray-50">
            <div className="container mx-auto px-6 py-16">
                 <button onClick={() => onNavigate('researchHub')} className="flex items-center text-gray-600 hover:text-gray-900 mb-8 text-sm">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Quay lại Trung tâm Research
                </button>
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Bảng điều khiển Vĩ mô</h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">Cập nhật các chỉ số kinh tế quan trọng, cung cấp cái nhìn tổng quan và nhanh chóng về sức khỏe của nền kinh tế. <br/><span className="text-sm text-gray-500">(Lưu ý: Dữ liệu hiện tại là tĩnh để minh họa. Trong thực tế, các chỉ số này sẽ được kết nối với API dữ liệu để tự động cập nhật.)</span></p>
                </div>

                {/* Vietnam Section */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-3">Việt Nam (Cập nhật T8/2025)</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <IndicatorCard title="Tăng trưởng GDP" data={mockVietnamMacroData.gdp} />
                        <IndicatorCard title="Lạm phát CPI" data={mockVietnamMacroData.inflation} />
                        <IndicatorCard title="Vốn FDI giải ngân" data={mockVietnamMacroData.fdi} />
                        <IndicatorCard title="Cán cân Thương mại" data={mockVietnamMacroData.trade} />
                        <IndicatorCard title="Tỷ giá VND/USD" data={mockVietnamMacroData.exchangeRate} />
                        <IndicatorCard title="Lãi suất Điều hành" data={mockVietnamMacroData.policyRate} />
                    </div>
                </div>

                {/* International Section */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-3">Quốc tế (Cập nhật T8/2025)</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <IndicatorCard title="Lãi suất FED (Hoa Kỳ)" data={mockInternationalMacroData.usFedRate} />
                        <IndicatorCard title="Lạm phát CPI (Khu vực EU)" data={mockInternationalMacroData.euInflation} />
                        <IndicatorCard title="Tăng trưởng GDP (Trung Quốc)" data={mockInternationalMacroData.chinaGdp} />
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- PAGE: WAR ROOM PAGE ---
const WarRoomPage = ({ onNavigate }) => {
    const { topic, period, bullCase, bearCase, verdict } = mockWarRoomData;

    return (
        <div className="bg-white">
            <div className="container mx-auto px-6 py-16">
                 <button onClick={() => onNavigate('researchHub')} className="flex items-center text-gray-600 hover:text-gray-900 mb-8 text-sm">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Quay lại Trung tâm Research
                </button>
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Phòng họp Chiến lược</h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">Nơi chúng tôi minh bạch hóa quy trình tư duy, phân tích các luận điểm trái chiều để đi đến nhận định cuối cùng.</p>
                </div>

                {/* The Big Question */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-12">
                    <p className="text-sm font-semibold text-blue-700 uppercase tracking-wider">{period}</p>
                    <h2 className="text-3xl font-bold text-gray-900 mt-2">"{topic}"</h2>
                </div>

                {/* Evidence Board */}
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Bảng Chứng cứ: Các lập luận Trái chiều</h3>
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* Bull Case */}
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <div className="flex items-center mb-4">
                            <ThumbsUp className="w-8 h-8 text-green-600 mr-3"/>
                            <h4 className="text-xl font-bold text-green-800">{bullCase.title}</h4>
                        </div>
                        <ul className="space-y-3 list-disc list-inside text-gray-700">
                            {bullCase.points.map((point, index) => <li key={index}>{point}</li>)}
                        </ul>
                    </div>
                    {/* Bear Case */}
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                        <div className="flex items-center mb-4">
                            <ThumbsDown className="w-8 h-8 text-red-600 mr-3"/>
                            <h4 className="text-xl font-bold text-red-800">{bearCase.title}</h4>
                        </div>
                        <ul className="space-y-3 list-disc list-inside text-gray-700">
                            {bearCase.points.map((point, index) => <li key={index}>{point}</li>)}
                        </ul>
                    </div>
                </div>

                {/* The Verdict */}
                <div className="bg-gray-800 text-white rounded-lg p-8">
                     <div className="flex items-center mb-4">
                        <Scale className="w-8 h-8 text-yellow-400 mr-3"/>
                        <h4 className="text-2xl font-bold text-white">{verdict.title}</h4>
                    </div>
                    <p className="text-lg text-gray-300 leading-relaxed">{verdict.conclusion}</p>
                    <p className="text-right mt-6 text-gray-400 font-semibold">- {verdict.author}</p>
                </div>
            </div>
        </div>
    );
};

// --- PAGE: THEMATIC REPORTS PAGE ---
const ThematicReportsPage = ({ onNavigate }) => {
    const [selectedReport, setSelectedReport] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleDownloadClick = (report) => {
        setSelectedReport(report);
        setIsModalOpen(true);
        setSubmitted(false);
        setEmail('');
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (email) {
            console.log(`Downloading report "${selectedReport.title}" for email: ${email}`);
            setSubmitted(true);
            setTimeout(() => {
                setIsModalOpen(false);
            }, 2000);
        }
    };

    return (
        <>
            <div className="bg-white">
                <div className="container mx-auto px-6 py-16">
                     <button onClick={() => onNavigate('researchHub')} className="flex items-center text-gray-600 hover:text-gray-900 mb-8 text-sm">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Quay lại Trung tâm Research
                    </button>
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Báo cáo Chuyên đề Độc quyền</h1>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">Đi sâu vào các chủ đề nóng nhất của thị trường với những phân tích chuyên sâu, toàn diện từ đội ngũ chuyên gia của Starconsulting. Cung cấp thông tin của bạn để tải về các báo cáo giá trị này.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {thematicReportsData.map((report) => (
                            <div key={report.id} className="bg-gray-50 border border-gray-200 rounded-lg flex flex-col overflow-hidden">
                                <img src={report.coverUrl} alt={`Cover for ${report.title}`} className="w-full h-48 object-cover"/>
                                <div className="p-6 flex flex-col flex-grow">
                                    <p className="text-sm font-semibold text-blue-600 mb-2">{report.date}</p>
                                    <h3 className="text-xl font-bold mb-3 flex-grow">{report.title}</h3>
                                    <p className="text-gray-600 text-sm mb-6">{report.excerpt}</p>
                                    <button onClick={() => handleDownloadClick(report)} className="w-full mt-auto bg-green-600 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center hover:bg-green-700 transition">
                                        <Download className="w-5 h-5 mr-2" /> Yêu cầu Tải về
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-lg shadow-2xl max-w-lg w-full relative">
                        <button onClick={() => setIsModalOpen(false)} className="absolute top-3 right-3 text-gray-400 hover:text-gray-800">
                            <X className="w-6 h-6"/>
                        </button>
                        
                        <div className="p-8">
                            {submitted ? (
                                <div className="text-center">
                                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4"/>
                                    <h3 className="text-2xl font-bold mb-2">Yêu cầu thành công!</h3>
                                    <p className="text-gray-600">Báo cáo sẽ được gửi đến email của bạn trong ít phút. Cảm ơn bạn đã quan tâm!</p>
                                </div>
                            ) : (
                                <>
                                    <h3 className="text-2xl font-bold mb-2">Tải về báo cáo</h3>
                                    <p className="text-gray-600 mb-6">Vui lòng để lại email để nhận báo cáo: <span className="font-semibold text-gray-800">"{selectedReport.title}"</span></p>
                                    <form onSubmit={handleFormSubmit}>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Nhập địa chỉ email của bạn"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                                            required
                                        />
                                        <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition">
                                            Gửi và Tải về
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

// --- PAGE: DIALOGUES PAGE ---
const DialoguesPage = ({ onNavigate }) => {
    const featuredDialogue = dialoguesData[0];
    const otherDialogues = dialoguesData.slice(1);

    return (
        <div className="bg-white">
            <div className="container mx-auto px-6 py-16">
                 <button onClick={() => onNavigate('researchHub')} className="flex items-center text-gray-600 hover:text-gray-900 mb-8 text-sm">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Quay lại Trung tâm Research
                </button>
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Đối thoại cùng Chuyên gia</h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">Lắng nghe các chuyên gia của Starconsulting thảo luận, tranh luận và đưa ra những góc nhìn đa chiều về các chủ đề nóng nhất của thị trường tài chính.</p>
                </div>
                
                {/* Featured Dialogue */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 bg-gray-50 p-8 rounded-lg">
                    <div>
                        <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">Nổi bật</p>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">{featuredDialogue.title}</h2>
                        <p className="text-gray-600 mb-4"><strong>Diễn giả:</strong> {featuredDialogue.speakers}</p>
                        <p className="text-gray-700 leading-relaxed">{featuredDialogue.excerpt}</p>
                    </div>
                    <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                         <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${featuredDialogue.youtubeVideoId}`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                {/* Other Dialogues */}
                <h3 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-4">Các buổi đối thoại khác</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {otherDialogues.map(dialogue => (
                        <div key={dialogue.id} className="border rounded-lg p-6 hover:shadow-xl transition-shadow">
                            <p className="text-sm text-gray-500 mb-2">{dialogue.date}</p>
                            <h4 className="text-xl font-bold mb-3 h-24">{dialogue.title}</h4>
                            <p className="text-gray-600 text-sm mb-4"><strong>Diễn giả:</strong> {dialogue.speakers}</p>
                             <button className="flex items-center text-blue-600 font-semibold hover:underline">
                                <PlayCircle className="w-5 h-5 mr-2" /> Xem lại
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// --- NEW PAGE: NEWS DETAIL PAGE ---
const NewsDetailPage = ({ article, onNavigate }) => {
    if (!article) {
        return (
            <div className="container mx-auto px-6 py-16 text-center">
                <h1 className="text-2xl font-bold">Không tìm thấy bài viết.</h1>
                <button onClick={() => onNavigate('researchHub')} className="mt-4 text-blue-600 hover:underline">
                    Quay lại Trung tâm Research
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white">
            <div className="container mx-auto px-6 py-12 max-w-4xl">
                <button onClick={() => onNavigate('researchHub')} className="flex items-center text-gray-600 hover:text-gray-900 mb-8 text-sm">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Quay lại Trung tâm Research
                </button>
                
                <article>
                    <header className="mb-8">
                        <p className="text-sm font-semibold text-blue-600 mb-2">{article.category.toUpperCase()}</p>
                        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">{article.title}</h1>
                        <p className="text-gray-500 mt-4">
                            Đăng bởi <span className="font-semibold text-gray-700">{article.author}</span> vào ngày {article.date}
                        </p>
                    </header>
                    
                    <img 
                        src={article.imageUrl} 
                        alt={article.title}
                        className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg mb-8"
                    />

                    <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
                        <p className="font-semibold text-xl">{article.excerpt}</p>
                        {article.content.split('... ').map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </article>
            </div>
        </div>
    );
};

// --- NEW PAGE: CONTACT PAGE ---
const ContactPage = ({ t }) => {
    const [formData, setFormData] = useState({ name: '', email: '', company: '', inquiry: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setSubmitted(true);
    };
    
    return (
        <div className="bg-gray-50">
            <div className="container mx-auto px-6 py-16">
                <div className="text-center mb-12">
                    <Mail className="w-16 h-16 text-blue-600 mb-4 mx-auto" />
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{t.contactTitle}</h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t.contactSubtitle}</p>
                </div>
                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    <div className="bg-white p-8 rounded-lg shadow-lg border">
                        {submitted ? (
                             <div className="flex flex-col items-center justify-center h-full text-center">
                                <CheckCircle className="w-20 h-20 text-green-500 mb-4"/>
                                <h2 className="text-2xl font-bold mb-2">Cảm ơn bạn!</h2>
                                <p className="text-gray-600">Chúng tôi đã nhận được yêu cầu của bạn và sẽ phản hồi trong thời gian sớm nhất.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Họ và Tên</label>
                                        <input type="text" name="name" id="name" required onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                                        <input type="email" name="email" id="email" required onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">Công ty / Tổ chức</label>
                                    <input type="text" name="company" id="company" onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="inquiry" className="block text-sm font-semibold text-gray-700 mb-2">Nội dung yêu cầu</label>
                                    <textarea name="inquiry" id="inquiry" rows="5" required onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                                </div>
                                <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">Gửi Yêu Cầu</button>
                            </form>
                        )}
                    </div>
                     <div className="space-y-8">
                         <div className="bg-white p-8 rounded-lg shadow-lg border">
                            <h3 className="text-2xl font-bold mb-4">Thông tin liên hệ</h3>
                            <p className="flex items-start mb-4"><Mail className="w-6 h-6 mr-3 text-blue-600 mt-1 flex-shrink-0"/> <a href="mailto:info@starconsulting.com.vn" className="text-gray-700 hover:text-blue-600">info@starconsulting.com.vn</a></p>
                            <p className="flex items-start mb-4"><Phone className="w-6 h-6 mr-3 text-blue-600 mt-1 flex-shrink-0"/> <span className="text-gray-700">(+84) 0913075495</span></p>
                             <p className="flex items-start"><Globe className="w-6 h-6 mr-3 text-blue-600 mt-1 flex-shrink-0"/> <span className="text-gray-700">Tầng 2, 29 Phố Lộc, Phường Xuân Đỉnh, Quận Bắc Từ Liêm, Thành phố Hà Nội</span></p>
                        </div>
                        <div className="rounded-lg shadow-lg border overflow-hidden">
                             <img src="https://images.unsplash.com/photo-1549492423-400259a502f5?q=80&w=2070&auto=format&fit=crop" alt="Office Location" className="w-full h-64 object-cover"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- NEW PAGE: SEARCH RESULTS PAGE ---
const SearchResultsPage = ({ query, onNavigate, t }) => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        if (query) {
            const lowercasedQuery = query.toLowerCase();
            const filteredData = allMockNewsData.filter(item =>
                item.title.toLowerCase().includes(lowercasedQuery) ||
                item.excerpt.toLowerCase().includes(lowercasedQuery) ||
                item.content.toLowerCase().includes(lowercasedQuery) ||
                item.author.toLowerCase().includes(lowercasedQuery) ||
                item.category.toLowerCase().includes(lowercasedQuery)
            );
            setResults(filteredData);
        }
    }, [query]);

    return (
        <div className="bg-white">
            <div className="container mx-auto px-6 py-16">
                <button onClick={() => onNavigate('researchHub')} className="flex items-center text-gray-600 hover:text-gray-900 mb-8 text-sm">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Quay lại Trung tâm Research
                </button>
                <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{t.searchResultsTitle}</h1>
                <p className="text-gray-600 mb-12">{results.length} {t.resultsFor} "<span className="font-semibold text-gray-900">{query}</span>"</p>

                {results.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {results.map((news) => (
                            <button key={news.id} onClick={() => onNavigate('newsDetail', { newsId: news.id })} className="w-full text-left bg-white rounded-lg overflow-hidden border hover:shadow-xl transition-shadow duration-300">
                                <img src={news.imageUrl} alt={news.title} className="w-full h-48 object-cover" />
                                <div className="p-6">
                                    <p className="text-sm font-semibold text-blue-600 mb-2">{news.category}</p>
                                    <h3 className="text-lg font-bold mb-3 h-14">{news.title}</h3>
                                    <p className="text-gray-600 text-sm mb-4">{news.excerpt}</p>
                                    <div className="text-xs text-gray-500">
                                        <span>{news.author}</span> &bull; <span>{news.date}</span>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 border-t">
                        <Search className="w-16 h-16 text-gray-300 mx-auto mb-4"/>
                        <h2 className="text-2xl font-bold text-gray-800">{t.noResultsFound}</h2>
                        <p className="text-gray-500 mt-2">Vui lòng thử tìm kiếm với một từ khóa khác.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

// +++ NEW COMPONENT: AI CHAT ASSISTANT (with Conversation Flow) +++
const chatFlow = {
  greeting: {
    message: "Xin chào anh/chị! Em là trợ lý tư vấn tài chính doanh nghiệp. Để giúp anh/chị lựa chọn đúng loại hình dịch vụ phù hợp, em xin phép đặt một vài câu hỏi ngắn nhé.",
    next: "question_1",
    delay: 1000,
  },
  question_1: {
    message: "Anh/chị vui lòng chọn mục tiêu phù hợp nhất với doanh nghiệp mình:",
    options: [
      { label: "Tìm kiếm cơ hội sáp nhập hoặc mua lại doanh nghiệp khác", next: "question_2_M&A" },
      { label: "Huy động vốn từ thị trường tài chính (cổ phiếu, trái phiếu…)", next: "question_2_CapitalMarket" },
      { label: "Phân tích xu hướng kinh tế để ra quyết định chiến lược", next: "question_2_MacroResearch" }
    ]
  },
  question_2_M_A: {
    message: "Doanh nghiệp anh/chị đang quan tâm đến hoạt động M&A. Dịch vụ Tư vấn M&A của chúng tôi sẽ hỗ trợ từ khâu định giá, tìm kiếm đối tác đến đàm phán và hoàn tất giao dịch.",
    actions: [
      { label: "Kết nối chuyên gia M&A", action: "submit_contact_form" },
      { label: "Xem tài liệu giới thiệu dịch vụ", action: "show_M&A_docs" }
    ]
  },
  question_2_CapitalMarket: {
    message: "Anh/chị đang hướng đến việc huy động vốn. Dịch vụ Tư vấn thị trường vốn sẽ giúp chuẩn bị hồ sơ, chiến lược phát hành và kết nối với nhà đầu tư.",
    actions: [
      { label: "Đặt lịch tư vấn", action: "submit_contact_form" }, // Changed to submit form
      { label: "Nhận thông tin chi tiết", action: "show_CapitalMarket_docs" }
    ]
  },
  question_2_MacroResearch: {
    message: "Anh/chị đang cần thông tin vĩ mô để ra quyết định chiến lược. Dịch vụ Tư vấn research macro sẽ cung cấp các phân tích chuyên sâu về kinh tế, ngành và xu hướng thị trường.",
    actions: [
      { label: "Xem bản phân tích mẫu", action: "show_macro_sample" },
      { label: "Gửi yêu cầu tư vấn", action: "submit_contact_form" }
    ]
  },
  submit_contact_form: {
    message: "Anh/chị vui lòng để lại thông tin liên hệ để chuyên gia của chúng tôi liên hệ trực tiếp:",
    form: {
      fields: [
        { name: "name", label: "Họ và tên", type: "text", required: true },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "phone", label: "Số điện thoại", type: "phone", required: false },
        { name: "notes", label: "Ghi chú thêm", type: "textarea", required: false }
      ],
      submit_action: "save_to_database"
    }
  },
  thank_you: {
      message: "Cảm ơn anh/chị! Chuyên gia của chúng tôi sẽ sớm liên hệ. Anh/chị có cần em hỗ trợ thêm gì không ạ?",
      options: [
        { label: "Quay lại từ đầu", next: "question_1" },
        { label: "Không, cảm ơn", action: "end_chat" }
      ]
  }
};

const AIChatAssistant = ({ onNavigate, t }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [, setCurrentStep] = useState('greeting'); // 'currentStep' value was unused
    const [isTyping, setIsTyping] = useState(false);
    const [formData, setFormData] = useState({});
    const messagesEndRef = useRef(null);

    // Using useCallback for functions used in useEffect to stabilize them
    const processStep = React.useCallback((stepId) => {
        const step = chatFlow[stepId];
        if (!step) return;

        setIsTyping(true);
        setTimeout(() => {
            const newMessage = {
                id: Date.now(),
                sender: 'ai',
                text: step.message,
                options: step.options,
                actions: step.actions,
                form: step.form,
            };
            setMessages(prev => [...prev, newMessage]);
            setCurrentStep(stepId);
            setIsTyping(false);
        }, 1200);
    }, []);

    const resetChat = React.useCallback(() => {
        setMessages([]);
        setCurrentStep('greeting');
        setFormData({});
        setIsTyping(true);
        setTimeout(() => {
            const initialStep = chatFlow.greeting;
            setMessages([{ id: Date.now(), sender: 'ai', text: initialStep.message }]);
            setTimeout(() => {
                processStep(initialStep.next);
                setIsTyping(false);
            }, 500);
        }, 500);
    }, [processStep]);

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            resetChat();
        }
    }, [isOpen, messages.length, resetChat]); // Added missing dependencies

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isTyping]);
    
    const handleOptionClick = (option) => {
        // Add user's choice to messages
        const userMessage = { id: Date.now(), sender: 'user', text: option.label };
        setMessages(prev => [...prev, userMessage]);
        
        // Process next step
        processStep(option.next);
    };

    const handleActionClick = (action) => {
        const userMessage = { id: Date.now(), sender: 'user', text: action.label };
        setMessages(prev => [...prev, userMessage]);

        switch(action.action) {
            case 'submit_contact_form':
                processStep('submit_contact_form');
                break;
            case 'show_M&A_docs':
                onNavigate('serviceDetail', { serviceId: 'ma' });
                setIsOpen(false);
                break;
            case 'show_CapitalMarket_docs':
                onNavigate('serviceDetail', { serviceId: 'capital' });
                setIsOpen(false);
                break;
            case 'show_macro_sample':
                onNavigate('dashboard');
                setIsOpen(false);
                break;
            case 'end_chat':
                setIsTyping(true);
                setTimeout(() => {
                    const endMessage = {id: Date.now()+1, sender: 'ai', text: 'Rất vui được hỗ trợ. Chúc anh/chị một ngày tốt lành!'};
                    setMessages(prev => [...prev, endMessage]);
                    setIsTyping(false);
                    setTimeout(() => setIsOpen(false), 2000);
                }, 1000);
                break;
            default:
                break;
        }
    };

    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Contact form submitted:", formData);
        const userMessage = { id: Date.now(), sender: 'user', text: "Đã gửi thông tin liên hệ." };
        // Remove the form message and add the user's confirmation
        setMessages(prev => [...prev.slice(0, -1), userMessage]);
        processStep('thank_you');
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 bg-blue-600 text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-transform transform hover:scale-110 z-50"
                aria-label="Open AI Assistant"
            >
                {isOpen ? <X className="w-8 h-8"/> : <MessageSquare className="w-8 h-8"/>}
            </button>
            {isOpen && (
                <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-7.5rem)] bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col z-50">
                    <header className="bg-gray-800 text-white p-4 rounded-t-lg flex justify-between items-center">
                        <div>
                            <h3 className="font-bold text-lg">Trợ lý AI Starconsulting</h3>
                            <p className="text-xs text-gray-300">Luôn sẵn sàng hỗ trợ</p>
                        </div>
                         <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                            <X className="w-6 h-6"/>
                        </button>
                    </header>
                    <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`flex mb-4 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${msg.sender === 'user' ? 'bg-blue-500 text-white rounded-br-none' : 'bg-gray-200 text-gray-800 rounded-bl-none'}`}>
                                    <p className="text-sm" dangerouslySetInnerHTML={{ __html: msg.text }}></p>
                                     {/* Render Options */}
                                    {msg.options && (
                                        <div className="mt-3 border-t border-gray-300 pt-2 flex flex-col space-y-2">
                                            {msg.options.map((option, index) => (
                                                <button key={index} onClick={() => handleOptionClick(option)} className="text-left text-sm font-semibold text-blue-600 bg-blue-100 hover:bg-blue-200 rounded-md px-3 py-2 transition w-full">
                                                    {option.label}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                     {/* Render Actions */}
                                    {msg.actions && (
                                        <div className="mt-3 border-t border-gray-300 pt-2 flex flex-col space-y-2">
                                            {msg.actions.map((action, index) => (
                                                <button key={index} onClick={() => handleActionClick(action)} className="text-left text-sm font-semibold text-blue-600 bg-blue-100 hover:bg-blue-200 rounded-md px-3 py-2 transition w-full">
                                                    {action.label}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                     {/* Render Form */}
                                    {msg.form && (
                                        <form onSubmit={handleFormSubmit} className="mt-3 border-t border-gray-300 pt-3">
                                            {msg.form.fields.map(field => (
                                                <div key={field.name} className="mb-3">
                                                    <label className="text-xs text-gray-600 block mb-1">{field.label}{field.required && '*'}</label>
                                                    {field.type === 'textarea' ? (
                                                        <textarea name={field.name} onChange={handleFormChange} required={field.required} className="w-full text-sm p-2 border rounded-md" rows="3"></textarea>
                                                    ) : (
                                                        <input type={field.type} name={field.name} onChange={handleFormChange} required={field.required} className="w-full text-sm p-2 border rounded-md"/>
                                                    )}
                                                </div>
                                            ))}
                                            <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700 transition">Gửi thông tin</button>
                                        </form>
                                    )}
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                             <div className="flex justify-start mb-4">
                                 <div className="bg-gray-200 rounded-2xl rounded-bl-none p-3">
                                    <div className="flex items-center space-x-1">
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-0"></span>
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></span>
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></span>
                                    </div>
                                 </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                     {/* Input form is hidden in this version as it's button-driven */}
                </div>
            )}
        </>
    );
};


// --- APP CHÍNH (BỘ ĐIỀU HƯỚNG) ---
export default function App() {
    const [currentPage, setCurrentPage] = useState({ page: 'researchHub', params: {} });
    const [language, setLanguage] = useState('vi');

    const handleNavigate = (page, params = {}) => {
        setCurrentPage({ page, params });
        window.scrollTo(0, 0);
    };

    const t = { ...translations[language], lang: language };

    const LanguageSwitcher = () => (
        <div className="relative flex items-center">
            <Globe className="w-5 h-5 text-gray-400 mr-2"/>
            <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="text-sm font-semibold bg-transparent text-white appearance-none focus:outline-none cursor-pointer pr-6"
            >
                <option value="vi" className="text-black">Tiếng Việt</option>
                <option value="en" className="text-black">English</option>
                <option value="fr" className="text-black">Français</option>
                <option value="zh" className="text-black">中文</option>
                <option value="ja" className="text-black">日本語</option>
            </select>
            <ChevronDown className="pointer-events-none w-4 h-4 text-gray-400 absolute right-0 top-1/2 -translate-y-1/2"/>
        </div>
    );
    
    const SearchBar = ({ onSearch, onNavigate, t }) => {
        const [query, setQuery] = useState('');
        const [suggestions, setSuggestions] = useState([]);
        const searchContainerRef = useRef(null);

        useEffect(() => {
            const handleClickOutside = (event) => {
                if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
                    setSuggestions([]);
                }
            };
            document.addEventListener("mousedown", handleClickOutside);
            return () => document.removeEventListener("mousedown", handleClickOutside);
        }, []);


        const handleInputChange = (e) => {
            const value = e.target.value;
            setQuery(value);

            if (value.trim()) {
                const lowercasedValue = value.toLowerCase();
                const filteredSuggestions = allMockNewsData.filter(item =>
                    item.title.toLowerCase().includes(lowercasedValue)
                ).slice(0, 5); // Giới hạn 5 gợi ý
                setSuggestions(filteredSuggestions);
            } else {
                setSuggestions([]);
            }
        };

        const handleSearch = (e) => {
            e.preventDefault();
            if (query.trim()) {
                onSearch(query.trim());
                setSuggestions([]);
                setQuery('');
            }
        };

        const handleSuggestionClick = (suggestion) => {
            onNavigate('newsDetail', { newsId: suggestion.id });
            setSuggestions([]);
            setQuery(''); // Clear the input field
        };
        
        const highlightMatch = (text, queryToHighlight) => {
            if (!queryToHighlight.trim()) {
                return text;
            }
            const regex = new RegExp(`(${queryToHighlight})`, 'gi');
            const parts = text.split(regex);
            return (
                <span className="truncate">
                    {parts.map((part, index) => 
                        part.toLowerCase() === queryToHighlight.toLowerCase() ? (
                            <strong key={index} className="font-bold text-white">{part}</strong>
                        ) : (
                            part
                        )
                    )}
                </span>
            );
        };


        return (
            <form onSubmit={handleSearch} ref={searchContainerRef} className="relative w-full max-w-xs hidden md:block">
                <input
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    onFocus={handleInputChange}
                    placeholder={t.searchPlaceholder}
                    className="w-full bg-gray-800 text-white border border-gray-600 rounded-md py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm transition"
                    autoComplete="off"
                />
                <button type="submit" className="absolute right-0 top-0 mt-2 mr-3 text-gray-400 hover:text-white">
                    <Search className="w-5 h-5" />
                </button>

                {suggestions.length > 0 && (
                     <div className="absolute top-full left-0 right-0 bg-gray-800 border border-gray-600 rounded-md shadow-lg z-50 mt-2 max-h-72 overflow-y-auto">
                        <ul>
                            {suggestions.map(suggestion => (
                                <li key={suggestion.id} className="border-b border-gray-700 last:border-b-0">
                                    <button
                                        type="button"
                                        onClick={() => handleSuggestionClick(suggestion)}
                                        className="w-full text-left px-4 py-3 text-sm text-gray-300 hover:bg-gray-700 transition-colors group flex items-center justify-between"
                                    >
                                       {highlightMatch(suggestion.title, query)}
                                       <ArrowRight className="w-4 h-4 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-2" />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </form>
        );
    };

    const renderPage = () => {
        const { page, params } = currentPage;
        
        if (page.startsWith('serviceDetail')) {
            const serviceId = params.serviceId;
            const service = serviceId ? { ...servicesData[serviceId], id: serviceId } : null;
            const detailPageProps = { service, onNavigate: handleNavigate, t };

            if (serviceId === 'ma') return <MAServiceDetailPage {...detailPageProps} />;
            if (serviceId === 'capital') return <CapitalMarketsServiceDetailPage {...detailPageProps} />;
            return null; // Should not happen with new nav
        }
        
        if (page === 'newsDetail') {
            const article = allMockNewsData.find(news => news.id === params.newsId);
            return <NewsDetailPage article={article} onNavigate={handleNavigate} t={t} />;
        }
        
        if (page.startsWith('market')) {
            const marketKey = page.replace('market', '').toLowerCase();
            const marketName = t.marketSubNav[marketKey] || 'Thị trường';
            return <ResearchArchivePage onNavigate={handleNavigate} title={`Phân tích ${marketName}`} subtitle={`Nội dung chuyên sâu về ${marketName} sẽ sớm được cập nhật.`} />;
        }

        switch (page) {
            case 'searchResults':
                return <SearchResultsPage query={params.query} onNavigate={handleNavigate} t={t} />;
            case 'researchArchive':
                return <ResearchArchivePage onNavigate={handleNavigate} title="Lưu trữ Bản tin" subtitle="Tất cả các phân tích và nhận định đã được xuất bản." />;
            case 'industryAnalysis':
                return <ResearchArchivePage onNavigate={handleNavigate} title="Phân tích Ngành" subtitle="Nội dung chuyên sâu về các ngành sẽ sớm được cập nhật. Dưới đây là các bài viết minh họa." />;
             case 'companyAnalysis':
                return <ResearchArchivePage onNavigate={handleNavigate} title="Phân tích Doanh nghiệp" subtitle="Nội dung chuyên sâu về các doanh nghiệp sẽ sớm được cập nhật. Dưới đây là các bài viết minh họa." />;
            case 'about':
                return <AboutPage onNavigate={handleNavigate} t={t} />;
            case 'contact':
                return <ContactPage t={t} />;
            case 'dashboard':
                return <MacroDashboardPage onNavigate={handleNavigate} t={t} />;
            case 'warRoom':
                return <WarRoomPage onNavigate={handleNavigate} t={t} />;
            case 'thematicReports':
                return <ThematicReportsPage onNavigate={handleNavigate} t={t} />;
            case 'dialogues':
                return <DialoguesPage onNavigate={handleNavigate} t={t} />;
            case 'researchHub':
            default:
                return <ResearchHubPage onNavigate={handleNavigate} t={t} />;
        }
    };
    
    const subtleBgPattern = {
        backgroundColor: '#f8f9fa',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23e9ecef' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%E3E%3C/svg%3E")`,
    };

    return (
        <div className="text-gray-800 font-sans" style={subtleBgPattern}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700&display=swap');
                body { font-family: 'Inter', sans-serif; }
                .prose { line-height: 1.7; }
                .prose strong { color: #1e3a8a; }
                .aspect-w-16 { position: relative; padding-bottom: 56.25%; }
                .aspect-h-9 { /* For aspect ratio */ }
                .aspect-w-16 > * { position: absolute; height: 100%; width: 100%; top: 0; left: 0; }
                .aspect-w-1 { position: relative; padding-bottom: 100%; }
                .aspect-w-1 > * { position: absolute; height: 100%; width: 100%; top: 0; left: 0; }
                .aspect-w-4 { position: relative; padding-bottom: 125%; } /* 5/4 Aspect Ratio */
                .aspect-h-5 { /* For aspect ratio */ }
                .aspect-w-4 > * { position: absolute; height: 100%; width: 100%; top: 0; left: 0; }
                .font-serif-display { font-family: 'Cormorant Garamond', serif; }
                
                @keyframes ticker {
                    0% { transform: translateX(100%); }
                    100% { transform: translateX(-100%); }
                }
                .animate-ticker {
                    display: inline-block;
                    animation: ticker 40s linear infinite;
                }
            `}</style>
            
             <header className="bg-gray-900 text-white sticky top-0 z-50">
                <div className="container mx-auto px-6 flex justify-between items-center py-3">
                    <h1 className="text-3xl font-bold tracking-wider cursor-pointer" onClick={() => handleNavigate('researchHub')}>STARCONSULTING</h1>
                    <div className="flex items-center space-x-4">
                        <SearchBar onNavigate={handleNavigate} onSearch={(query) => handleNavigate('searchResults', { query })} t={t} />
                        <LanguageSwitcher />
                    </div>
                </div>
                <ModuleNav onNavigate={handleNavigate} currentPage={currentPage} t={t} />
                <HeadlineSlider news={allMockNewsData.slice(0, 3)} t={t} onNavigate={handleNavigate} />
                <MarketTicker />
            </header>
            
            <main>
                {renderPage()}
            </main>
            <ModuleFooter />
            <AIChatAssistant onNavigate={handleNavigate} t={t} />
        </div>
    );
}



