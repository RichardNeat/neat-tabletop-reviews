Component Tree

App (holds all reviews in state as well as current page number)

   Header (contains a link to home)
   
   User (contains current user info and a link to change user which leads to all users, useContext)
   	- Users (new route, fetches all users and holds them in state, with a link to set active user)
   		- SingleUser (optional to view a single user, but there's no extra info to view)
   	
   Nav (fetches all categories and holds them in state, displaying them as links)
   	- Categories (fetches all reviews with the query of category attached, dynamic for all categories)
   	
   Reviews (receives reviews as props and displays them on screen, if time add pagination)
   
   ReviewById (new route from app, receives review_id as props and fetches a single review)
   	- PatchReview (receives review_id as props and patches to add a vote)
   	- Comments (receives review_id as props and fetches comments. Add as sub route to view below the review, if time add pagination)
   		- AddComment (receives review_id as props, form appears above all other comments)
   		- DeleteComment (receives comment_id as props, removes comment)
   		- PatchComment (receives comment_id as props and patches to add a vote)
   	- DeleteReview (receives review_id as props, button next to each review to remove from the database)
   		
  PostReview (post request, returns the review and includes a link to take them to the ReviewById for it)
  
  PostCategory (post request, displays confirmation to user when completed and dynamically changes the navBar and the category option in PostReview) 
  
  
  Routes - Home '/home', ReviewById '/review', Users '/users', PostReview 'post-review', PostCategory 'post-category'