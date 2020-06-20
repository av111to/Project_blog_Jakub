<script type="text/javascript">
  function RedirectUrl() {
  var tb = document.getElementById("tbSearch").value;
  var cs = document.getElementById("sfield").value;
  var url = "";
 
  if (tb != "") {
   if (cs == "id" || cs == "id"){
   url = "FilterField1=" + cs + "&FilterValue1=" + tb;
   window.location.href = "AllItems.aspx?" + url;
   }
   else {  
   url = "FilterName=" + cs + "&FilterMultiValue=*" + tb + "*";
   window.location.href = "AllItems.aspx?" + url;
   }
   }
   else {
   return false;
   }
  } 
  function ClearUrl() {
  window.location.href = "AllItems.aspx";
  }
 </script>