# Portfolio

[Software Engineer Survey CSV](https://github.com/Raywilleatchu/rays-portfolio/blob/ray/References/survey-Raymond_Mansour-2022-09-24.csv) <br/>
[Core Survey CSV](https://github.com/Raywilleatchu/rays-portfolio/blob/ray/References/survey-Raymond_Mansour_Core_Survey-2022-09-26.csv)

## Quality and Health

### [Q3] Analyzes the team's applications attack surface and potential vulnerabilities.<br/>
[1] Reviews new code written by themselves or others and evaluates how it may be vulnerable to attacks from OWASP.

### [Q7] Follows established development standards (security, performance, testing, coding style).<br/>
[2] Follows company standards and understands the importance of adhering to them. Actively seeks out senior developers if unsure on best practices and when no clear company guidelines are available.

### [Q8] Analyzes the team's applications and fixes errors.<br/>
[2] Makes fixing bugs a priority and actively works on drawing attention to them during planning. Can quickly identify and fix bugs even in code written by others.

### [Q10] Writes code that fails gracefully and handles error conditions (e.g. service failures, logging).<br/>
[2] Can write robust code that defends against common error scenarios such as bad responses from services and log the appropriate information to allow quick and efficient troubleshooting. Understands the severity of different types of errors and when they should be suppressed or surfaced to the user.

| Description | Link |
| -------- | ------- |
| Implementing UI Validation to `Themis` | https://git.rockfin.com/DataServices/Themis/pull/214 |


### [Q4] Understands the monitoring metrics and tools used by the company and how to integrate with them (e.g. logs, usage, system, security).<br/>
[2] Can do complete setup for an application to connect to core services - either directly or through SDKs provided by the company.

### [Q5] Profiles an application to identify and implement performance enhancements.<br/>
[2] Takes an active and consistent interest in profiling and monitoring and often uses tools to identify and improve expensive code paths.

### [Q6] Understands different metrics of application health and performance.<br/>
[1] Understands at a high level the signals of application health and performance and the factors that impact them.

| Description | Link |
| -------- | ------- |
| Implementing `Dynatrace` into our Services & Lambdas | Example Lambda integration <br/> https://git.rockfin.com/DataServices/SAM-IAC/pull/4 <br/> https://git.rockfin.com/DataServices/SAM-IAC/pull/5 <br/> Example Service integration <br/> https://git.rockfin.com/DataServices/Eris-IAC/pull/21 <br/> https://git.rockfin.com/DataServices/Eris-IAC/pull/20 |
| Visibility of currently integrated service metrics on the Service's source page and `Dynatrace Dashboards` created by me | [Dynatrace Links via OneNote](https://rockfin.sharepoint.com/sites/PBMC/_layouts/OneNote.aspx?id=%2Fsites%2FPBMC%2FSiteAssets%2FPBMC%20Notebook&wd=target%28Dynatrace%20Links.one%7C302F57A1-AC18-4837-96FC-565F09859E2A%2F%29onenote:https://rockfin.sharepoint.com/sites/PBMC/SiteAssets/PBMC%20Notebook/Dynatrace%20Links.one#section-id={302F57A1-AC18-4837-96FC-565F09859E2A}&end) |
| Implementation of lambda log scraping while working with Matt Pawlak | [PBMCDynatraceLogger](https://git.rockfin.com/DataServices/PBMCDynatraceLogger) |


## Programming Concepts
### [C1] Writes maintainable and modular code.<br/>
[2] Can be trusted to write small systems or libraries in a well-architected and modular manner without oversight. Comments their code well and writes software with flexibility and users in mind.

### [C2] Understands common development principles (e.g. DRY, KISS, YAGNI).<br/>
[1] Is aware of a few basic software development philosophies such as YAGNI, KISS and how they affect software design and development.

### [C3] Understands object-oriented programming paradigms and patterns.<br/>
[2] Understands OOP and more advanced topics such as domain driven design, composition, and the law of demeter. Familiar with SOLID, GRASP, and many other design patterns such as factories, repositories, facades, decorators, etc and has used them when developing.

| Description | Link |
| -------- | ------- |
| Updating our Blazor app, `Oya` with a new page meant to create test requests | https://git.rockfin.com/DataServices/Oya-UI/pull/53 |
| Updating `Aether.Oya` client | https://git.rockfin.com/DataServices/Aether/pull/294 <br/> https://git.rockfin.com/DataServices/Aether/pull/293 <br/> https://git.rockfin.com/DataServices/Aether/pull/292 |


## Tooling
### [T1] Understands the various types of testing and their importance (e.g. unit, functional, acceptance, user).<br/>
[3] Has in-depth knowledge on the various types of testing and the value they add. Understands all types of testing and what is needed to make automated test suites robust enough to cover nearly every scenario and enable continuous deployment.

### [T2] Writes comprehensive tests for all code.<br/>
[2] Has used both TDD and BDD and has significant experience with at least one of them. Helps push the bar higher on code coverage and other testing metrics for projects they are involved in.

### [T3] Performs VCS management such as committing, merging, handling conflicts.<br/>
[2] Can perform complex functions such as rebasing, bisect, searching through vcs history, check-in locks, stashing, and partial staging. Knows the dangers of some commands and how to avoid losing data.

### [T4] Understands best practices for multi-person or team workflows and branch/merging strategies.<br/>
[1] Is familiar with development and branching workflows used at QL and knows what is required of them as a developer. Understands the concepts of continuous integration, continuous deployment, and continuous delivery.

| Description | Link |
| -------- | ------- |
| Adding Unit tests to `Postmalone` including BUnit tests for UI testing | https://git.rockfin.com/DataServices/Postmalone/pull/28 |
| Adding Unit Tests to `Juno` | https://git.rockfin.com/DataServices/Juno/pull/10 |
| Adding Unit Tests to `ThemisAPI` | https://git.rockfin.com/DataServices/Themis-Backend/pull/165 <br/> https://git.rockfin.com/DataServices/Themis-Backend/pull/198 <br/> https://git.rockfin.com/DataServices/Themis-Backend/pull/199 |


### [T5] Understands requirements and process for compiling and building applications in their domain.<br/>
[2] Has an in-depth understanding of the processes run in order to build and compile their team's projects including system requirements and dependencies. Has experience with writing scripts for automating the build process and is keenly aware of the differences between compiling on a dev machine and for deployment. Aware of specific QL processes or caveats for our enterprise environment including consideration of our staging environments and network conditions. Can quickly debug issues that arise anywhere in the toolchain.

### [T6] Understands requirements and process for deploying applications in their domain.<br/>
[2] Has an in-depth understanding of the processes run in order to deploy their team's projects to multiple environments - including both on-premises and cloud. Aware of specific QL processes or caveats for our enterprise environment including consideration of our staging environments and network conditions. Can quickly debug issues that arise anywhere in the process.

### [T7] Understands the release management pipeline and how to set up for applications in their domain.<br/>
[2] Knows the entire software development process and SDLC from task intake to production deployment including requirements gathering, testing and promotion through environments. Helps define the standards and processes that the team follows for release management.

### [T8] Understands the implications of changing or updating dependencies.<br/>
[2] Understands the implications of using third party code and evaluates when to use them based on security, reliability, and community support. Knows how to use native package managers for their team's applications such as nuget, composer, npm, hex, and others. Has knowledge of vendoring, locked dependencies or shrinkwrapping, and verifying trust such as signing code and authorship.

| Description | Link |
| -------- | ------- |
| Updating `Services` to .Net 6 & Package Source from Qget to Artifactory  | [Oya-UI .Net 6](https://git.rockfin.com/DataServices/Oya-UI/pull/52) <br/> [OyaApi Artifactory](https://git.rockfin.com/DataServices/Oya/pull/176) <br/> [Jeff-UI Artifactory](https://git.rockfin.com/DataServices/Jeff-UI/pull/26) <br/> [JeffApi](https://git.rockfin.com/DataServices/Jeff/pull/48) <br/>[Moneta Artifactory](https://git.rockfin.com/DataServices/Moneta/pull/7) |
| Updating `Lambdas` from Qget to Artifactory | [Oya-Dre-Respomse-Listener](https://git.rockfin.com/DataServices/oya-DRE-response-listener/pull/9) <br/> [Oya-Dre-Listener](https://git.rockfin.com/DataServices/oya-DRE-listener/pull/6) <br/> [Moneta-Event-Handler](https://git.rockfin.com/DataServices/Moneta-Event-Handler/pull/2) |


## Integration
### [I1] Understands the value of frameworks/libraries and how to use them effectively.<br/>
[2] Digs deeply into framework and library documentation or code and knows the frameworks and libraries used by the team's applications in great detail.

### [I2] Understands how to properly implement authentication and authorization.<br/>
[1] Understands how to integrate their team's applications with company authentication methods such as active directory and Ping Single Sign On for internal team members or Auth for clients.

### [I3] Creates and publishes reusable libraries or modules.<br/>
[1] Has contributed to a library or module used by multiple projects - including those outside of their own team.

### [I4] Evangelizes and exhibits open-source mindset.<br/>
[2] Understands the benefits QL receives from open-source and value of contributing back to the industry. Encourages collaboration through code reviews, knowledge share, and open collaboration on software projects.

### [I5] Understands inter-system communication protocols (e.g. REST, SOAP, RPC, Queues).<br/>
[1] Has familiarity and experience with common protocols used for inter-system communication at QL such as REST and SOAP.

### [I6] Respects how code changes may affect downstream consumers.<br/>
[2] Understands best practices for inter-system communication and building public APIs. Minimizes breaking changes and has respect for users and consumers of their services or libraries.

### [I7] Helps design and encourage community standards (e.g. performance, testing, coding style).<br/>
[2] Understands the value of common standards and guides discussions and driving consensus among their team or multiple teams.

| Description | Link |
| -------- | ------- |
| `Aether` Guard Clause | https://git.rockfin.com/DataServices/Aether/pull/186 <br/> https://git.rockfin.com/DataServices/Aether/pull/226 <br/> https://git.rockfin.com/DataServices/Themis/pull/218 |
| Integrating updated libraries & corresponding changes into `Themis` | https://git.rockfin.com/DataServices/Themis/pull/220 |
| Updating `Aether` package | https://git.rockfin.com/DataServices/Aether/pull/187 |


## Full Stack
### [F1] Writes different types of applications (e.g. console, web, API, native, embedded).<br/>
[1] Is familiar with the specific use cases and needs of multiple types of applications. Has contributed to developing systems from multiple categories of application.

### [F2] Knowledgeable of multiple data management systems and when they are most effective.<br/>
[2] Has great knowledge of at least one database system and used it extensively. Is familiar with other types of database systems. Has experience managing databases such as defining schema and writing queries, migrations, and backups.

### [F3] Can set up a complete local environment for a system (e.g. IDE, runtime, web servers, database).<br/>
[2] Can set up development environment for all layers of the team's applications with minimal or no oversight.

### [F4] Understands underlying operating system and how to integrate and configure runtime for application code.<br/>
[2] Knows how to install application runtimes from source if possible. Understands integration points between system and application - including dependencies on dynamically linked libraries or other system dependencies. Can install custom modules or extensions and knows to manage system dependencies through system package managers such as yum, apt-get, chocolatey, etc.

### [F5] Can make changes to all levels of the team's projects (e.g. client-side, frontend, backend, database).<br/>
[2] Can make changes to all layers of the team's applications and actively improves their knowledge and familiarity with all components of the team's systems.

| Description | Link |
| -------- | ------- |
| Libraries/Frameworks/Sevices Known & Used Everyday | Blazor <br/> AWS <br/> HAL Deployment <br/> Testing Libraries and Frameworks [ MSTest, Moq, AutoBogus, BUnit, MSFakes, Dynamic Test Data using static functions ] <br/> CircleCI <br/> Git & Github <br/> IDEs [ Visual Studio, VSCode, Powershell ISE, Intellij, Pycharm ] |
| Databases Known | Dynamo <br/> Mongo <br/> Azure RDS <br/> SQL <br/> MySQL |
| OS Specialtization | Windows <br/> Linux |


## Vision and Growth
### [V1] Learns new libraries and how to use them effectively.<br/>
[2] Can implement a new library or framework in a safe and maintainable manner. Knows where to find high quality libraries and when to use them in the enterprise.

### [V2] Avoids writing code unnecessarily by using existing internal or open source solutions.<br/>
[1] Knows where to find available internal or external (open source) packages that are compatible with their team's applications and seeks them out before starting large new issues or projects. Understands the value of having common shared libraries and not reinventing the wheel by writing unnecessary code.

### [V3] Learns new languages or systems and knows when it is appropriate to introduce them.<br/>
[3] Demonstrates curiosity and interest in learning new technology and applying it to QL to make themselves and others more efficient or produce higher quality software. Works with architects to investigate new technology or products when introduced into the company or the team's applications.

### [V4] Is actively involved with development communities (e.g. giving talks, helping others).<br/>
[1] Participates in IT communities and actively involved in developing standards and best practices across teams and applications.

### [V5] Stays current on new and upcoming technologies.<br/>
[2] Shows active interest and curiosity in new initiatives and services or systems within QL. Stays up to date on new libraries or technology in their domain. Knows about upcoming changes or versions of libraries or frameworks used by the team and shares that knowledge with others.

| Description | Link |
| -------- | ------- |
| Languages Known | C# <br/> Python <br/> Java <br/> C++ <br/> JS, HTML, CSS <br/> Lua |
| Other Known Frameworks not professionally used | Angular <br/> React <br/> Unity <br/> Godot <br/> Maven |
| Active Discussion/Learning Participation | Project Cerebro <br/> DevBytes <br/> Train Knowledge Share |

## Architecture
### [A1] Designs extensible and composable systems (e.g. services, APIs, modules).<br/>
[1] Contributes to extensible codebases and considers coupling, implementation flexibility when writing software.

### [A2] Understands how their team's applications integrate with external systems.<br/>
[2] Familiar with the dependency graph of their team's applications and what systems they are reliant on - including specific data contracts and specifications in addition to endpoints or services used. Understands service failures or errors and how to handle them gracefully with methods such as back-offs, exponential timeouts and when to surface those error conditions to consumers.

### [A3] Understands system architectural patterns and when to use them effectively.<br/>
[1] Familiar with system architectural patterns such as SOA, microservices, monoliths, multi-tenancy, containerization and more.

### [A4] Understands the flow of data used by their team's systems.<br/>
[1] Understands the flow of data (such as client, user, or loan data) within their team's systems including the source systems and source of truth for data consumed by their systems. Knows what PII and PIFI are.

### [A5] Addresses current and prevents future technical debt.<br/>
[1] Understands the concept of technical debt and takes an active and consistent interest in addressing it.

### [A6] Can effectively explain architectural decisions to technical and non-technical partners.<br/>
[1] Can explain their technical decisions and implementations to other engineers and clarify software concepts to non-engineer members of their team.

### [A7] Writes effective documentation both in and outside of code (e.g. comments, changelog, architecture, system design, gliffies).<br/>
[1] Consistently writes good documentation in code such as comments and API documentation.

### [A8] Has expert knowledge in a specialized domain.<br/>
[1] Shows an active and consistent curiosity in a specialized domain or area of expertise relevant to the company beyond their primary language. Actively looks for opportunities to be involved in company projects and initiatives in those domains.

### [A9] Understands how to create scalable software.<br/>
[1] Familiar with metrics and tests used for determining scalability of software. Understands best practices to improve scalability of the languages and systems used by their team.

### [A10] Understands how to create and manage distributed software and systems.<br/>
[1] Has familiarity with distributed computing paradigms and principles such as SOA, message queues, clustering, CAP Theorem, shared-nothing, and parallelism vs concurrency.

| Description | Link |
| -------- | ------- |
| Bug fix in `Aether` | https://git.rockfin.com/DataServices/Aether/pull/316 |
| Providing visibility to Kafka, SNS, SQS & RDB messages being sent in `Oya` | https://git.rockfin.com/DataServices/Oya-UI/pull/47 |
| Fixed Logging method that was failing and causing `Oya` to return a 502 | https://git.rockfin.com/DataServices/Aether/pull/316 |
| Updating Aether Packages, removing Aether.Eris, Adding a unit test to make sure code changes worked as intended in `ThemisAPI` | https://git.rockfin.com/DataServices/Themis-Backend/pull/192 |
| Fixing `OyaUI` Rendering bug on Systems page | https://git.rockfin.com/DataServices/Oya-UI/pull/48 |

## Hackweek Accomplishments

# During the last hackweek I was apart of an internal game project built in Godot called `Picnic Panic`.

[https://git.rockfin.com/Umbrella/PicnicPanic/pull/19](https://git.rockfin.com/Umbrella/PicnicPanic/pull/19) <br/>
[https://git.rockfin.com/Umbrella/PicnicPanic/pull/22](https://git.rockfin.com/Umbrella/PicnicPanic/pull/22) <br/>
[https://git.rockfin.com/Umbrella/PicnicPanic/pull/27](https://git.rockfin.com/Umbrella/PicnicPanic/pull/27) <br/>
[https://git.rockfin.com/Umbrella/PicnicPanic/pull/47](https://git.rockfin.com/Umbrella/PicnicPanic/pull/47) <br/>

