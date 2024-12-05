'use client';

import Home from './page/home';
import 'font-awesome/css/font-awesome.min.css';
import Header from './component/Header';
import { useState } from 'react';
import Experience from './page/experience';
import Skill from './page/skill';
import Project from './page/project';

const Page = () => {
  const [tabs, setTabs] = useState<number>(0); // To track the active tab

  // Function to change tabs
  const handleTabChange = (tabIndex: number) => {
    setTabs(tabIndex); // Update the active tab when clicked
  };
  return (
    <div className="h-screen w-screen">
      <div className="">
        <div className="items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <Header onTabClick={handleTabChange} selectedTab={tabs} />
        </div>
      </div>
      <div className="h-2/3 w-[80%] mx-auto bg-white mt-3 drop-shadow-2xl overflow-y-auto">
        {tabs === 0 && <Home />}
        {tabs === 1 && <Experience />}
        {tabs === 2 && <Skill />}
        {tabs === 3 && <Project />}
      </div>
    </div>
  );
};
export default Page;
