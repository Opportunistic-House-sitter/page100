Opportunistic House-sitters
Communication and Collaboration
Group Chat: HipChat/Gmail
Organization: GitHub Org

Roles:
Product Owner → Valerie
Scrum Master → Chris
Development → 
Chris - Testing and Design
Jake - Back-end/ Databases
Valerie and Danielle - Front-end

Project Idea: 
Page 100 (Tinder for Books)

Product: 
Mission: 
Application that allows users to quickly and visually preview book content. From preference refer to point of where to purchase. 

Features:
Filter for list of book to preview:
Genre
Amazon Rating
Options for Choosing a book:
Cover View
Deep Dive into Text View (Page 100, paragraph, Reviews)
Swipe Right to Like
Swipe Left to Reject
Swipe Like to Stored to Stack
Deep Dive into Book
Significant Paragraph
Page 100
One line
Like a book:
Saved to Stack
Reject:
Don’t see it again
See it again after x amt of swipes (Phase 2)
Users Sign-in/Sessions
Each user can set preferences
Each user has saved book list
Does not show books that user does not like

Phase 2:
Buy button next to saved book
List of purchases saved to user account
Remove button next to saved book
Blind Mode
Buying feature in deep dive
Buy book at random
Flip animation to view page 100


User Mapping:
User: 
User-Problem:
Problem-Solution:
Solution-Product:
Workflow: 
Complete Feature:
Dev → pull from Master (git pull origin master)
Dev → git checkout -b feature
Test
Lint
Dev → git push feature branch to local master branch
Dev → git push origin staging
Scrum Master → git push origin staging
Scrum Master → handle merges
Scrum Master → git push origin master

Communicating Features b/w Devs:
Complete Feature:
Dev1 → Pull from Master (git pull origin master)
Dev1 → git checkout -b feature
Test
Lint
Dev1 → git push feature branch to origin staging
Dev2 → git pull feature branch from origin staging
Dev1 or Dev2 → git push origin staging
User stories
 
Epic: As a user, I would like to quickly discover books that I like.
 
Theme: As a user, I would like to quickly discover books that I like in a visual manner.
 
Detailed User Stories:
 
‘Words in Strings’ = references to specific functionalities/features
Capitalized Words = actions
 
Accounts and Sessions
-    As a user, I would like to Sign Up for an account so that I can access the Page 100 services.
-       As a user, I would like to Log In to my account so I can see my saved ‘Stack’ and access my saved preferences.
-       As a user, I would like to Log Out of my account so that others cannot access my ‘Stack’ and my saved ‘Filter Preferences’.
-       As a user, I would like to Change Account Information (Password, Contact Information) in case my details change.
 
Registration
-       As a user, I would like to be Prompted to Customize my ‘Filter Preferences’ so that only see the books that meet my filter criteria.
-       As a user, I would like to use a default ‘Filter Preferences’ so that I do not have to Customize my own list.
 
‘Filter Preferences’
-       As a user, I would like to be able to Customize my ‘Filter Preferences’ from a wide variety of settings including, Genre, Popular Lists, and Authors so that I only see the books that meet my filter criteria.
 
Navigation
-       As a user, I would like to be able to Access my ‘Stack’ and ‘Other Settings’ from a top-left and top-right button so that I can get to these from any view in the application.
-       As a user, I would like to Access my ‘Account Settings’ and ‘Filter Preferences’ from my ‘Other Settings’ navigation bar so that I know where to access these settings.
-       As a user, I would like to Access my ‘Stack’ View to see all of the books that I have ‘Liked’ so that I can review the ‘Book Cover’, ‘Book Ratings’, and other details of books in my ‘Stack’.
-    As a user, I would like to Access a ‘Book Information’ by Clicking the ‘Book Cover’ from my ‘Stack’ view so that I can review the ‘Book Cover’ and ‘Text’.
-       As a user, I would like to Access a ‘Buy’ books button from each ‘Book Stack View’ so that I can go to Amazon to buy the book.
-       As a user, I would like to Access a ‘Remove’ book button from ‘Book Stack View’ so that I don’t have to consider books that I no longer like.
-    As a user, I would like to Exit the ‘Stack’ View by Clicking a ‘Exit’ button so that I can return to the ‘PaperCutting’ View that I was originally on.
-   As a  user, I would like to Exit the ‘Other Settings’ Menu by Clicking a ‘Collapse Menu’ button so that I can return to the ‘PaperCutting’ View that I was originally on.

 
PaperCutting
-       As a user, I would like to View the ‘Book Cover’ of a book so that I can quickly and visually decide if I would like the book or not.
-       As a user, I would like to Access the ‘Sample’ View of the book by Selecting the ‘Book Cover’ so that I can actually decide if I like the book.
-       As a user, I would like to Save the book to my ‘Stack’ by Selecting the ‘Like’ button from either the ‘Book Cover’ View or ‘Text’ View.
-       As a user, I would like to View the next ‘Book Cover’ by Selecting the ‘Not Like’ or ‘Like’ button from either the ‘Book Cover’ or ‘Sample’ view

