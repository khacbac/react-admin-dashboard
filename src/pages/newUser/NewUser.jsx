import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h2 className="newUserTitle">New User</h2>
      <div className="newUserContent">
        <div className="newUserItem">
          <label className="newUserLabel">Username</label>
          <input type="text" placeholder="jhon" />
        </div>
        <div className="newUserItem">
          <label className="newUserLabel">Full Name</label>
          <input type="text" placeholder="Jhon Smith" />
        </div>
        <div className="newUserItem">
          <label className="newUserLabel">Emaik</label>
          <input type="email" placeholder="jhon@gmail.com" />
        </div>
        <div className="newUserItem">
          <label className="newUserLabel">Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label className="newUserLabel">Phone</label>
          <input type="text" placeholder="+1 123 456 78" />
        </div>
        <div className="newUserItem">
          <label className="newUserLabel">Address</label>
          <input type="text" placeholder="New York | USA" />
        </div>
        <div className="newUserItem">
          <label className="newUserLabel">Gender</label>
          <div className="userGender">
            <input type="radio" id="male" name="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" id="female" name="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" id="other" name="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label className="newUserLabel">Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </div>

      <button className="userCreateBtn">Create</button>
    </div>
  );
}
