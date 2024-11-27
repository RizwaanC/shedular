function loadDashboard(){
    const contentDiv = document.getElementById('content');
    // Fetch content from dashboard.html
    fetch('admin-dashboard/pages/dashboard.html')
        .then(response => {
            console.log('Fetching dashboard.html:', response.status); // Debug log
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(html => {
            console.log('Dashboard content fetched successfully.'); // Debug log
            // Display the fetched HTML content in the content area
            contentDiv.innerHTML = html;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            contentDiv.innerHTML = '<p>Failed to load the dashboard content.</p>';
        });
}