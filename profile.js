// Get references to the tabs and sections
let profileTab = document.getElementById('profileTab');
let ticketsTab = document.getElementById('ticketsTab');
let bankDetailsTab = document.getElementById('bankDetailsTab');

let profileSection = document.getElementById('profileSection');
let tickets = document.getElementById('tickets');
let bankDetailsSection = document.getElementById('bankDetailsSection');
showSection('profile')

// Function to handle tab switching
function showSection(section) {
    profileSection.style.display = 'none';
    tickets.style.display = 'none';
    bankDetailsSection.style.display = 'none';

    profileTab.classList.remove('active');
    ticketsTab.classList.remove('active');
    bankDetailsTab.classList.remove('active');

    if (section === 'profile') {
        profileSection.style.display = 'block';
        profileTab.classList.add('active');
    } else if (section === 'tickets') {
        tickets.style.display = 'block';
        ticketsTab.classList.add('active');
        console.log(localStorage.getItem('selectedFlightTickets'));
console.log(localStorage.getItem('selectedTrainTickets'));
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

 // Load saved data from local storage
 document.addEventListener("DOMContentLoaded", function() {
    const idNumber = localStorage.getItem('idNumber');
    const bankName = localStorage.getItem('bankName');
    const accountNumber = localStorage.getItem('accountNumber');
    const branchCode = localStorage.getItem('branchCode');
    const cvvNumber = localStorage.getItem('cvvNumber');
    const accountType = localStorage.getItem('accountType');

    if (idNumber) document.getElementById('idNumber').value = idNumber;
    if (bankName) document.getElementById('bankName').value = bankName;
    if (accountNumber) document.getElementById('accountNumber').value = accountNumber;
    if (branchCode) document.getElementById('branchCode').value = branchCode;
    if (cvvNumber) document.getElementById('cvvNumber').value = cvvNumber;
    if (accountType) document.getElementById('accountType').value = accountType;
});

// Save data to local storage on form submission
document.getElementById('bankDetailsForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const idNumber = document.getElementById('idNumber').value;
    const bankName = document.getElementById('bankName').value;
    const accountNumber = document.getElementById('accountNumber').value;
    const branchCode = document.getElementById('branchCode').value;
    const cvvNumber = document.getElementById('cvvNumber').value;
    const accountType = document.getElementById('accountType').value;

    localStorage.setItem('idNumber', idNumber);
    localStorage.setItem('bankName', bankName);
    localStorage.setItem('accountNumber', accountNumber);
    localStorage.setItem('branchCode', branchCode);
    localStorage.setItem('cvvNumber', cvvNumber);
    localStorage.setItem('accountType', accountType);

    alert('Bank details saved successfully!');
});

