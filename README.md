# Portfolio

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

[Q6] Understands different metrics of application health and performance.<br/>
[1] Understands at a high level the signals of application health and performance and the factors that impact them.

| Description | Link |
| -------- | ------- |
| Implementing `Dynatrace` into our Services & Lambdas | Example Lambda integration <br/> https://git.rockfin.com/DataServices/SAM-IAC/pull/4 <br/> https://git.rockfin.com/DataServices/SAM-IAC/pull/5 <br/> Example Service integration <br/> https://git.rockfin.com/DataServices/Eris-IAC/pull/21 <br/> https://git.rockfin.com/DataServices/Eris-IAC/pull/20 |
| Visibility of currently integrated service metrics on the Service's source page and `Dynatrace Dashboards` created by me | [Dynatrace Links via OneNote](https://rockfin.sharepoint.com/sites/PBMC/_layouts/OneNote.aspx?id=%2Fsites%2FPBMC%2FSiteAssets%2FPBMC%20Notebook&wd=target%28Dynatrace%20Links.one%7C302F57A1-AC18-4837-96FC-565F09859E2A%2F%29onenote:https://rockfin.sharepoint.com/sites/PBMC/SiteAssets/PBMC%20Notebook/Dynatrace%20Links.one#section-id={302F57A1-AC18-4837-96FC-565F09859E2A}&end) |
| Implementation of lambda log scraping while working with Matt Pawlak | [PBMCDynatraceLogger](https://git.rockfin.com/DataServices/PBMCDynatraceLogger) |


# Programming Concepts
[C1] Writes maintainable and modular code.<br/>
[C2] Understands common development principles (e.g. DRY, KISS, YAGNI).<br/>
[C3] Understands object-oriented programming paradigms and patterns.<br/>
| Description | Link |
| -------- | ------- |
| Updating our Blazor app, `Oya` with a new page meant to create test requests | https://git.rockfin.com/DataServices/Oya-UI/pull/53 |
| Updating `Aether.Oya` client | https://git.rockfin.com/DataServices/Aether/pull/294 <br/> https://git.rockfin.com/DataServices/Aether/pull/293 <br/> https://git.rockfin.com/DataServices/Aether/pull/292 |


# Tooling
[T1] Understands the various types of testing and their importance (e.g. unit, functional, acceptance, user).<br/>
[T2] Writes comprehensive tests for all code.<br/>
[T3] Performs VCS management such as committing, merging, handling conflicts.<br/>
[T4] Understands best practices for multi-person or team workflows and branch/merging strategies.<br/>
| Description | Link |
| -------- | ------- |
| Adding Unit tests to `Postmalone` including BUnit tests for UI testing | https://git.rockfin.com/DataServices/Postmalone/pull/28 |
| Adding Unit Tests to `Juno` | https://git.rockfin.com/DataServices/Juno/pull/10 |
| Adding Unit Tests to `ThemisAPI` | https://git.rockfin.com/DataServices/Themis-Backend/pull/165 <br/> https://git.rockfin.com/DataServices/Themis-Backend/pull/198 <br/> https://git.rockfin.com/DataServices/Themis-Backend/pull/199 |


[T5] Understands requirements and process for compiling and building applications in their domain.<br/>
[T6] Understands requirements and process for deploying applications in their domain.<br/>
[T7] Understands the release management pipeline and how to set up for applications in their domain.<br/>
[T8] Understands the implications of changing or updating dependencies.<br/>
| Description | Link |
| -------- | ------- |
| Updating `Services` to .Net 6 & Package Source from Qget to Artifactory  | [Oya-UI .Net 6](https://git.rockfin.com/DataServices/Oya-UI/pull/52) <br/> [OyaApi Artifactory](https://git.rockfin.com/DataServices/Oya/pull/176) <br/> [Jeff-UI Artifactory](https://git.rockfin.com/DataServices/Jeff-UI/pull/26) <br/> [JeffApi](https://git.rockfin.com/DataServices/Jeff/pull/48) <br/>[Moneta Artifactory](https://git.rockfin.com/DataServices/Moneta/pull/7) |
| Updating `Lambdas` from Qget to Artifactory | [Oya-Dre-Respomse-Listener](https://git.rockfin.com/DataServices/oya-DRE-response-listener/pull/9) <br/> [Oya-Dre-Listener](https://git.rockfin.com/DataServices/oya-DRE-listener/pull/6) <br/> [Moneta-Event-Handler](https://git.rockfin.com/DataServices/Moneta-Event-Handler/pull/2) |


# Integration
[I1] Understands the value of frameworks/libraries and how to use them effectively.<br/>
[I2] Understands how to properly implement authentication and authorization.<br/>
[I3] Creates and publishes reusable libraries or modules.<br/>
[I4] Evangelizes and exhibits open-source mindset.<br/>
[I5] Understands inter-system communication protocols (e.g. REST, SOAP, RPC, Queues).<br/>
[I6] Respects how code changes may affect downstream consumers.<br/>
[I7] Helps design and encourage community standards (e.g. performance, testing, coding style).<br/>
| Description | Link |
| -------- | ------- |
| `Aether` Guard Clause | https://git.rockfin.com/DataServices/Aether/pull/186 <br/> https://git.rockfin.com/DataServices/Aether/pull/226 <br/> https://git.rockfin.com/DataServices/Themis/pull/218 |
| Integrating updated libraries & corresponding changes into `Themis` | https://git.rockfin.com/DataServices/Themis/pull/220 |
| Updating `Aether` package | https://git.rockfin.com/DataServices/Aether/pull/187 |


# Full Stack
[F1] Writes different types of applications (e.g. console, web, API, native, embedded).<br/>
[F2] Knowledgeable of multiple data management systems and when they are most effective.<br/>
[F3] Can set up a complete local environment for a system (e.g. IDE, runtime, web servers, database).<br/>
[F4] Understands underlying operating system and how to integrate and configure runtime for application code.<br/>
[F5] Can make changes to all levels of the team's projects (e.g. client-side, frontend, backend, database).<br/>
| Description | Link |
| -------- | ------- |
| Libraries/Frameworks/Sevices Known & Used Everyday | Blazor <br/> AWS <br/> HAL Deployment <br/> Testing Libraries and Frameworks [ MSTest, Moq, AutoBogus, BUnit, MSFakes, Dynamic Test Data using static functions ] <br/> CircleCI <br/> Git & Github <br/> IDEs [ Visual Studio, VSCode, Powershell ISE, Intellij, Pycharm ] |
| Databases Known | Dynamo <br/> Mongo <br/> Azure RDS <br/> SQL <br/> MySQL |
| OS Specialtization | Windows <br/> Linux |


# Vision and Growth
[V1] Learns new libraries and how to use them effectively.<br/>
[V2] Avoids writing code unnecessarily by using existing internal or open source solutions.<br/>
[V3] Learns new languages or systems and knows when it is appropriate to introduce them.<br/>
[V4] Is actively involved with development communities (e.g. giving talks, helping others).<br/>
[V5] Stays current on new and upcoming technologies.<br/>
| Description | Link |
| -------- | ------- |
| Languages Known | C# <br/> Python <br/> Java <br/> C++ <br/> JS, HTML, CSS <br/> Lua |
| Other Known Frameworks not professionally used | Angular <br/> React <br/> Unity <br/> Godot <br/> Maven |
| Active Discussion/Learning Participation | Project Cerebro <br/> DevBytes <br/> Train Knowledge Share |

# Architecture
[A1] Designs extensible and composable systems (e.g. services, APIs, modules).<br/>
[A2] Understands how their team's applications integrate with external systems.<br/>
[A3] Understands system architectural patterns and when to use them effectively.<br/>
[A4] Understands the flow of data used by their team's systems.<br/>
[A5] Addresses current and prevents future technical debt.<br/>
[A6] Can effectively explain architectural decisions to technical and non-technical partners.<br/>
[A7] Writes effective documentation both in and outside of code (e.g. comments, changelog, architecture, system design, gliffies).<br/>
[A8] Has expert knowledge in a specialized domain.<br/>
[A9] Understands how to create scalable software.<br/>
[A10] Understands how to create and manage distributed software and systems.<br/>
| Description | Link |
| -------- | ------- |
| Bug fix in `Aether` | https://git.rockfin.com/DataServices/Aether/pull/316 |
| Providing visibility to Kafka, SNS, SQS & RDB messages being sent in `Oya` | https://git.rockfin.com/DataServices/Oya-UI/pull/47 |
| Fixed Logging method that was failing and causing `Oya` to return a 502 | https://git.rockfin.com/DataServices/Aether/pull/316 |
| Updating Aether Packages, removing Aether.Eris, Adding a unit test to make sure code changes worked as intended in `ThemisAPI` | https://git.rockfin.com/DataServices/Themis-Backend/pull/192 |
| Fixing `OyaUI` Rendering bug on Systems page | https://git.rockfin.com/DataServices/Oya-UI/pull/48 |

# Hackweek Accomplishments

During the last hackweek I was apart of an internal game project built in Godot called `Picnic Panic`.

[https://git.rockfin.com/Umbrella/PicnicPanic/pull/19](https://git.rockfin.com/Umbrella/PicnicPanic/pull/19)
[https://git.rockfin.com/Umbrella/PicnicPanic/pull/22](https://git.rockfin.com/Umbrella/PicnicPanic/pull/22)
[https://git.rockfin.com/Umbrella/PicnicPanic/pull/27](https://git.rockfin.com/Umbrella/PicnicPanic/pull/27)
[https://git.rockfin.com/Umbrella/PicnicPanic/pull/47](https://git.rockfin.com/Umbrella/PicnicPanic/pull/47)

