This is the UI application of the Covid19 auto-Prevention prototype. With the help of this application the cleanup team can view a layout of any location having breaches of entire day plotted by small square boxes.
Presntly it has two layouts, one for desktop and another for mobile.

For mobile view need to set the below entries in web.xml:
   <welcome-file-list>
   		<welcome-file>/html/IndexForMobile.html</welcome-file>
   </welcome-file-list>
For desktop/laptop view, need below entries in web.xml:
   <welcome-file-list>
   		<welcome-file>/html/IndexForBroswer.html</welcome-file>
   </welcome-file-list>

This UI application call our REST service(application is deployed in cloud foundry server), to get the data to diplay in the webpage. For that, it is required to put the Cloud Foundry endpoint entry in the SampleForMobileView.js file.
  
