Auction App
======

Workspace Organization and Name Scheme
------
All source code will be located in the ```/src``` directory.
All documentation will be located in the ```/docs``` directory.

Version Control Procedures
------
Our version control will take place with git on the GitHub platform.  During each of the milestones, we will meet together to do "sprint planning", in which we will determine tasks that need to be done.  All of these tasks will be placed in the "To Do" column of our project.

During the course of the sprint, when we finish a task, we will pull one from the "To Do" column to the "In Progress" column, assigning ourselves to the ticket.

When we assign ourselves to a ticket, we will create a new branch (the name of the branch will closely resemble the name of the ticket) on which we will perform our work.

Work will be done on the tasks as normal, and when the task is complete, a pull request will be made to merge our task branch into the ```master``` branch.  On the pull request, the other team members will perform a peer review and either accept the pull request or request changes.  In order for a pull request to be merged back into the ```master``` branch, at least two other team members must approve the pull request.  A merge can never be done by the person who made the pull request.

All merge conflicts must be dealt with on the task's branch, and not on the ```master``` branch.

Tool Stack Description and Set Up Instructions
------
__Firebase__

The Firebase guide to making a new project is very simple, first you click create new project, enter a project name and accept the terms and conditions. It then ask if you would like to use google analytics for your project. The analytics enable A/B testing, crash-free users, segmentation & targeting, event-based cloud functions, triggers, prediction of user behavior, and unlimited free reporting. After enabling the analytics you must configure them by giving your location and configuring settings, as well as accepting terms/condtions, Firebase will then create your project. From here you can create your web app, and you can set up Firebase hosting aswell. It will ask you to copy some scripts to the bottom of your html. Then you will install Firebase and then deploy to Firebase hosting.

__Java 11__

To install Java 11 type Oracle JDK 11 into your search bar and click on the Java SE Development Kit 11 downloads.

Next find you OS and download the file to the right of your OS name, make sure to put it into a directory you will remember.

The next step is to go into your IDE and go to the compiler settings, once there select the file location of your JDK.

__Vue.js 2__

Vue is used to build user interfaces and single page applications

To install Vue just use the script tag 
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
in your html

Build Instructions
------

Unit Testing Instructions
------

System Testing Instructions
------

Project Location
------
See https://github.com/orgs/usu-cs-3450/projects/57 for the project linked with this repository
