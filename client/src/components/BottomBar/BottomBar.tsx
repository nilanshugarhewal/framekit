import "./bottom_bar.scss";

export const BottomBar = () => {
  return (
    <div className="bottom-bar">
      <div className="bar-container">
        <div className="email-bar">
          <span className="material-symbols-rounded mail-icon icon">mail</span>
          <p>nilanshugarhewal1@gmail.com</p>
          <span className="material-symbols-rounded notification-icon">
            notifications_active
          </span>
        </div>

        <div className="search-bar">
          <span className="material-symbols-rounded" id="search-icon">
            search
          </span>
          <input
            className="search"
            type="text"
            placeholder="Search for a design idea"
          />
          <p id="search-shorthand">Ctrl+K</p>
        </div>

        <div className="filter-bar">
          <span className="material-symbols-rounded filter-icon icon">
            filter_alt
          </span>
          <p>Filter</p>
        </div>
      </div>
    </div>
  );
};
