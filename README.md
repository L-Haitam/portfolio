# Cloud-Native SIEM & GRC Framework Alignment (Wazuh & Azure)

## 📌 Project Overview
This project demonstrates the design and deployment of a scalable, cloud-native **Security Information and Event Management (SIEM)** architecture. The primary objective was to bridge the gap between decentralized endpoint telemetry and centralized governance by simulating real-world regulatory requirements. 

The environment serves as a functional proof-of-concept for **Continuous Monitoring** and **Log Integrity** as mandated by international and national frameworks.

## Architecture
* **Core SIEM:** Wazuh Manager hosted on an **Ubuntu 22.04 LTS** Azure Virtual Machine.
* **Monitored Endpoints:** Hybrid telemetry from a local **Windows 10** host and a **Windows Subsystem for Linux (WSL)** instance.
* **Security Layer:** All agent communication is secured via **AES-256 encryption**.
* **Network Governance:** Access is managed through refined **Azure Network Security Group (NSG)** rules, strictly enforcing the **Principle of Least Privilege** through source IP whitelisting.

## Technical Validation & Detection
The environment was subjected to live attack simulations to validate its defensive posture:
* **Credential-Based Attacks:** Validated real-time detection of brute-force and unauthorized sudo attempts (NIST AC-7 / AU-14).
* **File Integrity Monitoring (FIM):** Automated detection of unauthorized changes to critical system paths (/etc, /bin) using cryptographic hash verification.
* **Custom Rule Engineering:** Authored custom detection rules (Rule ID: 100001) to identify attacker persistence via new account creation.

## Governance, Risk, and Compliance (GRC)
A core component of this project is a comprehensive **Gap Analysis** evaluating the environment against three key frameworks:
1.  **NIST SP 800-53 Rev. 5:** Focusing on Audit, Accountability, and Identification.
2.  **ISO/IEC 27001:2022:** Mapping technological controls to organizational security themes.
3.  **Morocco’s Loi 05-20:** Aligning with national cybersecurity obligations for infrastructure monitoring and incident notification.

## Risk Management & Remediation
Beyond detection, the project includes a risk-based **Consolidated Risk Register** and **Remediation Roadmap**:
* **Risk Register:** Documents highest-priority gaps, including missing IS policies and unencrypted local logs.
* **Roadmap:** Prioritizes high-impact governance tasks—such as drafting a formal **Information Security Policy** and configuring **automated backups**—to move the environment toward full compliance.

---

### Documentation Included
* **Executive Summary:** High-level architectural and objective overview.
* **Technical Detection Report:** Live testing methodology and forensic evidence.
* **Gap Analysis Report:** Compliance assessment, risk register, and strategic roadmap.
