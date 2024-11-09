// Function to change the background color of the page
function changeBackgroundColor() {
    const colors = ['#f4f4f4', '#ffcccc', '#e0f7fa', '#e8f5e9', '#fff9c4'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}
// Data for books
const books = {
    fiction: [
      { title: "The Great Gatsby", author: "F. Scott Fitzgerald", img: "https://books.google.co.in/books/publisher/content?id=WpD_DAAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U2smY1XG0tjSZpqcsPWGRs18i-NFg&w=1280" },
      { title: "To Kill a Mockingbird", author: "Harper Lee", img: "https://cdn2.penguin.com.au/covers/original/9781784752637.jpg" },
      { title: "1984", author: "George Orwell", img: "https://books.google.co.in/books/publisher/content?id=0vQCEAAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U0YCgL0_QjFBTuovIB_4v-3h9DGDg&w=1280" },
    ],
    "non-fiction": [
      { title: "Sapiens", author: "Yuval Noah Harari", img: "https://books.google.co.in/books/publisher/content?id=1EiJAwAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U2nf4ZzBE_NFma6-FTPoPwEmL0_oA&w=1280" },
      { title: "Educated", author: "Tara Westover", img: "https://books.google.co.in/books/publisher/content?id=J20qEAAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U0sDC9cQK4vYCql_HSQ-XAqgcUXng&w=1280" },
      { title: "Becoming", author: "Michelle Obama", img: "https://books.google.co.in/books/publisher/content?id=hfoxAwAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U06g2oLGxmBch5rnI1e46ZuUeCdag&w=1280" },
    ],
    science: [
      { title: "Cosmos", author: "Carl Sagan", img: "https://m.media-amazon.com/images/I/61vntEKjYUL._AC_UF1000,1000_QL80_.jpg" },
      { title: "A Brief History of Time", author: "Stephen Hawking", img: "https://books.google.co.in/books/content?id=9ysba1A1UF8C&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U30Q4mC61K5FVOHj-YF-dQEAmgJyQ&w=1280" },
      { title: "The Gene", author: "Siddhartha Mukherjee", img: "https://books.google.co.in/books/publisher/content?id=A8syDAAAQBAJ&pg=PA1798&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U2514Tu5EdxIlWByROIXf1e7NPqsg&w=1280" },
    ],
    history: [
      { title: "The Silk Roads", author: "Peter Frankopan", img: "https://books.google.co.in/books/publisher/content?id=M1FFCQAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U351VbfgaDmZL_QoRI0CgLv37w65Q&w=1280" },
      { title: "Guns, Germs, and Steel", author: "Jared Diamond", img: "https://books.google.co.in/books/content?id=_BrB7kg19RgC&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U0ZS5rgW26swK9ZCkhh6hS_GNp0uQ&w=1280" },
      { title: "The Diary of a Young Girl", author: "Anne Frank", img: "https://books.google.co.in/books/publisher/content?id=FWXfEAAAQBAJ&pg=PA1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U0mkRAvldSBLz6f_OfjtIzsWDymzg&w=1280" },
    ],
  };
  
  // Function to generate the book cards based on the selected category
  function generateBooks(category) {
    const bookList = document.getElementById("book-list");
    const categoryTitle = document.getElementById("category-title");
  
    // Clear the previous books
    bookList.innerHTML = "";
    
    // Set the category title
    categoryTitle.textContent = `Books in ${category.charAt(0).toUpperCase() + category.slice(1)} category`;
  
    // Get books for the selected category
    const categoryBooks = books[category];
  
    // Generate and display each book card
    categoryBooks.forEach((book) => {
      const bookCard = document.createElement("div");
      bookCard.classList.add("book-card");
  
      bookCard.innerHTML = `
        <img src="${book.img}" alt="${book.title}">
        <h4>${book.title}</h4>
        <p>by ${book.author}</p>
      `;
  
      bookList.appendChild(bookCard);
    });
  }
  
  // Add event listeners to category buttons
  document.querySelectorAll(".category-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const category = this.getAttribute("data-category");
      generateBooks(category);
    });
  });

  // Function to toggle the full description of a book
function toggleDescription(button) {
    const fullDescription = button.nextElementSibling; // the <p> with class "full-description"
    
    // Toggle the display of the full description
    if (fullDescription.style.display === 'block') {
        fullDescription.style.display = 'none';
        button.textContent = 'Read More';
    } else {
        fullDescription.style.display = 'block';
        button.textContent = 'Read Less';
    }
}

document.getElementById('borrow-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent page reload on form submission

  // Get form values
  const book = document.getElementById('book-select').value;
  const userName = document.getElementById('user-name').value;
  const borrowDate = document.getElementById('borrow-date').value;

  // Validation check
  if (userName === "" || borrowDate === "") {
      displayResponse("Please fill out all fields.", "error");
      return;
  }

  // Create a success message
  const successMessage = `Thank you, ${userName}! You have successfully borrowed "${book}" on ${borrowDate}.`;

  // Display success message
  displayResponse(successMessage, "success");
});

