
export const siteData = {
    home: {
        hero: {
            title: "HeteroEmbod Lab",
            subtitle: "Embodied Intelligence for the Real World: From Reinforcement Learning to Autonomous Robotic Systems",
            description: "Our research focuses on Embodied Intelligence and Autonomous Robotic Systems in the real world, emphasizing a complete loop from problem modeling and algorithm design to real-robot verification.",
        },
        focusAreas: [
            {
                title: "High-fidelity Simulation & RL",
                image: "/assets/images/isaac-lab.jpg",
                description: "Building large-scale, high-fidelity RL training environments based on NVIDIA Isaac Lab to study motion and decision-making in complex terrains, narrow spaces, and uncertain conditions."
            },
            {
                title: "Embodied AI Real-world Deployment",
                image: "/assets/images/quadruped-robot.jpg",
                description: "Deploying learning-based policies and system-level safety mechanisms to quadruped robots to achieve narrow passage traversal, failure recovery, and autonomous navigation in complex scenarios."
            }
        ],
        recentProgress: {
            title: "Recent Progress",
            highlight: "Narrow Space Autonomous Traversal & Failure Awareness",
            content: `
Our current research focuses on the **autonomous traversal of quadruped robots in extremely narrow passages and complex indoor environments**.

**Key Challenges:**
- Local traversability judgment based on depth perception
- Stable deployment of RL policies on real robots
- Failure state detection and autonomous recovery mechanisms
- Safety and robustness in **Sim-to-Real** transfer

Research is ongoing and targeting submission to **IROS / RSS**.
      `
        }
    },
    about: {
        professor: {
            name: "Prof. Lei Chen",
            title: "Chair Professor · Dean of Information Hub",
            avatar: "/assets/images/team/LeiChen.jpg",
            website: "https://facultyprofiles.hkust-gz.edu.cn/faculty-personal-page/CHEN-Lei/leichen",
            bio: `Lei Chen received his PhD in Computer Science from the University of Waterloo, Canada.

He is currently the **Dean of the Information Hub at HKUST(GZ)**, Chair Professor of Data Science and Analytics, Director of the Big Data Institute at HKUST, and Director of the HKUST MOE/MSRA Key Laboratory for Information Technology.

**Awards & Honors:**
- 2020 CCF Science and Technology Award First Prize
- 2015 ACM SIGMOD Test-of-Time Award
- 2022 VLDB Best Research Paper Award
- 2014 VLDB Excellent Demonstration Award

He served as PC Co-Chair for VLDB 2019 and is currently the Editor-in-Chief of IEEE TKDE. He is an **IEEE Fellow**, **ACM Fellow**, and **ACM Distinguished Scientist**.`,
        },
        teamIntro: {
            title: "Who We Are",
            content: "We are Embodied AI Enthusiasts dedicated to research in Robotic Embodied Intelligence. Our work strives to enable robots to achieve high-level autonomous motion and navigation in complex, unknown environments.",
            focusAreas: [
                { title: "Reinforcement Learning", desc: "Motion control and gait planning for robots." },
                { title: "Embodied AI", desc: "Exploring the deep coupling of perception and action." },
                { title: "Navigation Optimization", desc: "Improving narrow passage capability in Nav2 frameworks." }
            ]
        },
        recruitment: {
            title: "Join Us",
            desc: "We are looking for students with skills in:",
            skills: ["Python, C++, ROS 2 (Nav2)", "Isaac Lab, Gazebo Sim, Mujoco", "Deep RL (PPO/SAC), Visual Navigation, Event Camera Localization"],
            contact: {
                email: "Ironlings@hkust-gz.edu.cn",
                github: "https://github.com/Ironlings"
            }
        }
    },
    research: {
        title: "Research Projects",
        overview: "We focus on Embodied Intelligence in the real world.",
        projects: [
            {
                id: "narrow-passage",
                title: "Narrow Passage Navigation",
                image: "/assets/images/research/1.png",
                tags: ["Embodied AI", "Reinforcement Learning", "Navigation"],
                owner: { name: "Xiaotian Zou", avatar: "/assets/images/team/xiaotian.jpg" },
                description: "Addressing localization and path planning for quadruped robots in narrow environments, optimized with Control Barrier Functions (CBF).",
                keywords: ["Nav2", "Isaac Lab", "Control Barrier Functions"],
                content: `
## Motivation

In real-world indoor environments, quadruped robots often face challenges when traversing **extremely narrow passages**:
- Hesitation to enter
- Repeated tentative movements
- Feasible planning but execution failure

Traditional navigation systems struggle to explicitly express "I have failed".

---

## System Overview

This project focuses on **Failure Awareness + System-Level Decision Making**, rather than optimizing a single controller.

**Pipeline**
1. **Perception**: Uncertainty in passage width/depth
2. **Decision**: Explicit modeling of failure states
3. **Behavior**: Switching between exploration, exiting, and retrying strategies

---

## Method

- **Reinforcement Learning** for local traversal strategies
- **Failure Events** recorded in the world model
- **Dynamic Adjustment** of costmap and behavioral strategies

---

## Real-World Deployment

- **Platform**: Quadruped Robot
- **Scenario**: Real office environments
- **Characteristics**: Non-ideal sensing, repetitive interference

🎥 Demo video to be displayed here.

---

## Target Venue

> *IROS / RSS*
        `
            },
            {
                id: "unmanned-cart",
                title: "Unmanned Cart Delivery",
                image: "/assets/images/research/unmanned_cart.png",
                tags: ["Nav2", "Service Robot"],
                description: "Multi-floor delivery service using unmanned carts.",
                keywords: ["Nav2"],
                content: `
## Overview

This project implements an autonomous delivery service capable of navigating across different floors.

**Key Features:**
- **Multi-floor Navigation**: Seamlessly integrates elevator riding capability.
- **Nav2 Stack**: Utilizes the ROS2 Navigation 2 stack for robust path planning and obstacle avoidance.
        `
            },
            {
                id: "simulation-platform",
                title: "Simulation Platform Construction",
                image: "/assets/images/research/sim_platform.png",
                tags: ["Isaac Lab", "Gazebo", "Sim-to-Real"],
                description: "Large-scale RL training using NVIDIA Isaac Lab/Gym and Gazebo on Ubuntu 22.04, building embodied AI interaction logic.",
                keywords: ["NVIDIA Isaac Lab", "Gazebo"],
                content: `
## Overview

We have built a comprehensive simulation platform to support large-scale reinforcement learning training and embodied AI research.

**Tools & Environment:**
- **NVIDIA Isaac Lab/Gym**: High-performance physics simulation for RL.
- **Gazebo**: Classic robotics simulation for system integration testing.
- **OS**: Ubuntu 22.04 LTS.

This platform allows us to validate embodied AI interaction logic before real-world deployment.
        `
            }
        ]
    },
    engineering: {
        title: "Engineering & Systems",
        philosophy: "We focus on 'Can the system really run in the real world?', emphasizing system-level integration, failure handling, and real-world deployment.",
        projects: [
            {
                id: "elevator",
                title: "Autonomous Elevator Riding",
                image: "/assets/images/engineering/elevator.png",
                owners: [
                    { name: "Zibin Wu", avatar: "/assets/images/team/wzb.jpg" },
                    { name: "Beirong Cui" }
                ],
                tags: ["YOLOv11", "FSM", "HRI", "Real-World Deployment"],
                description: "Real-world autonomous elevator riding system for robots.",
                content: `
## Project Overview
An autonomous system enabling robots to operate elevators in real-world environments without human intervention.

**Techniques:**
- **YOLOv11**: For accurate detection of elevator buttons, doors, and floor indicators.
- **FSM (Finite State Machine)**: To manage the complex logic flow of calling, entering, selecting floors, and exiting elevators.
- **Human-Robot Interaction**: Handling scenarios with other passengers in the elevator.
        `
            },
            {
                id: "bag-detection",
                title: "Bag Detection & Grasping",
                image: "/assets/images/engineering/bag_detection.png",
                owners: [
                    { name: "Zibin Wu", avatar: "/assets/images/team/wzb.jpg" }
                ],
                tags: ["SAM 3", "RGB-D", "ROS2", "MoveIt"],
                description: "Bag detection and grasping using RGB-D and SAM 3.",
                content: `
## Project Overview
A robust system for detecting and grasping bags in unstructured environments.

**Highlights:**
- **Recognition**: Uses SAM 3 (Segment Anything Model) combined with RGB-D depth information for precise object segmentation and localization.
- **Manipulation**: Integrated with ROS2 and MoveIt for planning collision-free grasping trajectories.
- **Performance**: Achieved >80% grasping success rate in tests.
        `
            },
            {
                id: "digital-twin",
                title: "Digital Twin System",
                image: "/assets/images/engineering/digital_twin.png",
                owners: [
                    { name: "Zibin Wu", avatar: "/assets/images/team/wzb.jpg" }
                ],
                tags: ["Isaac Sim", "Gazebo", "Sim-to-Real", "Failure Reproduction"],
                description: "Digital twin system for failure reproduction and sim-to-real testing.",
                content: `
## Project Overview
A Digital Twin system designed to bridge the gap between simulation and reality.

**Key Functions:**
- **Failure Reproduction**: Recreating real-world failure cases in simulation to analyze root causes.
- **Sim-to-Real**: Validating algorithms in a high-fidelity digital replica before deploying to physical hardware.
- ** Platforms**: Leverages Isaac Sim and Gazebo.
        `
            }
        ]
    },
    people: [
        {
            name: "Xiaotian Zou",
            role: "Core Member",
            id: "xiaotian-zou",
            avatar: "/assets/images/team/xiaotian.jpg",
            links: [{ label: "GitHub", url: "https://github.com/jacksonzouxiaotian" }, { label: "Email", url: "mailto:2627283077@qq.com" }],
            bio: "I am Xiaotian Zou, currently focusing on Embodied AI for Quadruped Robots. My work aims to enable robots to achieve high-level autonomous motion and navigation in complex, unknown environments.",
            content: `
## Research Interests
* **Reinforcement Learning**: Motion control and gait planning for quadruped robots.
* **Embodied AI**: Exploring the deep coupling of perception and action.
* **Navigation Optimization**: improving narrow passage traversal within the Nav2 framework.

## Education
* **University of New South Wales (UNSW)** | Master | 2023-2025
    * Major: Artificial Intelligence

## Research & Projects

### 🤖 Quadruped Narrow Passage Navigation
* **Description**: Optimized localization and path planning for quadruped robots in narrow environments using control barrier functions (CBF).
* **Keywords**: \`Nav2\`, \`Isaac Lab\`, \`Control Barrier Functions\`

### 💻 Simulation Platform Construction
* Built a large-scale RL training environment using **NVIDIA Isaac Lab/Gym** and **Gazebo**.
* Implemented embodied AI interaction logic on **Ubuntu 22.04**.

## Skills
* **Languages**: Python, C++, ROS 2 (Nav2)
* **Simulation**: Isaac Lab, Gazebo Sim, Mujoco
* **Algorithms**: Deep RL (PPO/SAC), Visual Navigation, Event Camera Localization
      `
        },
        {
            name: "Beirong Cui",
            role: "Core Member",
            id: "beirong-cui",
            content: "Content to be added."
        },
        {
            name: "Zibin Wu",
            role: "Core Member",
            id: "zibin-wu",
            avatar: "/assets/images/team/wzb.jpg",
            links: [{ label: "Email", url: "mailto:zwu945@connect.hkust-gz.edu.cn" }],
            bio: "Male / 2002. Student at HKUST(GZ).",
            content: `
## Education

* **Sun Yat-sen University** — Artificial Intelligence: 2021.09 - 2025.07
* **HKUST(GZ)** — Big Data Intelligence: 2025.09 - Present

## Projects

### 🛗 YOLOv11-based Indoor Floor Recognition
* Utilized YOLOv11 for indoor scene perception to automatically recognize and classify floors.
* Achieved >98% accuracy, significantly improving efficiency.

### 🤖 Unmanned Mobile Platform Navigation
* Designed localization and navigation for a 4-wheel mobile platform in multi-floor environments based on ROS2.
* Implemented map management, elevator riding, and task switching.

### 🦾 Manipulator Recognition & Grasping
* Fused RGB and depth information; used SAM3 for object recognition and localization.
* Optimized grasping strategies with >80% success rate.
      `
        },
        {
            name: "Wei Liu",
            role: "Core Member",
            id: "wei-liu",
            content: "Content to be added."
        },
        {
            name: "Xin Li",
            role: "Core Member",
            id: "xin-li",
            content: "Content to be added."
        }
    ]
};
