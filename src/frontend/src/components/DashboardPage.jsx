import './DashboardPage.css';

const DashboardPage = ({ user, onLogout }) => {
  return (
    <section className="dashboard-container">
      <header className="dashboard-header">
        <button onClick={onLogout}>Выйти</button>
      </header>

      <div className="dashboard-header">
        <h1>Добро пожаловать, {user?.username}!</h1>
      </div>

      <div className="dashboard-content">
        <div className="info-box">
          <h2>Тестовая страница</h2>
          <p>Вы успешно вошли в систему.</p>
        </div>

        <div className="dashboard-site">
          <ul className="site-list"> Список доступных сайтов:
            <li>
              <a href="#">Сайт 1</a>
            </li>
            <li>
              <a href="#">Сайт 2</a>
            </li>
            <li>
              <a href="#">Сайт 3</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;
