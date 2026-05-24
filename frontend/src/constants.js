export const PROJECTS = [
  {
    id: "supply-chain",
    title: "Supply Chain Analysis & Delivery Risk Prediction",
    description:
      "Comprehensive supply chain analysis with ML models to predict late deliveries, identifying bottlenecks across 172,765 orders with 74% model accuracy.",
    longDescription:
      "In a globalized supply chain, late deliveries are a major pain point leading to customer dissatisfaction, operational inefficiencies, and financial losses. This project analyzes 172,765 historical orders to identify where, why, and how delays occur — and builds a Random Forest model to predict late delivery risk, enabling logistics teams to proactively prioritize high-risk shipments.",
    image:
      "https://res.cloudinary.com/dds1jqviv/image/upload/v1779609458/Screenshot_2026-05-07_at_22-14-35_Supply_Chain_Analysis_Tableau_Public_fpzish.png",
    tags: [
      "Python",
      "Machine Learning",
      "EDA",
      "XGBoost",
      "Random Forest",
      "Logistics",
    ],
    category: "Python",
    metrics: [
      { label: "Total Orders", value: "172,765" },
      { label: "Delayed Orders", value: "54.71%" },
      { label: "Model Accuracy", value: "~74%" },
      { label: "Model Recall", value: "~75%" },
      { label: "Avg Delay", value: "1.647 days" },
      { label: "Loss from Delays", value: "55.43%" },
    ],
    methodology: [
      {
        step: "01",
        title: "Delivery & Delay Analysis",
        description:
          "Conducted extensive EDA to understand the distribution of delays across shipping modes, departments, and regions.",
      },
      {
        step: "02",
        title: "Time Series Trends",
        description:
          "Analyzed how delivery performance fluctuated over time to identify seasonal patterns and systemic failures.",
      },
      {
        step: "03",
        title: "Bottleneck Identification",
        description:
          "Pinpointed high-delay hotspots — Southeast Asia and South Asia showed significantly higher late delivery rates.",
      },
      {
        step: "04",
        title: "Root Cause Deep Dive",
        description:
          "Investigated underlying factors such as shipping mode efficiency and order status correlations driving delays.",
      },
      {
        step: "05",
        title: "Predictive Modeling",
        description:
          "Trained Logistic Regression, XGBoost, and Random Forest models to predict late delivery risk per order.",
      },
      {
        step: "06",
        title: "Risk Flagging System",
        description:
          "Generated per-order risk probability scores to help logistics managers prioritize high-risk shipments at dispatch.",
      },
    ],
    kpis: [
      { label: "Total Orders", value: "172,765" },
      { label: "On-Time Delivery Rate", value: "45.29%" },
      { label: "Delayed Orders", value: "54.71%" },
      { label: "Average Delay", value: "1.647 days" },
      { label: "90th Percentile Delay", value: "3.0 days" },
      { label: "Total Profit", value: "$7.5M" },
      { label: "Total Loss", value: "-$3.7M" },
      { label: "Loss from Delays", value: "55.43%" },
    ],
    suggestions: [
      {
        title: "Logistic Partner Review",
        description:
          "Audit and renegotiate terms with regional logistics providers in high-delay zones (SE Asia / South Asia).",
      },
      {
        title: "Predictive Flagging",
        description:
          "Integrate the Random Forest model into the dispatch system to flag at-risk orders for priority handling.",
      },
      {
        title: "Customer Communication",
        description:
          "Set more realistic scheduled shipping days in high-risk regions to manage customer expectations.",
      },
      {
        title: "Segment-Specific Logistics",
        description:
          "Develop specialized lanes for Corporate and Home Office segments to ensure business reliability.",
      },
      {
        title: "Departmental Optimization",
        description:
          "Re-evaluate inventory management for the Fitness department, which shows a higher propensity for delays.",
      },
    ],
    charts: [
      { title: "Delay Analysis", image: "Analysis_Charts/Delay_analysis.png" },
      {
        title: "Time Series Analysis",
        image: "Analysis_Charts/Time_series_Analysis.png",
      },
      {
        title: "Bottleneck Analysis",
        image: "Analysis_Charts/bottleneck_analysis.png",
      },
      {
        title: "Root Cause Analysis",
        image: "Analysis_Charts/RootCauseAnalysis.png",
      },
      {
        title: "Probability Flag Distribution",
        image: "Analysis_Charts/Probability_flag_dist.png",
      },
      {
        title: "Probability Flag",
        image: "Analysis_Charts/Probability_flag.png",
      },
    ],
  },
  {
    id: "ecommerce-sales",
    title: "European Sales Dashboard",
    description:
      "Interactive Tableau dashboard decoding $1.04M in European sales across 706 customers, uncovering category leaders, seasonal trends, and regional profit hubs.",
    longDescription:
      "Numbers tell a story, but only if you know how to visualize them. This project transforms raw European sales transactions into a strategic business overview. By analyzing 706 customers across Western Europe, the dashboard surfaces category performance, monthly seasonality, and geospatial profit concentration — giving decision-makers a unified view of a $1.04M market.",
    image:
      "https://res.cloudinary.com/dds1jqviv/image/upload/v1779609458/Dashboard_2_atiduk.png",
    tags: ["Tableau", "Data Visualization", "Business Intelligence", "EDA"],
    category: "Tableau",
    metrics: [
      { label: "Total Sales", value: "$1.04M" },
      { label: "Total Profit", value: "$128,944" },
      { label: "Customers", value: "706" },
    ],
    kpis: [
      { label: "Total Sales", value: "1,042,204" },
      { label: "Total Profit", value: "128,944" },
      { label: "No. of Customers", value: "706" },
    ],
    keyTakeaways: [
      {
        icon: "🚀",
        title: "Category Leaders",
        description:
          "High-value items like Copiers and Phones drive the bulk of revenue, significantly outperforming the average sales per category.",
      },
      {
        icon: "📈",
        title: "Seasonality",
        description:
          "August emerged as the strongest sales month, nearly doubling the performance of weaker months like March and May.",
      },
      {
        icon: "📍",
        title: "Market Concentration",
        description:
          "Geospatial mapping reveals Western Europe — specifically France — as the strongest profit hub across all regions.",
      },
    ],
    charts: [
      {
        title: "Sales By Month",
        description:
          "Monthly sales trend line showing seasonal peaks and troughs across the year.",
      },
      {
        title: "Sales By Category",
        description:
          "Horizontal bar chart comparing sub-category sales against the average benchmark.",
      },
      {
        title: "Sales By Country",
        description:
          "Choropleth map of Europe highlighting regional sales concentration.",
      },
    ],
    liveLink: "https://lnkd.in/gz9UQ68r",
  },
];

export const SKILLS = {
  languages: ["Python", "SQL"],
  tools: ["Tableau", "Excel (VBA)", "PostgreSQL"],
  libraries: [
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "Matplotlib",
    "Seaborn",
    "TensorFlow",
  ],
};
