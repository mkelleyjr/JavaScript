	<%
	/* 
	* Form Validation.js
	*
	* Description: Check for blank fields and email formatting
	*
	*	
	* Created By: Michael Kelley Jr. and Jeremy Keczen
	* Created Date: 02/28/2011
	*
	* Revision:
	* Revised By:
	* Revision Date:
	*
	* 
	*/
	%>
 
    //validate all fields int he form. Check for blank fields and email formatting
 
 
    function checkForm()
	{
	
	
		//variables that will be used to check fields
	
	    var a = document.forms["userAccount"] ["fname"].value
		var b = document.forms["userAccount"] ["lname"].value
		var c = document.forms["userAccount"] ["passwd"].value
		var d = document.forms["userAccount"] ["confpasswd"].value
		var e = document.forms["userAccount"] ["email"].value
		var f = document.forms["userAccount"] ["organization"].value
		var g = document.forms["userAccount"] ["container"].value
		
		var atpos =e.indexOf("@");
		var dotpos = e.lastIndexOf(".");
		
		var illegalChars = /\W/;
		
		
		
		     //loop through to check for different forms 
		
		
			
				if (a == null || a == "")			//checking for first name
					{
					alert("First name is missing. Please fill out the form and resubmit.");
					fname.focus();
					return false;
					}
					
					else if (b == null || b == "")			//checking for last name
					{
					alert("Last name is missing. Please fill out the form and resubmit.");
					lname.focus();
					return false;
					}
					
					else if (c == null || c == "")			//checking for password
					{
					alert("Password is missing. Please fill out the form and resubmit.");
					passwd.focus();
					return false;
					}
					
					else if (d == null || d == "")			//checking for password confirmation
					{	
					alert("Confirmation password is missing. Please fill out the form and resubmit.");
					confpasswd.focus();
					return false;
					}
					
					else if (e == null || e == "")			//checking for email
					{
					alert("Email is missing. Please fill out the form and resubmit.");
					email.focus();
					return false;
					}
					
						else if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= e.length)			//checking email for format
							{
							alert("Email is not valid. Please fill out the form and resubmit.");
							email.focus();
							return false;
							}
					
					else if (f == null || f == "")		//checking for organization
					{
					alert("Organization is missing. Plese fill out the form and resubmit.");
					organization.focus();
					return false;
					}
					
					else if (g == null || g =="")		//checking for container
					{
					alert("Container is missing. Please fill out the form and resubmit.");
					container.focus();
					return false;
					}
					
					 else if (c != e)			//compare passwords to ensure they match
					 {
					 alert("Passwords don't match. Please fill out the form and resubmit.");
					 return false;
					 }
					 
					 return true;			//everything on the form was correct. Continue processing
	}
	
	
