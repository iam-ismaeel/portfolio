import { PortfolioData } from '../types';

export const initialPortfolioData: PortfolioData = {
  about: {
    text: "Hey, I'm Ismail, a DevOps Engineer based in Nigeria. My journey into DevOps started with a deep curiosity about how large-scale systems run reliably. What began as an interest in automating deployments soon grew into a passion for building scalable infrastructures, streamlining CI/CD pipelines, and ensuring applications run securely and efficiently in the cloud.",
    skills: [
      "Kubernetes", "Terraform/Terragrunt", "AWS", "Docker", "Ansible",
      "Python", "Linux Administration", "MongoDB",
      "Git", "Bash", "CI/CD",
      "Owasp", "Trivy", "Sonarqube",
      "Github Actions", "Jenkins", "GitOps", "Open-Telemetry", "Datadog",
      "ELK", "Prometheus", "Grafana", "Jaeger", "Mysql", "Helm Charts", "Kustomize"
    ]

  },
  services: [
    {
      id: "cloud-infra",
      title: "Cloud Infrastructure & Deployment",
      description: "Designing and managing scalable cloud environments on AWS, Azure, and GCP with automated deployment pipelines.",
      icon: "Server"
    },
    {
      id: "monitoring",
      title: "Monitoring & Observability",
      description: "Implementing end-to-end monitoring, logging, and alerting solutions to ensure system reliability and performance.",
      icon: "Activity"
    },
    {
      id: "cost-optimization",
      title: "Cost Optimization & Scalability",
      description: "Optimizing cloud resources for performance and cost while ensuring applications scale seamlessly with demand.",
      icon: "TrendingUp"
    }
  ],

  projects: [
    {
      id: "project-1",
      title: "Enterprise-Grade Loan Validation System with Full GitOps & AWS Infrastructure",
      techStack: ["☁️  AWS Ecosystem: EKS • ECR • VPC • IAM • Secrets Manager", "📦  Containerization: Docker • Kubernetes", "🚀  CI/CD: GitHub Actions • ArgoCD • Trivy", "🔐  Security: RBAC • ESO • OIDC • Network Policies", "📊  Observability: OpenTelemetry • Datadog", "🖥️  Development: Go • Nginx • Cert-Manager", "🌐  Networking: NLB • VPC • NAT • Route 53", "📝  IaC: Terraform • Terragrunt • GitOps"],
      description: "Designed and implemented a production-ready, cloud-native government loan validation system demonstrating full-stack DevOps expertise. The platform features a Go-based microservices architecture deployed on AWS EKS with Infrastructure as Code using Terragrunt. Implemented GitOps workflows with ArgoCD, automated security scanning with Trivy, and established comprehensive observability using OpenTelemetry and Datadog. The solution includes multi-environment management (staging/production), zero-trust security practices, and automated disaster recovery capabilities.",
      github: "https://github.com/iam-ismaeel/End-to-End-Deployment-of-a-Loan-App-with-Observability.git"
    },
    {
      id: "project-2",
      title: "E-Commerce Microservices on AWS EKS",
      techStack: ["Kubernetes", "AWS EKS", "Helm", "Docker", "Nginx Ingress"],
      description: "Containerized and deployed an e-commerce platform (frontend: Next.js, backend: Laravel, Kafka messaging) to AWS EKS. Configured Ingress with NLB for routing, autoscaling, and zero-downtime deployments.",
      github: "https://github.com/yourusername/eks-ecommerce"
    },
    {
      id: "project-3",
      title: "Observability Stack for Kubernetes",
      techStack: ["Prometheus", "Grafana", "Loki", "Tempo", "Alertmanager"],
      description: "Implemented monitoring and observability for a Kubernetes cluster using the Prometheus stack. Set up metrics, logs, and distributed tracing with dashboards for real-time visibility and alerts via Slack.",
      github: "https://github.com/yourusername/k8s-observability"
    },
    {
      id: "project-4",
      title: "CI/CD Pipeline with GitHub Actions & ArgoCD",
      techStack: ["GitHub Actions", "ArgoCD", "Kubernetes", "Helm"],
      description: "Built a fully automated CI/CD pipeline where code commits trigger builds, tests, Docker image pushes, and GitOps deployments with ArgoCD. Enabled rollback strategies and progressive delivery.",
      github: "https://github.com/yourusername/githubactions-argocd"
    },
    {
      id: "project-5",
      title: "Cost Optimization & Autoscaling on AWS",
      techStack: ["AWS EC2", "AWS Auto Scaling", "CloudWatch", "Terraform"],
      description: "Designed an auto-scaling group with spot instances for cost optimization. Configured CloudWatch alarms and scaling policies to handle traffic spikes while reducing infrastructure costs.",
      github: "https://github.com/yourusername/aws-cost-optimization"
    },
    {
      id: "project-6",
      title: "End-to-End CI/CD for Full-Stack E-Commerce on AWS",
      techStack: ["🚀  CI/CD: Github Action • CodeDeploy", "Web Server: Nginx", "Processes Manager: PM2 • PHP-FPM ", "☁️  AWS Ecosystem: EC2 • RDS • VPC • IAM • S3 • CloudWatch • WorkMail • SES", "📊  Monitoring: CloudWatch ", "🖥️  Development: Laravel • Nextjs", "🌐  Networking: ALB • VPC • Route 53"],
      description: "An end-to-end DevOps project showcasing automated build, test, and deployment of a Next.js frontend and Laravel backend using GitHub Actions and AWS CodeDeploy. Focused on secure environment management, cloud infrastructure integration, and production-grade deployment practices.",
      github: "https://github.com/iam-ismaeel/Automatic-fullstack-app-deployment-.git"
    }
  ],


  contact: {
    whatsapp: "https://wa.me/+2348063170102",
    email: "mailto:kasaliismail2@gmail.com",
    github: "https://github.com/iam-ismaeel",
    // youtube: "https://www.youtube.com/@codewithrohit2927",
    //  instagram: "https://instagram.com/rohit.env"
  },

};

// Simple storage functions
export const getPortfolioData = (): PortfolioData => {
  const stored = localStorage.getItem('portfolioData');
  return stored ? JSON.parse(stored) : initialPortfolioData;
};

export const savePortfolioData = (data: PortfolioData): void => {
  localStorage.setItem('portfolioData', JSON.stringify(data));
};

