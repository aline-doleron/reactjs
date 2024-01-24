import { Header } from "./components/Header";
import { Post } from "./components/Post";

import styles from './App.module.css';

import './global.css'
import { Sidebar } from "./components/Sidebar";


export function App() {
  return (
    <div>
      <Header></Header>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Aline DOleron"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae laborum corporis illo fugit harum earum molestias dignissimos tenetur, architecto at tempora labore. Numquam animi quisquam, rerum ratione nulla facere magnam."
          />
          <Post
            author="Arthur DOleron"
            content="Novo post."
          />
        </main>
      </div>
    </div>
  )
}
