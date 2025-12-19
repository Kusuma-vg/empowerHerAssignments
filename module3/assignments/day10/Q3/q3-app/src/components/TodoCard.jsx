function TodoCard({ userId, title, completed }) {
    return (
      <div style={{ border: "1px solid #ccc", padding: "8px", margin: "6px 0" }}>
        <p><strong>User ID:</strong> {userId}</p>
        <p><strong>Title:</strong> {title}</p>
        <p><strong>Status:</strong> {completed ? "Completed" : "Pending"}</p>
      </div>
    );
  }
  
  export default TodoCard;
  