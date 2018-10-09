import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

import com.sun.xml.internal.ws.api.pipe.ServerPipeAssemblerContext;

public class HelloServlet extends HttpServlet{
    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException{
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        try{
            out.println("<html>");
            out.println("<head><title>Java Home Page</title></head");
            out.println("<body style='text-align:center'>");
            out.println("<h1>Java is saying hello to you</h1>");
            out.println("</body></html>");
        } finally{
            out.close();
        }
    }
}