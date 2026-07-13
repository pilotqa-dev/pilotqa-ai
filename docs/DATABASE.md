# PilotQA AI Database Design

## Version
0.1.0

---

# Entity Relationship

Organization
└── Users
└── Projects
    ├── Requirements
    │   ├── Scenarios
    │   │   └── Test Cases
    │   └── AI Analysis
    ├── Test Suites
    ├── Test Executions
    ├── Defects
    ├── Reports
    └── Attachments

---

# Tables

## organizations

| Column | Type |
|---------|------|
| id | UUID |
| name | String |
| code | String |
| status | Active / Inactive |
| createdAt | DateTime |
| updatedAt | DateTime |

---

## users

| Column | Type |
|---------|------|
| id | UUID |
| organizationId | UUID |
| firstName | String |
| lastName | String |
| email | String |
| password | String |
| role | Enum |
| status | Active / Inactive |
| createdAt | DateTime |

---

## projects

| Column | Type |
|---------|------|
| id | UUID |
| organizationId | UUID |
| name | String |
| projectKey | String |
| description | String |
| projectType | Enum |
| status | Enum |
| createdBy | UUID |
| createdAt | DateTime |

---

## requirements

Linked to Project

---

## scenarios

Generated manually or by AI

---

## test_cases

Linked to Scenario

---

## executions

Stores execution history

---

## defects

Stores all bug reports

---

# Future AI Tables

ai_prompts

ai_generations

ai_feedback

ai_usage