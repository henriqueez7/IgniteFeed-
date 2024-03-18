import {Post, PostType} from './components/Post';
import {Header} from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';


const posts: PostType[] = [
  {
    id:1,
    author: {
      avatarUrl: 'https://github.com/henriqueez7.png',
      name: 'Pedro Henrique',
      role: 'CTO @Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala devs 👋'},
      {type: 'paragraph', content: 'Acabei de subir meu primeiro projeto em react para meu portfólio. desenvolvimento feito com o acompanhamento da Rocketseat🚀'},
      {type: 'link', content: 'jane.design/doctorcare'}, 
    ],
    publishedAt: new Date('2024-02-28 00:30:20'),
  },

  {
    id:2,
    author: {
      avatarUrl: 'https://github.com/leehxd.png',
      name: 'Leticia',
      role: 'educator @Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala devs 👋'},
      {type: 'paragraph', content: 'Acabei de subir meu primeiro projeto em react para meu portfólio. desenvolvimento feito com o acompanhamento da Rocketseat🚀'},
      {type: 'link', content: 'jane.design/doctorcare'}, 
    ],
    publishedAt: new Date('2023-12-18 21:40:10')
  },

];

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
            <Post 
              key={post.id}
              post={post}
            />
            )
          })}
        </main>
        
      </div>
    </div>
    
  )
}


