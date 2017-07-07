<%-- 
    Document   : buscar
    Created on : 06-jul-2017, 9:22:53
    Author     : kairos
--%>

<%@page import="servlets.holaMundo.LuceneTest"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        <link rel="stylesheet" type="text/css" href="Estilos.css" media="screen">
        
    </head>
    <body>
        <h1>Hola</h1>
        
        
        <div id="tfheader">
		<form id="tfnewsearch" method="post" action="index.html">
		        <input type="text" class="tftextinput" name="q1" size="21" maxlength="120"><input type="submit" value="search" class="tfbutton">
		</form>
            
            <% LuceneTest t = new LuceneTest();
               String[] ar = {"Lucene"};
               t.main(ar);
            %>
	<div class="tfclear"></div>
	</div>
    </body>
</html>
