/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servlets.holaMundo;

/**
 *
 * @author kairos
 */
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.nio.file.FileSystems;
import java.nio.file.Path;

import org.apache.lucene.analysis.standard.StandardAnalyzer;
import org.apache.lucene.document.Document;
import org.apache.lucene.document.Field;
import org.apache.lucene.document.StringField;
import org.apache.lucene.document.TextField;
import org.apache.lucene.index.DirectoryReader;
import org.apache.lucene.index.IndexReader;
import org.apache.lucene.index.IndexWriter;
import org.apache.lucene.index.IndexWriterConfig;
import org.apache.lucene.queryparser.classic.QueryParser;
import org.apache.lucene.search.IndexSearcher;
import org.apache.lucene.search.Query;
import org.apache.lucene.search.ScoreDoc;
import org.apache.lucene.search.TopScoreDocCollector;
import org.apache.lucene.store.Directory;
import org.apache.lucene.store.FSDirectory;
import org.apache.lucene.store.RAMDirectory;
import org.apache.lucene.util.Version;


public class LuceneTest
{
    
        String[] rutas = null;
    
	public String[] main(String buscar) 
	{
            String[] resultado = null;
		try
		{
			//	Specify the analyzer for tokenizing text.
		    //	The same analyzer should be used for indexing and searching
			StandardAnalyzer analyzer = new StandardAnalyzer();
			
                        Path rutaIndex = FileSystems.getDefault().getPath("/home/kairos/NetBeansProjects/Navegador/web/", "Indices");
                        
			//	Code to create the index
			//Directory index = FSDirectory.open(rutaIndex);
			Directory index = new RAMDirectory();
			IndexWriterConfig config = new IndexWriterConfig(analyzer);
			
			IndexWriter w = new IndexWriter(index, config);
			
                        File file = new File("/home/kairos/NetBeansProjects/Navegador/web/dir");
                        
                        File[] documentos = file.listFiles();
                               
                        for(int i=0; i<documentos.length; i++){
                            addDoc(w, documentos[i]);
                        }
                        
			w.close();
			
			
			//	The \"title\" arg specifies the default field to use when no field is explicitly specified in the query
			Query q = new QueryParser("title", analyzer).parse(buscar);
			
			// Searching code
			int hitsPerPage = 50;
		    IndexReader reader = DirectoryReader.open(index);
		    IndexSearcher searcher = new IndexSearcher(reader);
		    TopScoreDocCollector collector = TopScoreDocCollector.create(hitsPerPage);
		    searcher.search(q, collector);
		    ScoreDoc[] hits = collector.topDocs().scoreDocs;
		    resultado = new String[hits.length];
                    rutas = new String[hits.length];
		    //	Code to display the results of search
		    System.out.println("Found " + hits.length + " hits.");
		    for(int i=0;i<hits.length;++i) 
		    {
		      int docId = hits[i].doc;
		      Document d = searcher.doc(docId);
		      resultado[i]= d.get("title");
                      rutas[i] = d.get("fullPath");
		    }
		    
		    // reader can only be closed when there is no need to access the documents any more
		    reader.close();
                    
                    
		}
		catch(Exception e)
		{
			System.out.println(e.getMessage());
		}
                
                return resultado;
	}
        
	private static void addDoc(IndexWriter w, File file) throws IOException 
	{
		  Document doc = new Document();
		  // A text field will be tokenized
		  doc.add(new TextField("title", file.getName(), Field.Store.YES));
		  // We use a string field for isbn because we don\'t want it tokenized
		  doc.add(new TextField("fullPath", file.getAbsolutePath(), Field.Store.YES));
		  w.addDocument(doc);
            
                  /*Document doc = new Document();
                  doc.add(new Field("content", new FileReader(file)));
                  doc.add(new Field("filename", file.getName(),
                  Field.Store.YES, Field.Index.ANALYZED));
                  doc.add(new Field("fullpath", file.getAbsolutePath(),
                  Field.Store.YES, Field.Index.ANALYZED));
        
                  w.addDocument(doc);*/
        
	}
}