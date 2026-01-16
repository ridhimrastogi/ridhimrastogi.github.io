export const personalInfo = {
  name: "Ridhim Rastogi",
  title: "Software Engineer",
  company: "AWS",
  location: "Seattle, WA",
  email: "ridhimrastogi@gmail.com",
  linkedin: "https://www.linkedin.com/in/ridhim-rastogi/",
  github: "https://github.com/ridhimrastogi",
  tagline: "Building ML infrastructure at scale",
  bio: "Software Engineer with 7+ years of experience designing and launching highly available, cloud-native features at scale. Expert in MLOps, building and operating scalable solutions that span traditional machine learning to large language model (LLM) integrations.",
};

export const skills = {
  languages: ["Java", "Python", "TypeScript", "Scala"],
  cloudML: ["AWS", "SageMaker", "OpenSearch", "MLOps", "LLMs"],
  core: ["System Design", "Distributed Systems", "Problem Solving"],
};

export const experience = [
  {
    title: "Software Dev Engineer II",
    company: "AWS",
    location: "Seattle, WA",
    period: "February 2021 – Present",
    highlights: [
      "Built and optimized a vector embedding store based on Amazon OpenSearch enabling natural language search on video data at petabyte scale with millisecond query latency",
      "Delivered 90% cost reduction in vector data storage through targeted OpenSearch index and cluster optimizations",
      "Developed and launched time series forecasting capabilities for SageMaker Canvas, a no-code platform for training ML models",
      "Elevated training success rate on SageMaker Canvas from 75% to 97% by implementing schema validation and data quality checks",
      "Added Parquet Support to Amazon Forecast, reducing data storage and transfer costs by up to 70%",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "AWS",
    location: "Seattle, WA",
    period: "May 2020 – July 2020",
    highlights: [
      "Implemented scheduled job execution capabilities in Amazon Forecast, enabling customers to automatically import data, train models, and generate predictions at user-defined frequency",
    ],
  },
  {
    title: "Engineer - Media Server Technology",
    company: "Ittiam Systems",
    location: "Bengaluru, India",
    period: "July 2017 – May 2019",
    highlights: [
      "Created a high-performance video preprocessor using OpenCV for real-time video enhancement up to 720p@30fps",
      "Engineered a C++ application to implement and validate CEA 708 closed caption subtitles ensuring compliance for all generated video files",
    ],
  },
];

export const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "North Carolina State University",
    location: "Raleigh, NC",
    period: "August 2019 – December 2020",
    gpa: "4.0 GPA",
  },
  {
    degree: "BE in Information Technology",
    school: "Pune Institute of Computer Technology",
    location: "Pune, India",
    period: "July 2013 – June 2017",
  },
];

export const blogPosts = [
  {
    title: "Speed up your time series forecasting by up to 50 percent with Amazon SageMaker Canvas",
    description: "Learn how to accelerate time series forecasting using SageMaker Canvas UI and AutoML APIs for faster model training and predictions.",
    url: "https://aws.amazon.com/blogs/machine-learning/speed-up-your-time-series-forecasting-by-up-to-50-percent-with-amazon-sagemaker-canvas-ui-and-automl-apis/",
    publisher: "AWS Machine Learning Blog",
    date: "2023",
  },
  {
    title: "Choose specific timeseries to forecast with Amazon Forecast",
    description: "A guide on selectively forecasting specific time series data using Amazon Forecast for more targeted predictions.",
    url: "https://aws.amazon.com/blogs/machine-learning/choose-specific-timeseries-to-forecast-with-amazon-forecast/",
    publisher: "AWS Machine Learning Blog",
    date: "2022",
  },
];

export const projects = [
  {
    title: "Library Management System",
    description: "A comprehensive library management application for tracking books, members, and transactions.",
    tech: ["Java", "Spring Boot", "MySQL"],
    github: "https://github.com/ridhimrastogi/LibraryManagementSystem",
  },
  {
    title: "Alfred",
    description: "Personal assistant application with various automation capabilities.",
    tech: ["Python", "Automation"],
    github: "https://github.com/ridhimrastogi/Alfred",
  },
  {
    title: "IsItSecure",
    description: "Security analysis tool for evaluating application vulnerabilities.",
    tech: ["Security", "Analysis"],
    github: "https://github.com/ridhimrastogi/IsItSecure",
  },
  {
    title: "Custom-MPI",
    description: "Custom implementation of Message Passing Interface for distributed computing.",
    tech: ["C++", "Distributed Systems", "MPI"],
    github: "https://github.com/ridhimrastogi/Custom-MPI",
  },
];
