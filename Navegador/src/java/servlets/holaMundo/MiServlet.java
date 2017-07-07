/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servlets.holaMundo;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author kairos
 */
public class MiServlet extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            String p = request.getParameter("q");
            LuceneTest lu = new LuceneTest();
            String[] resultado = lu.main(p);
            String[] rutas = lu.rutas;
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println(    "<title>Motor de Búsqueda</title>" +
                            "<meta charset=\"UTF-8\">" +
                            "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">" +
                            "<link rel=\"stylesheet\" type=\"text/css\" href=\"Estilos.css\" media=\"screen\">");            
            out.println("</head>");
            out.println("<body>\n"
                    + " <div id=\"tfheader\">\n" +
"		<form id=\"tfnewsearch\" method=\"get\" action=\"index.html\">\n" +
"                    <input type=\"text\" class=\"tftextinput\" id=\"barraBusqueda1\" placeholder=\"Buscar\" name=\"q1\" size=\"21\" maxlength=\"120\" autocomplete=\"off\" value=" + p + "><input type=\"submit\" value=\"Buscar\" class=\"tfbutton\">\n" +
"		</form>\n" +
"            <div class=\"tfclear\"></div>\n" +
"	</div>");
            out.println("<h1>" + p + "</h1>");
            out.println("<p>" + resultado.length + " resultados encontrados</p><br>");
            for(int i=0; i<resultado.length; i++){
                                               
                out.println("<p>" + (i+1) + ". " + resultado[i] + "</p>"
                        + "<a href=\"/Navegador/dir/" + resultado[i] +"\" download=" + resultado[i].replace(" ", "_") + ">"
                        +     "Descargar"
                        + "</a><br><br>");
            }
            
            out.println("</body>");
            out.println("</html>");
            
            
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
