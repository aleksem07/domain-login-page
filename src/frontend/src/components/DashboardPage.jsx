import './DashboardPage.css';
import { SITES } from '../constants/sites';
import { useState } from 'react';

const DashboardPage = ({ user, onLogout }) => {
  const [selectedSite, setSelectedSite] = useState(null);

  const handleSiteSelect = (site) => {
    setSelectedSite(site);
  };

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
          <ul className="site-list">
            Список доступных сайтов:
            {SITES.map((site, index) => (
              <li key={index}>
                <a href="#" onClick={(e) => { e.preventDefault(); handleSiteSelect(site); }}>
                  {site.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {selectedSite && (
          <div className="site-viewer">
            <h3>Просмотр сайта: {selectedSite.name}</h3>
            <iframe
              src={selectedSite.url}
              title={selectedSite.name}
              className="site-iframe"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default DashboardPage;
