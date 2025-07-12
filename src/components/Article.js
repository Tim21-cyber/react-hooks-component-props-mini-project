import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
    const renderEmojis = () => {
        if (minutes < 30) {
            const cups = Math.ceil(minutes / 5);
            return "☕".repeat(cups);
        }
        else {
            const bentos = Math.ceil(minutes / 10);
            return "🍱".repeat(bentos);
        }
    }

    return (
    <article>
      <h3>{title}</h3>
      <small>
        {renderEmojis()} {minutes} min read
      </small>
      <small> • {date}</small>
      <p>{preview}</p>
    </article>
  );
}
export default Article;

