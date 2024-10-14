// Function to get view count from localStorage or initialize it
function getViewCount(productId) {
    let viewCount = localStorage.getItem(productId);
    if (viewCount === null) {
        viewCount = 0; // Initialize with 0 views if it's the first time
    }
    return parseInt(viewCount);
}

// Function to increment view count
function incrementViewCount(productId) {
    let viewCount = getViewCount(productId);
    viewCount += 1; // Increment view count by 1
    localStorage.setItem(productId, viewCount); // Store the updated count in localStorage
    return viewCount;
}

// Function to update view count in the DOM
function updateViewCountInDOM(productId, elementId) {
    let viewCount = incrementViewCount(productId);
    document.getElementById(elementId).textContent = viewCount; // Update the view count in the HTML
}

// Increment view count when page loads
document.addEventListener("DOMContentLoaded", function() {
    // Update view count for each product
    updateViewCountInDOM("product1", "view-count1");
    updateViewCountInDOM("product2", "view-count2");
    updateViewCountInDOM("product3", "view-count3");
    updateViewCountInDOM("product4", "view-count4");
});
