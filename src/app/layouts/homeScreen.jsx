import React from "react";
import "../styles/home.css";
import HomeForm from "../components/pages/homeForm";
import AvatarImage from "../components/parts/avatarImage";
import FolderIcon from "../components/icons/folderIcon";

const HomeScreen = () => {
  return (
      <div className="home-screen-container">
          <div className="home-header">
              <div className="home-header-avatar">
                  <AvatarImage />
              </div>
              <div className="home-header-info">
                  <div className="home-header__user">
                      Андрей Сёмин
                  </div>
                  <div className="home-header-links">
                      <div className="home-header__link">
                          <FolderIcon />
                          <a
                              href="https://t.me/AndruhaSem"
                              target="_blank"
                          >
                              Telegram
                          </a>
                      </div>
                      <div className="home-header__link">
                          <FolderIcon />
                          <a
                              href="https://github.com/AndruhaSem"
                              target="_blank"
                          >
                              GitHub
                          </a>
                      </div>
                      <div className="home-header__link">
                          <FolderIcon />
                          <a
                              href="https://github.com/AndruhaSem"
                              target="_blank"
                          >
                              Resume
                          </a>
                      </div>
                  </div>
              </div>
          </div>
          <div className="home-form-container">
              <HomeForm />
          </div>
      </div>
  );
};

export default HomeScreen;
