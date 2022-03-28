import "./App.css";

function App() {
  const userMessages = [];

  const userMessageForm = document.getElementById("submit");
  const userMessagesList = document.querySelector("ul");

  function renderMessages() {
    let messageItems = "";
    for (const message of userMessages) {
      messageItems = `
      ${messageItems}
      <li class="message-item">
        <div class="message-image">
          <img src="${message.image}" alt="${message.text}">
        </div>
        <p>${message.text}</p>
      </li>
    `;
    }

    userMessagesList.innerHTML = messageItems;
  }

  function formSubmitHandler(event) {
    event.preventDefault();
    const userMessageInput = document.getElementById("user-message");
    const messageImageInput = document.getElementById("message-image");
    const userMessage = userMessageInput.value;
    const imageUrl = messageImageInput.value;

    if (
      !userMessage ||
      !imageUrl ||
      userMessage.trim().length === 0 ||
      imageUrl.trim().length === 0
    ) {
      alert("Please insert a valid message and image.");
      return;
    }

    userMessages.push({
      text: userMessage,
      image: imageUrl,
    });

    userMessageInput.value = "";
    messageImageInput.value = "";

    renderMessages();
  }

  return (
    <div className="App">
      <section id="user-input">
        <form>
          <div className="form-control">
            <label for="user-message">Your Message</label>
            <textarea id="user-message" name="user-message"></textarea>
          </div>
          <div className="form-control">
            <label for="message-image">Message Image</label>
            <input type="text" id="message-image" name="message-image" />
          </div>
          <button onClick={formSubmitHandler} id="submit" type="submit">
            Send Message
          </button>
        </form>
      </section>
      <section id="user-messages">
        <ul></ul>
      </section>
    </div>
  );
}

export default App;
