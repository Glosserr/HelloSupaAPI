import { createClient } from "https://esm.sh/@supabase/supabase-js"
const supabaseUrl = 'https://pauimkrxchukoikgjvyt.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBhdWlta3J4Y2h1a29pa2dqdnl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIxMzkwODAsImV4cCI6MjA1NzcxNTA4MH0.6zQPKf0orubZTAnyvxdQ8ScrTFMuyXLZ9lxNIh1DQnk'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {
  try {
    let { data: books, error } = await supabase
      .from('books')
      .select('*')
    
    if (error) {
      console.error('Error fetching books:', error);
      return;
    }
    
    const bookList = document.getElementById('books');
    if (!bookList) {
      console.error("Element with ID 'books' not found");
      return;
    }
    
    for (let book of books) {
      bookList.innerHTML += `<li>${book.title} - ${book.author} - ${book.isbn}</li>`;
    }
  } catch (err) {
    console.error("Error in getBooks function:", err);
  }
}

// Option 1: Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', getBooks);

// Option 2: Make the function available globally
window.getBooks = getBooks;

// Option 3: Call it directly (like in CodePen)
// Only do this if the script is loaded at the end of your HTML
getBooks();