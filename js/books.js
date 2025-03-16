import { createClient } from "https://esm.sh/@supabase/supabase-js"
const supabaseUrl = 'https://pauimkrxchukoikgjvyt.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBhdWlta3J4Y2h1a29pa2dqdnl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIxMzkwODAsImV4cCI6MjA1NzcxNTA4MH0.6zQPKf0orubZTAnyvxdQ8ScrTFMuyXLZ9lxNIh1DQnk'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {
    try {
      let { data: books, error } = await supabase
        .from('books')
        .select('*');
      
      if (error) {
        console.error('Error fetching books:', error);
        return;
      }
      
      const booksBody = document.getElementById('booksBody');
      
      books.forEach(book => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.isbn}</td>
        `;
        booksBody.appendChild(row);
      });
    } catch (err) {
      console.error("Error in getBooks function:", err);
    }
  }
// Option 3: Call it directly (like in CodePen)
// Only do this if the script is loaded at the end of your HTML
getBooks();