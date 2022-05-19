import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { Subject } from 'rxjs';
import { Article } from '../shared/article.model';

@Injectable({ providedIn: 'root' })
export class ArticlesService {
  constructor() {}

  //firebase
  private firebaseConfig = {
    apiKey: 'AIzaSyByUSbtNEze0027pM1ivJx-pGzjM3vASMQ',
    authDomain: 'test-app-88d92.firebaseapp.com',
    projectId: 'test-app-88d92',
    storageBucket: 'test-app-88d92.appspot.com',
    messagingSenderId: '1057377204671',
    appId: '1:1057377204671:web:f2def14fb4181c95f3890a',
    measurementId: 'G-XL83ZQQFBJ',
  };
  private app = initializeApp(this.firebaseConfig);
  private db = getFirestore(this.app);

  //articles
  articles: Article[] = [];
  articlesSub = new Subject<Article[]>();

  async fetchArticles() {
    const querySnapshot = await getDocs(collection(this.db, 'Articles'));

    querySnapshot.forEach((doc) => {
      const article = {
        id: doc.data()['id'],
        title: doc.data()['title'],
        img: doc.data()['img'],
        content: doc.data()['content'],
        creationDate: doc.data()['creationDate'],
        pinned: doc.data()['pinned'],
        lbl: doc.data()['lbl'],
      };
      this.articles.push(article);
    });
    this.articlesSub.next(this.articles.slice());
  }

  getArticles() {
    return this.articles.slice();
  }

  async getArticle(id: string): Promise<any> {
    return new Promise<any>(async (resolve, reject) => {
      const q = query(collection(this.db, 'Articles'), where('id', '==', id));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        resolve(doc.data());
      });
    });
  }
}
