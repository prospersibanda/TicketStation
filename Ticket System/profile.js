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
}

// Add event listeners for the tabs
profileTab.addEventListener('click', () => showSection('profile'));
ticketsTab.addEventListener('click', () => showSection('tickets'));
bankDetailsTab.addEventListener('click', () => showSection('bankDetails'));

// Show profile section by default
showSection('profile');
