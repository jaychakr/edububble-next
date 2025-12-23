"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import db from "./firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
type Post = {
    id: string;
    title: string;
    content: string;
}
export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    const getAllPosts = async () => {
        const postsRef = collection(db, "posts");
        const q = query(postsRef, orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        const queryPosts: Post[] = querySnapshot.docs.map(doc => ({
            id: doc.id,
            title: doc.data().title,
            content: doc.data().content
        }));
        setPosts(queryPosts);
    }
    getAllPosts();
  }, []);
  return (
    <div className="flex flex-col items-center space-y-2 p-4">
      <Image
        src="/edububble.png"
        alt="EduBubble logo"
        width={500}
        height={100}
        priority
      />
      {
        posts.length ?
        posts.map(post => {
          return (
            <div key={post.id} className="border border-black rounded-xl p-2">
              <Link href={`/dpp/?p=${post.id}`} className="text-blue-500">{post.title}</Link>
            </div>
          )
        }) : <p>Loading...</p>
      }
    </div>
  );
}