// Function to display response message
function displayResponse(message, type) {
  const responseDiv = document.getElementById('response-message');
  responseDiv.textContent = message;
  responseDiv.className = type;
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting the usual way (page reload)

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Simple validation
  if (name === "" || email === "" || message === "") {
      displayResponse("Please fill in all fields.", "error");
      return;
  }

  // Check email format (basic regex)
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(email)) {
      displayResponse("Please enter a valid email address.", "error");
      return;
  }

  // Simulate successful submission (e.g., send data to server here)
  displayResponse("Thank you for contacting us, " + name + "! We will get back to you shortly.", "success");

  // Clear the form after submission
  document.getElementById('contact-form').reset();
});

// Function to display response message
function displayResponse(message, type) {
  const responseDiv = document.getElementById('response-message');
  responseDiv.textContent = message;
  responseDiv.className = type; // Add class for success/error styling
}

const currentYear = new Date().getFullYear();
document.querySelector('.footer-bottom p').textContent = `© ${currentYear} City Library. All rights reserved.`;


let users = [
  { username: "john_doe", email: "john@example.com", password: "12345" },
];

// Reference to HTML elements
const loginLink = document.getElementById("loginLink");
const registerLink = document.getElementById("registerLink");
const profileLink = document.getElementById("profileLink");
const logoutLink = document.getElementById("logoutLink");

const registerSection = document.getElementById("registerSection");
const loginSection = document.getElementById("loginSection");
const profileSection = document.getElementById("profileSection");

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const userNameDisplay = document.getElementById("userNameDisplay");
const userEmailDisplay = document.getElementById("userEmailDisplay");

// State variable for the logged-in user
let currentUser = null;

// Display login form
loginLink.addEventListener("click", () => {
  showSection(loginSection);
  hideSections([registerSection, profileSection]);
});

// Display register form
registerLink.addEventListener("click", () => {
  showSection(registerSection);
  hideSections([loginSection, profileSection]);
});

// Display profile page
profileLink.addEventListener("click", () => {
  if (currentUser) {
      showSection(profileSection);
      hideSections([loginSection, registerSection]);
      userNameDisplay.textContent = currentUser.username;
      userEmailDisplay.textContent = currentUser.email;
  }
});

// Log out user
logoutLink.addEventListener("click", () => {
  currentUser = null;
  updateNavigation();
  showSection(loginSection);
  hideSections([registerSection, profileSection]);
});

// Show a specific section
function showSection(section) {
  section.style.display = "block";
}

// Hide sections
function hideSections(sections) {
  sections.forEach(section => section.style.display = "none");
}

// Handle login form submission
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  // Simulate user authentication
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
      currentUser = user;
      updateNavigation();
      showSection(profileSection);
      hideSections([loginSection, registerSection]);
      userNameDisplay.textContent = user.username;
      userEmailDisplay.textContent = user.email;
  } else {
      alert("Invalid username or password.");
  }
});

// Handle register form submission
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("regUsername").value;
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;

  // Simulate user registration (for simplicity, no email verification)
  users.push({ username, email, password });
  alert("Account created successfully!");

  // After registering, log the user in automatically
  currentUser = { username, email, password };
  updateNavigation();
  showSection(profileSection);
  hideSections([loginSection, registerSection]);
  userNameDisplay.textContent = username;
  userEmailDisplay.textContent = email;
});

// Update navigation links based on the user status
function updateNavigation() {
  if (currentUser) {
      loginLink.style.display = "none";
      registerLink.style.display = "none";
      profileLink.style.display = "inline";
      logoutLink.style.display = "inline";
  } else {
      loginLink.style.display = "inline";
      registerLink.style.display = "inline";
      profileLink.style.display = "none";
      logoutLink.style.display = "none";
  }
}

// Initially show login form
showSection(loginSection);
hideSections([registerSection, profileSection]);

// Update navigation based on current user
updateNavigation();

const saveButton = document.getElementById('save-button');
const siteName = document.getElementById('site-name');

// Save the website name when the save button is clicked
saveButton.addEventListener('click', function() {
  // You can save the value somewhere, like in local storage or send it to a server
  const newSiteName = siteName.innerText.trim();
  if (newSiteName) {
    localStorage.setItem('siteName', newSiteName);
    alert('Website name saved: ' + newSiteName);
  } else {
    alert('Please enter a valid name for the website.');
  }
});

// Load saved website name on page load
window.onload = function() {
  const savedSiteName = localStorage.getItem('siteName');
  if (savedSiteName) {
    siteName.innerText = savedSiteName;
  }
};