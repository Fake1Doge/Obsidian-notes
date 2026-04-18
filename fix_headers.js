const fs = require('fs');
const file = 'Y1S2/CKS121 Software Requirements.md';
let c = fs.readFileSync(file, 'utf8');

const map = {
  '## 1. Introduction to Requirements Engineering (RE)': '## 1.1 Introduction to Requirements Engineering (RE)',
  '### 1.1 The Importance of Requirements Engineering': '### 1.1.1 The Importance of Requirements Engineering',
  '### 1.2 Core Definitions': '### 1.1.2 Core Definitions',
  '### 1.3 The Goal of Requirements Engineering': '### 1.1.3 The Goal of Requirements Engineering',
  '### 1.4 The Three Dimensions of RE': '### 1.1.4 The Three Dimensions of RE',
  '### 1.5 The Three Types of Requirements': '### 1.1.5 The Three Types of Requirements',
  '## 2. Fundamentals of Requirements Engineering': '## 1.2 Fundamentals of Requirements Engineering',
  '### 2.1 Influence of Constraints': '### 1.2.1 Influence of Constraints',
  '### 2.2 Non-functional Requirements (NFRs)': '### 1.2.2 Non-functional Requirements (NFRs)',
  '### 2.3 RE and Organizational Processes': '### 1.2.3 RE and Organizational Processes',
  '### 2.4 RE and Development Activities': '### 1.2.4 RE and Development Activities',
  '### 2.5 What vs. How (Problem vs. Solution)': '### 1.2.5 What vs. How (Problem vs. Solution)',
  '### 2.6 Evolution: Traditional vs. Continuous RE': '### 1.2.6 Evolution: Traditional vs. Continuous RE',
  '## 3. The Requirements Engineering Framework': '## 2.1 The Requirements Engineering Framework',
  '### 3.1 System Vision': '### 2.1.1 System Vision',
  '### 3.2 The RE Context': '### 2.1.2 The RE Context',
  '### 3.3 Core Activities of RE': '### 2.1.3 Core Activities of RE',
  '### 3.4 Requirements Artefacts': '### 2.1.4 Requirements Artefacts',
  '### 3.5 Cross-Sectional Activities': '### 2.1.5 Cross-Sectional Activities',
  '### 3.1 Context of a System': '## 3.1 Context of a System',
  '### 3.2 System Context and Context Objects': '## 3.2 System Context and Context Objects',
  '### 3.3 Change of System Context': '## 3.3 Change of System Context',
  '### 3.4 Consideration of System Context Objects': '## 3.4 Consideration of System Context Objects',
  '### 3.5 The Three Facets of System Context': '## 3.5 The Three Facets of System Context',
  '### 3.6 Properties of System Context Objects': '## 3.6 Properties of System Context Objects',
  '### 3.7 Documentation of Context Information': '## 3.7 Documentation of Context Information',
  '### 4.1 Introduction in Requirements Elicitation': '## 4.1 Introduction in Requirements Elicitation',
  '### 4.2 Requirements Sources': '## 4.2 Requirements Sources',
  '### 4.3 Identification of Requirements Sources': '## 4.3 Identification of Requirements Sources',
  '### 4.4 Eliciting Existing Requirements vs. Creating Innovative Requirements': '## 4.4 Eliciting Existing Requirements vs. Creating Innovative Requirements',
  '### 4.5 Common Elicitation Techniques': '## 4.5 Common Elicitation Techniques',
  '### 4.6 Case Study: TOXLAND': '## 4.6 Case Study: TOXLAND',
  '#### 3.5.1 Subject Facet': '### 3.5.1 Subject Facet',
  '#### 3.5.2 Usage Facet': '### 3.5.2 Usage Facet',
  '#### 3.5.3 IT System Facet': '### 3.5.3 IT System Facet',
  '#### 4.2.1 Stakeholders': '### 4.2.1 Stakeholders',
  '#### 4.2.2 Documents': '### 4.2.2 Documents',
  '#### 4.2.3 Existing Systems': '### 4.2.3 Existing Systems',
  '#### 4.4.1 Eliciting Existing Requirements': '### 4.4.1 Eliciting Existing Requirements',
  '#### 4.4.2 Creation of Innovative Requirements': '### 4.4.2 Creation of Innovative Requirements'
};

for (const [oldStr, newStr] of Object.entries(map)) {
  c = c.replace(oldStr, newStr);
}
fs.writeFileSync(file, c);
console.log("Headers updated successfully.");
