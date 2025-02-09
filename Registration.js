import './Registration.css';
function Registration() {
  return (
    <div className="container registration-page">
      <h1>
        📝 Registration Form 📝
      </h1>
      <form>
        <div className="form-group">
          <label>
            👥 Username:
          </label>
          <input type="text" name="username" required className="form-control"/>
        </div>
        <div className="form-group">
          <label>
            📧 Email:
          </label>
          <input type="email" name="email" required className="form-control"/>
        </div>
        <div className="form-group">
          <label>
            🔒 Password:
          </label>
          <input type="password" name="password" required className="form-control"/>
        </div>
        <div className="form-group">
          <label>
            🔒 Confirm Password:
          </label>
          <input type="password" name="confirmPassword" required className="form-control"/>
        </div>
        <button type="submit" className="btn btn-primary">
          📝 Register 📝
        </button>
      </form>
    </div>
  );
}
export default Registration;