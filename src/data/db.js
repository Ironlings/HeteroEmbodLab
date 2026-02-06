
const baseUrl = import.meta.env.BASE_URL;

// Helper to handle path concatenation cleanly
const getPath = (path) => {
    // Remove leading slash if exists to avoid double slashes with baseUrl which usually ends in slash
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${baseUrl}${cleanPath}`;
};

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
                image: getPath("assets/images/isaac-lab.jpg"),
                description: "Building large-scale, high-fidelity RL training environments based on NVIDIA Isaac Lab to study motion and decision-making in complex terrains, narrow spaces, and uncertain conditions."
            },
            {
                title: "Embodied AI Real-world Deployment",
                image: getPath("assets/images/quadruped-robot.jpg"),
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
            avatar: getPath("assets/images/team/LeiChen.jpg"),
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
            skills: ["Python, C++, ROS 2", "LLM", "RL", "VLA"],
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
                image: getPath("assets/images/research/1.png"),
                tags: ["Embodied AI", "Reinforcement Learning", "Navigation"],
                owner: { name: "Xiaotian Zou", avatar: getPath("assets/images/team/xiaotian.jpg") },
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
                id: "simulation-platform",
                title: "Simulation Platform Construction",
                image: getPath("assets/images/research/sim_platform.png"),
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
                id: "navigation",
                title: "Multi-floor Navigation System",
                image: getPath("assets/images/engineering/nav.gif"),
                owners: [
                    { name: "Zibin Wu", avatar: getPath("assets/images/team/wzb.jpg") },
                    { name: "Beirong Cui" }
                ],
                tags: ["ROS2", "ICP", "Nav2"],
                description: "A multi-floor localization and autonomous navigation system for a four-wheeled mobile platform.",
                content: `
## Project Overview
This project focuses on developing a multi-floor localization and autonomous navigation system for an unmanned four-wheeled mobile platform, capable of safely and efficiently operating in complex indoor environments.

The system addresses challenges such as localization drift, environment transitions, and dynamic obstacles during cross-floor operations, demanding high levels of autonomous perception and navigation safety.

**Work Highlights:**
- **System Design**: Built on ROS2, the platform supports multi-floor mapping, elevator-based floor transitions, and multi-task state switching.
- **Perception & Navigation**: Fuses laser and visual sensing to enable real-time static and dynamic obstacle avoidance.
- **Scene Understanding**: Uses YOLOv11 for indoor scene perception, allowing automatic recognition and classification of multi-floor environments.
- **Results**: Achieved stable localization and autonomous navigation across multiple floors, including safe elevator operation and dynamic obstacle avoidance. 

[video]https://player.bilibili.com/player.html?isOutside=true&aid=115920798221556&bvid=BV1VJkeBdEce&cid=35822112230&p=1

        `
            },
            {
                id: "elevator",
                title: "Floor & Lift Door Detection",
                image: getPath("assets/images/engineering/liftdetect.png"),
                owners: [
                    { name: "Zibin Wu", avatar: getPath("assets/images/team/wzb.jpg") }
                ],
                tags: ["YOLOv11"],
                description: "Collect and annotate images of elevator floor indicators (1–6) and lift door states (open/closed), and train a YOLOv11-based model for robust elevator perception and classification in real-world environments.",
                content: `
## Project Overview
This project aims to build an autonomous elevator perception module that enables mobile robots to recognize and interact with elevators in real-world indoor environments without human assistance.

The system focuses on accurately identifying elevator floor indicators and lift door states, providing reliable visual input for downstream navigation and control modules.

**Techniques:**
- **YOLOv11**: Trained on a custom-labeled dataset to detect elevator floor numbers (1–6) and lift door states (open/closed) with high robustness under varying lighting and viewpoints.


        `
            },
            {
                id: "bag-detection",
                title: "Bag Detection & Grasping",
                image: getPath("assets/images/engineering/grasp.gif"),
                owners: [
                    { name: "Zibin Wu", avatar: getPath("assets/images/team/wzb.jpg") }
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
                id: "bag-handing",
                title: "Bag Handing",
                image: getPath("assets/images/engineering/put.gif"),
                owners: [
                    { name: "Zibin Wu", avatar: getPath("assets/images/team/wzb.jpg") }
                ],
                tags: ["ArUco", "RGB-D", "ROS2", "MoveIt"],
                description: "Detect and localize basket using ArUco markers and RGB-D sensing, enabling reliable handover from a mobile manipulator to a legged robot.",
                content: `
## Project Overview
This project develops a robust bag handover system that enables a mobile manipulator to autonomously pass a bag to a legged robot in indoor environments.

By integrating visual perception, depth sensing, and motion planning, the system ensures accurate localization and safe, reliable manipulation during the handover process.

**Highlights:**
- **Perception**: Utilizes ArUco marker detection with RGB-D depth information for precise basket localization and pose estimation.
- **Manipulation**: Integrated with ROS2 and MoveIt to plan and execute handover trajectories.
- **Performance**: Achieved over 70% success rate in bag grasping and handover experiments.

        `
            },
            {
                id: "digital-twin",
                title: "Digital Twin System",
                image: getPath("assets/images/engineering/twin.png"),
                owners: [
                    { name: "Zibin Wu", avatar: getPath("assets/images/team/wzb.jpg") }
                ],
                tags: ["XR", "Digital Twins", "Nav2"],
                description: "Digital twin system for XR.",
                content: `
## Project Overview
A Digital Twin system designed to bridge the gap between virtual and reality.

[video]https://player.bilibili.com/player.html?isOutside=true&aid=115977488500756&bvid=BV1Yr6FBdEax&cid=35685270967&p=1
        `
            },
            {
                id: "panel",
                title: "Panel Alignment",
                image: getPath("assets/images/engineering/align.gif"),
                owners: [
                    { name: "Zibin Wu", avatar: getPath("assets/images/team/wzb.jpg") }
                ],
                tags: ["SAM3", "RGB-D", "MoveIt", "ROS2"],
                description: "Develops an autonomous system for aligning a mobile platform with elevator panels.",
                content: `
## Project Overview
This project develops a system for autonomously aligning a mobile robot with elevator panels, ensuring accurate positioning for safe button pressing and interaction.

The system integrates visual perception, depth sensing, and motion planning to allow the robot to approach and align with panels reliably, even under varying viewpoints and lighting conditions.

**Key Functions:**
- **Panel Detection**: Uses SAM3 combined with RGB-D sensing to segment and locate elevator panels accurately.
- **Pose Alignment**: Computes optimal approach trajectories using ROS2 and MoveIt for precise positioning relative to the panel.
- **Performance**: Tested under real-world conditions, achieving high alignment accuracy.

        `
            }
        ]
    },
    people: [
        {
            name: "Xiaotian Zou",
            role: "Core Member",
            id: "xiaotian-zou",
            avatar: getPath("assets/images/team/xiaotian.jpg"),
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
            avatar: getPath("assets/images/team/wzb.jpg"),
            links: [{ label: "Email", url: "mailto:zwu945@connect.hkust-gz.edu.cn" }],
            bio: "Male / 2002. Student at HKUST(GZ).",
            content: `
## Education

* **Sun Yat-sen University** — Artificial Intelligence: 2021.09 - 2025.07
* **HKUST(GZ)** — Big Data Intelligence: 2025.09 - Present




      `
        },
        {
            name: "Wei Liu",
            role: "Core Member",
            id: "wei-liu",
            avatar: getPath("assets/images/team/lw.jpg"),
            links: [{ label: "HomePage", url: "https://willliu322.github.io" }],
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
