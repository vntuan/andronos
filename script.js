// Basic JavaScript for the contact list
const contactList = [
    { name: "John Doe", phone: "123-456-7890" },
    { name: "Jane Smith", phone: "987-654-3210" },
    { name: "Peter Jones", phone: "555-123-4567" },
    { name: "Alice Williams", phone: "111-222-3333" },
    { name: "Bob Johnson", phone: "444-555-6666" },
    { name: "Charlie Brown", phone: "777-888-9999" },
];

const contactList = [
    { name: "John Doe", phone: "123-456-7890" },
    { name: "Jane Smith", phone: "987-654-3210" },
    { name: "Peter Jones", phone: "555-123-4567" },
];

const contactListElement = document.getElementById("contact-list");
const searchInput = document.getElementById("search-input");

function displayContacts(contacts) {
    contactListElement.innerHTML = "";
    contacts.forEach(contact => {
        const li = document.createElement("li");
        li.textContent = `${contact.name} - ${contact.phone}`;
        contactListElement.appendChild(li);
    });
}

function searchContacts() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredContacts = contactList.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm)
    );
    displayContacts(filteredContacts);
}

displayContacts(contactList);

searchInput.addEventListener("input", searchContacts);
