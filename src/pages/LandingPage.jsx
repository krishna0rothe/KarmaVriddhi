import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  FileText,
  Clock,
  AlertTriangle,
  Search,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  ArrowRight,
} from "lucide-react";
import "./LandingPage.css";

const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="landing-page">
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <div className="container">
          <nav>
            <div className="logo">कर्मवृद्धि</div>
            <ul>
              <li>
                <a href="#problem">Problem</a>
              </li>
              <li>
                <a href="#solution">Solution</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <button className="cta-button">Get Started</button>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Transforming Faculty Evaluations with AI-Driven Precision</h1>
            <p>
              Harness the power of data, AI, and intuitive design to
              revolutionize faculty appraisals. Welcome to कर्मवृद्धि.
            </p>
            <div className="cta-buttons">
              <button className="btn btn-primary">
                Get Started <ArrowRight />
              </button>
              <button className="btn btn-secondary">
                Explore More <ChevronDown />
              </button>
            </div>
          </div>
        </div>
        <div className="hero-background"></div>
      </section>

      <section id="problem" className="problem">
        <div className="container">
          <h2>Current Faculty Appraisal Systems Are Outdated</h2>
          <p>
            Paper-based evaluations are inefficient, subjective, and lack
            transparency. Administrators struggle with delays and faculty are
            burdened with repetitive paperwork.
          </p>
          <div className="problem-icons">
            <div className="icon-item">
              <AlertTriangle />
              <span>Lack of Transparency</span>
            </div>
            <div className="icon-item">
              <Clock />
              <span>Delayed Reports</span>
            </div>
            <div className="icon-item">
              <FileText />
              <span>Manual Errors</span>
            </div>
            <div className="icon-item">
              <Search />
              <span>Time-Consuming Processes</span>
            </div>
          </div>
        </div>
      </section>

      <section id="solution" className="solution">
        <div className="container">
          <h2>कर्मवृद्धि: AI-Powered Faculty Evaluations</h2>
          <p>
            A cutting-edge platform that automates evaluations, ensures
            transparency, and gives real-time insights. Powered by AI and
            intuitive design.
          </p>
          <div className="feature-cards">
            <div className="feature-card">
              <h3>AI-Based Analytics</h3>
              <p>Advanced algorithms for fair and comprehensive evaluations</p>
            </div>
            <div className="feature-card">
              <h3>Real-Time Reporting</h3>
              <p>Instant access to up-to-date performance metrics</p>
            </div>
            <div className="feature-card">
              <h3>Self-Appraisal Portal</h3>
              <p>User-friendly interface for faculty input</p>
            </div>
            <div className="feature-card">
              <h3>Secure Role-Based Access</h3>
              <p>Ensuring data privacy and appropriate permissions</p>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="process">
        <div className="container">
          <h2>How It Works: A 4-Step Process</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Login & Submit Self-Appraisal</h3>
                <p>
                  Faculty members securely access the platform and input their
                  achievements.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>AI-Driven Evaluation</h3>
                <p>
                  Our advanced algorithms analyze the submitted data for fair
                  assessment.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Real-Time Data Review</h3>
                <p>
                  Administrators can access live updates and performance
                  metrics.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Custom Reports for Faculty & Admins</h3>
                <p>
                  Comprehensive reports generated for both faculty and
                  administration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="impact" className="impact">
        <div className="container">
          <h2>From Manual to Modern: See the Difference</h2>
          <div className="impact-slider">
            <div className="impact-before">
              <h3>Before</h3>
              <img
                src="/placeholder.svg?height=300&width=400&text=Before"
                alt="Before कर्मवृद्धि"
              />
              <p>Time-consuming paper-based process</p>
            </div>
            <div className="impact-after">
              <h3>After</h3>
              <img
                src="/placeholder.svg?height=300&width=400&text=After"
                alt="After कर्मवृद्धि"
              />
              <p>Streamlined digital evaluation system</p>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials">
        <div className="container">
          <h2>Hear What Our Users Are Saying</h2>
          <div className="testimonial-carousel">
            <div className="testimonial-card">
              <p>
                "कर्मवृद्धि has transformed our evaluation process. It's
                efficient and insightful."
              </p>
              <div className="testimonial-author">
                <img
                  src="/placeholder.svg?height=50&width=50&text=JS"
                  alt="Dr. J. Smith"
                />
                <div>
                  <h4>Dr. J. Smith</h4>
                  <span>Dean of Engineering</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <p>
                "The real-time analytics have greatly improved our
                decision-making process."
              </p>
              <div className="testimonial-author">
                <img
                  src="/placeholder.svg?height=50&width=50&text=AP"
                  alt="Prof. A. Patel"
                />
                <div>
                  <h4>Prof. A. Patel</h4>
                  <span>Department Head, Computer Science</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="team">
        <div className="container">
          <h2>Meet the Tech Tourists</h2>
          <div className="team-grid">
            {[
              {
                name: "Aarav Patel",
                role: "Team Leader",
                position: "Full-Stack Developer",
              },
              {
                name: "Priya Singh",
                role: "Member",
                position: "UI/UX Designer",
              },
              {
                name: "Rahul Sharma",
                role: "Member",
                position: "Data Scientist",
              },
              {
                name: "Ananya Desai",
                role: "Member",
                position: "Backend Developer",
              },
              {
                name: "Vikram Mehta",
                role: "Member",
                position: "Frontend Developer",
              },
              { name: "Neha Gupta", role: "Member", position: "QA Engineer" },
            ].map((member, index) => (
              <div key={index} className="team-member">
                <img
                  src={`/placeholder.svg?height=150&width=150&text=${member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}`}
                  alt={member.name}
                />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <p>{member.position}</p>
              </div>
            ))}
          </div>
          <div className="mentors">
            <h3>Our Mentors</h3>
            <div className="mentor">
              <img
                src="/placeholder.svg?height=100&width=100&text=AM"
                alt="Prof. Ankit Mehta"
              />
              <div>
                <h4>Prof. Ankit Mehta</h4>
                <p>Chief Mentor</p>
              </div>
            </div>
            <div className="mentor">
              <img
                src="/placeholder.svg?height=100&width=100&text=PD"
                alt="Dr. Priya Desai"
              />
              <div>
                <h4>Dr. Priya Desai</h4>
                <p>Academic Advisor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Ready to Elevate Faculty Appraisals?</h2>
          <div className="cta-buttons">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-secondary">Request a Demo</button>
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>कर्मवृद्धि</h3>
              <p>Revolutionizing faculty appraisals for the modern era.</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="#problem">Problem</a>
                </li>
                <li>
                  <a href="#solution">Solution</a>
                </li>
                <li>
                  <a href="#features">Features</a>
                </li>
                <li>
                  <a href="#team">Team</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact Us</h4>
              <p>Parul Polytechnic Institute, Parul University, Vadodara</p>
              <p>Email: info@karmavriddhi.com</p>
            </div>
            <div className="footer-section">
              <h4>Connect With Us</h4>
              <div className="social-links">
                <a href="#">
                  <Linkedin />
                </a>
                <a href="#">
                  <Twitter />
                </a>
                <a href="#">
                  <Instagram />
                </a>
                <a href="#">
                  <Mail />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            &copy; {new Date().getFullYear()} कर्मवृद्धि. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
