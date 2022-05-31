<!-- BODY -->
<!-- HEAD -->
Brandon Nguyen <!-- --> = Full_Name

Navigation Container <!-- --> = Nav_Container 
Parent-Of: List_Container

List Container - <!-- --> = List_Container
Parent-Of: 
    (About_ME)     Parent-Of: about_me_button
    (My_Portfolio) Parent-Of: my_portfolio_button
    (Resume)       Parent-Of: resume_button
    (Contact_Me)   Parent-Of: contact_me_button

<!-- MAIN -->
Modal Container - <!-- --> = Modal_Container
Parent-Of: --------]


--------------------]
<!-- TOP OF MODAL -->
modal_title
modal_exit_button 
<!-- Minimized Modal = Modal_Container_Minimized -->



-------------------]
<!-- FOOTER -->
parent:
Modal_Footer_Nav 

child:                     BUTTON TAGS
                        ABOUT ME & PORTFOLIO
footer_nav_left    footer_nav_resume                
footer_nav_right   footer_nav_contact_me
    



<!-- SECTION 1 --> ]
About Me Modal <!-- --> = about_me_modal
 About Me Content  <!-- --> = about_me_modal_content
 about_me_content


<!-- SECTION 2 --> ]
My PORTFOLIO Modal <!-- --> = Portfolio_Modal_Content
portfolio_list_container
#project_flip   or   .project_1 / 2 / 3 / 4



<!-- SECTION 3 --> ]
Resume Modal <!-- --> = Resume_Modal_Content
resume_content



<!-- SECTION 4 --> ]
Contact Me Modal <!-- --> = Contact_Me_Modal
Contact_Me_Content
Contact_Me_Form
.input_name
.input_email
.submit
.submit_button 
