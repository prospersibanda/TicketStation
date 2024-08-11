// Get references to the tabs and sections
let profileTab = document.getElementById('profileTab');
let ticketsTab = document.getElementById('ticketsTab');
let bankDetailsTab = document.getElementById('bankDetailsTab');

let profileSection = document.getElementById('profileSection');
let ticketsSection = document.getElementById('ticketsSection');
let bankDetailsSection = document.getElementById('bankDetailsSection');

// Function to handle tab switching
function showSection(section) {
    profileSection.style.display = 'none';
    ticketsSection.style.display = 'none';
    bankDetailsSection.style.display = 'none';

    profileTab.classList.remove('active');
    ticketsTab.classList.remove('active');
    bankDetailsTab.classList.remove('active');

    if (section === 'profile') {
        profileSection.style.display = 'block';
        profileTab.classList.add('active');
    } else if (section === 'tickets') {
        ticketsSection.style.display = 'block';
        ticketsTab.classList.add('active');
    } else if (section === 'bankDetails') {
        bankDetailsSection.style.display = 'block';
        bankDetailsTab.classList.add('active');
    }

    // Save the selected tab to local storage
    localStorage.setItem('selectedTab', section);
}

// Load the selected tab from local storage when the page loads
window.onload = function() {
    const savedTab = localStorage.getItem('selectedTab');
    if (savedTab) {
        showSection(savedTab);
    } else {
        showSection('profile'); // Default tab
    }

    // Load profile form data from local storage
    const profileData = JSON.parse(localStorage.getItem('profileData'));
    if (profileData) {
        document.getElementById('firstName').value = profileData.firstName;
        document.getElementById('lastName').value = profileData.lastName;
        document.getElementById('phoneNumber').value = profileData.phoneNumber;
        document.getElementById('country').value = profileData.country;
        document.getElementById('email').value = profileData.email;
    }
};

// Add event listeners for the tabs
profileTab.addEventListener('click', () => showSection('profile'));
ticketsTab.addEventListener('click', () => showSection('tickets'));
bankDetailsTab.addEventListener('click', () => showSection('bankDetails'));

// Save profile form data to local storage when the form is submitted
document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const profileData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        phoneNumber: document.getElementById('phoneNumber').value,
        country: document.getElementById('country').value,
        email: document.getElementById('email').value
    };

    localStorage.setItem('profileData', JSON.stringify(profileData));

    alert('Profile data saved locally!');
});

// Show profile section by default
showSection('profile');
