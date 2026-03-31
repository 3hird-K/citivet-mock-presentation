# SyncVet Presentation Script
### Mock Defense — Cagayan De Oro City Veterinary Office | BSIT Capstone

---

## SLIDE 1 — Title Slide

Good morning/afternoon, panel members and everyone present. My name is [Your Name], and today I will be presenting our capstone project titled **SyncVet** — a Mobile and Web Platform for Animal Health Services, developed specifically for the Cagayan De Oro City Veterinary Office.

This system was designed to address real, on-the-ground challenges faced by our local veterinary office in managing animal health data. I hope that by the end of this presentation, you will see how SyncVet can make a meaningful difference in public health and animal welfare in our city.

---

## SLIDE 2 — Background of the Study

To understand why SyncVet was needed, let us look at the bigger picture.

Globally, the World Health Organization estimates that rabies causes approximately **59,000 human deaths every year**, with the majority occurring in Africa and Asia. Here in the Philippines, we record around **300 to 400 human rabies deaths annually**, alongside roughly **4 million animal bite cases** each year.

Despite national vaccination programs, these numbers remain alarming. What makes this even more concerning is a recent Department of Health update showing that **76% of recent rabies cases involved bites from owned but unvaccinated pets** — not stray animals. This tells us the problem is not just about strays; it is about our systems for tracking and managing pet vaccination.

Right here in Cagayan de Oro, the City Veterinary Office is the frontline agency for animal health. However, their current operations still rely heavily on **manual paper-based systems**. Field teams write in logbooks, physically bring those records back to the office, and then manually encode them into spreadsheets. Pet owners with multiple animals must register each one individually. There is no real-time visibility, no hotspot detection, and no way to act fast when it matters most.

These are the problems we set out to solve.

---

## SLIDE 3 — Statement of the Problem

Our research identified one general problem and five specific problems.

The **general problem** is this: the City Veterinary Office lacks an integrated, real-time digital system. Their workflows are fragmented, paper-dependent, and unable to support fast decision-making.

Breaking it down into specifics:

**Problem 01** — There is no unified digital system. Records from field operations and walk-in services are completely disconnected from each other.

**Problem 02** — Field teams rely on paper logbooks. These physical records must be transported back to the office before they can be processed, causing significant delays.

**Problem 03** — There is no mobile tool for on-site data capture. Veterinary teams have no offline-capable app to record services in the field and sync them later.

**Problem 04** — Manual entry is repetitive and time-consuming, especially for pet owners with multiple animals who must go through the registration process for each one individually.

**Problem 05** — There is no real-time data integration. Without automatic synchronization, central records are always behind, slowing down hotspot detection and resource planning.

---

## SLIDE 4 — Objectives of the Study

Given these problems, our study has one general objective and three specific objectives.

Our **general objective** is to design, develop, and test SyncVet — a real-time mobile and web-based platform for integrated management of rabies vaccination, spay/neuter services, and walk-in patient management at the Cagayan De Oro City Veterinary Office.

To achieve this, we have three specific objectives:

**First, to DESIGN** — We will design the complete system architecture, user interface, database structure, and data synchronization mechanism for both the Flutter mobile application and the web admin portal.

**Second, to DEVELOP** — We will build the core modules of the platform, including batch pet entry, offline data capture for field operations, walk-in patient management, real-time synchronization, and digital patient records with search and reporting features.

**Third, to TEST** — We will evaluate the system for functionality, usability by both veterinary staff and pet owners, offline performance, data accuracy, synchronization reliability, and overall system effectiveness through simulation, user testing, and feedback evaluation.

---

## SLIDE 5 — Significance of the Study

SyncVet is significant to multiple groups of stakeholders.

For the **City Veterinary Office**, SyncVet provides a practical digital solution that reduces reliance on paper logbooks, improves data accuracy and timeliness, and directly supports the city's goal of becoming rabies-free.

For **veterinary personnel and field staff**, the system gives them a user-friendly mobile interface with offline capability — reducing double-entry and paperwork so they can focus more on delivering services.

For **pet owners and the general public**, SyncVet improves access to animal health services, makes vaccination tracking easier, and encourages responsible pet ownership through better communication with the CVO.

For **local government planners and policymakers**, the system generates aggregated reports and hotspot maps to support evidence-based planning and monitoring of animal health programs.

And finally, for **future researchers and BSIT students**, SyncVet serves as a documented case study of mobile-web system development for veterinary information management — a reference for similar capstone projects in the future.

---

## SLIDE 6 — Scope and Limitations

Let me now clarify what the study covers and where its boundaries lie.

In terms of **scope**, SyncVet is built as a Flutter-based Android application for both field veterinary staff and pet owners, paired with a web administration portal for CVO managers. The system supports dogs, cats, poultry, swine, cattle, and other animals receiving services such as vaccination, deworming, spay/neuter, and clinical consultations. It covers both urban and peri-urban barangays served by the CVO in Cagayan de Oro.

