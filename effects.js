document.addEventListener("DOMContentLoaded", () => {
    // Create the glowing cursor element
    const cursor = document.createElement('div');
    cursor.classList.add('glowing-cursor');
    document.body.appendChild(cursor);

    // Update the position of the glowing cursor based on mouse movement
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.pageX}px`;
        cursor.style.top = `${e.pageY}px`;
    });
});
