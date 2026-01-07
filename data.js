// ===== TIMELINE DATA =====
// lane: "top" or "bottom" controls overlap layout
// pdf: put your file under /assets/certificates/... then link it here
const timeline = [
  { title: "B.E. in Information Technology", org: "University of Mumbai", time: "Aug 2021 – May 2025", lane: "top"},
  { title: "Machine Learning Intern", org: "Tata Consultancy Engineers (TCE)", time: "Nov 2022 – May 2023", lane: "bottom"},
  { title: "Finance Head, Core Committee", org: "IEEE FCRIT Student Chapter", time: "Aug 2023 – Aug 2024", lane: "top"},
  { title: "Core Committee Member", org: "Computer Society of India (University of Mumbai)", time: "Aug 2023 – Mar 2024", lane: "bottom"},
  { title: "Hack the Spring (Finalist)", org: "Government Engineering College", time: "Mar 2024", lane: "top"},
  { title: "CodeBits 2.0 (Runner-up)", org: "Gharda Institute of Technology", time: "Apr 2024", lane: "bottom" },
  { title: "AI Research Intern", org: "Tata Institute of Fundamental Research (TIFR)", time: "May 2023 – Apr 2024", lane: "top" },
  { title: "Machine Learning Co-op", org: "InfinityPool Pvt Ltd", time: "May 2024 – May 2025", lane: "bottom"},
  { title: "IP: Crowd Flow Analyzer (Copyright)", org: "Govt. of India", time: "Jul 2024", lane: "top"},
  { title: "Publication: IEEE ICNTE-2026", org: "Predictive Analysis for Stock Market", time: "Nov 2025", lane: "bottom" },
  { title: "M.S. in Data Science", org: "Northeastern University", time: "Aug 2025 – May 2027 (Expected)", lane: "top", pdf: "" }
];

// ===== PROJECTS DATA =====
const projects = [
  {
    icon: "📈",
    title: "ShankAI",
    tech: ["Python", "Time Series", "XGBoost", "LSTM", "MLflow", "FastAPI"],
    description: "Short-term equity forecasting pipeline with experiment tracking and production-style serving.",
    features: [
      "Built feature engineering + model training workflow for short-term price direction forecasting",
      "Tracked experiments and model versions to compare baselines vs improvements",
      "Served predictions via FastAPI and added monitoring hooks"
    ],
    metrics: ["Faster Iteration", "Reproducible Runs", "API Serving"],
    github: "#",
    
  },
  {
    icon: "🔎",
    title: "InsightSense",
    tech: ["Python", "LangChain", "FAISS", "RAG", "Evaluation", "FastAPI"],
    description: "Research paper assistant that retrieves evidence, summarizes with citations, and evaluates reliability.",
    features: [
      "Hybrid retrieval (vector + keyword) with reranking for stronger grounding",
      "Automated evaluation: faithfulness, relevance, latency, and cost per query",
      "Failure-mode tests for unsupported answers and low-confidence outputs"
    ],
    metrics: ["Grounded Summaries", "Eval First", "Lower Hallucinations"],
    github: "#",
    
  },
  {
    icon: "🎬",
    title: "IMDb ML Data Pipeline",
    tech: ["Azure", "Databricks", "PySpark", "Snowflake", "Medallion (Bronze/Silver/Gold)", "Alteryx", "PowerBI"],
    description: "ELT pipeline that converts raw IMDb data into ML-ready feature tables with quality gates.",
    features: [
        "Built an end-to-end ELT workflow that turns raw IMDb data into analysis and ML-ready tables.",
        "Structured the pipeline using the Medallion model (Bronze/Silver/Gold) to separate raw, cleaned, and curated layers.",
        "Delivered Power BI dashboards on top of the Gold layer to enable self-serve insights on genre, ratings, and release trends."
    ],
    metrics: ["ML Ready Tables", "Quality Gates", "Automated ELT"],
    github: "#",
    
  },
  {
    icon: "🏙️",
    title: "HubScout",
    tech: ["Python", "RAG", "Vector DB", "FastAPI", "Search", "Evaluation"],
    description: "Boston real estate assistant using RAG to answer questions from listings, neighborhood notes, and FAQs.",
    features: [
      "Schema-aware retrieval with filters and reranking to reduce noise",
      "Delivered answers with clear citations to the underlying sources and confidence labels for trust and clarity",
      "Built an evaluation set to measure relevance and catch unsupported answers, reducing hallucinations"
    ],
    metrics: ["Search + RAG", "Source Grounding", "Eval Harness"],
    github: "#",
    
  },
  {
    icon: "🎥",
    title: "Crowd Flow Analyzer",
    tech: ["Python", "PyTorch", "OpenCV", "Object Detection", "Docker"],
    description: "Video analytics system for crowd flow and event signals, with experiment-style validation.",
    features: [
      "Built detection pipeline with structured outputs for downstream analysis",
      "Added precision/recall and error breakdown to evaluate improvements",
      "Packaged the pipeline for repeatable runs and demo deployments"
    ],
    metrics: ["Video Analytics", "Validation Metrics", "Deployable"],
    github: "#",
    
  }
  
  
];

// ===== SKILLS DATA =====
const skills = {
  "ML & Deep Learning": ["Python", "PyTorch", "TensorFlow", "Model Training", "Experimentation", "Error Analysis"],
  "LLMs & Safety": ["LLM Evaluation", "Robustness Testing", "Adversarial Testing", "Red Teaming", "Reliability Checks"],
  "RAG & Retrieval": ["LangChain", "FAISS", "ChromaDB", "Reranking", "Chunking", "Embedding Tuning"],
  "Multimodal": ["Vision Language Models (VLMs)", "Multimodal Fusion", "Computer Vision", "OpenCV"],
  "Data & Systems": ["SQL", "PostgreSQL/MySQL", "Airflow", "PySpark", "Data Validation"],
  "Serving & MLOps": ["FastAPI", "Docker", "Kubernetes", "Monitoring", "MLflow", "Git/GitHub"]
};

window.timeline = timeline;
window.projects = projects;
window.skills = skills;