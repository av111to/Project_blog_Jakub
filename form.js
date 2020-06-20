			//getting form fields
			var id = document.forms['myform']['id'];
			var title = document.forms['myform']['title'];
			var content = document.forms['myform']['content'];
			var date = document.forms['myform']['date'];


			//getting all error divs/fields
			var id_error = document.getElementById('id_error');
			var title_error = document.getElementById('title_error');
			var content_error = document.getElementById('content_error');
			var date_error = document.getElementById('date_error');


			function addRow()
			{
                // validate id
                if (id.value == "") 
                {
                  id.style.border = "2px solid red";
                  document.getElementById('id_div').style.color = "red";
                  id_error.textContent = "ID is required";
                  id.focus();
                  return false;
                }

                // validate title
                else if (title.value == "") 
                {
                  title.style.border = "2px solid red";
                  document.getElementById('title_div').style.color = "red";
                  title_error.textContent = "Title is required";
                  username.focus();
                  return false;
                }

                // validate content
                else if (content.value == "")
                 {
                  content.style.border = "2px solid red";
                  document.getElementById('content_div').style.color = "red";
                  content_error.textContent = "Content is required";
                  content.focus();
                  return false;
                }
                // validate date
                else if (date.value == "") 
                {
                  date.style.border = "2px solid red";
                  document.getElementById('date_div').style.color = "red";
                  date_error.textContent = "Date is required";
                  date.focus();
                  return false;
                }
                else
                {
                	  //creating Data Object
	                  var data = 
	                          {
	                            sid: id.value,
	                            stitle: title.value,
	                            scontent: content.value,
	                            sdate: date.value
	                          };


	                  //this is optional if u use 1 table 
	                  var table = document.getElementsByTagName('table')[0];
	                  
	                  //insert new row
	                  var newRow = table.insertRow(table.rows.length);
                  
	                  // add cells to the row
	                  var cel1 = newRow.insertCell(0);
	                  var cel2 = newRow.insertCell(1);
	                  var cel3 = newRow.insertCell(2);
	                  var cel4 = newRow.insertCell(3);
	                  var cel5 = newRow.insertCell(4);

	 
	                  //button create
	                  var UpdateButton=document.createElement("button");
	                  var DeleteButton=document.createElement("button");
	                  				  

					  //givig colors to buttons
					  UpdateButton.style.backgroundColor = "green";
					  DeleteButton.style.backgroundColor = "red";
					  UpdateButton.style.color="white"
					  DeleteButton.style.color="white";
	  
	                  
					  // add values to the cells
	                  cel1.innerHTML = data.sid;
	                  cel2.innerHTML = data.stitle;
	                  cel3.innerHTML = data.scontent;
	                  cel4.innerHTML = data.sdate;
	                  cel5.appendChild(UpdateButton); 
	                  UpdateButton.innerHTML="Update";
					  cel5.appendChild(DeleteButton);
					  DeleteButton.innerHTML="Remove";


					  //delete row 
					  var RowIndex;

					  DeleteButton.addEventListener("click",function()
					  	{
							for(var j=0;j<table.rows.length;j++)
							{
								//4 time execute - e.g 2nd index click - it will delete only that
								table.rows[j].onclick=function()
								{
									var txt;

									if (confirm("Prees Okey, If you want to delete data.")) 
									{
								        RowIndex=this.rowIndex;
									  	table.deleteRow(RowIndex);
								    } 
								    else 
								    {
								        txt = "You pressed Cancel!";
								    }
								};
							}
						});


					  //update row
					  UpdateButton.addEventListener("click",function()
						{
							for(var i=1;i<table.rows.length;i++)
							{
								table.rows[i].onclick=function()
								{
									document.getElementById("myid").value=this.cells[0].innerHTML;
									document.getElementById("mytitle").value=this.cells[1].innerHTML;
									document.getElementById("mycontent").value=this.cells[2].innerHTML;
									document.getElementById("mydate").value=this.cells[3].innerHTML;
								};
							}
						});

						return true;
                }
      }
      

  
  