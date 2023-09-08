const stack = [];

// Cut function
function cut() {
  const text = document.getSelection().toString(); // Get selected text
  stack.push(text); // Add to the stack
  document.execCommand("delete"); // Delete the selected text
}

// Copy function
function copy() {
  const text = document.getSelection().toString(); // Get selected text
  stack.push(text); // Add to the stack
}

// Paste function
function paste() {
  const text = stack.pop(); // Remove the top element from the stack
  if (text) { // Check if stack is not empty
    const selection = document.getSelection();
    const range = selection.getRangeAt(0);
    range.deleteContents(); // Delete current selection
    range.insertNode(document.createTextNode(text)); // Insert the copied/cut text
  }
}