The core modules include animal registration, field vaccination data capture with offline capability, walk-in service recording, appointment scheduling, real-time synchronization, and dashboards for both pet owners and CVO administrators.

In terms of **limitations**, the system is currently limited to Cagayan de Oro City only. It does not include advanced features such as predictive analytics, genetic modeling for livestock, or multi-agency coordination workflows. Integration with national systems like Phil-AHIS is not implemented in this version, though the architecture is designed to support that in the future. The system also assumes a minimum level of digital literacy and device access from users, and it does not attempt to measure long-term impacts on rabies incidence, which would require longitudinal research.

---

## SLIDE 7 — Key Features of SyncVet

Now let me walk you through the key features of the platform.

**Flutter Mobile App** — This is the primary tool for field teams and pet owners. It supports offline data entry for vaccinations, spay/neuter procedures, and walk-in cases. When connectivity is restored, data automatically syncs to the central portal.

**Web Admin Portal** — This is the command center for CVO administrators. It provides a real-time dashboard for monitoring synced data, managing patient records, and generating reports.

**Real-Time Sync Engine** — This is what ties everything together. It handles the instant transfer of data from the mobile app to the web portal via cloud, ensuring that the office always has up-to-date information.

**Batch Pet Entry** — One of the most practical features — owners can register multiple pets under a single profile in one session, eliminating the repetitive one-by-one process.

**Digital Pet Passport** — Each registered pet receives a unique QR code that allows quick lookup of vaccination history and service records — no more searching through paper files.

**Offline-First Mode** — The system is designed to work even in areas with poor or no internet connectivity. Data is stored locally and queued for synchronization once the device reconnects.

---

## SLIDE 8 — Related Systems Comparison

To position SyncVet in the existing landscape, we reviewed several related systems.

**RabDash**, used in Davao City, is a strong rabies surveillance tool but operates exclusively online and only tracks vaccination data — it has no offline capability, no batch entry, and no citizen portal.

**Pawnec** is clinic-centric and works well for private urban practices, but requires constant internet and is not built for LGU field operations.

**RADSS** under PhilAHIS supports national-level reporting but is browser-only, inaccessible via mobile, and cannot support real-time field data capture.

**VetCloud** is a comprehensive clinic management tool but its commercial pricing and cloud dependency make it unsuitable for government use.

As you can see in this comparison table, **SyncVet is the only system that combines offline data entry, batch pet entry, QR code tagging, offline sync, and zero deployment cost** — making it uniquely suited for resource-limited LGU environments like Cagayan de Oro.

---

## SLIDE 9 — System Architecture and Data Flow

This slide illustrates how SyncVet works from a technical standpoint.

At the top, we have our three user groups: **field veterinary staff**, **pet owners and livestock keepers**, and **CVO administrators**.

Field staff and pet owners interact through the **Flutter Mobile Application**, which is designed to function even without internet connectivity. CVO administrators access the system through the **Web Admin Portal**, which provides dashboards, reports, and service management tools.

All data flows through the **Real-Time Sync Engine** — a cloud-based API layer that receives data from the mobile app and distributes it to the web portal. This engine handles conflict resolution, priority queuing, and secure transmission.

At the foundation is the **Central Database**, which stores all animal records, vaccination histories, service transactions, and user profiles. It is built with a scalable architecture to accommodate the growing number of records over time.

This layered design ensures that data captured anywhere — whether in a remote barangay during a vaccination drive or at the CVO walk-in window — ends up in one centralized, accessible, and accurate system.

---

## SLIDE 10 — Conclusion

To summarize, SyncVet directly addresses the five critical problems we identified at the Cagayan de Oro City Veterinary Office. It bridges the gap between field veterinary operations and centralized data management through an offline-first, citizen-centric platform built for Philippine LGU realities.

Four key takeaways:

**Problem-Driven Design** — Every feature in SyncVet was built in direct response to a specific pain point identified through our study of the CVO's current operations.

**Offline-First Priority** — Unlike most existing systems, SyncVet is designed to function in low-connectivity areas, which is critical for effective field work in the Philippines.

**Zero Deployment Cost** — SyncVet is the only viable solution for resource-limited government offices that cannot afford commercial veterinary software subscriptions.

**Public Health Impact** — By improving the speed and accuracy of vaccination data, SyncVet directly supports Cagayan de Oro's goal of becoming a rabies-free city.

We believe SyncVet is not just an improvement to existing workflows — it is a foundation for smarter, data-driven animal health management in our city.

---

## SLIDE 11 — Thank You / Q&A

That concludes our presentation of SyncVet.

On behalf of our team, thank you very much for your time and attention. We are grateful for this opportunity to present our work, and we welcome any questions, comments, or suggestions from the panel.

We are ready to answer your questions.

---

*[End of Script]*

---

### 💡 Quick Presenter Tips
- **Pace yourself** — aim for about 2–3 minutes per slide
- **Make eye contact** with the panel, not the screen
- **For the architecture slide**, point to each layer as you describe it
- **For the comparison table**, highlight the SyncVet column to draw attention
- **Be confident** — you know this system better than anyone in the room
