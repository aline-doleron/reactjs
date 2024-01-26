import { Header } from "./components/Header";
import { Post, PostType } from "./components/Post";

import styles from './App.module.css';

import './global.css'
import { Sidebar } from "./components/Sidebar";

type Author = {
  avatarUrl: string;
  name: string;
  role: string;
}

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/aline-doleron.png",
      name: "Aline Doleron",
      role: "Web Developer"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "jane.design/doctorcare 👉" }
    ],
    publishedAt: new Date('2024-01-24 15:41:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/alinedoleron.png",
      name: "Aline Cantarelli",
      role: "Front End Developer"
    },
    content: [
      { type: "paragraph", content: "Eai pessoal👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é Petz 🚀" },
      { type: "link", content: "jane.design/doctorcare 👉" }
    ],
    publishedAt: new Date('2024-01-23 15:41:00'),
  }
]


export function App() {
  return (
    <div>
      <Header></Header>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                key={post.id}
                publishedAt={post.publishedAt}
              />
            )

          })}
        </main>
      </div>
    </div>
  )
}
