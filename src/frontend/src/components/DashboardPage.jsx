import './DashboardPage.css'

const DashboardPage = ({ user, onLogout }) => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Добро пожаловать, {user?.username}!</h1>
        <button onClick={onLogout}>Выйти</button>
      </div>
      <div className="dashboard-content">
        <h2>Тестовая страница</h2>
        <p>Вы успешно вошли в систему.</p>
        <div className="info-box">
          <h3>Информация о пользователе:</h3>
          <p>Имя пользователя: {user?.username}</p>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage