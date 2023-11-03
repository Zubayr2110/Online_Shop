import "./Signin.css";

export default function Addusers({ handleSubmit, name, setName }) {
  return (
    <form className="content" onSubmit={handleSubmit}>
      <h1 className="signint">Sign In</h1>
      <input
        type="text"
        className="username"
        name="username..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="username..."
      />
      <button className="userbtn">Sign In</button>
    </form>
  );
}
