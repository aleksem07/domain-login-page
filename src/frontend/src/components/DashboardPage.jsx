import './DashboardPage.css';
import { SITES } from '../constants/sites';
import { useState } from 'react';

const DashboardPage = ({ user, onLogout }) => {
  const [selectedSite, setSelectedSite] = useState(null);

  const handleSiteSelect = site => {
    setSelectedSite(site);
  };

  return (
    <section className="dashboard-container">
      <header className="dashboard-header">
        <h2 className="dashboard-title">Добро пожаловать, {user?.username}!</h2>
        <button onClick={onLogout}>Выйти</button>
      </header>

      <div className="dashboard-content">
        <div className="dashboard-site">
          <ul className="site-list info-box">
            Список доступных сайтов:
            {SITES.map(site => (
              <li
                key={site.url}
                className={
                  selectedSite && selectedSite.url === site.url
                    ? 'active-site'
                    : ''
                }>
                <a
                  href="#"
                  onClick={e => {
                    e.preventDefault();
                    handleSiteSelect(site);
                  }}>
                  {site.name.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {selectedSite && (
          <div className="site-viewer">
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
