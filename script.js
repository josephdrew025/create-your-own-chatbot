// Chatbot functionality
function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    if (userInput.trim() === '') return;

    const chatbox = document.getElementById('chatbox');
    const userMessage = document.createElement('div');
    userMessage.textContent = `You: ${userInput}`;
    chatbox.appendChild(userMessage);

    const botResponse = document.createElement('div');
    botResponse.textContent = `Bot: ${getBotResponse(userInput)}`;
    chatbox.appendChild(botResponse);

    chatbox.scrollTop = chatbox.scrollHeight;
    document.getElementById('userInput').value = '';
}

function getBotResponse(input) {
    const lowerInput = input.toLowerCase();
    if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
        return 'Hello! How can I assist you today?';
    } else if (lowerInput.includes('add task') || lowerInput.includes('todo')) {
        return 'Sure, please provide the task you want to add.';
    } else if (lowerInput.includes('thank you') || lowerInput.includes('thanks')) {
        return 'You\'re welcome!';
    } else {
        return 'I am not sure how to respond to that. You can say "hello" or "add task".';
    }
}

// To-Do list functionality
function addTodo() {
    const todoInput = document.getElementById('todoInput').value;
    if (todoInput.trim() === '') return;

    const todoList = document.getElementById('todoList');
    const todoItem = document.createElement('li');
    todoItem.textContent = todoInput;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => todoList.removeChild(todoItem);

    todoItem.appendChild(deleteButton);
    todoList.appendChild(todoItem);

    document.getElementById('todoInput').value = '';
}
