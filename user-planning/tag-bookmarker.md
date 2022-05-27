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

<!-- SECTION 1 --> ]
About Me Modal <!-- --> = about_me_modal
  - CHILD: About Me Content  <!-- --> = about_me_modal_content
        -H1
        -Paragraph
        -av Footer w/ 2 buttons

<!-- SECTION 2 --> ]
My Resume Modal <!-- --> = my_portfolio_modal
H1
Paragraph
Nav Footer w/ 2 buttons

<!-- SECTION 3 --> ]
Resume Modal <!-- --> = resume_modal
H1
Paragraph
Nav Footer w/ 2 buttons

<!-- SECTION 4 --> ]
Contact Me Modal <!-- --> = contact_me_modal
H1
Paragraph
Nav Footer w/ 2 buttons

Minimized Modal <!-- --> = Modal_Container_Minimized






-------------------]
<!-- FOOTER -->
